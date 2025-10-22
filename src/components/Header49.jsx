"use client";

import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const backgroundImages = [
  "https://images.pexels.com/photos/3856029/pexels-photo-3856029.jpeg",
  "https://images.pexels.com/photos/6457563/pexels-photo-6457563.jpeg",
  "https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg",
];

export function Header49() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="relume"
      className="relative h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center bg-no-repeat px-[5%] flex items-center justify-center transition-all duration-700"
      style={{
        backgroundImage: `url(${backgroundImages[currentSlide]})`,
      }}
    >
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-10"
        aria-label="Previous Slide"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-10"
        aria-label="Next Slide"
      >
        <FiChevronRight />
      </button>

      <div className="z-10 text-center">
        <p className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
          About Us
        </p>
      </div>
    </section>
  );
}
