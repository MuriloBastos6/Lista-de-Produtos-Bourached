import React from "react";

function ListaDeProdutos() {
  const categoria = {
    titulo: "Promoções da semana!!",
    subtitulo: "Validada até 30/09/2024 ou enquanto durarem os estoques",
    capa: "/banner.png",
  };

  const produtos = [
    { id: 1, nome: "AMENDOA W4 T.S", codigo: 585, peso: "11.34KG - CX", preco: 624, imagem: "/arroz.jpeg" },
    { id: 2, nome: "AMENDOA W4 T.", codigo: 467, peso: "11.34KG - CX", preco: 624, imagem: "/arroz.jpeg" },
  ];

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

      <div className="categoria-grid">
        {produtos.map((produto) => (
          <article className="card-produto" key={produto.id}>
            <div className="card-imagem-area">
              <img src={produto.imagem} alt={produto.nome} className="card-imagem" />
            </div>

            <div className="card-conteudo">
              <h3>{produto.nome}</h3>
              <p className="card-codigo">Cód.: {produto.codigo}</p>

              <div className="card-rodape">
                <strong>R$ {produto.preco.toFixed(2).replace(".", ",")}</strong>
                <span>{produto.peso}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ListaDeProdutos;