import { barlow, eagle, fascinate } from "@/app/fonts";
import { latestPiecesData } from "@/data/latestPieces";
import { Poppins } from "next/font/google";
import ItemCard from "../Shared/ItemCard";
import React from "react";

const LatestPieces = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-6 px-6">
        <h1
          className={`${barlow.className} md:px-6 text-xl md:text-2xl font-bold`}
        >
          Latest Pieces
        </h1>
        <div className="relative flex flex-col md:flex-row w-full justify-between">
          {latestPiecesData.map((item) => (
            <ItemCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              slug={item.slug}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPieces;
