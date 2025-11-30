import { Product } from "./types";

export const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export const priceNGN = (min = 3500, max = 20000) => `NGN ${randInt(min, max)}`;

export const namePools: Record<Product["category"], string[]> = {
  Bags: [
    "Classic Round Bag",
    "Bottega Round Bag",
    "Vintage Handbag",
    "Statement Bag",
    "City Satchel",
  ],
  Croptops: ["YSL Croptop", "Cherry Croptop", "Elegant Croptop"],
  Footwear: [
    "Urban Sneakers",
    "Classic Trainers",
    "Street Kicks",
    "Leather Loafers",
    "Sport Runners",
  ],
  Gowns: [
    "Evening Gown",
    "Silk Dress",
    "Floral Gown",
    "Velvet Gown",
    "A-line Dress",
  ],
  Pants: [
    "Stone-washed Jeans",
    "Chino Pants",
    "Cargo Trousers",
    "Slim-fit Jeans",
    "Wide-leg Pants",
  ],
  "Tee-Shirts": [
    "Vintage Tee",
    "Graphic Tee",
    "Oversized Tee",
    "Pocket Tee",
    "Crew Neck Tee",
  ],
};

export const buildCategory = (
  category: Product["category"],
  base: string,
  files: string[]
): Product[] => {
  return files.map((file, idx) => {
    const pool = namePools[category];
    const name = pool[randInt(0, pool.length - 1)];
    const baseName = file.replace(/\.[^.]+$/, "");
    const numMatch = file.match(/(\d+)/);
    const num = numMatch ? numMatch[1] : `${idx + 1}`;
    return {
      id: Number(`${num}${idx}`),
      name,
      price: priceNGN(),
      category,
      image: `/shop/${base}/${file}`,
      slug: baseName,
      description: `Discover ${name} in our ${category} collection.`,
    };
  });
};
