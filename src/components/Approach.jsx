"use client";

import React from "react";

export function Approach() {
  const approaches = [
    {
      title: "Community Systems Strengthening",
      description: "We empower local structures with skills to monitor, advocate, and demand services related to health and rights.",
      icon: "",
    },
    {
      title: "Innovative HIV Models",
      description: "Pioneering approaches like SWAG and CHASA that improve access and reduce costs.",
      icon: "",
    },
    {
      title: "Stigma Reduction",
      description: "Creating safe spaces through support groups that foster belonging and empowerment.",
      icon: "",
    },
    {
      title: "Integrated Programming",
      description: "Connecting health services with climate resilience and economic empowerment.",
      icon: "",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Our Approach</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        BHASO's success stems from our community-centered, innovative models that address complex 
        challenges through integrated solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {approaches.map((approach, index) => (
          <div key={index} className="flex items-start">
            <div className="text-4xl mr-4 mt-1">{approach.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-3 text-blue-800">Featured Innovation: SWAG Model</h3>
        <p className="text-gray-700 mb-4">
          Our Sex Workers Advocacy Group (SWAG) model has been recognized nationally for its 
          effectiveness in reaching key populations with HIV prevention and treatment services.
        </p>
        <button className="text-blue-600 font-medium hover:underline">
          Learn about our innovative models →
        </button>
      </div>
    </section>
  );
}