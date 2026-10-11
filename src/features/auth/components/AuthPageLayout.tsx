import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuthPageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const AuthPageLayout = ({ children, className }: AuthPageLayoutProps) => {
  return (
    <main
      dir="rtl"
      className={cn(
        "relative flex min-h-dvh w-full items-center justify-center bg-background p-4 sm:p-6 md:p-8",
        className,
      )}
    >
      {/* Soft warm ambient lighting background accents in website primary & accent tokens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-primary/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-accent/12 blur-3xl"
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex justify-center">{children}</div>
    </main>
  );
};
