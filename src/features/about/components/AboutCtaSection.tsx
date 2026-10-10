import Link from "next/link";
import { ArrowLeft, Palette, Sparkles } from "lucide-react";
import { Lalezar } from "next/font/google";
import { buttonVariants } from "@/components/ui/button";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

export const AboutCtaSection = () => {
  return (
    <section className="my-10 md:my-16" aria-label="شروع همکاری با آرتلیا">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card 1: For Artists */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card to-card/50 p-6 sm:p-8">
          <div>
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Palette className="size-5" />
            </div>
            <h3
              className={`${lalezar.className} mt-4 text-xl text-foreground sm:text-2xl`}
            >
              به جمع هنرمندان آرتلیا بپیوندید
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              اگر آفرینش‌گر هنر تجسمی یا صنایع دستی اصیل هستید، گالری اختصاصی خود را بسازید،
              آثار خود را با استانداردهای موزه‌ای به علاقه‌مندان عرضه کنید و به جمع نخبگان بپیوندید.
            </p>
          </div>

          <div className="mt-6 pt-2">
            <Link
              href="/artists"
              className={buttonVariants({ variant: "default", size: "default" })}
            >
              <span>مشاهده هنرمندان و ثبت‌نام</span>
              <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>

        {/* Card 2: For Collectors */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card to-card/50 p-6 sm:p-8">
          <div>
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
              <Sparkles className="size-5" />
            </div>
            <h3
              className={`${lalezar.className} mt-4 text-xl text-foreground sm:text-2xl`}
            >
              کشف و خرید آثار هنری برگزیده
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              از میان هزاران تابلوی نقاشی، تندیس، خوشنویسی و دست‌سازه‌های کم‌نظیر، اثری متناسب با
              سلیقه، فضا و بودجه خود پیدا کنید و از ضمانت اصالت فیزیکی اثر بهره‌مند شوید.
            </p>
          </div>

          <div className="mt-6 pt-2">
            <Link
              href="/products"
              className={buttonVariants({ variant: "secondary", size: "default" })}
            >
              <span>مرور گالری محصولات</span>
              <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
