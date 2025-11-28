import { fascinate } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Hero from "./Hero/Hero";
import LatestPieces from "./LatestPieces/LatestPieces";
import TrendingPieces from "./TrendingPieces/TrendingPieces";

const HomePage = () => {
  return (
    <div className="pb-10 overflow-hidden">
      <Hero />
      <LatestPieces />
      <TrendingPieces />
    </div>
  );
};

export default HomePage;
