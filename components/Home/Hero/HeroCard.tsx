"use client";
import { fascinate } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeroCardProps = {
  imageSrc?: string;
  bgImageSrc?: string;
  headline?: string;
  subHeadline?: string;
  ctaText?: string;
  ctaHref?: string;
};

const HeroCard: React.FC<HeroCardProps> = ({
  imageSrc = "/shop/footwear/footwear-1.jpg",
  bgImageSrc = "/shop/footwear/footwear-1.jpg",
  headline = "Welcome to Shopin",
  subHeadline = "Discover styles you'll love",
  ctaText = "Shop Now",
  ctaHref = "/Shop",
}) => {
  return (
    <div className="relative h-[460px] md:h-[560px] lg:h-[400px] rounded-none overflow-hidden lg:ring-0 ring-1 ring-gray-200">
      <Image
        src={bgImageSrc}
        alt="Background"
        width={1600}
        height={900}
        className="w-full h-full object-cover lg:blur-sm lg:opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/35" />
      <Image
        src={imageSrc}
        alt="Featured"
        width={320}
        height={320}
        className="absolute left-6 md:left-10 lg:left-[50%] lg:translate-x-[-50%] bottom-8 md:bottom-12 lg:bottom-[50%] lg:translate-y-[50%] rounded-xl shadow-2xl ring-1 ring-white/60"
      />
      <div className="absolute right-6 md:right-10 lg:right-0 lg:left-6 top-8 md:top-12 lg:top-[50%] lg:translate-y-[-50%] max-w-sm backdrop-blur-md bg-white/60 rounded-xl p-6 md:p-8 shadow-lg text-center animate-[fadeDown_0.3s_ease-out]">
        <h1 className={`${fascinate.className} text-2xl md:text-4xl font-bold`}>
          {headline}
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-800">{subHeadline}</p>
        <Link
          href={ctaHref}
          className="mt-4 inline-flex items-center justify-center px-6 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
