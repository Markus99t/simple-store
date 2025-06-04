"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductNavigation() {
  const pathname = usePathname();
  const isProductDetail =
    pathname.startsWith("/products/") && pathname !== "/products";

  return (
    <div className="container mx-auto px-4 py-4">
      {isProductDetail ? (
        <Link
          href="/products"
          className="inline-flex items-center text-[#ff6b00] hover:text-[#e55a00] transition-colors font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Products
        </Link>
      ) : (
        <h1 className="text-2xl font-bold text-gray-900">Our Products</h1>
      )}
    </div>
  );
}
