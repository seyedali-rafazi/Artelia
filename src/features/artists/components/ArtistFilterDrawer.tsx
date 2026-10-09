"use client";

import { useEffect } from "react";
import { Filter, RotateCcw, Sparkles, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import {
  filterActivityTypes,
  filterCategories,
  filterCities,
  filterRatings,
} from "../data/artists-data";

interface ArtistFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  selectedCities: string[];
  onToggleCity: (city: string) => void;
  selectedRating: number | null;
  onSelectRating: (rating: number | null) => void;
  activityType: string;
  onChangeActivityType: (type: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

export const ArtistFilterDrawer = ({
  isOpen,
  onClose,
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
}: ArtistFilterDrawerProps) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
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
              {filterCategories.map((cat) => {
                const isChecked =
                  cat === "همه دسته‌بندی‌ها"
                    ? selectedCategories.length === 0 ||
                      selectedCategories.includes("همه دسته‌بندی‌ها")
                    : selectedCategories.includes(cat);

                return (
                  <label
                    key={cat}
                    htmlFor={`mob-cat-${cat}`}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-border/50 bg-background/50 p-2 text-xs font-semibold text-foreground/85"
                  >
                    <span>{cat}</span>
                    <Checkbox
                      id={`mob-cat-${cat}`}
                      checked={isChecked}
                      onCheckedChange={() => onToggleCategory(cat)}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Cities */}
          <div className="space-y-2 border-b border-border/40 pb-3">
            <h4 className="text-xs font-bold text-foreground">محل فعالیت</h4>
            <div className="grid grid-cols-2 gap-2">
              {filterCities.map((city) => {
                const isChecked = selectedCities.includes(city);
                return (
                  <label
                    key={city}
                    htmlFor={`mob-city-${city}`}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-border/50 bg-background/50 p-2 text-xs font-semibold text-foreground/85"
                  >
                    <span>{city}</span>
                    <Checkbox
                      id={`mob-city-${city}`}
                      checked={isChecked}
                      onCheckedChange={() => onToggleCity(city)}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Ratings */}
          <div className="space-y-2 border-b border-border/40 pb-3">
            <h4 className="text-xs font-bold text-foreground">امتیاز کاربران</h4>
            <div className="space-y-1.5">
              {filterRatings.map((rating) => {
                const isChecked = selectedRating === rating.stars;
                return (
                  <label
                    key={rating.stars}
                    htmlFor={`mob-rating-${rating.stars}`}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-border/50 bg-background/50 p-2.5 text-xs font-semibold text-foreground/85"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{rating.label}</span>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        <Star className="size-3 fill-amber-400" />
                        <Star className="size-3 fill-amber-400" />
                      </div>
                    </div>
                    <Checkbox
                      id={`mob-rating-${rating.stars}`}
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

          {/* Activity Type */}
          <div className="space-y-2 pb-2">
            <h4 className="text-xs font-bold text-foreground">نوع فعالیت</h4>
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
