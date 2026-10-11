"use client";

import { useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard, Navigation } from "swiper/modules";

import "swiper/css";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArtistsListingCard } from "@/features/artists/components/ArtistsListingCard";
import { mockArtists } from "@/features/artists/data/artists-data";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export const FeaturedArtists = () => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (s: SwiperInstance) => {
    setSwiper(s);
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  const handleSlideChange = (s: SwiperInstance) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  const navigationControls = (
    <div className="flex items-center gap-1.5" aria-label="کنترل‌های اسلایدر هنرمندان">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => swiper?.slidePrev()}
        disabled={isBeginning}
        aria-label="هنرمند قبلی"
        className="size-7.5 rounded-full border-border/70 bg-card text-foreground/80 shadow-2xs transition-all hover:border-primary hover:bg-primary/10 hover:text-primary disabled:opacity-35 disabled:pointer-events-none"
      >
        <ChevronRight className="size-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => swiper?.slideNext()}
        disabled={isEnd}
        aria-label="هنرمند بعدی"
        className="size-7.5 rounded-full border-border/70 bg-card text-foreground/80 shadow-2xs transition-all hover:border-primary hover:bg-primary/10 hover:text-primary disabled:opacity-35 disabled:pointer-events-none"
      >
        <ChevronLeft className="size-4" />
      </Button>
    </div>
  );

  return (
    <section className="group/carousel relative mt-8" aria-label="هنرمندان منتخب">
      <SectionHeader
        title="هنرمندان منتخب"
        href="/artists"
        actions={navigationControls}
      />

      {!isMounted ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {mockArtists.slice(0, 5).map((artist) => (
            <ArtistsListingCard
              key={artist.id}
              artist={artist}
              layout="vertical"
              className="h-full"
            />
          ))}
        </div>
      ) : (
        <div className="relative">
          <Swiper
            modules={[Navigation, Keyboard, A11y]}
            dir="rtl"
            grabCursor
            keyboard={{ enabled: true }}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 1.8,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.4,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="!pb-2 !pt-1"
          >
            {mockArtists.map((artist) => (
              <SwiperSlide key={artist.id} className="!h-auto pb-1">
                <ArtistsListingCard
                  artist={artist}
                  layout="vertical"
                  className="h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Side Floating Buttons (desktop hover enhancement) */}
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => swiper?.slidePrev()}
            disabled={isBeginning}
            aria-label="قبلی"
            className={cn(
              "absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 size-9 rounded-full border-border/70 bg-card/95 text-foreground/80 shadow-md backdrop-blur-xs transition-all hover:scale-110 hover:border-primary hover:bg-card hover:text-primary xl:flex",
              isBeginning && "pointer-events-none opacity-0",
            )}
          >
            <ChevronRight className="size-4.5" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => swiper?.slideNext()}
            disabled={isEnd}
            aria-label="بعدی"
            className={cn(
              "absolute -left-4 top-1/2 z-20 hidden -translate-y-1/2 size-9 rounded-full border-border/70 bg-card/95 text-foreground/80 shadow-md backdrop-blur-xs transition-all hover:scale-110 hover:border-primary hover:bg-card hover:text-primary xl:flex",
              isEnd && "pointer-events-none opacity-0",
            )}
          >
            <ChevronLeft className="size-4.5" />
          </Button>
        </div>
      )}
    </section>
  );
};
