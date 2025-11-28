export type { Product } from "./types";
import { bagsProducts } from "./bags";
import { croptopsProducts } from "./croptops";
import { footwearProducts } from "./footwear";
import { gownsProducts } from "./gowns";
import { pantsProducts } from "./pants";
import { teesProducts } from "./tees";

const allProducts = [
  ...bagsProducts,
  ...croptopsProducts,
  ...footwearProducts,
  ...gownsProducts,
  ...pantsProducts,
  ...teesProducts,
];

export const getAllProducts = () => allProducts;
export const getProductsByCategory = (category: string) =>
  allProducts.filter((p) => p.category === (category as any));
export const getProductBySlug = (slug: string) =>
  allProducts.find((p) => p.slug === slug);
export const searchProducts = (q: string) => {
  const query = q.trim().toLowerCase();
  if (!query) return allProducts;
  return allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );
};
