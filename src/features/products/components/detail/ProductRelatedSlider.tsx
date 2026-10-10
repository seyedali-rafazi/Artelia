"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "../../lib/product-filters";
import type { ProductItem } from "../../types";

interface ProductRelatedSliderProps {
  products: ProductItem[];
  wishlist: string[];
  cart: string[];
  onToggleFavorite: (id: string) => void;
  onToggleCart: (id: string) => void;
}

export const ProductRelatedSlider = ({
  products,
  wishlist,
  cart,
  onToggleFavorite,
  onToggleCart,
}: ProductRelatedSliderProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 260;
    scrollContainerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-12 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-black text-foreground sm:text-lg">
          محصولات مرتبط
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="محصولات بعدی"
            onClick={() => scroll("right")}
            className="grid size-8 cursor-pointer place-items-center rounded-full border border-border/60 bg-card text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <ChevronRight className="size-4" />
          </button>
          <button
            type="button"
            aria-label="محصولات قبلی"
            onClick={() => scroll("left")}
            className="grid size-8 cursor-pointer place-items-center rounded-full border border-border/60 bg-card text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <ChevronLeft className="size-4" />
          </button>
        </div>
      </div>

      {/* Cards Scroll Row / Grid */}
      <div
        ref={scrollContainerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto pb-2 scroll-smooth"
      >
        {products.map((item) => {
          const isFav = wishlist.includes(item.id);
          const inCart = cart.includes(item.id);

          return (
            <article
              key={item.id}
              className="group flex w-[190px] shrink-0 flex-col justify-between rounded-2xl border border-border/60 bg-card p-3 shadow-xs transition-all hover:border-primary/40 hover:shadow-md sm:w-[210px]"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/40 bg-muted/30">
                  <Link href={`/products/${item.id}`} className="block size-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="200px"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  {/* Heart button */}
                  <button
                    type="button"
                    aria-label={isFav ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onToggleFavorite(item.id);
                    }}
                    className={cn(
                      "absolute top-2 left-2 z-10 grid size-7 place-items-center rounded-full border border-border/40 bg-card/90 shadow-2xs backdrop-blur-xs transition-transform hover:scale-110 active:scale-95",
                      isFav
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    <Heart
                      className={cn(
                        "size-3.5 transition-colors",
                        isFav && "fill-primary text-primary",
                      )}
                    />
                  </button>
                </div>

                {/* Details */}
                <div className="pt-2.5 text-center">
                  <h3
                    title={item.title}
                    className="line-clamp-1 text-xs font-black text-foreground transition-colors group-hover:text-primary"
                  >
                    <Link href={`/products/${item.id}`} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                  <div className="mt-1.5 text-xs font-black text-primary">
                    {formatPrice(item.price)} تومان
                  </div>
                </div>
              </div>

              {/* Add to cart button */}
              <button
                type="button"
                onClick={() => onToggleCart(item.id)}
                className={cn(
                  "mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border py-2 text-xs font-bold transition-all active:scale-95",
                  inCart
                    ? "border-primary bg-primary text-primary-foreground shadow-2xs"
                    : "border-border/60 bg-[#F2ECE4] text-foreground/80 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary",
                )}
              >
                <ShoppingCart className="size-3.5 stroke-[2.2]" />
                <span>{inCart ? "در سبد موجود است" : "افزودن به سبد خرید"}</span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};
