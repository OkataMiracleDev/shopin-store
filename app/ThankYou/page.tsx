"use client";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="pt-10 px-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-gray-700 mb-6">Your payment was successful. A confirmation has been sent.</p>
      <div className="flex gap-3">
        <Link href="/Shop" className="px-4 py-2 bg-gray-900 text-white rounded-md">Back to Shop</Link>
        <Link href="/Cart" className="px-4 py-2 border rounded-md">View Cart</Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
