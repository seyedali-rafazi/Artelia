import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Lalezar } from "next/font/google";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

export const JoinBanner = () => {
  return (
    <section className="relative mt-8 flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-l from-primary to-[#5e1220] px-8 py-6 text-primary-foreground md:flex-row md:justify-between">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <Image
          src="/pen.png"
          alt=""
          width={160}
          height={107}
          className="-my-6 h-28 w-auto mix-blend-screen md:order-last"
        />
        <div className="text-center md:text-right">
          <h2 className={cn("text-2xl tracking-wide sm:text-3xl", lalezar.className)}>
            به جمع هنرمندان Artelia بپیوندید
          </h2>
          <p className="mt-1 text-xs opacity-80">
            صفحه اختصاصی خود را بسازید، آثار خود را منتشر کنید و به مخاطبان بیشتری دسترسی داشته باشید.
          </p>
        </div>
      </div>
      <a
        href="#"
        className={buttonVariants({ variant: "card" })}
      >
        <ArrowLeft className="size-4" />
        شروع کنید
      </a>
    </section>
  );
};
