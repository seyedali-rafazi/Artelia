import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ArtistsView } from "@/features/artists/components/ArtistsView";

export const metadata: Metadata = {
  title: "هنرمندان | آرتلیا",
  description: "با هنرمندان خلاق و آثار منحصربه‌فرد آن‌ها آشنا شوید",
};

const ArtistsPage = () => {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-6 md:px-8">
      <SiteHeader activeHref="/artists" />
      <main>
        <ArtistsView />
      </main>
      <SiteFooter />
    </div>
  );
};

export default ArtistsPage;
