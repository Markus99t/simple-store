"use client";

import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProductsLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
      </div>
    </ProtectedRoute>
  );
}
