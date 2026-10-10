import Image from "next/image";
import { Lalezar } from "next/font/google";
import { aboutCurators } from "../data/aboutData";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

export const AboutCuratorsSection = () => {
  return (
    <section
      className="my-10 md:my-16"
      aria-labelledby="about-curators-heading"
    >
      <div className="text-center">
        <h2
          id="about-curators-heading"
          className={`${lalezar.className} text-2xl text-foreground sm:text-3xl md:text-4xl`}
        >
          کارشناسان آرتلیا
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-muted-foreground sm:text-sm">
          تیمی از صاحب‌نظران و استادان هنر که تضمین‌کننده عیار زیبایی‌شناسی و
          اصالت آثار هستند
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
        {aboutCurators.map((curator) => (
          <div
            key={curator.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60 transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-md"
          >
            {/* Curator Portrait */}
            <div className="relative aspect-square w-full overflow-hidden bg-muted">
              <Image
                src={curator.imageUrl}
                alt={curator.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2.5 py-0.5 text-[11px] font-semibold text-foreground backdrop-blur-xs">
                {curator.specialty}
              </span>
            </div>

            {/* Curator Details */}
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="text-base font-bold text-foreground">
                {curator.name}
              </h3>
              <p className="mt-0.5 text-xs font-semibold text-primary">
                {curator.role}
              </p>
              <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                {curator.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
