import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArtistPagination } from "./ArtistPagination";
import { ArtistsListingCard } from "./ArtistsListingCard";
import type { ArtistItem } from "../types";

interface ArtistsResultsProps {
  artists: ArtistItem[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onResetFilters: () => void;
}

export const ArtistsResults = ({
  artists,
  currentPage,
  onPageChange,
  onResetFilters,
}: ArtistsResultsProps) => {
  if (artists.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/50 py-16 text-center">
        <p className="text-sm font-bold text-muted-foreground">
          هنرمندی با فیلترهای انتخاب‌شده یافت نشد.
        </p>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={onResetFilters}
          className="mt-4 gap-1.5 text-xs font-bold"
        >
          <RotateCcw className="size-3.5" />
          <span>حذف فیلترها و مشاهده همه</span>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artists.map((artist) => (
          <ArtistsListingCard key={artist.id} artist={artist} />
        ))}
      </div>

      <ArtistPagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={onPageChange}
      />
    </>
  );
};
