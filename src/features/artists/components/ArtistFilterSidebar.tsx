import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  RotateCcw,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import {
  filterActivityTypes,
  filterCategories,
  filterCities,
  filterRatings,
} from "../data/artists-data";

interface ArtistFilterSidebarProps {
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
}: ArtistFilterSidebarProps) => {
  // Accordion state
  const [openSections, setOpenSections] = useState({
    categories: true,
    cities: true,
    ratings: true,
    activityType: true,
  });

  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const visibleCategories = showMoreCategories
    ? filterCategories
    : filterCategories.slice(0, 6);

  return (
    <aside className="w-full space-y-4 rounded-2xl border border-border/60 bg-card p-4 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="size-4.5 text-primary" />
          <h2 className="text-base font-black text-foreground">فیلترها</h2>
        </div>
      </div>

      {/* Accordion 1: Categories */}
      <div className="border-b border-border/40 pb-3">
        <button
          type="button"
          onClick={() => toggleSection("categories")}
          className="flex w-full items-center justify-between py-1 text-sm font-bold text-foreground transition-colors hover:text-primary"
        >
          <span>دسته‌بندی‌ها</span>
          {openSections.categories ? (
            <ChevronUp className="size-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="size-4 text-muted-foreground" />
          )}
        </button>

        {openSections.categories && (
          <div className="mt-2.5 space-y-2">
            {visibleCategories.map((cat) => {
              const isChecked =
                cat === "همه دسته‌بندی‌ها"
                  ? selectedCategories.length === 0 ||
                    selectedCategories.includes("همه دسته‌بندی‌ها")
                  : selectedCategories.includes(cat);

              return (
                <div key={cat} className="flex items-center justify-between gap-2">
                  <label
                    htmlFor={`cat-${cat}`}
                    className="flex flex-1 cursor-pointer items-center justify-between text-xs font-semibold text-foreground/85 hover:text-primary"
                  >
                    <span>{cat}</span>
                    <Checkbox
                      id={`cat-${cat}`}
                      checked={isChecked}
                      onCheckedChange={() => onToggleCategory(cat)}
                    />
                  </label>
                </div>
              );
            })}

            {filterCategories.length > 6 && (
              <button
                type="button"
                onClick={() => setShowMoreCategories((prev) => !prev)}
                className="mt-1 flex items-center gap-1 text-[11px] font-bold text-primary transition-colors hover:underline"
              >
                <span>{showMoreCategories ? "مشاهده کمتر" : "مشاهده بیشتر"}</span>
                {showMoreCategories ? (
                  <ChevronUp className="size-3" />
                ) : (
                  <ChevronDown className="size-3" />
                )}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Accordion 2: Cities / Location */}
      <div className="border-b border-border/40 pb-3">
        <button
          type="button"
          onClick={() => toggleSection("cities")}
          className="flex w-full items-center justify-between py-1 text-sm font-bold text-foreground transition-colors hover:text-primary"
        >
          <span>محل فعالیت</span>
          {openSections.cities ? (
            <ChevronUp className="size-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="size-4 text-muted-foreground" />
          )}
        </button>

        {openSections.cities && (
          <div className="mt-2.5 space-y-2">
            {filterCities.map((city) => {
              const isChecked = selectedCities.includes(city);
              return (
                <div key={city} className="flex items-center justify-between gap-2">
                  <label
                    htmlFor={`city-${city}`}
                    className="flex flex-1 cursor-pointer items-center justify-between text-xs font-semibold text-foreground/85 hover:text-primary"
                  >
                    <span>{city}</span>
                    <Checkbox
                      id={`city-${city}`}
                      checked={isChecked}
                      onCheckedChange={() => onToggleCity(city)}
                    />
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Accordion 3: User Rating */}
      <div className="border-b border-border/40 pb-3">
        <button
          type="button"
          onClick={() => toggleSection("ratings")}
          className="flex w-full items-center justify-between py-1 text-sm font-bold text-foreground transition-colors hover:text-primary"
        >
          <span>امتیاز کاربران</span>
          {openSections.ratings ? (
            <ChevronUp className="size-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="size-4 text-muted-foreground" />
          )}
        </button>

        {openSections.ratings && (
          <div className="mt-2.5 space-y-2">
            {filterRatings.map((rating) => {
              const isChecked = selectedRating === rating.stars;
              return (
                <div key={rating.stars} className="flex items-center justify-between gap-2">
                  <label
                    htmlFor={`rating-${rating.stars}`}
                    className="flex flex-1 cursor-pointer items-center justify-between text-xs font-semibold text-foreground/85 hover:text-primary"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{rating.label}</span>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        <Star className="size-3 fill-amber-400" />
                        <Star className="size-3 fill-amber-400" />
                      </div>
                    </div>
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
          </div>
        )}
      </div>

      {/* Accordion 4: Activity Type */}
      <div className="pb-2">
        <button
          type="button"
          onClick={() => toggleSection("activityType")}
          className="flex w-full items-center justify-between py-1 text-sm font-bold text-foreground transition-colors hover:text-primary"
        >
          <span>نوع فعالیت</span>
          {openSections.activityType ? (
            <ChevronUp className="size-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="size-4 text-muted-foreground" />
          )}
        </button>

        {openSections.activityType && (
          <div className="mt-2.5">
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
        )}
      </div>

      {/* Bottom Actions */}
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
