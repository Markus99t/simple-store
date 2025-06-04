"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeMobileMenu}
          >
            <div className="text-2xl font-bold text-[#ff6b00]">GymBeam</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {user ? (
              <>
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
              </>
            ) : (
              <Link
                href="/login"
                className="bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-[#e55a00] transition-colors"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center space-y-1 group"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 group-hover:bg-[#ff6b00] ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1.5"
                  : "rotate-0 translate-y-0"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 group-hover:bg-[#ff6b00] ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 group-hover:bg-[#ff6b00] ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1.5"
                  : "rotate-0 translate-y-0"
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mx-auto md:hidden transition-all duration-300 ease-in-out overflow-hidden relative z-40 bg-white ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100 pb-4"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
            {user ? (
              <>
                <Link
                  href="/products"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-[#ff6b00] transition-colors font-medium py-2 rounded-md hover:bg-gray-50"
                >
                  Products
                </Link>
                <div className="py-2">
                  <span className="text-gray-600 text-sm block mb-3">
                    Welcome, {user.name?.firstname || "User"}
                  </span>
                  <button
                    onClick={() => {
                      logout();
                      closeMobileMenu();
                    }}
                    className="w-full bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-[#e55a00] transition-colors text-center"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="bg-[#ff6b00] text-white px-4 py-2 rounded-md hover:bg-[#e55a00] transition-colors text-center"
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay - only covers area below header */}
      {isMobileMenuOpen && <div onClick={closeMobileMenu} />}
    </header>
  );
}
