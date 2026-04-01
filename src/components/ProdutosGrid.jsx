import React from "react";

function formatarPreco(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function ProdutosGrid({ produtos = [] }) {
  return (
    <div className="categoria-grid">
      {produtos.map((produto) => {
        const variacoes = [...(produto.variacoes || [])].sort(
          (a, b) => Number(b.pesoValor || 0) - Number(a.pesoValor || 0)
        );

        const codigos = variacoes
          .map((v) => v.codigo)
          .filter(Boolean)
          .join(", ");

        return (
          <article className="card-produto" key={produto.id}>
            <img
              src={produto.imagem || "/arroz.jpeg"}
              alt={produto.descricao}
              className="imagem-produto"
            />

            <h2 className="nome-produto">{produto.descricao}</h2>
            <p className="codigo-produto">Cód.: {codigos}</p>

            {variacoes.map((v, i) => (
              <div className="linha-variacao" key={`${produto.id}-${v.codigo || i}`}>
                <strong>{formatarPreco(v.precoVenda)}</strong>
                <span>
                  {v.pesoValor}
                  {v.pesoUnidade} - {v.unidade}
                </span>
              </div>
            ))}
          </article>
        );
      })}
    </div>
  );
}

export default ProdutosGrid;