"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SocialLoginButtonProps {
  className?: string;
  onSuccess?: () => void;
  email?: string;
  userName?: string;
}

export const SocialLoginButton = ({
  className,
  onSuccess,
  email = "seyedalirafazi80@gmail.com",
  userName = "Ali",
}: SocialLoginButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess?.();
    }, 800);
  };

  return (
    <button
      type="button"
      dir="rtl"
      onClick={handleClick}
      disabled={isLoading}
      aria-label={`ورود با حساب گوگل: ${email}`}
      className={cn(
        "group relative flex w-full items-center justify-between rounded-full border border-border/70 bg-card px-3.5 py-2 text-foreground shadow-2xs transition-all duration-200 hover:border-primary/50 hover:bg-secondary/30 hover:shadow-xs active:scale-[0.99] disabled:opacity-60 cursor-pointer",
        className,
      )}
    >
      {/* User Circular Avatar on the right in RTL */}
      <div className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-full border border-border/80 bg-secondary shadow-2xs">
        <div className="grid size-full place-items-center bg-linear-to-br from-primary to-accent text-[11px] font-bold text-primary-foreground font-sans">
          A
        </div>
      </div>

      {/* Account Info Text in middle */}
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-xs font-bold text-foreground">
          با نام <span className="font-sans font-bold">{userName}</span> ادامه دهید
        </span>
        <span
          dir="ltr"
          className="text-[11px] font-sans text-muted-foreground transition-colors group-hover:text-foreground"
        >
          {email}
        </span>
      </div>

      {/* Google "G" Colorful SVG Logo on left */}
      <div className="flex size-7 shrink-0 items-center justify-center">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12c0 1.97.45 3.82 1.25 5.42l4.03-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
      </div>
    </button>
  );
};
