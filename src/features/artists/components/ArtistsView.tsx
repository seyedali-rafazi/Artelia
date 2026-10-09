"use client";

import { useMemo, useState } from "react";
import { ArtistsBanner } from "./ArtistsBanner";
import { CategoryPillsBar } from "./CategoryPillsBar";
import { ArtistsListingCard } from "./ArtistsListingCard";
import { ArtistFilterSidebar } from "./ArtistFilterSidebar";
import { ArtistFilterDrawer } from "./ArtistFilterDrawer";
import { ArtistPagination } from "./ArtistPagination";
import { mockArtists } from "../data/artists-data";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export const ArtistsView = () => {
  // State for pill selection
  const [selectedPillCategory, setSelectedPillCategory] = useState("همه هنرمندان");

  // State for sidebar/drawer filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["همه دسته‌بندی‌ها"]);
  const [selectedCities, setSelectedCities] = useState<string[]>(["تهران"]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [activityType, setActivityType] = useState<string>("همه موارد");

  // Mobile drawer state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Toggle Category Checkbox
  const handleToggleCategory = (category: string) => {
    if (category === "همه دسته‌بندی‌ها") {
      setSelectedCategories(["همه دسته‌بندی‌ها"]);
      return;
    }

    setSelectedCategories((prev) => {
      const withoutAll = prev.filter((c) => c !== "همه دسته‌بندی‌ها");
      if (withoutAll.includes(category)) {
        const next = withoutAll.filter((c) => c !== category);
        return next.length === 0 ? ["همه دسته‌بندی‌ها"] : next;
      }
      return [...withoutAll, category];
    });
  };

  // Toggle City Checkbox
  const handleToggleCity = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city],
    );
  };

  // Reset all filters to default
  const handleResetFilters = () => {
    setSelectedPillCategory("همه هنرمندان");
    setSelectedCategories(["همه دسته‌بندی‌ها"]);
    setSelectedCities([]);
    setSelectedRating(null);
    setActivityType("همه موارد");
    setCurrentPage(1);
  };

  // Filter calculation
  const filteredArtists = useMemo(() => {
    return mockArtists.filter((artist) => {
      // 1. Quick pill filter
      if (selectedPillCategory !== "همه هنرمندان") {
        if (artist.category !== selectedPillCategory) {
          return false;
        }
      }

      // 2. Checkbox categories
      const hasSpecificCategories =
        selectedCategories.length > 0 &&
        !selectedCategories.includes("همه دسته‌بندی‌ها");
      if (hasSpecificCategories && !selectedCategories.includes(artist.category)) {
        return false;
      }

      // 3. City filter
      if (selectedCities.length > 0 && !selectedCities.includes(artist.city)) {
        return false;
      }

      // 4. Rating filter
      if (selectedRating !== null && artist.rating < selectedRating) {
        return false;
      }

      // 5. Activity Type
      if (activityType !== "همه موارد" && artist.activityType !== activityType) {
        return false;
      }

      return true;
    });
  }, [
    selectedPillCategory,
    selectedCategories,
    selectedCities,
    selectedRating,
    activityType,
  ]);

  // Active filter badge count for mobile
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (!selectedCategories.includes("همه دسته‌بندی‌ها") && selectedCategories.length > 0)
      count += selectedCategories.length;
    if (selectedCities.length > 0) count += selectedCities.length;
    if (selectedRating !== null) count += 1;
    if (activityType !== "همه موارد") count += 1;
    return count;
  }, [selectedCategories, selectedCities, selectedRating, activityType]);

  return (
    <div className="pb-12">
      {/* 1. Header Banner */}
      <ArtistsBanner />

      {/* 2. Top Category Pills & Mobile Filter Button */}
      <CategoryPillsBar
        selectedCategory={selectedPillCategory}
        onSelectCategory={(category) => {
          setSelectedPillCategory(category);
          setCurrentPage(1);
        }}
        onOpenMobileFilters={() => setIsMobileDrawerOpen(true)}
        activeFilterCount={activeFilterCount}
      />

      {/* 3. Main Content: Grid + Sidebar */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Right Sidebar (Desktop, in RTL this is on the right) */}
        <div className="hidden shrink-0 lg:block lg:w-64 xl:w-72">
          <ArtistFilterSidebar
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
            selectedCities={selectedCities}
            onToggleCity={handleToggleCity}
            selectedRating={selectedRating}
            onSelectRating={setSelectedRating}
            activityType={activityType}
            onChangeActivityType={setActivityType}
            onApplyFilters={() => setCurrentPage(1)}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Left Side: Artists Listing Grid + Pagination */}
        <div className="flex-1">
          {filteredArtists.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredArtists.map((artist) => (
                  <ArtistsListingCard key={artist.id} artist={artist} />
                ))}
              </div>

              {/* Pagination */}
              <ArtistPagination
                currentPage={currentPage}
                totalPages={4}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/50 py-16 text-center">
              <p className="text-sm font-bold text-muted-foreground">
                هنرمندی با فیلترهای انتخاب‌شده یافت نشد.
              </p>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleResetFilters}
                className="mt-4 gap-1.5 text-xs font-bold"
              >
                <RotateCcw className="size-3.5" />
                <span>حذف فیلترها و مشاهده همه</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <ArtistFilterDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
        selectedCities={selectedCities}
        onToggleCity={handleToggleCity}
        selectedRating={selectedRating}
        onSelectRating={setSelectedRating}
        activityType={activityType}
        onChangeActivityType={setActivityType}
        onApplyFilters={() => setCurrentPage(1)}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
};
