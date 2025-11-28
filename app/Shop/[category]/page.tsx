import ItemCard from "@/components/Home/Shared/ItemCard";
import { getProductsByCategory, Product } from "@/data/products";
import { barlow } from "@/app/fonts";

type Props = {
  params: { category: string };
};

const CategoryPage = ({ params }: Props) => {
  const raw = decodeURIComponent(params.category);
  const map: Record<string, Product["category"]> = {
    Bags: "Bags",
    bags: "Bags",
    Croptops: "Croptops",
    croptops: "Croptops",
    Footwear: "Footwear",
    footwear: "Footwear",
    Gowns: "Gowns",
    gowns: "Gowns",
    Pants: "Pants",
    pants: "Pants",
    "Tee-Shirts": "Tee-Shirts",
    "tee-shirts": "Tee-Shirts",
  };
  const category = map[raw] ?? (raw as Product["category"]);
  const title = category;
  const items = getProductsByCategory(category);

  return (
    <div className="pt-10 px-6">
      <h1 className={`${barlow.className} text-2xl md:text-3xl font-bold mb-6`}>{title}</h1>
      {items.length === 0 ? (
        <div className="text-gray-600">No products found in this category.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              slug={item.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
