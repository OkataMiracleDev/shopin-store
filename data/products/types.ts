export type Product = {
  id: number;
  name: string;
  price: string;
  category: "Bags" | "Croptops" | "Footwear" | "Gowns" | "Pants" | "Tee-Shirts";
  image: string;
  slug: string;
  description: string;
};
