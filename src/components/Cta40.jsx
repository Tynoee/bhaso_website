"use client";

import React from "react";
import CountUp from "react-countup";

export function Cta40() {
  const stats = [
    { number: 95, suffix: "%", label: "Viral suppression rate among clients" },
    { number: 5000, suffix: "+", label: "Farmers trained in climate-smart agriculture" },
    { number: 40, suffix: "%", label: "Target reduction in gender-based violence by 2027" },
    { number: 10000, suffix: "+", label: "Women and girls served annually" },
  ];

  return (
    <section className="py-16 px-4 bg-green-700 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={stat.number} duration={3} />{stat.suffix}
              </div>
              <p className="text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>
        
    
      </div>
    </section>
  );
}