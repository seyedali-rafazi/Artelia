"use client";

import { cn } from "@/lib/utils";

export type ArtistTabKey = "artworks" | "about" | "reviews";

interface ArtistDetailTabsProps {
  activeTab: ArtistTabKey;
  onTabChange: (tab: ArtistTabKey) => void;
}

const TABS: Array<{ key: ArtistTabKey; label: string }> = [
  { key: "artworks", label: "آثار هنری" },
  { key: "about", label: "معرفی" },
  { key: "reviews", label: "نظرات" },
];

export const ArtistDetailTabs = ({
  activeTab,
  onTabChange,
}: ArtistDetailTabsProps) => {
  return (
    <nav
      aria-label="بخش‌های صفحه هنرمند"
      className="mb-8 flex w-full items-center gap-1.5 rounded-2xl border border-border/50 bg-card/60 p-1.5 backdrop-blur-xs sm:gap-2"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onTabChange(tab.key)}
            className={cn(
              "flex-1 whitespace-nowrap rounded-xl px-3 py-2 text-center text-xs font-black transition-all sm:py-2.5 sm:text-sm",
              isActive
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-foreground/75 hover:bg-muted/60 hover:text-foreground",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};
