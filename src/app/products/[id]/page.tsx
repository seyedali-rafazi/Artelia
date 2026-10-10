import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  getProductById,
  getRelatedProducts,
  mockProducts,
} from "@/features/products/data/products-data";
import { ProductDetailView } from "@/features/products/components/detail/ProductDetailView";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return mockProducts.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "محصول یافت نشد | آرتلیا",
    };
  }

  return {
    title: `${product.title} | آرتلیا`,
    description: product.shortDescription,
  };
}

async function ProductContent({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 6);

  return (
    <ProductDetailView product={product} relatedProducts={relatedProducts} />
  );
}

const ProductPageSkeleton = () => (
  <div className="animate-pulse space-y-8 py-8">
    <div className="h-4 w-48 rounded bg-muted" />
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="aspect-square rounded-2xl bg-muted lg:col-span-5" />
      <div className="space-y-4 lg:col-span-7">
        <div className="h-8 w-3/4 rounded bg-muted" />
        <div className="h-4 w-1/4 rounded bg-muted" />
        <div className="h-10 w-1/3 rounded bg-muted" />
        <div className="h-24 w-full rounded bg-muted" />
      </div>
    </div>
  </div>
);

const ProductPage = ({ params }: ProductPageProps) => {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-6 md:px-8">
      <SiteHeader activeHref="/products" />
      <main>
        <Suspense fallback={<ProductPageSkeleton />}>
          <ProductContent params={params} />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ProductPage;
