"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

export function Cta8() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-[5%] text-center max-w-3xl">
        <h2 className="mb-6 text-3xl md:text-4xl font-bold text-green-900">
          Join BHASO's Mission
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          Your support helps us deliver life-changing HIV programs, climate resilience initiatives, 
          and gender equality advocacy across Zimbabwe.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-green-700 hover:bg-green-200 text-white px-8 py-3"
            onClick={() => window.open('https://www.bhaso.org/donate', '_blank')}
          >
            Donate Now
          </Button>
          
          <Button
            variant="secondary"
            className="border-green-700 text-green-700 hover:bg-green-100 px-8 py-3"
            onClick={() => window.open('https://www.bhaso.org/volunteer', '_blank')}
          >
            Volunteer With Us
          </Button>
        </div>
      </div>
    </section>
  );
}