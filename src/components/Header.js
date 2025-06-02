"use client";

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#ff6b00]">GYMBEAM</div>
          </Link>

          {user && (
            <nav className="flex items-center space-x-6">
              <Link
                href="/products"
                className="text-gray-700 hover:text-[#ff6b00] transition-colors font-medium"
              >
                Products
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  Welcome, {user.name?.firstname || "User"}
                </span>
                <button
                  onClick={logout}
                  className="bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-[#e55a00] transition-colors"
                >
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
