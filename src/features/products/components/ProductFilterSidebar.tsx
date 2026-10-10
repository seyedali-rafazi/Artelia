"use client";

import { Filter, RotateCcw, Sparkles } from "lucide-react";
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
import { ProductFilterAccordion } from "./ProductFilterAccordion";
import { ProductPriceRangeFilter } from "./ProductPriceRangeFilter";
import { ProductRatingLabel } from "./ProductRatingLabel";

const rowLabelClass =
  "flex flex-1 cursor-pointer items-center justify-between text-xs font-semibold text-foreground/85 hover:text-primary";

export const ProductFilterSidebar = ({
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
}: ProductFilterPanelProps) => {
  return (
    <aside className="w-full space-y-4 rounded-2xl border border-border/60 bg-card p-4 shadow-xs">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="size-4.5 text-primary" />
          <h2 className="text-base font-black text-foreground">فیلترها</h2>
        </div>
      </div>

      {/* Accordion 1: دسته‌بندی محصولات */}
      <ProductFilterAccordion
        title="دسته‌بندی محصولات"
        className="border-b border-border/40 pb-3"
      >
        {filterProductCategories.map((cat) => (
          <div key={cat} className="flex items-center justify-between gap-2">
            <label htmlFor={`cat-${cat}`} className={rowLabelClass}>
              <span>{cat}</span>
              <Checkbox
                id={`cat-${cat}`}
                checked={isProductCategoryChecked(selectedCategories, cat)}
                onCheckedChange={() => onToggleCategory(cat)}
              />
            </label>
          </div>
        ))}
      </ProductFilterAccordion>

      {/* Accordion 2: محدوده قیمت */}
      <ProductFilterAccordion
        title="محدوده قیمت"
        className="border-b border-border/40 pb-3"
      >
        <ProductPriceRangeFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          onChangePriceRange={onChangePriceRange}
        />
      </ProductFilterAccordion>

      {/* Accordion 3: امتیاز کاربران */}
      <ProductFilterAccordion
        title="امتیاز کاربران"
        className="border-b border-border/40 pb-3"
      >
        {productRatings.map((rating) => {
          const isChecked = selectedRating === rating.stars;
          return (
            <div
              key={rating.stars}
              className="flex items-center justify-between gap-2"
            >
              <label htmlFor={`rating-${rating.stars}`} className={rowLabelClass}>
                <ProductRatingLabel label={rating.label} stars={rating.stars} />
                <Checkbox
                  id={`rating-${rating.stars}`}
                  checked={isChecked}
                  onCheckedChange={() =>
                    onSelectRating(isChecked ? null : rating.stars)
                  }
                />
              </label>
            </div>
          );
        })}
      </ProductFilterAccordion>

      {/* Accordion 4: وضعیت موجودی */}
      <ProductFilterAccordion
        title="وضعیت موجودی"
        className="border-b border-border/40 pb-3"
      >
        <div className="space-y-2">
          <label htmlFor="stock-in" className={rowLabelClass}>
            <span>موجود</span>
            <Checkbox
              id="stock-in"
              checked={inStock}
              onCheckedChange={(checked) => onToggleInStock(Boolean(checked))}
            />
          </label>
          <label htmlFor="stock-out" className={rowLabelClass}>
            <span>ناموجود</span>
            <Checkbox
              id="stock-out"
              checked={outOfStock}
              onCheckedChange={(checked) => onToggleOutOfStock(Boolean(checked))}
            />
          </label>
        </div>
      </ProductFilterAccordion>

      {/* Accordion 5: نوع محصول */}
      <ProductFilterAccordion
        title="نوع محصول"
        className="pb-2"
        contentClassName="mt-2.5"
      >
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
      </ProductFilterAccordion>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2">
        <Button
          type="button"
          variant="default"
          onClick={onApplyFilters}
          className="w-full gap-2 py-2.5 text-xs shadow-xs"
        >
          <Sparkles className="size-3.5" />
          <span>اعمال فیلترها</span>
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={onResetFilters}
          className="w-full gap-1.5 py-2 text-xs font-semibold text-muted-foreground hover:text-destructive"
        >
          <RotateCcw className="size-3.5" />
          <span>حذف همه فیلترها</span>
        </Button>
      </div>
    </aside>
  );
};
