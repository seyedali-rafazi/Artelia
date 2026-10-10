"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ArtistProductItem } from "../../types";

const formatPrice = (price: number): string => {
  return price
    .toLocaleString("fa-IR")
    .replace(/\s+/g, " ");
};

interface ArtistProductCardProps {
  product: ArtistProductItem;
}

export const ArtistProductCard = ({ product }: ArtistProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const href = product.productId ? `/products/${product.productId}` : "/products";

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-3 shadow-xs transition-all hover:border-primary/40 hover:shadow-md">
      <div className="flex flex-row gap-3 md:block">
        {/* Product Image Container */}
        <div className="relative aspect-square w-28 shrink-0 self-start overflow-hidden rounded-xl border border-border/40 bg-muted/40 md:w-full">
          <Link href={href} className="block size-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Favorite Heart Button (Top-Left) */}
          <button
            type="button"
            aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite((prev) => !prev);
            }}
            className={cn(
              "absolute top-2 left-2 z-10 grid size-7 place-items-center rounded-full border border-border/30 bg-card/90 shadow-2xs backdrop-blur-xs transition-transform hover:scale-110 active:scale-95",
              isFavorite
                ? "text-primary"
                : "text-muted-foreground hover:text-primary",
            )}
          >
            <Heart
              className={cn(
                "size-3.5 transition-colors",
                isFavorite && "fill-primary text-primary",
              )}
            />
          </button>

          {/* Stock Badge (Bottom-Left to match reference UI) */}
          {product.inStock && (
            <div className="absolute bottom-2 left-2 z-10 hidden items-center gap-1.5 rounded-full border border-border/30 bg-card/95 px-2.5 py-0.5 text-[10px] font-bold text-foreground/90 shadow-2xs backdrop-blur-xs md:flex">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>موجود</span>
            </div>
          )}
        </div>

        {/* Product Details (Centered) */}
        <div className="min-w-0 flex-1 text-right md:pt-3 md:text-center">
          <h3 className="line-clamp-2 text-sm font-black leading-relaxed text-foreground transition-colors group-hover:text-primary md:line-clamp-1">
            <Link href={href} className="hover:underline">
              {product.title}
            </Link>
          </h3>

          {product.inStock && (
            <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-foreground/80 md:hidden">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>موجود</span>
            </div>
          )}

          {/* Price */}
          <div className="mt-3 text-sm font-black text-foreground md:mt-2">
            <span>{formatPrice(product.price)}</span>
            <span className="mr-1 text-[11px] font-normal text-muted-foreground">تومان</span>
          </div>
        </div>
      </div>

      {/* Button: مشاهده محصول with cart icon */}
      <Link
        href={href}
        className="mt-3 hidden w-full items-center justify-center gap-1.5 rounded-xl border border-border/50 bg-[#F2ECE4] py-2 text-xs font-bold text-foreground/90 transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary md:flex"
      >
        <ShoppingCart className="size-3.5" />
        <span>مشاهده محصول</span>
      </Link>
    </article>
  );
};
