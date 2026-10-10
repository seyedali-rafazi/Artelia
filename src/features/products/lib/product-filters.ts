import {
  DEFAULT_PRICE_MAX,
  DEFAULT_PRICE_MIN,
} from "../data/products-data";
import type { ProductFilters, ProductItem } from "../types";

export const ALL_PRODUCTS = "همه محصولات";
export const ALL_TYPES = "همه موارد";

export const defaultProductFilters: ProductFilters = {
  category: ALL_PRODUCTS,
  categories: [ALL_PRODUCTS],
  minPrice: DEFAULT_PRICE_MIN,
  maxPrice: DEFAULT_PRICE_MAX,
  rating: null,
  inStock: true,
  outOfStock: false,
  productType: ALL_TYPES,
};

export const toPersianDigits = (value: number | string): string => {
  return value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};

export const formatPrice = (price: number): string => {
  return toPersianDigits(price.toLocaleString("en-US"));
};

export const isProductCategoryChecked = (
  selected: string[],
  category: string,
): boolean => {
  if (category === ALL_PRODUCTS) {
    return selected.length === 0 || selected.includes(ALL_PRODUCTS);
  }
  return selected.includes(category);
};

export const toggleProductCategory = (
  selected: string[],
  category: string,
): string[] => {
  if (category === ALL_PRODUCTS) return [ALL_PRODUCTS];

  const withoutAll = selected.filter((c) => c !== ALL_PRODUCTS);
  if (withoutAll.includes(category)) {
    const next = withoutAll.filter((c) => c !== category);
    return next.length === 0 ? [ALL_PRODUCTS] : next;
  }
  return [...withoutAll, category];
};

export const filterProducts = (
  products: ProductItem[],
  filters: ProductFilters,
): ProductItem[] => {
  return products.filter((product) => {
    // Top quick category pills filter
    if (filters.category !== ALL_PRODUCTS && product.category !== filters.category) {
      return false;
    }

    // Sidebar category checkboxes
    const hasSpecificCategories =
      filters.categories.length > 0 && !filters.categories.includes(ALL_PRODUCTS);
    if (hasSpecificCategories && !filters.categories.includes(product.category)) {
      return false;
    }

    // Price range filter
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }

    // Rating filter
    if (filters.rating !== null && product.rating < filters.rating) {
      return false;
    }

    // Stock availability filter
    if (filters.inStock && !filters.outOfStock && !product.inStock) {
      return false;
    }
    if (filters.outOfStock && !filters.inStock && product.inStock) {
      return false;
    }
    if (!filters.inStock && !filters.outOfStock) {
      // If neither is checked, do not exclude anything or exclude all? Standard: treat as all
    }

    // Product type
    if (
      filters.productType !== ALL_TYPES &&
      product.productType !== filters.productType
    ) {
      return false;
    }

    return true;
  });
};

export const countActiveProductFilters = (filters: ProductFilters): number => {
  let count = 0;
  if (filters.category !== ALL_PRODUCTS) count += 1;
  if (!filters.categories.includes(ALL_PRODUCTS) && filters.categories.length > 0) {
    count += filters.categories.length;
  }
  if (
    filters.minPrice > DEFAULT_PRICE_MIN ||
    filters.maxPrice < DEFAULT_PRICE_MAX
  ) {
    count += 1;
  }
  if (filters.rating !== null) count += 1;
  if (!filters.inStock || filters.outOfStock) count += 1;
  if (filters.productType !== ALL_TYPES) count += 1;
  return count;
};
