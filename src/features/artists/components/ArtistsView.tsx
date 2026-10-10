"use client";

import { useState } from "react";
import { ArtistsBanner } from "./ArtistsBanner";
import { CategoryPillsBar } from "./CategoryPillsBar";
import { ArtistFilterSidebar } from "./ArtistFilterSidebar";
import { ArtistFilterDrawer } from "./ArtistFilterDrawer";
import { ArtistsResults } from "./ArtistsResults";
import { useArtistFilters } from "../hooks/useArtistFilters";

export const ArtistsView = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const {
    filters,
    filteredArtists,
    activeFilterCount,
    currentPage,
    setCurrentPage,
    selectPillCategory,
    toggleCategory,
    toggleCity,
    selectRating,
    changeActivityType,
    applyFilters,
    resetFilters,
  } = useArtistFilters();

  const filterPanelProps = {
    selectedCategories: filters.categories,
    onToggleCategory: toggleCategory,
    selectedCities: filters.cities,
    onToggleCity: toggleCity,
    selectedRating: filters.rating,
    onSelectRating: selectRating,
    activityType: filters.activityType,
    onChangeActivityType: changeActivityType,
    onApplyFilters: applyFilters,
    onResetFilters: resetFilters,
  };

  return (
    <div className="pb-12">
      <ArtistsBanner />

      <CategoryPillsBar
        selectedCategory={filters.category}
        onSelectCategory={selectPillCategory}
        onOpenMobileFilters={() => setIsMobileDrawerOpen(true)}
        activeFilterCount={activeFilterCount}
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Right Sidebar (Desktop, in RTL this is on the right) */}
        <div className="hidden shrink-0 lg:block lg:w-64 xl:w-72">
          <ArtistFilterSidebar {...filterPanelProps} />
        </div>

        <div className="flex-1">
          <ArtistsResults
            artists={filteredArtists}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onResetFilters={resetFilters}
          />
        </div>
      </div>

      <ArtistFilterDrawer
        {...filterPanelProps}
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />
    </div>
  );
};
