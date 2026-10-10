"use client";

import { useEffect, useState } from "react";
import { ProductsBanner } from "./ProductsBanner";
import { ProductCategoryPills } from "./ProductCategoryPills";
import { ProductFilterSidebar } from "./ProductFilterSidebar";
import { ProductFilterDrawer } from "./ProductFilterDrawer";
import { ProductsResults } from "./ProductsResults";
import { useProductFilters } from "../hooks/useProductFilters";

export const ProductsView = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    // Ensure document body is free to scroll
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const {
    filters,
    paginatedProducts,
    activeFilterCount,
    currentPage,
    totalPages,
    setCurrentPage,
    wishlist,
    toggleWishlist,
    cart,
    toggleCart,
    selectPillCategory,
    toggleCategory,
    changePriceRange,
    selectRating,
    toggleInStock,
    toggleOutOfStock,
    changeProductType,
    applyFilters,
    resetFilters,
  } = useProductFilters();

  const filterPanelProps = {
    selectedCategories: filters.categories,
    onToggleCategory: toggleCategory,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    onChangePriceRange: changePriceRange,
    selectedRating: filters.rating,
    onSelectRating: selectRating,
    inStock: filters.inStock,
    onToggleInStock: toggleInStock,
    outOfStock: filters.outOfStock,
    onToggleOutOfStock: toggleOutOfStock,
    productType: filters.productType,
    onChangeProductType: changeProductType,
    onApplyFilters: applyFilters,
    onResetFilters: resetFilters,
  };

  return (
    <div className="pb-12">
      {/* Hero Banner */}
      <ProductsBanner />

      {/* Category Pills Bar */}
      <ProductCategoryPills
        selectedCategory={filters.category}
        onSelectCategory={selectPillCategory}
        onOpenMobileFilters={() => setIsMobileDrawerOpen(true)}
        activeFilterCount={activeFilterCount}
      />

      {/* Main Layout: Filters Sidebar + Results Grid */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Right Sidebar (Desktop, in RTL on the right) */}
        <div className="hidden shrink-0 lg:block lg:w-64 xl:w-72">
          <ProductFilterSidebar {...filterPanelProps} />
        </div>

        {/* Product Cards Grid & Pagination */}
        <div className="min-w-0 flex-1">
          <ProductsResults
            products={paginatedProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            wishlist={wishlist}
            cart={cart}
            onToggleFavorite={toggleWishlist}
            onToggleCart={toggleCart}
            onPageChange={setCurrentPage}
            onResetFilters={resetFilters}
          />
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <ProductFilterDrawer
        {...filterPanelProps}
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />
    </div>
  );
};
