"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Layout240() {
  const programs = [
    {
      src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      alt: "HIV/TB Management",
      title: "HIV/TB Management",
      desc: "Comprehensive testing, treatment and care programs",
      detailed: "BHASO implements community-driven HIV/TB programs ensuring equitable access to services with focus on early diagnosis and treatment adherence. Our differentiated service delivery models reach vulnerable populations across Zimbabwe.",
    },
    {
      src: "https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg",
      alt: "Climate Smart Agriculture",
      title: "Climate Justice",
      desc: "Agroecology and climate-resilient farming practices",
      detailed: "We promote sustainable agriculture through training in climate-smart techniques, helping smallholder farmers adapt to changing weather patterns while improving food security and nutrition in vulnerable communities.",
    },
    {
      src: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
      alt: "Gender Equality",
      title: "Gender & Human Rights",
      desc: "Reducing GBV and discrimination against marginalized groups",
      detailed: "Our programs address gender-based violence and promote rights for women, youth, LGBTQ+ communities and people with disabilities through advocacy, education and economic empowerment initiatives.",
    },
    {
      src: "src/assets/bhaso.png",
      alt: "Strategic Information",
      title: "Strategic Information",
      desc: "Data-driven programming and research",
      detailed: "BHASO strengthens evidence-based decision making through robust monitoring & evaluation, research and knowledge management systems that inform our health and climate justice interventions.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-green-700 mb-2">
            Our Strategic Pillars
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl leading-tight text-green-900">
            {programs[selectedIndex].title}
          </h2>
        </div>

        {/* Cards with navigation arrows */}
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white p-2 rounded-full hover:bg-green-800"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {programs.map(({ src, alt, title, desc }, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`flex-shrink-0 w-[300px] h-[200px] cursor-pointer transition-all duration-200 ${
                  i === selectedIndex ? 'ring-4 ring-green-700' : 'opacity-90 hover:opacity-100'
                }`}
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h4 className="text-lg font-bold text-white">{title}</h4>
                    <p className="text-white text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 text-white p-2 rounded-full hover:bg-green-800"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Detailed description */}
        <div className="mt-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {programs[selectedIndex].detailed}
          </p>

          <div className="flex gap-6">
            <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3">
              Learn About Our Programs
            </Button>
            <Button variant="link" className="text-green-700 hover:text-green-900">
              View Strategic Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}