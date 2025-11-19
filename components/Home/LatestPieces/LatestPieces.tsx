import { barlow, eagle, fascinate } from "@/app/fonts";
import { latestPiecesData } from "@/data/latestPieces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestPieces = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-6 px-6">
        <h1
          className={`${barlow.className} px-6 text-xl md:text-2xl font-bold`}
        >
          Latest Pieces
        </h1>
        <div className="relative flex flex-col md:flex-row w-full justify-between">
          {latestPiecesData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-full md:w-1/4 h-80 py-1 md:py-2 md:px-1 items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute bg-white/60 bottom-2 rounded-t-xl w-79 flex flex-col px-4 items-left text-gray-700">
                <p
                  className={`${barlow.className} mb-2 text-xl text-left font-semibold`}
                >
                  {item.name}
                </p>
                <p className={`${barlow.className} mb-2 text-sm font-bold`}>
                  {item.price}
                </p>
                <Link
                  href={item.link}
                  className=" mb-2 text-sm font-light rounded-md w-fit px-4 py-1 bg-gray-700 text-white"
                >
                  View Details
                </Link>
              </div>
              <p className={`${barlow.className} text-sm font-bold`}>
                {item.size}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPieces;
