"use client";

import Image from "next/image";
import type { ArtistHighlightItem } from "../../types";

interface ArtistHighlightsProps {
  highlights: ArtistHighlightItem[];
  onSelectHighlight?: (highlight: ArtistHighlightItem) => void;
}

export const ArtistHighlights = ({
  highlights,
  onSelectHighlight,
}: ArtistHighlightsProps) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section
      aria-label="استوری‌ها و هایلایت‌های هنرمند"
      className="my-6 flex items-center justify-center gap-4 overflow-x-auto py-2 sm:gap-8 md:my-8"
    >
      {highlights.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelectHighlight?.(item)}
          className="group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95 focus:outline-none"
        >
          {/* Circular Frame with double ring border */}
          <div className="relative size-16 rounded-full p-0.5 ring-2 ring-primary/40 transition-all duration-300 group-hover:ring-primary sm:size-20">
            <div className="relative size-full overflow-hidden rounded-full border-2 border-background bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Highlight Title */}
          <span className="text-center text-xs font-bold text-foreground/90 transition-colors group-hover:text-primary sm:text-sm">
            {item.title}
          </span>
        </button>
      ))}
    </section>
  );
};
