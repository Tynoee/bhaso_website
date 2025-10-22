"use client";

import React, { useState, useEffect, useRef } from "react";

export function Layout245() {
  const timeline = [
    {
      period: "1991 - 1998 onwards",
      desc: `BHASO began as an idea and grassroots initiative during the early 90s,
      focused on raising awareness about HIV/AIDS in Zimbabwe. Volunteers worked
      tirelessly to reduce stigma and provide basic education to communities most affected
      by the epidemic. Initial groundwork was laid for partnerships with local health
      providers and community leaders.`,
      more: `Despite limited resources, the organization’s founders established trust by
      engaging directly with affected families and advocating for testing and care. This
      formative period set the stage for BHASO's future expansions.`,
    },
    {
      period: "1999 - 2005",
      desc: `Officially founded in 2001, BHASO expanded its scope to include support for
      orphans and vulnerable children, realizing the epidemic’s broad social impact.`,
      more: `Volunteer-led peer education networks were established alongside psychosocial
      support groups. BHASO strengthened ties with schools and churches to ensure
      children had access to education and healthcare. These efforts solidified BHASO's
      role as a community pillar.`,
    },
    {
      period: "2006 - 2011",
      desc: `During this period, BHASO launched nutrition and home-based care programs
      aimed at improving patient health and reducing pressure on hospitals.`,
      more: `Training caregivers, providing food supplements, and working with local
      clinics enabled better health outcomes. These years also saw initial efforts to
      integrate environmental sustainability into BHASO's activities.`,
    },
    {
      period: "2012 - 2017",
      desc: `BHASO introduced climate-smart agriculture initiatives to address food security
      and environmental vulnerability, expanding its holistic approach.`,
      more: `Programs trained farmers in sustainable techniques and water conservation,
      helping communities build resilience against climate challenges. Youth leadership
      and sexual health education programs were also launched to empower the next generation.`,
    },
    {
      period: "2018 - 2024",
      desc: `In recent years, BHASO expanded its digital presence with mobile health units
      and online education campaigns to reach remote areas.`,
      more: `Technology integration allowed for improved data tracking, remote counseling,
      and wider dissemination of health and environmental knowledge. BHASO’s innovative
      approach gained national recognition, cementing its impact across Zimbabwe.`,
    },
  ];

  const shuffledTimeline = React.useMemo(() => {
    const array = [...timeline];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 12000;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === shuffledTimeline.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);
    return () => resetTimeout();
  }, [currentIndex, shuffledTimeline.length]);

  const prevTab = () => {
    resetTimeout();
    setCurrentIndex(currentIndex === 0 ? shuffledTimeline.length - 1 : currentIndex - 1);
  };

  const nextTab = () => {
    resetTimeout();
    setCurrentIndex(currentIndex === shuffledTimeline.length - 1 ? 0 : currentIndex + 1);
  };

  const currentItem = shuffledTimeline[currentIndex];

  return (
    <section
      id="relume"
      className="px-[5%] py-20 md:py-28 lg:py-32 bg-white min-h-[700px] flex flex-col items-center"
    >
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-green-900 text-4xl md:text-5xl font-bold mb-12">
          Timeline
        </h2>

        {/* Period label */}
        <div className="mb-8">
          <h3 className="text-5xl font-extrabold text-green-900">
            {currentItem.period}
          </h3>
        </div>

        {/* Plain text content, no box or shadow */}
        <div className="text-green-900 max-w-[90%] mx-auto text-left text-lg md:text-xl leading-relaxed">
          <p className="mb-6">{currentItem.desc}</p>
          <p>{currentItem.more}</p>
        </div>

        {/* Navigation buttons at bottom */}
        <div className="flex justify-center gap-12 mt-12">
          <button
            onClick={prevTab}
            aria-label="Previous period"
            className="bg-green-900 hover:bg-green-800 text-white p-3 rounded-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTab}
            aria-label="Next period"
            className="bg-green-900 hover:bg-green-800 text-white p-3 rounded-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
