import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProdutosGrid from "../components/ProdutosGrid";
import "./produtoPage.css";

const categorias = [
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
];

function normalizarTexto(texto = "") {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function montarCodigos(produto) {
  const variacoes = Array.isArray(produto.variacoes) ? produto.variacoes : [];
  return variacoes
    .map((v) => v.codigo)
    .filter(Boolean)
    .join(" ");
}

function BuscaPage() {
  const [searchParams] = useSearchParams();
  const termo = searchParams.get("q") || "";
  const [todosProdutos, setTodosProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    document.body.classList.add("produtos-page-body");
    return () => {
      document.body.classList.remove("produtos-page-body");
    };
  }, []);

  useEffect(() => {
    let cancelado = false;

    async function carregarProdutos() {
      try {
        const respostas = await Promise.all(
          categorias.map(async (slug) => {
            const response = await fetch(`http://localhost:8000/${slug}`);
            if (!response.ok) return [];

            const dados = await response.json();
            if (!Array.isArray(dados)) return [];

            return dados.map((produto, index) => ({
              ...produto,
              id: `${slug}-${produto.id ?? index}`,
              slug,
              codigosBusca: montarCodigos(produto),
            }));
          })
        );

        if (!cancelado) {
          setTodosProdutos(respostas.flat());
        }
      } catch {
        if (!cancelado) {
          setTodosProdutos([]);
        }
      } finally {
        if (!cancelado) {
          setCarregando(false);
        }
      }
    }

    carregarProdutos();

    return () => {
      cancelado = true;
    };
  }, []);

  const resultados = useMemo(() => {
    const termoNormalizado = normalizarTexto(termo);
    if (!termoNormalizado) return [];

    return todosProdutos.filter((produto) => {
      const baseBusca = `${produto.descricao || ""} ${produto.codigosBusca || ""}`;
      return normalizarTexto(baseBusca).includes(termoNormalizado);
    });
  }, [todosProdutos, termo]);

  return (
    <section className="produtosPage">
      <div className="titulo-container">
        <h1>Resultado da busca</h1>
      </div>

      <div className="conteudo-container">
        {carregando && <p>Carregando produtos...</p>}

        {!carregando && !termo && (
          <p>Digite algo na barra de pesquisa para buscar produtos.</p>
        )}

        {!carregando && termo && resultados.length === 0 && (
          <p>Produto não encontrado.</p>
        )}

        {!carregando && resultados.length > 0 && <ProdutosGrid produtos={resultados} />}
      </div>
    </section>
  );
}

export default BuscaPage;
