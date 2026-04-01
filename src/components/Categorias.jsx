import React from "react";
import { Link } from "react-router-dom";

function Categorias({ onSelectCategory }) {
  const categoria = [
    {
      titulo: "Amendois & castanhas",
      capa: "/banner.png",
      slug: "amendoim",
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
      slug: "cha",
    },
    {
      titulo: "Farinhas",
      capa: "/banner.png",
      slug: "farinhas",
    },
    {
      titulo: "Grãos",
      capa: "/banner.png",
      slug: "graos",
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
      slug: "produtosnaturais",
    },
    {
      titulo: "Refrigerantes & sucos",
      capa: "/banner.png",
      slug: "refris",
    },
    {
      titulo: "Óleo vegetal",
      capa: "/banner.png",
      slug: "oleo",
    },
    {
      titulo: "Goma pronta",
      capa: "/banner.png",
      slug: "goma",
    },
    {
      titulo: "Salgadinho & snacks",
      capa: "/banner.png",
      slug: "salgadinhos",
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
      <Link
        to={`/${cat.slug}`}
        key={cat.slug}
        onClick={onSelectCategory}
        style={{ backgroundImage: `url(${cat.capa})` }}
      >
        {cat.titulo}
      </Link>
    ))}
  </div>;
}

export default Categorias;
