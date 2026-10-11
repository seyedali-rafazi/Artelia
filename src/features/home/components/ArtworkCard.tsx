import { ProductCard } from "@/features/products/components/ProductCard";
import type { ProductItem } from "@/features/products/types";
import type { Artwork } from "../types";

export interface ArtworkCardProps {
  artwork?: Artwork;
  product?: ProductItem;
  className?: string;
  layout?: "auto" | "vertical";
}

export const ArtworkCard = ({
  artwork,
  product,
  className,
  layout = "vertical",
}: ArtworkCardProps) => {
  const resolvedProduct: ProductItem = product ?? {
    id: artwork?.title ? `art-${artwork.title}` : "art-1",
    title: artwork?.title || "اثر هنری",
    artist: artwork?.artist || "هنرمند آرتلیا",
    category: "نقاشی",
    price: 2800000,
    rating: 4.8,
    reviewCount: 19,
    image: artwork?.coverImage || "/products/painting-abstract.jpg",
    inStock: true,
    productType: "دست‌ساز",
  };

  return (
    <ProductCard
      product={resolvedProduct}
      layout={layout}
      className={className}
    />
  );
};
