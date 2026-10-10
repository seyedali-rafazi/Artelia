import Image from "next/image";
import { Lalezar } from "next/font/google";
import { Sparkles } from "lucide-react";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

export const AboutStorySection = () => {
  return (
    <section className="my-10 md:my-16" aria-labelledby="about-story-heading">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Story Text Column */}
        <div className="space-y-5 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" />
            <span>داستان ما | هنر برای فردایی زیباتر</span>
          </div>

          <h2
            id="about-story-heading"
            className={`${lalezar.className} text-2xl text-foreground sm:text-3xl md:text-4xl leading-tight`}
          >
            پل پیوند میان آتلیه‌های خاموش و دیوارهای مشتاق زندگی
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              آرتلیا از یک پرسش ساده اما عمیق جوانه زد: چرا دسترسی به آثار هنری اصیل و
              خلاقیت بی‌واسطه هنرمندان معاصر باید محدود به گالری‌های سربسته و فضاهای دور از
              دسترس باشد؟
            </p>
            <p>
              ما بر این باوریم که هنر، روح یک خانه است؛ هر خط قلم‌مو و هر حجم تراشیده، حامل
              احساس، تفکر و تاریخی است که می‌تواند زندگی روزمره را معنایی نو ببخشد.
              آرتلیا بستری امن، زیبا و تخصصی است که در آن هنرمندان مستقل ایرانی آثار خود را با
              عزت‌نفس و اصالت به نمایش می‌گذارند و خریداران و مجموعه‌داران می‌توانند با
              اطمینان خاطر، اثری یکتا و ماندگار را مهمان خانه‌های خود کنند.
            </p>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/70 p-4 sm:p-5">
            <blockquote className="border-r-2 border-primary pr-3 text-xs italic text-foreground sm:text-sm">
              «هنر تنها یک شیء تزیینی نیست؛ پنجره‌ای است گشوده به جهان‌بینی هنرمندی که زیباتر
              دیدن را به ما می‌آموزد.»
            </blockquote>
          </div>
        </div>

        {/* Visual Showcase Column */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg sm:rounded-3xl lg:max-w-none">
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/about-story.jpg"
                alt="کیوریتور و هنرمند در حال بررسی اثر در آتلیه آرتلیا"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            <div className="border-t border-border/60 bg-card/90 p-4 backdrop-blur-xs">
              <p className="text-xs font-bold text-foreground">
                آتلیه و فرآیند گزینش آثار در آرتلیا
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                بررسی موشکافانه تک‌تک آثار از منظر اصالت متریال و ارزش هنری
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
