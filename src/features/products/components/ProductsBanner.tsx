import Image from "next/image";
import { Lalezar } from "next/font/google";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

export const ProductsBanner = () => {
  return (
    <section className="my-4 md:my-6" aria-label="بنر معرفی محصولات هنری">
      <div className="relative isolate overflow-hidden rounded-2xl border border-border/50 bg-[#F5ECE2] shadow-xs sm:rounded-3xl dark:border-border/40 dark:bg-[#151111]">
        {/* Banner container with responsive height */}
        <div className="relative flex h-48 w-full items-center justify-center xs:h-52 sm:h-56 md:h-56 lg:h-60 xl:h-64">
          <Image
            src="/product-banner.webp"
            alt="محصولات هنری آرتلیا"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          {/* Gentle dark tint so white typography stands out cleanly */}
          <div className="pointer-events-none absolute inset-0 bg-black/25 dark:bg-black/45" />

          {/* Text Overlay */}
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center px-4 text-center">
            <h1
              className={`${lalezar.className} text-4xl tracking-wide text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.9)] xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl`}
            >
              محصولات هنری
            </h1>

            <p className="mt-1 max-w-xs text-xs font-bold leading-relaxed text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.9)] xs:max-w-sm xs:text-sm sm:max-w-md sm:text-base md:mt-2 md:text-lg">
              آثاری منحصربه‌فرد برای زیباتر کردن زندگی شما
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
