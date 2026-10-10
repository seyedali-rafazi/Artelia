"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { ArtistHighlightItem } from "../../types";

interface ArtistStoryDialogProps {
  highlight: ArtistHighlightItem | null;
  onClose: () => void;
}

export const ArtistStoryDialog = ({
  highlight,
  onClose,
}: ArtistStoryDialogProps) => {
  if (!highlight) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={highlight.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-md overflow-hidden rounded-2xl bg-card border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
          <h3 className="text-sm font-black text-foreground">{highlight.title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن"
            className="grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Highlight Image */}
        <div className="relative aspect-square w-full bg-black/10">
          <Image
            src={highlight.image}
            alt={highlight.title}
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover object-center"
          />
        </div>

        {/* Footer */}
        <div className="p-4 text-center">
          <p className="text-xs text-muted-foreground">
            گوشه‌ای از فعالیت‌ها و لحظات هنری در کارگاه
          </p>
        </div>
      </div>
    </div>
  );
};
