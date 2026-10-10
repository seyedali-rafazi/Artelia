"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { toPersianDigits } from "../../lib/product-filters";
import type { ProductSpecification } from "../../types";

interface ProductTabsProps {
  aboutParagraphs: string[];
  specifications: ProductSpecification[];
  reviewCount: number;
  onNavigateToReviews?: () => void;
}

type TabType = "description" | "specifications" | "reviews";

export const ProductTabs = ({
  aboutParagraphs,
  specifications,
  reviewCount,
  onNavigateToReviews,
}: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("description");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    if (tab === "reviews" && onNavigateToReviews) {
      onNavigateToReviews();
    }
  };

  return (
    <div className="mt-12 flex flex-col gap-4">
      {/* Tabs Header */}
      <div className="flex border-b border-border/60">
        <button
          type="button"
          onClick={() => handleTabClick("description")}
          className={cn(
            "relative pb-3 text-sm font-black transition-colors sm:text-base",
            activeTab === "description"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          توضیحات
          {activeTab === "description" && (
            <span className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-primary" />
          )}
        </button>

        <button
          type="button"
          onClick={() => handleTabClick("specifications")}
          className={cn(
            "relative mr-8 pb-3 text-sm font-black transition-colors sm:text-base",
            activeTab === "specifications"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          مشخصات فنی
          {activeTab === "specifications" && (
            <span className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-primary" />
          )}
        </button>

        <button
          type="button"
          onClick={() => handleTabClick("reviews")}
          className={cn(
            "relative mr-8 pb-3 text-sm font-black transition-colors sm:text-base",
            activeTab === "reviews"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          نظرات ({toPersianDigits(reviewCount)})
          {activeTab === "reviews" && (
            <span className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-primary" />
          )}
        </button>
      </div>

      {/* Tab Content Box */}
      <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-2xs">
        {activeTab === "description" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* About Product (Right side in RTL) */}
            <div className="md:col-span-7">
              <h2 className="mb-4 text-base font-black text-foreground">
                درباره محصول
              </h2>
              <div className="flex flex-col gap-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Specifications Summary (Left side in RTL) */}
            <div className="md:col-span-5 md:border-r md:border-border/60 md:pr-8">
              <h2 className="mb-4 text-base font-black text-foreground">
                مشخصات
              </h2>
              <div className="divide-y divide-border/40 rounded-xl border border-border/50 bg-background/50">
                {specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2 text-xs"
                  >
                    <span className="font-bold text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="font-extrabold text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-black text-foreground">
              مشخصات کامل کالا
            </h2>
            <div className="divide-y divide-border/40 rounded-xl border border-border/50 bg-background/50">
              {specifications.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm"
                >
                  <span className="font-bold text-muted-foreground">
                    {spec.label}
                  </span>
                  <span className="font-extrabold text-foreground">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
            <p>
              برای مشاهده و ارسال نظر به بخش پایین صفحه مراجعه کنید.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
