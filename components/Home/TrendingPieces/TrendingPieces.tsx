import { barlow } from "@/app/fonts";
import ItemCard from "../Shared/ItemCard";
import { getTrendingPieces } from "@/data/trendingPieces";

const TrendingPieces = () => {
  const items = getTrendingPieces();
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-6 px-6">
        <h1
          className={`${barlow.className} px-0 md:px-6 text-xl md:text-2xl font-bold`}
        >
          Trending Pieces
        </h1>
        <div className="relative flex flex-col md:flex-row w-full justify-between">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              slug={(item as any).slug}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingPieces;
