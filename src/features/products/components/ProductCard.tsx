"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart, ShoppingCart, Star } from "lucide-react";
import { formatPrice, toPersianDigits } from "../lib/product-filters";
import type { ProductItem } from "../types";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  product: ProductItem;
  isFavorite?: boolean;
  isInCart?: boolean;
  onToggleFavorite?: (id: string) => void;
  onToggleCart?: (id: string) => void;
  className?: string;
  layout?: "auto" | "vertical";
}

export const ProductCard = ({
  product,
  isFavorite: externalIsFavorite,
  isInCart: externalIsInCart,
  onToggleFavorite,
  onToggleCart,
  className,
  layout = "auto",
}: ProductCardProps) => {
  const [internalIsFavorite, setInternalIsFavorite] = useState(false);
  const [internalIsInCart, setInternalIsInCart] = useState(false);

  const isFavorite =
    externalIsFavorite !== undefined ? externalIsFavorite : internalIsFavorite;
  const isInCart =
    externalIsInCart !== undefined ? externalIsInCart : internalIsInCart;

  const isVertical = layout === "vertical";

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(product.id);
    } else {
      setInternalIsFavorite((prev) => !prev);
    }
  };

  const handleToggleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleCart) {
      onToggleCart(product.id);
    } else {
      setInternalIsInCart((prev) => !prev);
    }
  };

  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-3 shadow-xs transition-all hover:border-primary/40 hover:shadow-md",
        className,
      )}
    >
      <div
        className={cn(
          "flex",
          isVertical ? "flex-col items-stretch" : "flex-row gap-3 md:block",
        )}
      >
        {/* Product Image Container */}
        <div
          className={cn(
            "relative aspect-square shrink-0 overflow-hidden rounded-xl border border-border/40 bg-muted/30",
            isVertical ? "w-full" : "w-32 self-start md:w-full",
          )}
        >
          <Link href={`/products/${product.id}`} className="block size-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Favorite / Heart Button (Top-Left of Image) */}
          <button
            type="button"
            aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
            onClick={handleToggleFavorite}
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
          <div
            className={cn(
              "absolute right-2.5 bottom-2.5 z-10 items-center gap-1.5 rounded-full border border-border/40 bg-card/90 px-2.5 py-1 text-[11px] font-bold text-foreground/90 shadow-2xs backdrop-blur-xs",
              isVertical ? "flex" : "hidden md:flex",
            )}
          >
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
        <div
          className={cn(
            "min-w-0 flex-1",
            isVertical ? "pt-3 text-center" : "text-right md:pt-3 md:text-center",
          )}
        >
          <h3
            title={product.title}
            className={cn(
              "text-sm font-extrabold leading-relaxed text-foreground transition-colors group-hover:text-primary",
              isVertical ? "line-clamp-1" : "line-clamp-2 md:line-clamp-1",
            )}
          >
            <Link href={`/products/${product.id}`} className="hover:underline">
              {product.title}
            </Link>
          </h3>

          <p
            className={cn(
              "mt-1 text-xs font-semibold text-muted-foreground",
              isVertical ? "block line-clamp-1" : "hidden md:block",
            )}
          >
            {product.artist}
          </p>

          {/* Rating */}
          <div
            className={cn(
              "mt-2 flex items-center gap-1.5 text-xs font-bold text-foreground/90",
              isVertical ? "justify-center" : "justify-start md:justify-center",
            )}
          >
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span>{toPersianDigits(product.rating.toFixed(1))}</span>
            <span
              className={cn(
                "text-muted-foreground/70",
                !isVertical && "hidden md:inline",
              )}
            >
              ( {toPersianDigits(product.reviewCount)} )
            </span>
          </div>

          {/* Mobile price (layout="auto" only): price + discount badge, old price below */}
          {!isVertical && (
            <div className="mt-3 md:hidden">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-black text-foreground">
                  {formatPrice(product.price)} تومان
                </span>
                {product.originalPrice && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-black text-primary-foreground">
                    {toPersianDigits(
                      Math.round(
                        (1 - product.price / product.originalPrice) * 100,
                      ),
                    )}
                    ٪
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="mt-1 block text-xs font-semibold text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          )}

          {/* Desktop price (and vertical layout on all screens) with optional discount */}
          <div
            className={cn(
              "mt-2.5 items-center justify-center gap-2",
              isVertical ? "flex" : "hidden md:flex",
            )}
          >
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
      <div
        className={cn(
          "mt-3 items-center gap-1.5 pt-1",
          isVertical ? "flex" : "hidden md:flex",
        )}
      >
        {/* View Product Button */}
        <Link
          href={`/products/${product.id}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border/60 bg-[#F2ECE4] py-2 text-xs font-bold text-foreground/90 transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary"
        >
          <span>مشاهده محصول</span>
          <ExternalLink className="size-3.5 stroke-[2.2]" />
        </Link>

        {/* Add to Cart Button */}
        <button
          type="button"
          aria-label={isInCart ? "در سبد خرید موجود است" : "افزودن به سبد خرید"}
          onClick={handleToggleCart}
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
