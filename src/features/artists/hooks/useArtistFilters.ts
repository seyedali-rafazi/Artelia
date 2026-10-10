"use client";

import { useMemo, useState } from "react";
import { mockArtists } from "../data/artists-data";
import {
  ALL_ACTIVITY_TYPES,
  ALL_ARTISTS,
  ALL_CATEGORIES,
  countActiveFilters,
  defaultArtistFilters,
  filterArtists,
  toggleCategory,
  toggleCity,
} from "../lib/artist-filters";
import type { ArtistFilters } from "../types";

export const useArtistFilters = () => {
  const [filters, setFilters] = useState<ArtistFilters>(defaultArtistFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArtists = useMemo(
    () => filterArtists(mockArtists, filters),
    [filters],
  );
  const activeFilterCount = useMemo(() => countActiveFilters(filters), [filters]);

  const update = (patch: Partial<ArtistFilters>) =>
    setFilters((prev) => ({ ...prev, ...patch }));

  return {
    filters,
    filteredArtists,
    activeFilterCount,
    currentPage,
    setCurrentPage,
    selectPillCategory: (category: string) => {
      update({ category });
      setCurrentPage(1);
    },
    toggleCategory: (category: string) =>
      setFilters((prev) => ({
        ...prev,
        categories: toggleCategory(prev.categories, category),
      })),
    toggleCity: (city: string) =>
      setFilters((prev) => ({ ...prev, cities: toggleCity(prev.cities, city) })),
    selectRating: (rating: number | null) => update({ rating }),
    changeActivityType: (activityType: string) => update({ activityType }),
    applyFilters: () => setCurrentPage(1),
    resetFilters: () => {
      setFilters({
        category: ALL_ARTISTS,
        categories: [ALL_CATEGORIES],
        cities: [],
        rating: null,
        activityType: ALL_ACTIVITY_TYPES,
      });
      setCurrentPage(1);
    },
  };
};
