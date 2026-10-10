"use client";

import { useMemo, useState } from "react";
import {
  ITEMS_PER_PAGE,
  mockProducts,
} from "../data/products-data";
import {
  ALL_PRODUCTS,
  countActiveProductFilters,
  defaultProductFilters,
  filterProducts,
  toggleProductCategory,
} from "../lib/product-filters";
import type { ProductFilters, ProductItem } from "../types";

export const useProductFilters = () => {
  const [filters, setFilters] = useState<ProductFilters>(defaultProductFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  const filteredProducts = useMemo(
    () => filterProducts(mockProducts, filters),
    [filters],
  );

  const totalPages = Math.max(5, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const activeFilterCount = useMemo(
    () => countActiveProductFilters(filters),
    [filters],
  );

  const update = (patch: Partial<ProductFilters>) =>
    setFilters((prev) => ({ ...prev, ...patch }));

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleCart = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return {
    filters,
    filteredProducts,
    paginatedProducts,
    activeFilterCount,
    currentPage,
    totalPages,
    setCurrentPage,
    wishlist,
    toggleWishlist,
    cart,
    toggleCart,
    selectPillCategory: (category: string) => {
      update({
        category,
        categories: category === ALL_PRODUCTS ? [ALL_PRODUCTS] : [category],
      });
      setCurrentPage(1);
    },
    toggleCategory: (category: string) => {
      setFilters((prev) => {
        const nextCategories = toggleProductCategory(prev.categories, category);
        return {
          ...prev,
          categories: nextCategories,
          category:
            nextCategories.length === 1 && nextCategories[0] !== ALL_PRODUCTS
              ? nextCategories[0]
              : ALL_PRODUCTS,
        };
      });
    },
    changePriceRange: (minPrice: number, maxPrice: number) => {
      update({ minPrice, maxPrice });
    },
    selectRating: (rating: number | null) => update({ rating }),
    toggleInStock: (inStock: boolean) => update({ inStock }),
    toggleOutOfStock: (outOfStock: boolean) => update({ outOfStock }),
    changeProductType: (productType: string) => update({ productType }),
    applyFilters: () => {
      setCurrentPage(1);
    },
    resetFilters: () => {
      setFilters(defaultProductFilters);
      setCurrentPage(1);
    },
  };
};
