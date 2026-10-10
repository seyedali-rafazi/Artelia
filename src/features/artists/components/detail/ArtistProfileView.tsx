"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { ArtistProfileHeader } from "./ArtistProfileHeader";
import { ArtistDetailTabs, type ArtistTabKey } from "./ArtistDetailTabs";
import { ArtistSidebar } from "./ArtistSidebar";
import { ArtistProductsGrid } from "./ArtistProductsGrid";
import { ArtistContactDialog } from "./ArtistContactDialog";
import type { ArtistDetailItem } from "../../types";

const toPersianDigits = (value: number | string): string => {
  return value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};

interface ArtistProfileViewProps {
  artist: ArtistDetailItem;
}

export const ArtistProfileView = ({ artist }: ArtistProfileViewProps) => {
  const [activeTab, setActiveTab] = useState<ArtistTabKey>("artworks");
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="py-4 md:py-6">
      {/* 1. Artist Banner & Profile Header */}
      <ArtistProfileHeader
        artist={artist}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Main 2-Column Content Grid matching the screenshot */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start mt-8">
        {/* Right Column in RTL: Sidebar (About, Info, Quote card) */}
        <div className="order-2 min-w-0 lg:order-1 lg:col-span-4 xl:col-span-3">
          <ArtistSidebar artist={artist} />
        </div>

        {/* Left Column in RTL: Tabs and Active Content */}
        <div className="order-1 min-w-0 lg:order-2 lg:col-span-8 xl:col-span-9">
          {/* Tabs bar */}
          <ArtistDetailTabs
            activeTab={activeTab}
            onTabChange={(tab) => setActiveTab(tab)}
          />

          {/* Tab 1: آثار هنری */}
          {activeTab === "artworks" && <ArtistProductsGrid artist={artist} />}

          {/* Tab 3: معرفی */}
          {activeTab === "about" && (
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs leading-relaxed">
              <h2 className="mb-4 text-base font-black text-foreground">
                درباره و زندگی‌نامه {artist.name}
              </h2>
              <p className="text-xs sm:text-sm text-foreground/80 leading-loose">
                {artist.bio}
              </p>
              <div className="mt-4 rounded-xl border border-border/40 bg-muted/40 p-4 text-xs text-foreground/85">
                <p>
                  فعالیت حرفه‌ای از سال ۱۳۹۵ در کارگاه شخصی واقع در تهران با
                  تمرکز بر خلق آثار دست‌ساز سرامیکی و نقاشی لعابی. تمام آثار با
                  بهره‌گیری از بهترین متریال و با فرم‌های الهام‌گرفته از
                  کهن‌الگوهای ایرانی تولید می‌شوند.
                </p>
              </div>
            </div>
          )}

          {/* Tab 4: نظرات */}
          {activeTab === "reviews" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-card p-5">
                <div>
                  <h2 className="text-sm font-black text-foreground">
                    نظرات خریداران
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    رضایت خریداران از کیفیت و بسته‌بندی آثار
                  </p>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl bg-amber-500/10 px-3 py-1 text-xs font-black text-amber-600">
                  <Star className="size-4 fill-amber-500 text-amber-500" />
                  <span>{toPersianDigits(artist.rating)} از ۵</span>
                </div>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-4 text-xs">
                <div className="flex items-center justify-between font-bold text-foreground">
                  <span>مریم علیزاده</span>
                  <span className="text-muted-foreground">۱۴۰۳/۰۷/۱۵</span>
                </div>
                <p className="mt-2 text-foreground/80 leading-relaxed">
                  بشقاب دکوراتیو به دستم رسید، بسته‌بندی عالی بود و ظرافت
                  نقاشی‌ها فوق‌العاده است. ممنون از سارا عزیز!
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-4 text-xs">
                <div className="flex items-center justify-between font-bold text-foreground">
                  <span>حسین مرادی</span>
                  <span className="text-muted-foreground">۱۴۰۳/۰۶/۲۸</span>
                </div>
                <p className="mt-2 text-foreground/80 leading-relaxed">
                  ماگ دست‌ساز رو هدیه خریدم، کیفیت لعاب و بافتش عالیه و دقیقاً
                  شبیه عکس‌ها بود.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Modal Dialog */}
      <ArtistContactDialog
        artistName={artist.name}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};
