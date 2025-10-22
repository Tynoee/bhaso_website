"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Footer12() {
  return (
    <footer className="px-[5%] py-12 md:py-16 lg:py-20 bg-green-800 text-white">
      <div className="container">
        <div className="border-b border-green-700">
          <div className="mb-12 grid grid-cols-1 gap-x-[8vw] gap-y-12 md:mb-16 md:gap-y-16 lg:mb-20 lg:grid-cols-[1fr_0.5fr] lg:gap-y-20">
            {/* Left column */}
            <div className="max-w-md">
              <h1 className="mb-4 text-3xl font-bold md:mb-5 md:text-4xl lg:text-5xl">
                Building Resilient Communities Through Our Strategic Pillars
              </h1>
              <p className="text-sm md:text-base text-green-200">
                Join BHASO in our 2023-2027 mission to advance health equity, climate justice, 
                and human rights in Zimbabwe through innovative community programs.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button 
                  className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white text-sm"
                  onClick={() => window.open('/strategic-plan', '_blank')}
                >
                  View Our Strategic Plan
                </Button>
                <Button 
                  variant="secondary"
                  className="px-4 py-2 border-green-300 text-green-300 hover:bg-green-700 text-sm"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Partner With Us
                </Button>
              </div>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <ul>
                {["Our Approach", "HIV/TB Programs", "Climate Initiatives", "Gender Equality", "Research & Data"].map((item) => (
                  <li key={item} className="py-1.5 text-sm font-medium">
                    <a href="#" className="hover:underline text-green-200">{item}</a>
                  </li>
                ))}
              </ul>
              <ul>
                {["Get Involved", "Volunteer", "Donate", "Resources", "Contact"].map((item) => (
                  <li key={item} className="py-1.5 text-sm font-medium">
                    <a href="#" className="hover:underline text-green-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo row */}
          <div className="flex justify-between pb-6 md:pb-8">
            <a href="#">
              <img
                src="https://www.bhaso.org/images/BHASO-logo-236.png"
                alt="BHASO Logo"
                className="h-8"
              />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between pt-6 text-xs md:text-sm gap-4">
          <p>© {new Date().getFullYear()} BHASO. Advancing health equity and climate justice in Zimbabwe.</p>
        </div>
      </div>
    </footer>
  );
}