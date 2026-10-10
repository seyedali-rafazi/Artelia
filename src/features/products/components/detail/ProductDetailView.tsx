"use client";

import { useState } from "react";
import { ProductBreadcrumbs } from "./ProductBreadcrumbs";
import { ProductGallery } from "./ProductGallery";
import { ProductBuyBox } from "./ProductBuyBox";
import { ProductTabs } from "./ProductTabs";
import { ProductReviewsSection } from "./ProductReviewsSection";
import { ProductRelatedSlider } from "./ProductRelatedSlider";
import type { ProductDetailItem, ProductItem, ProductVariant } from "../../types";

interface ProductDetailViewProps {
  product: ProductDetailItem;
  relatedProducts: ProductItem[];
}

export const ProductDetailView = ({
  product,
  relatedProducts,
}: ProductDetailViewProps) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || {
      id: "default",
      name: "طرح پایه",
      image: product.image,
    },
  );
  const [activeImage, setActiveImage] = useState<string>(
    product.variants[0]?.image || product.image,
  );
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const [relatedWishlist, setRelatedWishlist] = useState<string[]>([]);
  const [relatedCart, setRelatedCart] = useState<string[]>([]);

  const handleSelectVariant = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    setActiveImage(variant.image);
  };

  const toggleRelatedFavorite = (id: string) => {
    setRelatedWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleRelatedCart = (id: string) => {
    setRelatedCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="pb-16">
      {/* Breadcrumbs */}
      <ProductBreadcrumbs category={product.category} title={product.title} />

      {/* Main Top Section: Gallery (Left) & Buy Box (Right in RTL) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start xl:gap-12">
        {/* Gallery Column (Desktop: left 5 or 6 cols, in RTL that's the 2nd visual block or left column) */}
        <div className="order-1 lg:order-1 lg:col-span-5 xl:col-span-5">
          <ProductGallery
            images={product.galleryImages}
            title={product.title}
            discountPercent={product.discountPercent}
            isFavorite={isFavorite}
            onToggleFavorite={() => setIsFavorite((prev) => !prev)}
            activeImage={activeImage}
            onSelectImage={setActiveImage}
          />
        </div>

        {/* Product Details & Purchase Box Column */}
        <div className="order-2 lg:order-2 lg:col-span-7 xl:col-span-7">
          <ProductBuyBox
            title={product.title}
            rating={product.rating}
            reviewCount={product.reviewCount}
            price={product.price}
            originalPrice={product.originalPrice}
            shortDescription={product.shortDescription}
            variants={product.variants}
            selectedVariantId={selectedVariant.id}
            onSelectVariant={handleSelectVariant}
            quantity={quantity}
            onIncreaseQuantity={() => setQuantity((prev) => prev + 1)}
            onDecreaseQuantity={() =>
              setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
            }
            isInCart={isInCart}
            onToggleCart={() => setIsInCart((prev) => !prev)}
            isFavorite={isFavorite}
            onToggleFavorite={() => setIsFavorite((prev) => !prev)}
          />
        </div>
      </div>

      {/* Product Details Tabs (Description / Technical Specs / Reviews) */}
      <ProductTabs
        aboutParagraphs={product.aboutParagraphs}
        specifications={product.specifications}
        reviewCount={product.reviewCount}
      />

      {/* Customer Reviews Section */}
      <ProductReviewsSection
        rating={product.rating}
        reviewCount={product.reviewCount}
        ratingBreakdown={product.ratingBreakdown}
        reviews={product.featuredReviews}
      />

      {/* Related Products Carousel */}
      {relatedProducts.length > 0 && (
        <ProductRelatedSlider
          products={relatedProducts}
          wishlist={relatedWishlist}
          cart={relatedCart}
          onToggleFavorite={toggleRelatedFavorite}
          onToggleCart={toggleRelatedCart}
        />
      )}
    </div>
  );
};
