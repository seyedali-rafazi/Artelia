import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quickCategories } from "../data/artists-data";
import { cn } from "@/lib/utils";

interface CategoryPillsBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenMobileFilters: () => void;
  activeFilterCount?: number;
}

export const CategoryPillsBar = ({
  selectedCategory,
  onSelectCategory,
  onOpenMobileFilters,
  activeFilterCount = 0,
}: CategoryPillsBarProps) => {
  return (
    <div className="mb-6 flex items-center gap-2.5">
      {/* Mobile Filter Button (visible on mobile / small screens, hidden on lg where sidebar exists) */}
      <div className="lg:hidden">
        <Button
          type="button"
          variant="default"
          size="icon"
          aria-label="نمایش فیلترها"
          onClick={onOpenMobileFilters}
          className="relative size-10.5 rounded-2xl shadow-xs transition-transform active:scale-95"
        >
          <SlidersHorizontal className="size-5" />
          {activeFilterCount > 0 && (
            <span className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-accent text-[9px] font-extrabold text-accent-foreground shadow-xs">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </div>

      {/* Horizontal Pills list (scrollable on mobile, flex-wrap or row on desktop) */}
      <div className="flex flex-1 items-center gap-2 overflow-x-auto pb-1 scrollbar-none sm:gap-2.5 lg:flex-wrap lg:justify-start lg:pb-0">
        {quickCategories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <Button
              key={category}
              type="button"
              variant={isActive ? "default" : "glass"}
              size="bare"
              onClick={() => onSelectCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold transition-all sm:text-sm",
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs hover:bg-primary/95"
                  : "border-border/70 bg-card/70 text-foreground/80 hover:border-primary/40 hover:bg-card hover:text-primary",
              )}
            >
              {category}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
