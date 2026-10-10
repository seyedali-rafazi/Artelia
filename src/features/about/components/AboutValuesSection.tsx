import { PackageCheck, Palette, ShieldCheck, Sparkles } from "lucide-react";
import { Lalezar } from "next/font/google";
import { aboutValues } from "../data/aboutData";
import type { AboutValue } from "../types";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

const renderValueIcon = (iconName: AboutValue["iconName"]) => {
  switch (iconName) {
    case "ShieldCheck":
      return <ShieldCheck className="size-6 text-primary" />;
    case "Palette":
      return <Palette className="size-6 text-primary" />;
    case "PackageCheck":
      return <PackageCheck className="size-6 text-primary" />;
    case "Sparkles":
      return <Sparkles className="size-6 text-primary" />;
  }
};

export const AboutValuesSection = () => {
  return (
    <section className="my-10 md:my-16" aria-labelledby="about-values-heading">
      <div className="text-center">
        <h2
          id="about-values-heading"
          className={`${lalezar.className} text-2xl text-foreground sm:text-3xl md:text-4xl`}
        >
          ارزش‌های بنیادین آرتلیا
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-muted-foreground sm:text-sm">
          تعهد ما به ایجاد فضایی امن، اصیل و ارجمند برای هم‌نشینی هنرمندان و دوستداران هنر
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
        {aboutValues.map((val) => (
          <div
            key={val.id}
            className="flex flex-col rounded-2xl border border-border/70 bg-card/60 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/90 sm:p-6"
          >
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10">
              {renderValueIcon(val.iconName)}
            </div>
            <h3 className="text-sm font-bold text-foreground sm:text-base">
              {val.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {val.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
