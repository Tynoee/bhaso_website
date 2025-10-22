"use client";

import React from "react";

export function Cta89() {
  return (
    <section className="py-16 px-4 bg-grayg-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us in Creating Healthier Communities</h2>
        <p className="text-xl text-gray-300 mb-8">
          Whether you're interested in volunteering, partnering, or supporting our work financially, 
          there are many ways to get involved with BHASO's mission.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition">
            Donate Now
          </button>
          <button className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition">
            Partner With Us
          </button>
          <button className="px-6 py-3 border border-white text-white hover:bg-gray-800 rounded-lg font-medium transition">
            Volunteer Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}