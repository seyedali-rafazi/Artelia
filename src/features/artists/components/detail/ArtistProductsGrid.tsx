"use client";

import { useMemo, useState } from "react";
import { Leaf } from "lucide-react";
import { Select } from "@/components/ui/select";
import { ArtistProductCard } from "./ArtistProductCard";
import type { ArtistDetailItem } from "../../types";

interface ArtistProductsGridProps {
  artist: ArtistDetailItem;
}

export const ArtistProductsGrid = ({ artist }: ArtistProductsGridProps) => {
  const [sortOrder, setSortOrder] = useState<string>("newest");
  const shortName = artist.name.split(" ")[0] || artist.name;

  const sortedProducts = useMemo(() => {
    const list = [...artist.products];
    if (sortOrder === "price-asc") {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sortOrder === "price-desc") {
      return list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [artist.products, sortOrder]);

  return (
    <section aria-labelledby="artist-products-heading" className="w-full">
      {/* Header bar: Title on right, Sort dropdown on left (RTL) */}
      <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        {/* Title with decorative leaf icon */}
        <div className="flex items-center gap-2">
          <h2
            id="artist-products-heading"
            className="text-base font-black text-foreground sm:text-lg"
          >
            آثار و محصولات {shortName}
          </h2>
          <Leaf className="size-5 text-primary rotate-12" />
        </div>

        {/* Sort select */}
        <div className="w-48 max-w-full">
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            aria-label="مرتب‌سازی محصولات"
            className="rounded-xl border-border/70 text-xs font-bold"
          >
            <option value="newest">مرتب‌سازی بر اساس جدیدترین</option>
            <option value="price-asc">ارزان‌ترین</option>
            <option value="price-desc">گران‌ترین</option>
            <option value="popular">محبوب‌ترین</option>
          </Select>
        </div>
      </div>

      {/* Grid of product cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {sortedProducts.map((product) => (
          <ArtistProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
