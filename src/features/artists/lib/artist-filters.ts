import type { ArtistFilters, ArtistItem } from "../types";

export const ALL_ARTISTS = "همه هنرمندان";
export const ALL_CATEGORIES = "همه دسته‌بندی‌ها";
export const ALL_ACTIVITY_TYPES = "همه موارد";

export const defaultArtistFilters: ArtistFilters = {
  category: ALL_ARTISTS,
  categories: [ALL_CATEGORIES],
  cities: ["تهران"],
  rating: null,
  activityType: ALL_ACTIVITY_TYPES,
};

/** Whether a category checkbox should render as checked. */
export const isCategoryChecked = (selected: string[], category: string) =>
  category === ALL_CATEGORIES
    ? selected.length === 0 || selected.includes(ALL_CATEGORIES)
    : selected.includes(category);

export const toggleCategory = (selected: string[], category: string) => {
  if (category === ALL_CATEGORIES) return [ALL_CATEGORIES];

  const withoutAll = selected.filter((c) => c !== ALL_CATEGORIES);
  if (withoutAll.includes(category)) {
    const next = withoutAll.filter((c) => c !== category);
    return next.length === 0 ? [ALL_CATEGORIES] : next;
  }
  return [...withoutAll, category];
};

export const toggleCity = (selected: string[], city: string) =>
  selected.includes(city)
    ? selected.filter((c) => c !== city)
    : [...selected, city];

export const filterArtists = (artists: ArtistItem[], filters: ArtistFilters) =>
  artists.filter((artist) => {
    if (filters.category !== ALL_ARTISTS && artist.category !== filters.category) {
      return false;
    }

    const hasSpecificCategories =
      filters.categories.length > 0 && !filters.categories.includes(ALL_CATEGORIES);
    if (hasSpecificCategories && !filters.categories.includes(artist.category)) {
      return false;
    }

    if (filters.cities.length > 0 && !filters.cities.includes(artist.city)) {
      return false;
    }

    if (filters.rating !== null && artist.rating < filters.rating) {
      return false;
    }

    if (
      filters.activityType !== ALL_ACTIVITY_TYPES &&
      artist.activityType !== filters.activityType
    ) {
      return false;
    }

    return true;
  });

export const countActiveFilters = (filters: ArtistFilters) => {
  let count = 0;
  if (
    !filters.categories.includes(ALL_CATEGORIES) &&
    filters.categories.length > 0
  ) {
    count += filters.categories.length;
  }
  count += filters.cities.length;
  if (filters.rating !== null) count += 1;
  if (filters.activityType !== ALL_ACTIVITY_TYPES) count += 1;
  return count;
};
