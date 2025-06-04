import { Suspense } from "react";
import ProductsList from "@/components/ProductsList";
import { ProductsGridSkeleton } from "@/components/Skeletons";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

async function getCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

// Komponenta pre načítanie produktov
async function ProductsData() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return <ProductsList products={products} categories={categories} />;
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsGridSkeleton count={12} />}>
      <ProductsData />
    </Suspense>
  );
}
