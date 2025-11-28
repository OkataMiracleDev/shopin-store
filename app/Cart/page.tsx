"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/Cart/CartProvider";

const CartPage = () => {
  const { items, updateQty, removeItem, subtotal, clear } = useCart();
  return (
    <div className="pt-10 px-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-gray-700">
          Cart is empty. <Link href="/Shop" className="underline">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((i) => (
              <div key={i.slug} className="flex items-center gap-4 border border-gray-200 rounded-xl p-3">
                <Image src={i.image} alt={i.name} width={120} height={120} className="w-24 h-24 rounded-md object-cover" />
                <div className="flex-1">
                  <p className="font-semibold">{i.name}</p>
                  <p className="text-sm text-gray-700">NGN {i.price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-sm">Qty</label>
                    <input
                      type="number"
                      min={1}
                      value={i.qty}
                      onChange={(e) => updateQty(i.slug, Math.max(1, Number(e.target.value)))}
                      className="w-20 border border-gray-300 rounded-md px-2 py-1"
                    />
                    <button className="px-3 py-1 bg-red-600 text-white rounded-md" onClick={() => removeItem(i.slug)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
            <button className="px-4 py-2 bg-gray-100 rounded-md border" onClick={clear}>Clear Cart</button>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="font-semibold mb-2">Order Summary</p>
            <p className="mb-4">Subtotal: NGN {subtotal}</p>
            <Link href="/Checkout" className="block text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
