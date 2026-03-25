import React, { useEffect, useState } from "react";

function Carrosel() {
  const slides = [
    {
      image: "arroz.jpeg",
      title: "A boa gastronomia começa aqui",
      subtitle: "Ofertas especiais para sua cozinha",
    },
    {
      image: "arroz.jpeg",
      title: "Qualidade em cada item",
      subtitle: "Produtos selecionados com melhor preço",
    },
    {
      image: "arroz.jpeg",
      title: "Mais sabor no seu dia",
      subtitle: "Entrega rápida e variedade de produtos",
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
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carrossel" aria-label="Carrossel de ofertas">
      <div
        className="carrossel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <article className="carrossel-slide" key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className="carrossel-img"
            />
            <div className="carrossel-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
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
