"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Filter, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import {
  filterActivityTypes,
  filterCategories,
  filterCities,
  filterRatings,
} from "../data/artists-data";
import { isCategoryChecked } from "../lib/artist-filters";
import type { ArtistFilterPanelProps } from "../types";
import { FilterAccordionSection } from "./FilterAccordionSection";
import { RatingLabel } from "./RatingLabel";

const COLLAPSED_CATEGORY_COUNT = 6;
const rowLabelClass =
  "flex flex-1 cursor-pointer items-center justify-between text-xs font-semibold text-foreground/85 hover:text-primary";

export const ArtistFilterSidebar = ({
  selectedCategories,
  onToggleCategory,
  selectedCities,
  onToggleCity,
  selectedRating,
  onSelectRating,
  activityType,
  onChangeActivityType,
  onApplyFilters,
  onResetFilters,
}: ArtistFilterPanelProps) => {
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const visibleCategories = showMoreCategories
    ? filterCategories
    : filterCategories.slice(0, COLLAPSED_CATEGORY_COUNT);
  const MoreIcon = showMoreCategories ? ChevronUp : ChevronDown;

  return (
    <aside className="w-full space-y-4 rounded-2xl border border-border/60 bg-card p-4 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="size-4.5 text-primary" />
          <h2 className="text-base font-black text-foreground">فیلترها</h2>
        </div>
      </div>

      <FilterAccordionSection
        title="دسته‌بندی‌ها"
        className="border-b border-border/40 pb-3"
      >
        {visibleCategories.map((cat) => (
          <div key={cat} className="flex items-center justify-between gap-2">
            <label htmlFor={`cat-${cat}`} className={rowLabelClass}>
              <span>{cat}</span>
              <Checkbox
                id={`cat-${cat}`}
                checked={isCategoryChecked(selectedCategories, cat)}
                onCheckedChange={() => onToggleCategory(cat)}
              />
            </label>
          </div>
        ))}

        {filterCategories.length > COLLAPSED_CATEGORY_COUNT && (
          <button
            type="button"
            onClick={() => setShowMoreCategories((prev) => !prev)}
            className="mt-1 flex items-center gap-1 text-[11px] font-bold text-primary transition-colors hover:underline"
          >
            <span>{showMoreCategories ? "مشاهده کمتر" : "مشاهده بیشتر"}</span>
            <MoreIcon className="size-3" />
          </button>
        )}
      </FilterAccordionSection>

      <FilterAccordionSection
        title="محل فعالیت"
        className="border-b border-border/40 pb-3"
      >
        {filterCities.map((city) => (
          <div key={city} className="flex items-center justify-between gap-2">
            <label htmlFor={`city-${city}`} className={rowLabelClass}>
              <span>{city}</span>
              <Checkbox
                id={`city-${city}`}
                checked={selectedCities.includes(city)}
                onCheckedChange={() => onToggleCity(city)}
              />
            </label>
          </div>
        ))}
      </FilterAccordionSection>

      <FilterAccordionSection
        title="امتیاز کاربران"
        className="border-b border-border/40 pb-3"
      >
        {filterRatings.map((rating) => {
          const isChecked = selectedRating === rating.stars;
          return (
            <div
              key={rating.stars}
              className="flex items-center justify-between gap-2"
            >
              <label htmlFor={`rating-${rating.stars}`} className={rowLabelClass}>
                <RatingLabel label={rating.label} />
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
      </FilterAccordionSection>

      <FilterAccordionSection
        title="نوع فعالیت"
        className="pb-2"
        contentClassName="mt-2.5"
      >
        <Select
          value={activityType}
          onChange={(e) => onChangeActivityType(e.target.value)}
        >
          {filterActivityTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </FilterAccordionSection>

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
