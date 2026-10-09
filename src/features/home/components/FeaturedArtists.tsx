import { SectionHeader } from "@/components/shared/SectionHeader";
import { featuredArtists } from "../data/home-content";
import { ArtistCard } from "./ArtistCard";

export const FeaturedArtists = () => {
  return (
    <section className="mt-8">
      <SectionHeader title="هنرمندان منتخب" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {featuredArtists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </section>
  );
};
