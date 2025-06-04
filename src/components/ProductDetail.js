"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="aspect-square relative bg-gray-50 rounded-lg">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating.rate)
                        ? "fill-current"
                        : "fill-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-[#ff6b00]">
                {product.price} €
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="w-full bg-[#ff6b00] text-white py-3 rounded-md font-medium hover:bg-[#e55a00] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                onClick={() =>
                  alert("Cart functionality not implemented in this demo")
                }
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                Product Details
              </h3>
              <dl className="space-y-2">
                <div className="flex">
                  <dt className="text-gray-600 w-24">SKU:</dt>
                  <dd className="text-gray-900">#{product.id}</dd>
                </div>
                <div className="flex">
                  <dt className="text-gray-600 w-24">Category:</dt>
                  <dd className="text-gray-900 capitalize">
                    {product.category}
                  </dd>
                </div>
                <div className="flex">
                  <dt className="text-gray-600 w-24">Rating:</dt>
                  <dd className="text-gray-900">{product.rating.rate} / 5</dd>
                </div>
                <div className="flex">
                  <dt className="text-gray-600 w-24">Reviews:</dt>
                  <dd className="text-gray-900">{product.rating.count}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
