import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  getArtistById,
  mockArtists,
} from "@/features/artists/data/artists-data";
import { ArtistProfileView } from "@/features/artists/components/detail/ArtistProfileView";

interface ArtistPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return mockArtists.map((a) => ({
    id: a.id,
  }));
}

export async function generateMetadata({
  params,
}: ArtistPageProps): Promise<Metadata> {
  const { id } = await params;
  const artist = getArtistById(id);

  if (!artist) {
    return {
      title: "هنرمند یافت نشد | آرتلیا",
    };
  }

  return {
    title: `${artist.name} | آرتلیا`,
    description: artist.bio || `${artist.name} - ${artist.specialty}`,
  };
}

async function ArtistContent({ params }: ArtistPageProps) {
  const { id } = await params;
  const artist = getArtistById(id);

  if (!artist) {
    notFound();
  }

  return <ArtistProfileView artist={artist} />;
}

const ArtistPageSkeleton = () => (
  <div className="animate-pulse space-y-8 py-8">
    <div className="h-48 rounded-2xl bg-muted" />
    <div className="h-6 w-1/3 rounded bg-muted" />
    <div className="h-24 w-full rounded bg-muted" />
  </div>
);

export default function ArtistDetailPage({ params }: ArtistPageProps) {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-6 md:px-8">
      <SiteHeader activeHref="/artists" />
      <main>
        <Suspense fallback={<ArtistPageSkeleton />}>
          <ArtistContent params={params} />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
