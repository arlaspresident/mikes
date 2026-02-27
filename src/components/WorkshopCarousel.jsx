import { useState, useEffect, useCallback } from "react";
import "../styles/workshop-carousel.css";

export default function WorkshopCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="carousel">
      <div className="carousel-track">
        {images.map((img, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === current ? "active" : ""}`}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous">
        ‹
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next">
        ›
      </button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
