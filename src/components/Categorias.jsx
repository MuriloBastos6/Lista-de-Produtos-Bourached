import React from "react";

function Categorias(props) {
  const categoria = [
    {
      titulo: "Amendois & castanhas",
      capa: "/banner.png",
      slug: "amendoins-castanhas",
    },
    {
      titulo: "Arroz",
      capa: "/banner.png",
      slug: "arroz",
    },
    {
      titulo: "Sucrilhos",
      capa: "/banner.png",
      slug: "sucrilhos",
    },
    {
      titulo: "Chás",
      capa: "/banner.png",
      slug: "chas",
    },
    {
      titulo: "Farinhas",
      capa: "/banner.png",
      slug: "farinhas",
    },
    {
      titulo: "Grãos",
      capa: "/banner.png",
      slug: "grãos",
    },
    {
      titulo: "Panificação",
      capa: "/banner.png",
      slug: "panificacao",
    },
    {
      titulo: "Especiarias",
      capa: "/banner.png",
      slug: "especiarias",
    },
    {
      titulo: "Frutas",
      capa: "/banner.png",
      slug: "frutas",
    },
    {
      titulo: "Sementes",
      capa: "/banner.png",
      slug: "sementes",
    },
    {
      titulo: "Produtos naturais",
      capa: "/banner.png",
      slug: "produtos-naturais",
    },
    {
      titulo: "Refrigerantes & sucos",
      capa: "/banner.png",
      slug: "refrigerantes-e-sucos",
    },
    {
      titulo: "Óleo vegetal",
      capa: "/banner.png",
      slug: "oleo-vegetal",
    },
    {
      titulo: "Goma pronta",
      capa: "/banner.png",
      slug: "goma-pronta",
    },
    {
      titulo: "Salgadinho & snacks",
      capa: "/banner.png",
      slug: "salgadinho-e-snacks",
    },
    {
      titulo: "Doces",
      capa: "/banner.png",
      slug: "doces",
    },
    {
      titulo: "Potes",
      capa: "/banner.png",
      slug: "potes",
    },
  ];
  return <div className="card-categorias">
    {categoria.map((cat) => (
      <a href="../pages/AmendoimPage" key={cat.slug}         style={{ backgroundImage: `url(${cat.capa})` }}>
        {cat.titulo}
      </a>
    ))}
  </div>;
}

export default Categorias;
