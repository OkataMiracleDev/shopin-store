"use client";
import Image from "next/image";
import { getProductBySlug } from "@/data/products";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <div>
          <h1 className={`${barlow.className} text-3xl font-bold mb-2`}>{product.name}</h1>
          <p className="text-lg font-semibold mb-4">{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <label className="text-sm">Quantity</label>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              className="w-20 border border-gray-300 rounded-md px-3 py-1"
            />
          </div>

          <button
            onClick={pay}
            disabled={processing}
            className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 disabled:opacity-60"
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>

          {status && <p className="mt-4 text-green-700 font-medium">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
