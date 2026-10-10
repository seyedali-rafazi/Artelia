"use client";

import { useEffect } from "react";
import { Filter, RotateCcw, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import {
  filterProductCategories,
  productRatings,
  productTypeOptions,
} from "../data/products-data";
import { isProductCategoryChecked } from "../lib/product-filters";
import type { ProductFilterPanelProps } from "../types";
import { ProductPriceRangeFilter } from "./ProductPriceRangeFilter";
import { ProductRatingLabel } from "./ProductRatingLabel";

interface ProductFilterDrawerProps extends ProductFilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const optionLabelClass =
  "flex cursor-pointer items-center justify-between rounded-xl border border-border/50 bg-background/50 p-2 text-xs font-semibold text-foreground/85";

export const ProductFilterDrawer = ({
  isOpen,
  onClose,
  selectedCategories,
  onToggleCategory,
  minPrice,
  maxPrice,
  onChangePriceRange,
  selectedRating,
  onSelectRating,
  inStock,
  onToggleInStock,
  outOfStock,
  onToggleOutOfStock,
  productType,
  onChangeProductType,
  onApplyFilters,
  onResetFilters,
}: ProductFilterDrawerProps) => {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs transition-opacity lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Card */}
      <div className="relative max-h-[85vh] w-full overflow-y-auto rounded-t-3xl border-t border-border/80 bg-card p-5 shadow-2xl">
        {/* Handle bar */}
        <div className="mx-auto -mt-2 mb-4 h-1.5 w-12 rounded-full bg-muted-foreground/30" />

        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="size-5 text-primary" />
            <h3 className="text-base font-black text-foreground">فیلترهای پیشرفته</h3>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="bare"
            onClick={onClose}
            className="p-1 text-muted-foreground hover:text-foreground"
          >
            <X className="size-5" />
          </Button>
        </div>

        <div className="space-y-4">
          {/* Categories */}
          <div className="space-y-2 border-b border-border/40 pb-3">
            <h4 className="text-xs font-bold text-foreground">دسته‌بندی‌ها</h4>
            <div className="grid grid-cols-2 gap-2">
              {filterProductCategories.map((cat) => (
                <label
                  key={cat}
                  htmlFor={`mob-prod-cat-${cat}`}
                  className={optionLabelClass}
                >
                  <span>{cat}</span>
                  <Checkbox
                    id={`mob-prod-cat-${cat}`}
                    checked={isProductCategoryChecked(selectedCategories, cat)}
                    onCheckedChange={() => onToggleCategory(cat)}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2 border-b border-border/40 pb-3">
            <h4 className="text-xs font-bold text-foreground">محدوده قیمت</h4>
            <ProductPriceRangeFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              onChangePriceRange={onChangePriceRange}
            />
          </div>

          {/* Ratings */}
          <div className="space-y-2 border-b border-border/40 pb-3">
            <h4 className="text-xs font-bold text-foreground">امتیاز کاربران</h4>
            <div className="space-y-1.5">
              {productRatings.map((rating) => {
                const isChecked = selectedRating === rating.stars;
                return (
                  <label
                    key={rating.stars}
                    htmlFor={`mob-prod-rating-${rating.stars}`}
                    className={`${optionLabelClass} p-2.5`}
                  >
                    <ProductRatingLabel label={rating.label} stars={rating.stars} />
                    <Checkbox
                      id={`mob-prod-rating-${rating.stars}`}
                      checked={isChecked}
                      onCheckedChange={() =>
                        onSelectRating(isChecked ? null : rating.stars)
                      }
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Stock */}
          <div className="space-y-2 border-b border-border/40 pb-3">
            <h4 className="text-xs font-bold text-foreground">وضعیت موجودی</h4>
            <div className="grid grid-cols-2 gap-2">
              <label htmlFor="mob-stock-in" className={optionLabelClass}>
                <span>موجود</span>
                <Checkbox
                  id="mob-stock-in"
                  checked={inStock}
                  onCheckedChange={(checked) => onToggleInStock(Boolean(checked))}
                />
              </label>
              <label htmlFor="mob-stock-out" className={optionLabelClass}>
                <span>ناموجود</span>
                <Checkbox
                  id="mob-stock-out"
                  checked={outOfStock}
                  onCheckedChange={(checked) => onToggleOutOfStock(Boolean(checked))}
                />
              </label>
            </div>
          </div>

          {/* Product Type */}
          <div className="space-y-2 pb-2">
            <h4 className="text-xs font-bold text-foreground">نوع محصول</h4>
            <Select
              value={productType}
              onChange={(e) => onChangeProductType(e.target.value)}
            >
              {productTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-4 flex gap-2 border-t border-border/50 pt-3">
          <Button
            type="button"
            variant="default"
            onClick={() => {
              onApplyFilters();
              onClose();
            }}
            className="flex-1 gap-1.5 py-2.5 text-xs font-bold shadow-xs"
          >
            <Sparkles className="size-3.5" />
            <span>اعمال فیلترها</span>
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={onResetFilters}
            className="gap-1 px-4 py-2 text-xs font-bold text-muted-foreground hover:text-destructive"
          >
            <RotateCcw className="size-3.5" />
            <span>حذف فیلترها</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
