import { Product } from "./types";
import { buildCategory } from "./utils";

export const bagsProducts: Product[] = buildCategory("Bags", "bags", [
  "bag-1.jpg",
  "bag-2.jpg",
  "bag-3.jpg",
  "bag-4.jpg",
]);
