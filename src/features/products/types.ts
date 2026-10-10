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

export interface ProductVariant {
  id: string;
  name: string;
  image: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  isBuyer: boolean;
  comment: string;
  avatar?: string;
}

export interface RatingBreakdown {
  fiveStarPercent: number;
  fourStarPercent: number;
  threeStarPercent: number;
  twoStarPercent: number;
  oneStarPercent: number;
}

export interface ProductDetailItem extends ProductItem {
  discountPercent?: number;
  galleryImages: string[];
  shortDescription: string;
  aboutParagraphs: string[];
  variants: ProductVariant[];
  specifications: ProductSpecification[];
  ratingBreakdown: RatingBreakdown;
  featuredReviews: ProductReviewItem[];
}
