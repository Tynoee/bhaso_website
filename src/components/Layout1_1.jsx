"use client";

import React from "react";

export function Layout1_1() {
  const programs = [
    {
      title: "HIV/TB Management",
      description: "Community-driven programs for testing, treatment, and care with focus on early diagnosis and adherence",
      stats: "1.2M Zimbabweans on ART with 95% viral suppression",
    },
    {
      title: "Sexual & Reproductive Health",
      description: "Stigma-free SRHR services for PLHIV and adolescent girls/young women",
      stats: "10,000+ women and girls served annually",
    },
    {
      title: "Psychosocial Support",
      description: "Counseling and peer support groups for mental wellbeing",
      stats: "50+ community support groups established",
    },
    {
      title: "Climate-Smart Agriculture",
      description: "Promoting agroecology and resilient farming practices",
      stats: "5,000+ farmers trained in sustainable methods",
    },
    {
      title: "Community Systems Strengthening",
      description: "Building local capacity for sustainable health services",
      stats: "4 provinces with strengthened community systems",
    },
    {
      title: "Advocacy & Rights Protection",
      description: "Protecting rights of marginalized groups including LGBTQ+ and sex workers",
      stats: "20 advocacy groups established by 2027",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Our Key Programs</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          BHASO implements innovative, community-centered programs that address Zimbabwe's most pressing health 
          and social challenges through our proven models.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-sm font-medium text-green-600">{program.stats}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}