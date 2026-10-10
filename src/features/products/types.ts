export interface ProductItem {
  id: string;
  title: string;
  artist: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  inStock: boolean;
  productType: string;
}

export interface ProductFilters {
  category: string;
  categories: string[];
  minPrice: number;
  maxPrice: number;
  rating: number | null;
  inStock: boolean;
  outOfStock: boolean;
  productType: string;
}

export interface ProductFilterPanelProps {
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  minPrice: number;
  maxPrice: number;
  onChangePriceRange: (min: number, max: number) => void;
  selectedRating: number | null;
  onSelectRating: (rating: number | null) => void;
  inStock: boolean;
  onToggleInStock: (checked: boolean) => void;
  outOfStock: boolean;
  onToggleOutOfStock: (checked: boolean) => void;
  productType: string;
  onChangeProductType: (type: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}
