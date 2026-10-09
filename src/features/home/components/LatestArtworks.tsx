import { SectionHeader } from "@/components/shared/SectionHeader";
import { latestArtworks } from "../data/home-content";
import { ArtworkCard } from "./ArtworkCard";

export const LatestArtworks = () => {
  return (
    <section className="mt-8">
      <SectionHeader title="جدیدترین آثار" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {latestArtworks.map((artwork) => (
          <ArtworkCard key={artwork.title} artwork={artwork} />
        ))}
      </div>
    </section>
  );
};
