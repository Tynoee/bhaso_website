import { useState, useEffect } from "react";
import { Button } from "@relume_io/relume-ui";

const slides = [
  {
    image: "src/assets/bg2.png",
    heading: "Creating HIV-Resilient Communities",
    text: "BHASO implements comprehensive HIV/TB programs ensuring equitable access to testing, treatment, and care across Zimbabwe.",
  },
  {
    image: "https://images.pexels.com/photos/20433354/pexels-photo-20433354.jpeg",
    heading: "Advancing Climate Justice & Food Security",
    text: "We promote climate-smart agriculture and sustainable practices to strengthen community resilience against climate change impacts.",
  },
  {
    image: "https://images.pexels.com/photos/30672668/pexels-photo-30672668.jpeg",
    heading: "Championing Gender Equality & Human Rights",
    text: "Our programs address gender-based violence and discrimination while empowering marginalized groups including women, youth, and LGBTQ+ communities.",
  },
  {
    image: "https://images.pexels.com/photos/16964939/pexels-photo-16964939.jpeg",
    heading: "Innovative Community Health Solutions",
    text: "Through models like SWAG and CHASA, we're transforming HIV management with community-centered approaches.",
  },
];

export function Header1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-[720px] overflow-hidden">
      {/* Background Image with fade transition */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"}`}
      >
        <img
          src={currentSlide.image}
          alt={currentSlide.heading}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content with fade transition */}
      <div className={`relative z-10 h-full flex items-center justify-center text-center px-[5%] transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"}`}>
        <div className="max-w-3xl">
          <h1 className="mb-4 text-6xl font-bold md:text-6xl lg:text-6xl text-white">
            {currentSlide.heading}
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-white">
            {currentSlide.text}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-green-800 border border-green-600 text-white hover:bg-green-700">
              Support Our Work
            </Button>
            <Button
              variant="secondary"
              className="border border-white text-white hover:bg-white hover:text-green-900"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}