import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link
          href="/products"
          className="bg-[#ff6b00] text-white px-6 py-2 rounded-md hover:bg-[#e55a00] transition-colors"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
