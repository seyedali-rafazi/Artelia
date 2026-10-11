import Link from "next/link";
import { cn } from "@/lib/utils";

interface AuthLogoProps {
  className?: string;
}

export const AuthLogo = ({ className }: AuthLogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "group flex flex-col items-center justify-center transition-transform duration-200 hover:scale-102",
        className,
      )}
      aria-label="صفحه اصلی آرتلیا"
    >
      <div className="relative flex items-center justify-center">
        {/* Artistic A Monogram with decorative leaf motif in brand colors */}
        <svg
          viewBox="0 0 100 100"
          className="size-16 sm:size-20 transition-transform duration-300 group-hover:rotate-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer subtle ring in copper/accent tint */}
          <circle
            cx="50"
            cy="50"
            r="44"
            className="stroke-accent/30 dark:stroke-accent/25"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />

          {/* Letter A in Brand Charcoal / Primary */}
          <path
            d="M50 18 L32 74 H39 L44 58 H56 L61 74 H68 L50 18 Z M46 52 L50 35 L54 52 H46 Z"
            className="fill-foreground"
          />

          {/* Flowing Leaf Ribbon in Brand Copper (Accent) */}
          <path
            d="M36 62 C42 42, 60 40, 68 34 C64 42, 54 48, 42 54"
            className="stroke-accent"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M68 34 C72 30, 76 32, 74 37 C70 38, 66 36, 68 34 Z"
            className="fill-accent"
          />
          <circle cx="50" cy="20" r="2.5" className="fill-primary" />
        </svg>
      </div>

      {/* Typography using website font & tokens */}
      <span
        dir="ltr"
        className="mt-1 font-serif text-lg font-bold tracking-[0.28em] text-primary uppercase"
      >
        ARTELIA
      </span>
      <span
        dir="ltr"
        className="text-[9px] font-semibold tracking-[0.38em] text-accent uppercase"
      >
        GALLERY
      </span>
    </Link>
  );
};
