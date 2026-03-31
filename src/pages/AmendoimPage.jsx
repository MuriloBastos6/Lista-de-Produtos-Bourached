import { useEffect } from "react";
import "./Amendoim.css";
import ProdutosGrid from "../components/ProdutosGrid";

function AmendoimPage() {

    const products = [
        {
          id: 1, nome: "AMENDOA W4 T.S", codigo: 585, peso: "11.34KG - CX", preco: 624, imagem: "/arroz.jpeg",
        },
        {
          id: 2, nome: "AMENDOA W4 T.", codigo: 467, peso: "11.34KG - CX", preco: 624, imagem: "/arroz.jpeg",
        },
      ];

  useEffect(() => {
    document.body.classList.add("AmendoimPage");
    return () => {
      document.body.classList.remove("AmendoimPage");
    };
  }, []);

  return (
    <section className="amendoim-page">
      <div className="titulo-container">
        <h1>Amendoim</h1>
      </div>
        <div className="conteudo-container">    
            <ProdutosGrid produtos={products} />
        </div>
    </section>
  );
}

export default AmendoimPage;
