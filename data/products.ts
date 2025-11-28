export type Product = {
  id: number;
  name: string;
  price: string;
  category: "Bags" | "Croptops" | "Footwear" | "Gowns" | "Pants" | "Tee-Shirts";
  image: string;
  slug: string;
  description: string;
};

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const priceNGN = (min = 5000, max = 20000) => `NGN ${randInt(min, max)}`;
const namePools: Record<Product["category"], string[]> = {
  Bags: [
    "Classic Tote",
    "Bottega Round Bag",
    "Vintage Handbag",
    "Statement Bag",
    "City Satchel",
  ],
  Croptops: [
    "Summer Croptop",
    "Casual Croptop",
    "Elegant Croptop",
    "Ribbed Croptop",
    "Sport Croptop",
  ],
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

const build = (
  category: Product["category"],
  base: string,
  files: string[]
): Product[] => {
  return files.map((file, idx) => {
    const pool = namePools[category];
    const name = pool[randInt(0, pool.length - 1)];
    const numMatch = file.match(/(\d+)/);
    const num = numMatch ? numMatch[1] : `${idx + 1}`;
    const kebab = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$|--/g, "-");
    const slug = `${kebab}-${num}`;
    const image = `/shop/${base}/${file}`;
    return {
      id: Number(`${base.length}${num}${idx}`),
      name,
      price: priceNGN(),
      category,
      image,
      slug,
      description: `Discover ${name} in our ${category} collection.`,
    };
  });
};

const productsGenerated: Product[] = [
  ...build("Bags", "bags", [
    "bag-1.jpg",
    "bag-2.jpg",
    "bag-3.jpg",
    "bag-4.jpg",
  ]),
  ...build("Croptops", "croptops", [
    "croptop-1.jpg",
    "croptop-2.jpg",
    "croptop-3.jpg",
  ]),
  ...build("Footwear", "footwear", [
    "footwear-1.jpg",
    "footwear-2.jpg",
    "footwear-3.jpg",
    "footwear-4.jpg",
    "footwear-5.jpg",
    "footwear-6.jpg",
    "footwear-7.jpg",
    "footwear-8.jpg",
  ]),
  ...build("Gowns", "gowns", [
    "gown-1.jpg",
    "gown-2.jpg",
    "gown-3.jpg",
    "gown-4.jpg",
    "gown-5.jpg",
    "gown-6.jpg",
    "gown-7.jpg",
    "gown-8.jpg",
    "gown-9.jpg",
    "gown-10.jpg",
    "gown-11.jpg",
  ]),
  ...build("Pants", "pants", [
    "pants-1.jpg",
    "pants-2.jpg",
    "pants-3.jpg",
    "pants-4.jpg",
    "pants-5.jpg",
  ]),
  ...build("Tee-Shirts", "tees", [
    "tee-1.jpg",
    "tee-2.jpg",
    "tee-3.jpg",
    "tee-4.jpg",
    "tee-5.jpg",
    "tee-6.jpg",
    "tee-7.jpg",
    "tee-8.jpg",
    "tee-9.jpg",
    "tee-10.jpg",
    "tee-11.jpg",
    "tee-12.jpg",
    "tee-13.jpg",
    "tee-14.jpg",
    "tee-15.jpg",
    "tee-16.jpg",
    "tee-17.jpg",
    "tee-18.jpg",
    "tee-19.jpg",
    "tee-20.jpg",
  ]),
];

export const getAllProducts = (): Product[] => productsGenerated;
export const getProductsByCategory = (
  category: Product["category"]
): Product[] => productsGenerated.filter((p) => p.category === category);
export const getProductBySlug = (slug: string): Product | undefined =>
  productsGenerated.find((p) => p.slug === slug);
export const searchProducts = (q: string): Product[] => {
  const query = q.trim().toLowerCase();
  if (!query) return productsGenerated;
  return productsGenerated.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );
};
