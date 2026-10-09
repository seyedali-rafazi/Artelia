"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PenTool, Search } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { Lalezar } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { heroChips, heroSlides } from "../data/home-content";
import type { HeroSlide } from "../types";
import { cn } from "@/lib/utils";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

interface SlideContentProps {
  slide: HeroSlide;
  isPriority?: boolean;
  onInputFocus?: () => void;
  onInputBlur?: () => void;
}

const SlideContent = ({
  slide,
  isPriority,
  onInputFocus,
  onInputBlur,
}: SlideContentProps) => {
  return (
    <>
      {/* Mobile Layout (< md) */}
      <div className="flex flex-col md:hidden">
        {/* Top Image with soft gradient bottom fade */}
        <div className="relative h-56 w-full overflow-hidden xs:h-64 sm:h-72">
          <Image
            src={slide.responsiveImage || slide.image}
            alt={slide.alt}
            fill
            priority={isPriority}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>

        {/* Content below image */}
        <div className="space-y-3 px-4 pt-1 pb-9 xs:px-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1
                className={cn(
                  "text-2xl leading-tight text-foreground xs:text-3xl",
                  lalezar.className,
                )}
              >
                {slide.title}
                <span className="mt-0.5 block text-primary">{slide.highlight}</span>
              </h1>
            </div>
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary shadow-2xs">
              <PenTool className="size-5 -rotate-45" />
            </div>
          </div>

          <p className="text-xs leading-5 text-foreground/80">
            {slide.description}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center rounded-full border border-border/80 bg-background p-1 shadow-2xs transition-shadow focus-within:ring-2 focus-within:ring-primary"
          >
            <Button
              type="submit"
              size="icon"
              className="size-9 shrink-0 rounded-full bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
              aria-label="جستجو"
            >
              <Search className="size-4" />
            </Button>
            <Input
              aria-label="جستجو"
              placeholder="جستجوی هنرمند ، اثر ..."
              className="border-0 bg-transparent px-3 text-xs shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/80"
              onFocus={onInputFocus}
              onBlur={onInputBlur}
            />
          </form>

          <div className="flex items-center gap-2">
            <div className="flex flex-1 items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {heroChips.map((c) => (
                <a
                  key={c}
                  href="#"
                  className="shrink-0 rounded-full border border-border/70 bg-card px-3.5 py-1 text-xs font-medium text-foreground/85 shadow-2xs transition-colors hover:bg-secondary hover:text-primary"
                >
                  {c}
                </a>
              ))}
            </div>
            <button
              type="button"
              aria-label="سایر دسته‌ها"
              className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground shadow-2xs transition-colors hover:bg-secondary hover:text-primary"
            >
              <ChevronLeft className="size-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= md) */}
      <div className="relative isolate hidden min-h-[440px] items-center px-20 md:flex">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          priority={isPriority}
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="-z-10 -scale-x-100 object-cover object-left"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-l from-card/35 via-card/15 to-transparent dark:from-card/70 dark:via-card/30 dark:to-transparent" />

        <div className="relative z-10 max-w-md">
          <p className="mb-3 text-xs font-semibold text-primary">{slide.badge}</p>
          <h1
            className={cn(
              "text-4xl leading-snug md:text-5xl md:leading-[1.3] lg:text-6xl",
              lalezar.className,
            )}
          >
            {slide.title}
            <br />
            <span className="text-primary">{slide.highlight}</span>
          </h1>
          <p className="mt-4 text-xs leading-6 text-foreground/80 md:text-sm">
            {slide.description}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex items-center rounded-full bg-card/90 p-1 shadow-sm ring-1 ring-border backdrop-blur transition-shadow focus-within:ring-2 focus-within:ring-primary"
          >
            <Button type="submit" size="icon" aria-label="جستجو">
              <Search className="size-4" />
            </Button>
            <Input
              aria-label="جستجو"
              placeholder="جستجوی هنرمند، اثر، سبک هنری ..."
              className="border-0 bg-transparent px-3 shadow-none focus-visible:ring-0"
              onFocus={onInputFocus}
              onBlur={onInputBlur}
            />
          </form>
          <div className="mt-4 flex flex-wrap gap-2">
            {heroChips.map((c) => (
              <a
                key={c}
                href="#"
                className="rounded-full border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur transition-colors hover:bg-secondary hover:text-primary"
              >
                {c}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

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
        aria-label="آثار برگزیده و اسلایدر اصلی"
      >
        <SlideContent slide={heroSlides[0]} isPriority />
      </section>
    );
  }

  return (
    <section
      className="group relative isolate mt-2 overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm md:min-h-[440px]"
      aria-label="آثار برگزیده و اسلایدر اصلی"
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
            <SlideContent
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
        aria-label="اسلاید قبلی"
        onClick={() => swiper?.slidePrev()}
        className="absolute top-1/2 right-4 z-20 hidden -translate-y-1/2 opacity-80 backdrop-blur transition-opacity duration-300 hover:opacity-100 md:inline-flex"
      >
        <ChevronRight className="size-4" />
      </Button>
      <Button
        variant="glass"
        size="icon"
        aria-label="اسلاید بعدی"
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
            aria-label={`رفتن به اسلاید ${i + 1}`}
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
