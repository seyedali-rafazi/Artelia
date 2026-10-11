import Image from "next/image";
import { ChevronLeft, PenTool, Search } from "lucide-react";
import { Lalezar } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { heroChips } from "../data/home-content";
import type { HeroSlide } from "../types";

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

export const HeroSlideContent = ({
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

