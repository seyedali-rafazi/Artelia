import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import { ProductPagination } from "./ProductPagination";
import type { ProductItem } from "../types";

interface ProductsResultsProps {
  products: ProductItem[];
  currentPage: number;
  totalPages: number;
  wishlist: string[];
  cart: string[];
  onToggleFavorite: (id: string) => void;
  onToggleCart: (id: string) => void;
  onPageChange: (page: number) => void;
  onResetFilters: () => void;
}

export const ProductsResults = ({
  products,
  currentPage,
  totalPages,
  wishlist,
  cart,
  onToggleFavorite,
  onToggleCart,
  onPageChange,
  onResetFilters,
}: ProductsResultsProps) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/50 py-16 text-center">
        <p className="text-sm font-bold text-muted-foreground">
          محصولی با فیلترهای انتخاب‌شده یافت نشد.
        </p>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={onResetFilters}
          className="mt-4 gap-1.5 text-xs font-bold"
        >
          <RotateCcw className="size-3.5" />
          <span>حذف فیلترها و مشاهده همه</span>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={wishlist.includes(product.id)}
            isInCart={cart.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
            onToggleCart={onToggleCart}
          />
        ))}
      </div>

      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};
