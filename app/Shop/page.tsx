"use client";
import { barlow } from "@/app/fonts";
import ItemCard from "@/components/Home/Shared/ItemCard";
import { getAllProducts, getProductsByCategory, Product } from "@/data/products";
import { shopLinks } from "@/constants/navLinks";
import React, { useEffect, useMemo, useState } from "react";

const ShopPage = () => {
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [category, setCategory] = useState<Product["category"] | null>(null);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQ(q), 250);
    return () => clearTimeout(id);
  }, [q]);

  const all = useMemo(() => getAllProducts(), []);
  const items = useMemo(() => {
    const base = category ? getProductsByCategory(category) : all;
    if (!debouncedQ) return base;
    const q = debouncedQ.toLowerCase();
    return base.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [all, category, debouncedQ]);

  return (
    <div className="pt-10 px-6">
      <h1 className={`${barlow.className} text-2xl md:text-3xl font-bold mb-6`}>Shop</h1>
      <div className="mb-6 max-w-3xl">
        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products or categories"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          {q && (
            <button className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => setQ("")}>Clear</button>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {shopLinks.map((s) => (
            <button
              key={s.id}
              onClick={() =>
                setCategory((prev) =>
                  prev === (s.title as Product["category"]) ? null : (s.title as Product["category"]) 
                )
              }
              className={`px-3 py-1 rounded-full border ${category === (s.title as Product["category"]) ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-300"}`}
            >
              {s.title}
            </button>
          ))}
          {category && (
            <button onClick={() => setCategory(null)} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-300">All</button>
          )}
        </div>
        <div className="mt-2 text-sm text-gray-600">{items.length} results</div>
      </div>
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
    </div>
  );
};

export default ShopPage;
