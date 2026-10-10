"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Headphones,
  Heart,
  RotateCcw,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toPersianDigits } from "../../lib/product-filters";

interface ProductGalleryProps {
  images: string[];
  title: string;
  discountPercent?: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  activeImage: string;
  onSelectImage: (image: string) => void;
}

export const ProductGallery = ({
  images,
  title,
  discountPercent,
  isFavorite,
  onToggleFavorite,
  activeImage,
  onSelectImage,
}: ProductGalleryProps) => {
  const currentIdx = images.indexOf(activeImage);
  const safeIdx = currentIdx >= 0 ? currentIdx : 0;

  const handlePrev = () => {
    if (images.length === 0) return;
    const prevIdx = (safeIdx - 1 + images.length) % images.length;
    onSelectImage(images[prevIdx]);
  };

  const handleNext = () => {
    if (images.length === 0) return;
    const nextIdx = (safeIdx + 1) % images.length;
    onSelectImage(images[nextIdx]);
  };

  const handleExtraClick = () => {
    if (images.length <= 4) return;
    // Cycle through images beyond index 3
    if (safeIdx >= 4 && safeIdx < images.length - 1) {
      onSelectImage(images[safeIdx + 1]);
    } else {
      onSelectImage(images[4]);
    }
  };

  const isExtraActive = safeIdx >= 4;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xs">
        <Image
          src={activeImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 550px"
          className="object-cover object-center transition-all duration-300"
        />

        {/* Discount Badge (Top-Right) */}
        {discountPercent ? (
          <div className="absolute top-3.5 right-3.5 z-10 rounded-lg bg-primary px-2.5 py-1 text-xs font-black text-primary-foreground shadow-sm">
            ٪{toPersianDigits(discountPercent)} تخفیف
          </div>
        ) : null}

        {/* Wishlist Button (Top-Left) */}
        <button
          type="button"
          aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
          onClick={onToggleFavorite}
          className="absolute top-3.5 left-3.5 z-10 grid size-9 cursor-pointer place-items-center rounded-full border border-border/40 bg-card/90 text-foreground shadow-2xs backdrop-blur-xs transition-transform hover:scale-110 active:scale-95"
        >
          <Heart
            className={cn(
              "size-4.5 transition-colors",
              isFavorite
                ? "fill-primary text-primary"
                : "text-muted-foreground hover:text-primary",
            )}
          />
        </button>

        {/* Prev / Next Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="تصویر بعدی"
              onClick={handleNext}
              className="absolute top-1/2 right-3 z-10 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-border/40 bg-card/85 text-foreground shadow-2xs backdrop-blur-xs transition-all hover:bg-card hover:scale-105 active:scale-95"
            >
              <ChevronRight className="size-4.5" />
            </button>
            <button
              type="button"
              aria-label="تصویر قبلی"
              onClick={handlePrev}
              className="absolute top-1/2 left-3 z-10 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-border/40 bg-card/85 text-foreground shadow-2xs backdrop-blur-xs transition-all hover:bg-card hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="size-4.5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2.5">
          {images.slice(0, 4).map((img, idx) => {
            const isSelected = activeImage === img;
            return (
              <button
                key={img + idx}
                type="button"
                aria-label={`نمایش تصویر ${idx + 1}`}
                onClick={() => onSelectImage(img)}
                className={cn(
                  "relative aspect-square cursor-pointer overflow-hidden rounded-xl border bg-muted/40 transition-all hover:opacity-100",
                  isSelected
                    ? "border-2 border-primary shadow-xs ring-2 ring-primary/40 opacity-100"
                    : "border-border/60 opacity-70 hover:border-primary/50",
                )}
              >
                <Image
                  src={img}
                  alt={`${title} - نمای ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}

          {/* "+2" extra indicator thumbnail */}
          {images.length > 4 && (
            <button
              type="button"
              aria-label="نمایش سایر تصاویر"
              onClick={handleExtraClick}
              className={cn(
                "flex aspect-square cursor-pointer items-center justify-center rounded-xl border text-xs font-bold transition-all hover:border-primary/50",
                isExtraActive
                  ? "border-2 border-primary bg-primary/10 text-primary ring-2 ring-primary/40"
                  : "border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground",
              )}
            >
              +{toPersianDigits(images.length - 4)}
            </button>
          )}
        </div>
      )}

      {/* 3 Vertically Stacked Service Highlights */}
      <div className="mt-2 divide-y divide-border/50 rounded-2xl border border-border/60 bg-card/60 p-3 shadow-2xs">
        <div className="flex items-center gap-3 py-2.5 first:pt-1">
          <div className="grid size-9 shrink-0 place-items-center rounded-full border border-border/40 bg-muted/50 text-foreground/80">
            <Truck className="size-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-extrabold text-foreground">
              ارسال سریع و مطمئن
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              ارسال به سراسر کشور
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 py-2.5">
          <div className="grid size-9 shrink-0 place-items-center rounded-full border border-border/40 bg-muted/50 text-foreground/80">
            <Headphones className="size-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-extrabold text-foreground">
              پشتیبانی ۲۴ ساعته
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              پاسخگویی در همه روزهای هفته
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 py-2.5 last:pb-1">
          <div className="grid size-9 shrink-0 place-items-center rounded-full border border-border/40 bg-muted/50 text-foreground/80">
            <RotateCcw className="size-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-extrabold text-foreground">
              امکان بازگشت کالا
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              تا ۷ روز پس از دریافت
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
