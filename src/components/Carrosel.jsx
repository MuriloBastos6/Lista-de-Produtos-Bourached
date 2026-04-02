import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Carrosel() {
  const slides = [
    {
      slug: "amendoim",
      image: "/amendoim.jpeg",
      title: "Amendoim e castanhas",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "arroz",
      image: "/arroz.jpeg",
      title: "Arroz",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "sucrilhos",
      image: "/sucrilhos.jpeg",
      title: "Sucrilhos",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "cha",
      image: "/cha.jpeg",
      title: "Cha",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "farinhas",
      image: "/farinhas.jpeg",
      title: "Farinhas",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "graos",
      image: "/graos.jpeg",
      title: "Graos",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "panificacao",
      image: "/panificacoes.jpeg",
      title: "Panificacao",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "especiarias",
      image: "/especiarias.jpeg",
      title: "Especiarias",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "frutas",
      image: "/frutas.jpeg",
      title: "Frutas",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "sementes",
      image: "/sementes.jpeg",
      title: "Sementes",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "produtosnaturais",
      image: "/produtosnaturais.jpeg",
      title: "Produtos naturais",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "refris",
      image: "/refris.jpeg",
      title: "Refris",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "oleo",
      image: "/oleo.jpeg",
      title: "Oleo",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "goma",
      image: "/Goma.png",
      title: "Goma",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "salgadinhos",
      image: "/salgadinho.jpeg",
      title: "Salgadinhos",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "doces",
      image: "/doces.jpeg",
      title: "Doces",
      subtitle: "Clique para ver todos os produtos",
    },
    {
      slug: "potes",
      image: "/pote.jpeg",
      title: "Potes",
      subtitle: "Clique para ver todos os produtos",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="carrossel" aria-label="Carrossel de ofertas">
      <div
        className="carrossel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <article className="carrossel-slide" key={slide.slug}>
            <Link to={`/${slide.slug}`} className="carrossel-slide-link">
              <img
                src={slide.image}
                alt={slide.title}
                className="carrossel-img"
              />
              <div className="carrossel-overlay">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <button
        className="carrossel-btn prev"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        ‹
      </button>
      <button
        className="carrossel-btn next"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        ›
      </button>
    </section>
  );
}

export default Carrosel;
