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
  allProducts.find((p) => p.slug === slug) ?? (() => {
    const m = slug.match(/(\d+)$/);
    const n = m ? m[1] : null;
    const baseMap: Record<string, string> = {
      "classic-tote": "bag",
      "bottega-round-bag": "bag",
      "vintage-handbag": "bag",
      "statement-bag": "bag",
      "summer-croptop": "croptop",
      "casual-croptop": "croptop",
      "elegant-croptop": "croptop",
      "urban-sneakers": "footwear",
      "classic-trainers": "footwear",
      "stone-washed-jeans": "pants",
      "vintage-tee": "tee",
      "graphic-tee": "tee",
      "oversized-tee": "tee",
    };
    const key = slug.replace(/-(\d+)$/, "");
    const base = baseMap[key];
    if (base && n) {
      const normalized = `${base}-${n}`;
      return allProducts.find((p) => p.slug === normalized);
    }
    return undefined;
  })();
export const searchProducts = (q: string) => {
  const query = q.trim().toLowerCase();
  if (!query) return allProducts;
  return allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );
};
