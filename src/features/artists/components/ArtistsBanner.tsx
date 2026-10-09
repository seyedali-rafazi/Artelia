import Image from "next/image";
import { Lalezar } from "next/font/google";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

export const ArtistsBanner = () => {
  return (
    <section className="my-4 md:my-6" aria-label="بنر معرفی هنرمندان">
      <div className="relative isolate overflow-hidden rounded-2xl border border-border/50 bg-[#F5ECE2] shadow-xs sm:rounded-3xl dark:border-border/40 dark:bg-[#151111]">
        {/* Banner container with responsive height */}
        <div className="relative flex h-48 w-full items-center justify-center xs:h-52 sm:h-56 md:h-56 lg:h-60 xl:h-64">
          {/* 1. Mobile Image (< md): minimal subtle blur, preserving vibrant artwork */}
          <Image
            src="/artists-banner-responsive.webp"
            alt="هنرمندان آرتلیا"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1px"
            className="scale-105 object-cover object-[78%_center] blur-[0.5px] md:hidden"
          />

          {/* 2. Desktop Image (>= md) */}
          <Image
            src="/artists-banner.webp"
            alt="هنرمندان آرتلیا"
            fill
            priority
            sizes="(min-width: 768px) 1280px, 1px"
            className="hidden object-cover object-center md:block"
          />

          {/* Gentle, light dark tint (not heavy black) so the photo stays vibrant */}
          <div className="pointer-events-none absolute inset-0 bg-black/20 dark:bg-black/40" />

          {/* Text Overlay: Directly on the photo with larger fantasy typography */}
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center px-4 text-center">
            {/* Banner Heading in Lalezar Fantasy Font */}
            <h1
              className={`${lalezar.className} text-4xl tracking-wide text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.9)] xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl`}
            >
              هنرمندان
            </h1>

            {/* Subtitle */}
            <p className="mt-1 max-w-xs text-xs font-bold leading-relaxed text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.9)] xs:max-w-sm xs:text-sm sm:max-w-md sm:text-base md:mt-2 md:text-lg">
              با هنرمندان خلاق و آثار منحصربه‌فرد آن‌ها آشنا شوید
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



