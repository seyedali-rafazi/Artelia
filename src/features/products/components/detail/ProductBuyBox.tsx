"use client";

import Image from "next/image";
import {
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatPrice, toPersianDigits } from "../../lib/product-filters";
import type { ProductVariant } from "../../types";

interface ProductBuyBoxProps {
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelectVariant: (variant: ProductVariant) => void;
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  isInCart: boolean;
  onToggleCart: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const ProductBuyBox = ({
  title,
  rating,
  reviewCount,
  price,
  originalPrice,
  shortDescription,
  variants,
  selectedVariantId,
  onSelectVariant,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  isInCart,
  onToggleCart,
  isFavorite,
  onToggleFavorite,
}: ProductBuyBoxProps) => {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <h1 className="text-xl font-black text-foreground sm:text-2xl md:text-3xl">
        {title}
      </h1>

      {/* Rating & Reviews */}
      <div className="flex items-center gap-2 text-xs font-bold text-foreground/80">
        <div className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-4",
                i < Math.floor(rating)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-amber-400/20 text-amber-400/40",
              )}
            />
          ))}
        </div>
        <span>{toPersianDigits(rating.toFixed(1))}</span>
        <span className="text-muted-foreground">
          ({toPersianDigits(reviewCount)} نظر)
        </span>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        {originalPrice && (
          <span className="text-sm font-semibold text-muted-foreground line-through">
            {formatPrice(originalPrice)} تومان
          </span>
        )}
        <div className="text-2xl font-black text-primary md:text-3xl">
          {formatPrice(price)} <span className="text-base font-bold">تومان</span>
        </div>
      </div>

      {/* Short Summary Description */}
      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {shortDescription}
      </p>

      <div className="h-px w-full bg-border/60" />

      {/* Variants / Color Selector */}
      {variants.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-extrabold text-foreground">
            انتخاب رنگ / مدل
          </span>
          <div className="flex items-center gap-3">
            {variants.map((v) => {
              const isSelected = v.id === selectedVariantId;
              return (
                <button
                  key={v.id}
                  type="button"
                  title={v.name}
                  onClick={() => onSelectVariant(v)}
                  className={cn(
                    "relative size-12 cursor-pointer overflow-hidden rounded-xl border bg-muted/30 transition-all hover:scale-105",
                    isSelected
                      ? "border-2 border-primary shadow-xs ring-2 ring-primary/40"
                      : "border-border/60 opacity-80 hover:opacity-100",
                  )}
                >
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    sizes="48px"
                    className="object-cover object-center"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantity Stepper & Add to Cart */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {/* Quantity Stepper */}
        <div className="flex h-11 items-center rounded-xl border border-border/60 bg-card px-2 shadow-2xs">
          <button
            type="button"
            aria-label="کاهش تعداد"
            onClick={onDecreaseQuantity}
            disabled={quantity <= 1}
            className="grid size-7 cursor-pointer place-items-center rounded-lg text-foreground/80 transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus className="size-3.5" />
          </button>
          <span className="min-w-8 text-center text-sm font-black text-foreground">
            {toPersianDigits(quantity)}
          </span>
          <button
            type="button"
            aria-label="افزایش تعداد"
            onClick={onIncreaseQuantity}
            className="grid size-7 cursor-pointer place-items-center rounded-lg text-foreground/80 transition-colors hover:bg-muted"
          >
            <Plus className="size-3.5" />
          </button>
        </div>

        {/* Add To Cart Button */}
        <Button
          type="button"
          onClick={onToggleCart}
          className="h-11 flex-1 gap-2 rounded-xl bg-primary text-sm font-black text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
        >
          <ShoppingCart className="size-4.5 stroke-[2.2]" />
          <span>{isInCart ? "در سبد خرید موجود است" : "افزودن به سبد خرید"}</span>
        </Button>
      </div>

      {/* Wishlist Link Button */}
      <button
        type="button"
        onClick={onToggleFavorite}
        className="flex items-center justify-center gap-2 text-xs font-bold text-foreground/80 transition-colors hover:text-primary"
      >
        <Heart
          className={cn(
            "size-4",
            isFavorite && "fill-primary text-primary",
          )}
        />
        <span>
          {isFavorite ? "در علاقه‌مندی‌ها ذخیره شد" : "افزودن به علاقه‌مندی‌ها"}
        </span>
      </button>

      {/* 3 Horizontal Badges */}
      <div className="mt-2 grid grid-cols-1 gap-2.5 rounded-2xl border border-border/50 bg-card/40 p-3 sm:grid-cols-3">
        <div className="flex items-center gap-2">
          <Truck className="size-4 text-primary shrink-0" />
          <div className="flex flex-col text-[11px]">
            <span className="font-extrabold text-foreground">ارسال سریع</span>
            <span className="text-muted-foreground">در سراسر کشور</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-border/40 pt-2 sm:border-t-0 sm:border-r sm:border-border/40 sm:pt-0 sm:pr-2">
          <ShieldCheck className="size-4 text-primary shrink-0" />
          <div className="flex flex-col text-[11px]">
            <span className="font-extrabold text-foreground">ضمانت اصالت کالا</span>
            <span className="text-muted-foreground">تضمین کیفیت</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-border/40 pt-2 sm:border-t-0 sm:border-r sm:border-border/40 sm:pt-0 sm:pr-2">
          <RotateCcw className="size-4 text-primary shrink-0" />
          <div className="flex flex-col text-[11px]">
            <span className="font-extrabold text-foreground">بازگشت کالا</span>
            <span className="text-muted-foreground">تا ۷ روز</span>
          </div>
        </div>
      </div>
    </div>
  );
};
