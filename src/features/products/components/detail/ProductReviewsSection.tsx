"use client";

import { ChevronLeft, Star, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { toPersianDigits } from "../../lib/product-filters";
import type { ProductReviewItem, RatingBreakdown } from "../../types";

interface ProductReviewsSectionProps {
  rating: number;
  reviewCount: number;
  ratingBreakdown: RatingBreakdown;
  reviews: ProductReviewItem[];
}

export const ProductReviewsSection = ({
  rating,
  reviewCount,
  ratingBreakdown,
  reviews,
}: ProductReviewsSectionProps) => {
  const bars = [
    { label: "۵ ستاره", percent: ratingBreakdown.fiveStarPercent },
    { label: "۴ ستاره", percent: ratingBreakdown.fourStarPercent },
    { label: "۳ ستاره", percent: ratingBreakdown.threeStarPercent },
    { label: "۲ ستاره", percent: ratingBreakdown.twoStarPercent },
    { label: "۱ ستاره", percent: ratingBreakdown.oneStarPercent },
  ];

  const featured = reviews[0];

  return (
    <section className="mt-12 flex flex-col gap-5">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-black text-foreground sm:text-lg">
          نظرات مشتریان
        </h2>
        <button
          type="button"
          className="flex items-center gap-1 text-xs font-bold text-primary transition-colors hover:underline"
        >
          <span>مشاهده همه</span>
          <ChevronLeft className="size-3.5" />
        </button>
      </div>

      {/* Grid: Breakdown Card + Featured Review Card */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Left Card in RTL: Score & Breakdown */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-2xs md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-foreground">
              {toPersianDigits(rating.toFixed(1))}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-muted-foreground">
                از ۵
              </span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "size-3.5",
                      i < Math.floor(rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-amber-400/20 text-amber-400/30",
                    )}
                  />
                ))}
              </div>
            </div>
            <span className="mr-auto text-xs font-bold text-muted-foreground">
              {toPersianDigits(reviewCount)} نظر
            </span>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            {bars.map((b) => (
              <div key={b.label} className="flex items-center gap-3 text-xs">
                <span className="w-12 font-medium text-muted-foreground">
                  {b.label}
                </span>
                <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-muted/60">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${b.percent}%` }}
                  />
                </div>
                <span className="w-8 text-left font-bold text-muted-foreground">
                  ٪{toPersianDigits(b.percent)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card in RTL: Customer Review */}
        <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 shadow-2xs md:col-span-7">
          {featured ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-full bg-muted text-muted-foreground">
                    <User className="size-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-foreground sm:text-sm">
                      {featured.author}
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {featured.date}
                    </span>
                  </div>
                </div>

                {featured.isBuyer && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-extrabold text-primary">
                    خریدار محصول
                  </span>
                )}
              </div>

              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "size-3",
                      i < featured.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-amber-400/20 text-amber-400/30",
                    )}
                  />
                ))}
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {featured.comment}
              </p>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">نظری ثبت نشده است.</p>
          )}
        </div>
      </div>
    </section>
  );
};
