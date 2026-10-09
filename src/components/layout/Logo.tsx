import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      dir="ltr"
      className={cn(
        "font-serif text-3xl font-medium tracking-tight text-primary",
        className,
      )}
    >
      Artelia
    </span>
  );
};
