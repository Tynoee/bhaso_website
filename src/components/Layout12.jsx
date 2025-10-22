"use client";

import React, { useState } from "react";

const programs = [
  {
    id: "wellness",
    title: "Wellness",
    image: "https://images.pexels.com/photos/6646934/pexels-photo-6646934.jpeg",
    description:
      "Our wellness program is centered on enhancing the physical, emotional, and social well-being of individuals and communities. We take a holistic approach by combining mental health support, preventive care, and community-driven initiatives. From organizing local health camps to providing accessible therapy resources, the wellness program builds resilient communities capable of supporting one another. We also partner with local organizations to ensure that our approach is inclusive, culturally sensitive, and tailored to the unique needs of each group we serve.",
  },
  {
    id: "education",
    title: "Education",
    image: "https://images.pexels.com/photos/4144223/pexels-photo-4144223.jpeg",
    description:
      "Education is the foundation of empowerment. Our education program bridges learning gaps and expands access to quality resources. We focus on early childhood education, after-school support, and adult literacy. With mobile classrooms and hubs, we bring learning directly to underserved areas and reduce dropout rates. Our efforts ensure education remains relevant and inclusive for all.",
  },
  {
    id: "climate",
    title: "Climate Action",
    image: "https://images.pexels.com/photos/1557286/pexels-photo-1557286.jpeg",
    description:
      "The climate action program drives community-led solutions for sustainability. We promote renewable energy, sustainable farming, and reforestation. Through education and training, we empower people to protect their environment. Every community has a role to play in climate resilience—and we help them act on it.",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    description:
      "Our entrepreneurship program supports innovation and independence. We provide training, funding, and mentorship for small businesses and startups. Especially focused on marginalized communities, we help turn ideas into sustainable businesses that uplift local economies.",
  },
  {
    id: "advocacy",
    title: "Advocacy",
    image: "https://images.pexels.com/photos/4668483/pexels-photo-4668483.jpeg",
    description:
      "The advocacy program builds power through grassroots campaigns and leadership training. We empower communities to push for systemic change through education, rights awareness, and strategic partnerships with policymakers. Every voice matters, and we help amplify them.",
  },
];

export function Layout12() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  return (
    <section className="px-[5%] pb-20 bg-white">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 text-green-900">
          Our Programs
        </h2>

        {/* Program Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program)}
              className={`px-4 py-2 rounded-md font-medium border transition ${
                selectedProgram.id === program.id
                  ? "bg-green-900 text-white border-green-900"
                  : "text-green-900 border-green-900 hover:bg-green-100"
              }`}
            >
              {program.title}
            </button>
          ))}
        </div>

        {/* Program Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div>
            <img
              src={selectedProgram.image}
              alt={selectedProgram.title}
              className="rounded-xl w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-lg leading-relaxed">
            <h3 className="text-3xl font-bold text-green-900 mb-6 text-left">
              {selectedProgram.title}
            </h3>
            <p className="text-gray-700 mb-6">{selectedProgram.description}</p>

            {/* Buttons aligned left */}
            <div className="flex gap-4">
              <button className="bg-green-900 text-white px-6 py-3 rounded-md text-lg hover:bg-green-800 transition">
              Learn More
              </button>
              <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-md text-lg hover:bg-gray-100 transition">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
