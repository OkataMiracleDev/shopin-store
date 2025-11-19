import { fascinate } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Hero from "./Hero/Hero";
import LatestPieces from "./LatestPieces/LatestPieces";

const HomePage = () => {
  return (
    <div className="pb-10 overflow-hidden">
      <Hero />
      <LatestPieces />
    </div>
  );
};

export default HomePage;
