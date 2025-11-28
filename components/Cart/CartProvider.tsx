"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  category: Product["category"];
};

type CartContextValue = {
  items: CartItem[];
  addItem: (p: Product, qty?: number) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const parsePrice = (str: string) => {
  const m = str.match(/(\d+)/g);
  const n = m ? Number(m.join("")) : 0;
  return n;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("shopin_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("shopin_cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (p: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === p.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === p.slug ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          slug: p.slug,
          name: p.name,
          price: parsePrice(p.price),
          image: p.image,
          qty,
          category: p.category,
        },
      ];
    });
  };
  const removeItem = (slug: string) =>
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  const updateQty = (slug: string, qty: number) =>
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i))
    );
  const clear = () => setItems([]);

  const count = useMemo(
    () => items.reduce((acc, i) => acc + i.qty, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((acc, i) => acc + i.qty * i.price, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQty,
    clear,
    count,
    subtotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export default CartProvider;
