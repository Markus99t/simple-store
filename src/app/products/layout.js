import ProtectedRoute from "@/components/ProtectedRoute";
import ProductNavigation from "@/components/ProductNavigation";

export default function ProductsLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <ProductNavigation />
        <main>{children}</main>
      </div>
    </ProtectedRoute>
  );
}
