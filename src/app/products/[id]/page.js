import { Suspense } from "react";
import ProductDetail from "@/components/ProductDetail";
import { ProductDetailSkeleton } from "@/components/Skeletons";
import { notFound } from "next/navigation";

// Generate static routes for all products
export async function generateStaticParams() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
      return {
        title: "Product Not Found | GymBeam Store",
      };
    }

    return {
      title: `${product.title} | GymBeam Store`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.image],
      },
    };
  } catch (error) {
    return {
      title: "Error | GymBeam Store",
    };
  }
}

async function getProduct(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.log(`Product ${id} not found, status: ${response.status}`);
      return null;
    }

    const text = await response.text();
    if (!text) {
      console.log(`Empty response for product ${id}`);
      return null;
    }

    try {
      const product = JSON.parse(text);
      return product;
    } catch (parseError) {
      console.error(`Failed to parse JSON for product ${id}:`, parseError);
      console.log("Response text:", text);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

// Komponenta pre načítanie produktu
async function ProductData({ id }) {
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductData id={id} />
    </Suspense>
  );
}
