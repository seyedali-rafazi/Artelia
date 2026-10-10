"use client";

import { useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { Button } from "@/components/ui/button";
import { heroSlides } from "../data/home-content";
import { HeroSlideContent } from "./HeroSlideContent";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export const HeroSection = () => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isMounted) {
    return (
      <section
        className="group relative isolate mt-2 overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm md:min-h-[440px]"
        aria-label="Ø¢Ø«Ø§Ø± Ø¨Ø±Ú¯Ø²ÛŒØ¯Ù‡ Ùˆ Ø§Ø³Ù„Ø§ÛŒØ¯Ø± Ø§ØµÙ„ÛŒ"
      >
        <HeroSlideContent slide={heroSlides[0]} isPriority />
      </section>
    );
  }

  return (
    <section
      className="group relative isolate mt-2 overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm md:min-h-[440px]"
      aria-label="Ø¢Ø«Ø§Ø± Ø¨Ø±Ú¯Ø²ÛŒØ¯Ù‡ Ùˆ Ø§Ø³Ù„Ø§ÛŒØ¯Ø± Ø§ØµÙ„ÛŒ"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Keyboard, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={heroSlides.length > 1}
        speed={700}
        dir="rtl"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{ enabled: true }}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="h-full w-full"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <HeroSlideContent
              slide={slide}
              isPriority={idx === 0}
              onInputFocus={() => swiper?.autoplay?.stop()}
              onInputBlur={() => swiper?.autoplay?.start()}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <Button
        variant="glass"
        size="icon"
        aria-label="Ø§Ø³Ù„Ø§ÛŒØ¯ Ù‚Ø¨Ù„ÛŒ"
        onClick={() => swiper?.slidePrev()}
        className="absolute top-1/2 right-4 z-20 hidden -translate-y-1/2 opacity-80 backdrop-blur transition-opacity duration-300 hover:opacity-100 md:inline-flex"
      >
        <ChevronRight className="size-4" />
      </Button>
      <Button
        variant="glass"
        size="icon"
        aria-label="Ø§Ø³Ù„Ø§ÛŒØ¯ Ø¨Ø¹Ø¯ÛŒ"
        onClick={() => swiper?.slideNext()}
        className="absolute top-1/2 left-4 z-20 hidden -translate-y-1/2 opacity-80 backdrop-blur transition-opacity duration-300 hover:opacity-100 md:inline-flex"
      >
        <ChevronLeft className="size-4" />
      </Button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((slide, i) => (
          <Button
            key={slide.id}
            variant="ghost"
            size="bare"
            aria-label={`Ø±ÙØªÙ† Ø¨Ù‡ Ø§Ø³Ù„Ø§ÛŒØ¯ ${i + 1}`}
            onClick={() => swiper?.slideToLoop(i)}
            className={cn(
              "h-1.5 rounded-full p-0 transition-all duration-300",
              activeIndex === i
                ? "w-6 bg-primary"
                : "w-1.5 bg-foreground/25 hover:bg-foreground/50",
            )}
          />
        ))}
      </div>
    </section>
  );
};

