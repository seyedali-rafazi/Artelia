"use client";

import { useState } from "react";
import {
  DEFAULT_PRICE_MAX,
  DEFAULT_PRICE_MIN,
  PRICE_STEP,
} from "../data/products-data";
import { formatPrice, toPersianDigits } from "../lib/product-filters";

interface ProductPriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onChangePriceRange: (min: number, max: number) => void;
}

export const ProductPriceRangeFilter = ({
  minPrice,
  maxPrice,
  onChangePriceRange,
}: ProductPriceRangeFilterProps) => {
  const [localMin, setLocalMin] = useState(minPrice);
  const [localMax, setLocalMax] = useState(maxPrice);
  const [prevMinPrice, setPrevMinPrice] = useState(minPrice);
  const [prevMaxPrice, setPrevMaxPrice] = useState(maxPrice);

  if (prevMinPrice !== minPrice) {
    setPrevMinPrice(minPrice);
    setLocalMin(minPrice);
  }

  if (prevMaxPrice !== maxPrice) {
    setPrevMaxPrice(maxPrice);
    setLocalMax(maxPrice);
  }

  const handleMinChange = (val: number) => {
    const clamped = Math.min(Math.max(DEFAULT_PRICE_MIN, val), localMax - PRICE_STEP);
    setLocalMin(clamped);
    onChangePriceRange(clamped, localMax);
  };

  const handleMaxChange = (val: number) => {
    const clamped = Math.max(Math.min(DEFAULT_PRICE_MAX, val), localMin + PRICE_STEP);
    setLocalMax(clamped);
    onChangePriceRange(localMin, clamped);
  };

  // Percentage calculations for track highlight
  const minPercent = ((localMin - DEFAULT_PRICE_MIN) / (DEFAULT_PRICE_MAX - DEFAULT_PRICE_MIN)) * 100;
  const maxPercent = ((localMax - DEFAULT_PRICE_MIN) / (DEFAULT_PRICE_MAX - DEFAULT_PRICE_MIN)) * 100;

  return (
    <div className="space-y-4 pt-1">
      {/* Two input boxes */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {/* Max Price Box (Left in RTL is 2nd in DOM or 1st? In RTL: col-1 is right, col-2 is left) */}
        {/* Right side in RTL: Min Price */}
        <div className="rounded-xl border border-border/80 bg-background/50 p-2 transition-colors focus-within:border-primary/60">
          <span className="block text-[11px] font-medium text-muted-foreground">
            حداقل قیمت
          </span>
          <div className="mt-1 flex items-center justify-between">
            <input
              type="text"
              inputMode="numeric"
              value={formatPrice(localMin)}
              onChange={(e) => {
                const numeric = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!Number.isNaN(numeric)) {
                  handleMinChange(numeric);
                }
              }}
              className="w-full bg-transparent text-xs font-bold text-foreground outline-none"
            />
            <span className="shrink-0 text-[11px] text-muted-foreground">تومان</span>
          </div>
        </div>

        {/* Left side in RTL: Max Price */}
        <div className="rounded-xl border border-border/80 bg-background/50 p-2 transition-colors focus-within:border-primary/60">
          <span className="block text-[11px] font-medium text-muted-foreground">
            حداکثر قیمت
          </span>
          <div className="mt-1 flex items-center justify-between">
            <input
              type="text"
              inputMode="numeric"
              value={formatPrice(localMax)}
              onChange={(e) => {
                const numeric = Number(e.target.value.replace(/[^0-9]/g, ""));
                if (!Number.isNaN(numeric)) {
                  handleMaxChange(numeric);
                }
              }}
              className="w-full bg-transparent text-xs font-bold text-foreground outline-none"
            />
            <span className="shrink-0 text-[11px] text-muted-foreground">تومان</span>
          </div>
        </div>
      </div>

      {/* Dual Thumb Range Slider */}
      <div className="relative pt-2 pb-1">
        {/* Custom Track Background */}
        <div className="relative h-1.5 w-full rounded-full bg-muted">
          {/* Active highlighted range bar */}
          <div
            className="absolute top-0 h-1.5 rounded-full bg-primary"
            style={{
              left: `${minPercent}%`,
              right: `${100 - maxPercent}%`,
            }}
          />
        </div>

        {/* Native overlapping range sliders for accessibility and touch */}
        <input
          type="range"
          min={DEFAULT_PRICE_MIN}
          max={DEFAULT_PRICE_MAX}
          step={PRICE_STEP}
          value={localMin}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          aria-label="حداقل قیمت"
          className="pointer-events-none absolute inset-x-0 -top-1.5 h-6 w-full appearance-none bg-transparent opacity-0 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-4.5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-card [&::-webkit-slider-thumb]:shadow-xs"
        />
        <input
          type="range"
          min={DEFAULT_PRICE_MIN}
          max={DEFAULT_PRICE_MAX}
          step={PRICE_STEP}
          value={localMax}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          aria-label="حداکثر قیمت"
          className="pointer-events-none absolute inset-x-0 -top-1.5 h-6 w-full appearance-none bg-transparent opacity-0 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-4.5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-card [&::-webkit-slider-thumb]:shadow-xs"
        />

        {/* Visual draggable circular thumbs */}
        <div
          className="pointer-events-none absolute -top-1 size-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-card shadow-xs"
          style={{ left: `${minPercent}%` }}
        />
        <div
          className="pointer-events-none absolute -top-1 size-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-card shadow-xs"
          style={{ left: `${maxPercent}%` }}
        />
      </div>

      {/* Min & Max labels below slider */}
      <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground">
        <span>{toPersianDigits("0")} تومان</span>
        <span>{formatPrice(DEFAULT_PRICE_MAX)}</span>
      </div>
    </div>
  );
};
