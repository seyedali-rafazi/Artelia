import { Suspense } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CategoryGrid } from "@/features/home/components/CategoryGrid";
import { FeaturedArtists } from "@/features/home/components/FeaturedArtists";
import { HeroSection } from "@/features/home/components/HeroSection";
import { JoinBanner } from "@/features/home/components/JoinBanner";
import { LatestArtworks } from "@/features/home/components/LatestArtworks";
import { NewsletterSection } from "@/features/home/components/NewsletterSection";

const Home = () => {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-6 md:px-8">
      <SiteHeader />
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <CategoryGrid />
      <FeaturedArtists />
      <JoinBanner />
      <LatestArtworks />
      <NewsletterSection />
      <SiteFooter />
    </div>
  );
};

export default Home;
