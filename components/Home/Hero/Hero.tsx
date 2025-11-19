"use client";
import React, { useEffect, useMemo, useState } from "react";
import HeroCard from "./HeroCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  const slides = useMemo(
    () => [
      {
        imageSrc: "/shop/footwear/footwear-1.jpg",
        bgImageSrc: "/shop/footwear/footwear-1.jpg",
        headline: "Welcome to Shopin",
        subHeadline: "Discover styles you'll love",
        ctaText: "Shop Footwear",
        ctaHref: "/Shop/Footwear",
      },
      {
        imageSrc: "/shop/croptops/croptop-1.jpg",
        bgImageSrc: "/shop/croptops/croptop-1.jpg",
        headline: "Elegance Redefined",
        subHeadline: "Croptops for every occasion",
        ctaText: "Browse Croptops",
        ctaHref: "/Shop/Croptops",
      },
      {
        imageSrc: "/shop/bags/bag-1.jpg",
        bgImageSrc: "/shop/bags/bag-1.jpg",
        headline: "Carry in Style",
        subHeadline: "Bags that fit your vibe",
        ctaText: "Explore Bags",
        ctaHref: "/Shop/Bags",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="pt-10 lg:bg-black overflow-hidden">
      <div className="relative overflow-hidden max-w-6xl lg:max-w-full mx-auto rounded-none ">
        <div
          className="flex transition-transform duration-600 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, idx) => (
            <div key={idx} className="min-w-full">
              <HeroCard {...s} />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
          aria-label="Next slide"
        >
          <FiChevronRight className="text-xl" />
        </button>

        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-gray-900" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
