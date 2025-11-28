"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/Cart/CartProvider";

type ItemCardProps = {
  image: string;
  name: string;
  price: string;
  link?: string;
  slug?: string;
};

const ItemCard = ({ image, name, price, link, slug }: ItemCardProps) => {
  const { addItem } = useCart();
  const folder = image.split("/shop/")[1]?.split("/")[0] ?? "";
  const map: Record<string, any> = {
    bags: "Bags",
    croptops: "Croptops",
    footwear: "Footwear",
    gowns: "Gowns",
    pants: "Pants",
    tees: "Tee-Shirts",
  };
  const category = map[folder] ?? "Tee-Shirts";
  return (
    <div className="relative flex flex-col rounded-md w-full h-80 py-1 md:py-2 md:px-1 overflow-hidden items-center">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="w-full h-full rounded-md object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 md:left-1 md:right-1 h-20 bg-gradient-to-t from-black/35 to-transparent" />
      <div className="absolute bottom-0 md:bottom-0 left-0 right-0 md:left-1 md:right-1 z-10 bg-white/70 backdrop-blur-sm rounded-t-xl flex flex-col py-2 px-4 items-start text-gray-800">
        <p className="mb-2 text-xl text-left font-semibold">{name}</p>
        <p className="mb-2 text-sm font-bold">{price}</p>
        <Link
          href={slug ? `/Shop/product/${slug}` : link ?? "#"}
          className="mb-1 text-sm md:text-base text-center font-medium rounded-md w-full px-4 py-1 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
        >
          Buy Now
        </Link>
        {slug && (
          <button
            onClick={() =>
              addItem(
                {
                  image,
                  name,
                  price,
                  slug,
                  description: "",
                  category,
                } as any,
                1
              )
            }
            className="mt-1 text-sm md:text-base text-center font-medium rounded-md w-full px-4 py-1 bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
