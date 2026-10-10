export interface ArtistItem {
  id: string;
  name: string;
  specialty: string;
  category: string;
  city: string;
  rating: number;
  reviewCount: number;
  image: string;
  isOnline: boolean;
  activityType: string;
}

export interface ArtistFilters {
  category: string;
  categories: string[];
  cities: string[];
  rating: number | null;
  activityType: string;
}

/** Props shared by the desktop sidebar and mobile drawer filter panels. */
export interface ArtistFilterPanelProps {
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  selectedCities: string[];
  onToggleCity: (city: string) => void;
  selectedRating: number | null;
  onSelectRating: (rating: number | null) => void;
  activityType: string;
  onChangeActivityType: (type: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

export interface ArtistHighlightItem {
  id: string;
  title: string;
  image: string;
}

export interface ArtistProductItem {
  id: string;
  title: string;
  price: number;
  image: string;
  inStock: boolean;
  productId?: string;
}

export interface ArtistDetailItem extends ArtistItem {
  bannerImage: string;
  location: string;
  bio: string;
  isVerified: boolean;
  stats: {
    worksCount: number;
    followersCount: string;
    followingCount: number;
  };
  highlights: ArtistHighlightItem[];
  aboutFeatures: Array<{
    id: string;
    text: string;
    icon: "verified" | "shipping" | "customOrder";
  }>;
  artistInfo: Array<{
    id: string;
    label: string;
    value: string;
    icon: "style" | "calendar" | "location";
  }>;
  quote: string;
  quoteBgImage?: string;
  products: ArtistProductItem[];
}

