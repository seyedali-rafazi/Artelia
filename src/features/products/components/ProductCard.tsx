"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart, ShoppingCart, Star } from "lucide-react";
import { formatPrice, toPersianDigits } from "../lib/product-filters";
import type { ProductItem } from "../types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: ProductItem;
  isFavorite: boolean;
  isInCart: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCart: (id: string) => void;
}

export const ProductCard = ({
  product,
  isFavorite,
  isInCart,
  onToggleFavorite,
  onToggleCart,
}: ProductCardProps) => {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-3 shadow-xs transition-all hover:border-primary/40 hover:shadow-md">
      <div>
        {/* Product Image Container */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/40 bg-muted/30">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />

          {/* Favorite / Heart Button (Top-Left of Image) */}
          <button
            type="button"
            aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(product.id);
            }}
            className={cn(
              "absolute top-2.5 left-2.5 z-10 grid size-8 place-items-center rounded-full border border-border/40 bg-card/90 shadow-2xs backdrop-blur-xs transition-transform hover:scale-110 active:scale-95",
              isFavorite
                ? "text-primary"
                : "text-muted-foreground hover:text-primary",
            )}
          >
            <Heart
              className={cn(
                "size-4 transition-colors",
                isFavorite && "fill-primary text-primary",
              )}
            />
          </button>

          {/* Availability Status Badge (Bottom-Right of Image) */}
          <div className="absolute right-2.5 bottom-2.5 z-10 flex items-center gap-1.5 rounded-full border border-border/40 bg-card/90 px-2.5 py-1 text-[11px] font-bold text-foreground/90 shadow-2xs backdrop-blur-xs">
            <span
              className={cn(
                "size-1.5 rounded-full",
                product.inStock ? "bg-emerald-500" : "bg-destructive",
              )}
            />
            <span>{product.inStock ? "موجود" : "ناموجود"}</span>
          </div>
        </div>

        {/* Product Details (Centered) */}
        <div className="pt-3 text-center">
          <h3
            title={product.title}
            className="line-clamp-1 text-sm font-extrabold text-foreground transition-colors group-hover:text-primary"
          >
            {product.title}
          </h3>

          <p className="mt-1 text-xs font-semibold text-muted-foreground">
            {product.artist}
          </p>

          {/* Rating */}
          <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-bold text-foreground/90">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span>{toPersianDigits(product.rating.toFixed(1))}</span>
            <span className="text-muted-foreground/70">
              ( {toPersianDigits(product.reviewCount)} )
            </span>
          </div>

          {/* Price with optional discount */}
          <div className="mt-2.5 flex items-center justify-center gap-2">
            {product.originalPrice && (
              <span className="text-xs font-semibold text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-sm font-black text-primary">
              {formatPrice(product.price)} تومان
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-3 flex items-center gap-1.5 pt-1">
        {/* View Product Button */}
        <Link
          href={`#product-${product.id}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border/60 bg-[#F2ECE4] py-2 text-xs font-bold text-foreground/90 transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary"
        >
          <span>مشاهده محصول</span>
          <ExternalLink className="size-3.5 stroke-[2.2]" />
        </Link>

        {/* Add to Cart Button */}
        <button
          type="button"
          aria-label={isInCart ? "در سبد خرید موجود است" : "افزودن به سبد خرید"}
          onClick={() => onToggleCart(product.id)}
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-xl border transition-all active:scale-95",
            isInCart
              ? "border-primary bg-primary text-primary-foreground shadow-2xs"
              : "border-border/60 bg-[#F2ECE4] text-foreground/80 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary",
          )}
        >
          <ShoppingCart className="size-4 stroke-[2.2]" />
        </button>
      </div>
    </article>
  );
};
