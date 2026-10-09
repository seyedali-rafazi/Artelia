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
