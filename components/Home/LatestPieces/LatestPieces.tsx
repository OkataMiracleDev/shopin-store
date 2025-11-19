import { barlow, eagle, fascinate } from "@/app/fonts";
import { latestPiecesData } from "@/data/latestPieces";
import { Poppins } from "next/font/google";
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
              className="relative flex flex-col rounded-md w-full md:w-1/4 h-80 py-1 md:py-2 md:px-1 overflow-hidden items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-full rounded-md object-cover"
              />
              <div className="absolute bottom-1 md:bottom-2 left-0 right-0 md:left-1 md:right-1 h-20 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="card-info absolute bottom-1 md:bottom-2 left-0 right-0 md:left-1 md:right-1 z-10 bg-white/70 backdrop-blur-sm rounded-t-xl flex flex-col py-2 px-4 items-center md:items-start text-gray-800">
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
                  className="mb-1 text-sm font-medium rounded-md w-fit px-4 py-1 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPieces;
