"use client";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import { barlow } from "@/app/fonts";
import React, { useState } from "react";

type Props = { params: { slug: string } };

const ProductPage = ({ params }: Props) => {
  const product = getProductBySlug(params.slug);
  const [qty, setQty] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  if (!product) {
    return <div className="pt-10 px-6">Product not found</div>;
  }

  const pay = async () => {
    setProcessing(true);
    setStatus(null);
    await new Promise((r) => setTimeout(r, 1200));
    setProcessing(false);
    setStatus("Payment successful");
  };

  return (
    <div className="pt-10 px-6">
      <div className="mb-4 text-sm text-gray-600">
        <Link href="/Shop" className="hover:underline">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/Shop/${product.category}`} className="hover:underline">{product.category}</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            className="w-full h-auto rounded-2xl object-cover ring-1 ring-gray-200"
          />
          <div className="grid grid-cols-4 gap-2">
            <Image src={product.image} alt="thumb" width={200} height={200} className="w-full h-20 object-cover rounded-md" />
            <Image src={product.image} alt="thumb" width={200} height={200} className="w-full h-20 object-cover rounded-md" />
            <Image src={product.image} alt="thumb" width={200} height={200} className="w-full h-20 object-cover rounded-md" />
            <Image src={product.image} alt="thumb" width={200} height={200} className="w-full h-20 object-cover rounded-md" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className={`${barlow.className} text-3xl md:text-4xl font-bold`}>{product.name}</h1>
          <p className="text-xl font-semibold">{product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center gap-4">
            <label className="text-sm">Quantity</label>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              className="w-24 border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={pay}
              disabled={processing}
              className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 disabled:opacity-60"
            >
              {processing ? "Processing..." : "Pay Now"}
            </button>
            <Link href={`/Shop/${product.category}`} className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50">Back to {product.category}</Link>
          </div>

          {status && <p className="text-green-700 font-medium">{status}</p>}

          <div className="mt-4 text-sm text-gray-600">
            <p>Fast shipping and 7-day returns.</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className={`${barlow.className} text-xl md:text-2xl font-bold mb-4`}>You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getProductsByCategory(product.category)
            .filter((p) => p.slug !== product.slug)
            .slice(0, 4)
            .map((p) => (
              <div key={p.id} className="border border-gray-200 rounded-xl p-3">
                <Link href={`/Shop/product/${p.slug}`}>
                  <Image src={p.image} alt={p.name} width={400} height={400} className="w-full h-48 object-cover rounded-md" />
                  <div className="mt-2">
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-sm text-gray-700">{p.price}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
