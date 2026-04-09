import { useEffect, useState } from "react";
import ProdutosGrid from "./ProdutosGrid.jsx";

function ListaDeProdutos() {
  const [produtosPromocao, setProdutosPromocao] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const categoria = {
    titulo: "Promoções da semana!!",
    subtitulo: "Valida até 07/04/2026 ou enquanto durarem os estoques",
    capa: "/banner.png",
  };

  useEffect(() => {
    let cancelado = false;

    async function carregarProdutos() {
      try {
        const response = await fetch("/produtos.json");
        if (!response.ok) {
          throw new Error("Falha ao carregar produtos");
        }

        const dados = await response.json();
        const promo =
          (Array.isArray(dados?.promoçoes) && dados.promoçoes) ||
          (Array.isArray(dados?.promoções) && dados.promoções) ||
          (Array.isArray(dados?.promocoes) && dados.promocoes) ||
          (Array.isArray(dados?.promocao) && dados.promocao) ||
          [];

        if (!cancelado) {
          setProdutosPromocao(promo);
        }
      } catch {
        if (!cancelado) {
          setProdutosPromocao([]);
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

  return (
    <section className="secao-produtos-categoria">
      <div
        className="categoria-banner"
        style={{ backgroundImage: `url(${categoria.capa})` }}
      >
        <div className="categoria-overlay">
          <h2>{categoria.titulo}</h2>
          <p>{categoria.subtitulo}</p>
        </div>
      </div>

      <div className="data-promocao">
        <p>Valida até durarem os estoques</p>
      </div>

      {carregando ? <p>Carregando produtos...</p> : <ProdutosGrid produtos={produtosPromocao} />}
    </section>
  );
}

export default ListaDeProdutos;