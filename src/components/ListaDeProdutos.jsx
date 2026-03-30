import React from "react";
import ProdutosGrid from "./ProdutosGrid.jsx";

function ListaDeProdutos() {
  const categoria = {
    titulo: "Promoções da semana!!",
    subtitulo: "Validada até 07/04/2026 ou enquanto durarem os estoques",
    capa: "/banner.png",
  };

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
        <p>Validada até 07/04/2026 ou enquanto durarem os estoques</p>
      </div>
      <ProdutosGrid />
    </section>
  );
}

export default ListaDeProdutos;
