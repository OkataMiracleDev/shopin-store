"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/Cart/CartProvider";
import React, { useState } from "react";

const CheckoutPage = () => {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const pay = async () => {
    if (!name || !email || !address) return;
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1200));
    clear();
    router.push("/ThankYou");
  };

  return (
    <div className="pt-10 px-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>
      {items.length === 0 ? (
        <div className="text-gray-700">Your cart is empty. <Link href="/Shop" className="underline">Go shopping</Link></div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <label className="block text-sm">Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm">Address</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border rounded-md px-3 py-2" />
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="font-semibold mb-2">Order Summary</p>
            <ul className="mb-3 text-sm text-gray-700">
              {items.map((i) => (
                <li key={i.slug}>{i.name} x{i.qty}</li>
              ))}
            </ul>
            <p className="mb-4">Subtotal: NGN {subtotal}</p>
            <button onClick={pay} disabled={processing} className="w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
              {processing ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
