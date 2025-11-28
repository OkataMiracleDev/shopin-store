import ItemCard from "@/components/Home/Shared/ItemCard";
import { getProductsByCategory } from "@/data/products";
import { barlow } from "@/app/fonts";

type Props = {
  params: { category: string };
};

const CategoryPage = ({ params }: Props) => {
  const cat = decodeURIComponent(params.category);
  const title = cat;
  const items = getProductsByCategory(title as any);

  return (
    <div className="pt-10 px-6">
      <h1 className={`${barlow.className} text-2xl md:text-3xl font-bold mb-6`}>{title}</h1>
      <div className="relative flex flex-col md:flex-row flex-wrap gap-y-4 w-full justify-between">
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
    </div>
  );
};

export default CategoryPage;
