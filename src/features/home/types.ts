import type { LucideIcon } from "lucide-react";

export type Category = {
  label: string;
  icon: LucideIcon;
};

export type Artist = {
  name: string;
  productCount: string;
  /** Tailwind gradient classes used as the cover until real images exist. */
  coverGradient: string;
};

export type Artwork = {
  title: string;
  artist: string;
  price: string;
  coverGradient: string;
  /** Optional real cover image from /public. */
  coverImage?: string;
};

export type HeroSlide = {
  id: string;
  image: string;
  responsiveImage?: string;
  alt: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
};

