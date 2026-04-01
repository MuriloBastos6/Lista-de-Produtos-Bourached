import { useEffect, useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./produtoPage.css";
import ProdutosGrid from "../components/ProdutosGrid";

const categoriasValidas = new Set([
  "amendoim",
  "arroz",
  "sucrilhos",
  "cha",
  "farinhas",
  "graos",
  "panificacao",
  "especiarias",
  "frutas",
  "sementes",
  "produtosnaturais",
  "refris",
  "oleo",
  "goma",
  "salgadinhos",
  "doces",
  "potes",
]);

const titulos = {
  amendoim: "Amendoim",
  arroz: "Arroz",
  sucrilhos: "Sucrilhos",
  cha: "Cha",
  farinhas: "Farinhas",
  graos: "Graos",
  panificacao: "Panificacao",
  especiarias: "Especiarias",
  frutas: "Frutas",
  sementes: "Sementes",
  produtosnaturais: "Produtos Naturais",
  refris: "Refris",
  oleo: "Oleo",
  goma: "Goma",
  salgadinhos: "Salgadinhos",
  doces: "Doces",
  potes: "Potes",
};

function CategoriaPage() {
  const { slug } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const categoriaValida = categoriasValidas.has(slug);

  useEffect(() => {
    document.body.classList.add("produtos-page-body");
    return () => {
      document.body.classList.remove("produtos-page-body");
    };
  }, []);

  useEffect(() => {
    if (!categoriaValida) return;

    let cancelado = false;
    setCarregando(true);
    setErro("");

    fetch(`http://localhost:8000/${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Falha ao buscar categoria: ${slug}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!cancelado) {
          setProdutos(Array.isArray(data) ? data : []);
        }
      })
      .catch(() => {
        if (!cancelado) {
          setProdutos([]);
          setErro("Nao foi possivel carregar os produtos.");
        }
      })
      .finally(() => {
        if (!cancelado) {
          setCarregando(false);
        }
      });

    return () => {
      cancelado = true;
    };
  }, [slug, categoriaValida]);

  const titulo = useMemo(() => titulos[slug] || "Categoria", [slug]);

  if (!categoriaValida) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="produtosPage">
      <div className="titulo-container">
        <h1>{titulo}</h1>
      </div>
      <div className="conteudo-container">
        {carregando && <p>Carregando produtos...</p>}
        {!carregando && erro && <p>{erro}</p>}
        {!carregando && !erro && <ProdutosGrid produtos={produtos} />}
      </div>
    </section>
  );
}

export default CategoriaPage;
