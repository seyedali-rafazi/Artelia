import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProductsView } from "@/features/products/components/ProductsView";

export const metadata: Metadata = {
  title: "محصولات هنری | آرتلیا",
  description: "آثاری منحصربه‌فرد برای زیباتر کردن زندگی شما - خرید آنلاین صنایع دستی و آثار هنری",
};

const ProductsPage = () => {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-6 md:px-8">
      <SiteHeader activeHref="/products" />
      <main>
        <ProductsView />
      </main>
      <SiteFooter />
    </div>
  );
};

export default ProductsPage;
