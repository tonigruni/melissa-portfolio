"use client";

import React, { useState } from "react";

const slides = [
  { img: "/Meli%20caroussel%201.png" },
  { img: "/Meli%20caroussel%202.png" },
  { img: "/Meli%20caroussel%203.png" },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        />
      ))}

      {/* Reddish overlay */}
      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none" />

      {/* Nav buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors text-2xl"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors text-2xl"
        aria-label="Next"
      >
        →
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? "bg-white w-4" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
