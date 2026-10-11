import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart, Star } from "lucide-react";
import type { ArtistItem } from "../types";
import { cn } from "@/lib/utils";

const toPersianDigits = (value: number | string): string => {
  return value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};

interface ArtistsListingCardProps {
  artist: ArtistItem;
  className?: string;
  layout?: "auto" | "vertical";
}

export const ArtistsListingCard = ({
  artist,
  className,
  layout = "auto",
}: ArtistsListingCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isVertical = layout === "vertical";

  return (
    <article
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-3 shadow-xs transition-all hover:border-primary/40 hover:shadow-md",
        className,
      )}
    >
      {/* Top Section */}
      <div
        className={cn(
          "flex",
          isVertical
            ? "flex-col items-stretch"
            : "items-start justify-between gap-3 md:flex-col md:items-stretch md:gap-0",
        )}
      >
        {/* Mobile: Text Info (on Right in RTL) - only if not strictly vertical */}
        {!isVertical && (
          <div className="flex flex-1 flex-col justify-center text-right md:hidden">
            <h3 className="text-base font-black text-foreground">
              <Link href={`/artists/${artist.id}`} className="hover:text-primary transition-colors">
                {artist.name}
              </Link>
            </h3>
            <p className="mt-1 text-xs font-semibold text-muted-foreground line-clamp-1">
              {artist.specialty}
            </p>

            <div className="mt-2.5 flex items-center gap-1.5 text-xs font-bold text-foreground/90">
              <span className="text-muted-foreground/70">(</span>
              <span>{toPersianDigits(artist.rating)}</span>
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              <span className="text-muted-foreground/70">)</span>
            </div>
          </div>
        )}

        {/* Artist Image Container */}
        <div
          className={cn(
            "relative overflow-hidden rounded-xl border border-border/40 bg-muted/40",
            isVertical
              ? "h-44 w-full"
              : "order-first h-24 w-28 shrink-0 md:order-0 md:h-44 md:w-full",
          )}
        >
          <Link href={`/artists/${artist.id}`} className="block size-full">
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              sizes="(max-width: 768px) 280px, (max-width: 1200px) 25vw, 280px"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Favorite / Heart Button (Top-Left of Image) */}
          <button
            type="button"
            aria-label={isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite((prev) => !prev);
            }}
            className={cn(
              "absolute top-2 left-2 z-10 grid size-7 place-items-center rounded-full border border-border/30 bg-card/90 shadow-2xs backdrop-blur-xs transition-transform hover:scale-110 active:scale-95 md:size-7.5",
              isFavorite
                ? "text-primary fill-primary"
                : "text-muted-foreground hover:text-primary",
            )}
          >
            <Heart
              className={cn(
                "size-3.5 md:size-4 transition-colors",
                isFavorite && "fill-primary text-primary",
              )}
            />
          </button>

          {/* Online Indicator Badge (Bottom-Right of Image) */}
          {artist.isOnline && (
            <span
              title="آنلاین"
              className="absolute right-2 bottom-2 z-10 size-2.5 rounded-full border-2 border-card bg-emerald-500 shadow-2xs md:size-3"
            />
          )}
        </div>

        {/* Desktop / Vertical: Text Info below image */}
        <div
          className={cn(
            "pt-3 text-center",
            !isVertical && "hidden md:block",
          )}
        >
          <h3 className="text-base font-extrabold text-foreground">
            <Link href={`/artists/${artist.id}`} className="hover:text-primary transition-colors">
              {artist.name}
            </Link>
          </h3>
          <p className="mt-1 text-xs font-semibold text-muted-foreground line-clamp-1">
            {artist.specialty}
          </p>

          <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-bold text-foreground/90">
            <span className="text-muted-foreground/70">(</span>
            <span>{toPersianDigits(artist.rating)}</span>
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            <span className="text-muted-foreground/70">)</span>
          </div>
        </div>
      </div>

      {/* Button: "مشاهده صفحه" with link icon */}
      <Link
        href={`/artists/${artist.id}`}
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border/50 bg-[#F2ECE4] py-2 text-xs font-bold text-foreground/90 transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground dark:bg-muted dark:hover:bg-primary"
      >
        <span>مشاهده صفحه</span>
        <ExternalLink className="size-3.5 stroke-[2.2]" />
      </Link>
    </article>
  );
};
