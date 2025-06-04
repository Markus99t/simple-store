"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsList({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allCategories = ["all", ...categories];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="mb-8 flex flex-wrap gap-2">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-[#ff6b00] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full"
          >
            <div className="aspect-square relative bg-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-[#ff6b00]">
                    {product.price} €
                  </span>
                  <span className="text-sm text-gray-500">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
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
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.rating.count})
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
