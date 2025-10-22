"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";

export function Header62() {
  const images = [
    "https://images.pexels.com/photos/5384621/pexels-photo-5384621.jpeg", // Healthcare workers
    "https://images.pexels.com/photos/753772/pexels-photo-753772.jpeg", // Community meeting
    "https://images.pexels.com/photos/6238028/pexels-photo-6238028.jpeg", // Climate impact
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="relume"
      className="relative h-[70vh] w-full flex items-center justify-center text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="mb-4 text-xl uppercase tracking-widest text-green-900 font-semibold">
          Our Work in Zimbabwe
        </p>
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
          Creating Healthier, More Resilient Communities
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
          Since 1992, BHASO has been at the forefront of HIV/AIDS response,
          climate justice, and gender equality initiatives across Zimbabwe's
          most vulnerable communities.
        </p>
        <div className="flex justify-center gap-4">
          <Button style={{ backgroundColor: "#047857", color: "white" }}>
            Our Strategic Plan
          </Button>
          <Button variant="secondary">See Our Impact</Button>
        </div>
      </div>
    </section>
  );
}
