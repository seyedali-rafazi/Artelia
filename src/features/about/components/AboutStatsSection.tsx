import { Lalezar } from "next/font/google";
import { aboutStats } from "../data/aboutData";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

export const AboutStatsSection = () => {
  return (
    <section className="my-8 md:my-12" aria-label="آمارهای کلیدی آرتلیا">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {aboutStats.map((stat) => (
          <div
            key={stat.id}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-card/60 p-4 text-center transition-all duration-300 hover:border-primary/40 hover:bg-card/90 sm:p-6"
          >
            <span
              className={`${lalezar.className} text-3xl tracking-wide text-primary transition-transform duration-300 group-hover:scale-105 sm:text-4xl md:text-5xl`}
            >
              {stat.value}
            </span>
            <span className="mt-1 text-xs font-bold text-foreground sm:text-sm">
              {stat.label}
            </span>
            <span className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-xs">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
