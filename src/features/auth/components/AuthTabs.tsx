"use client";

import { AuthMode } from "../types";
import { cn } from "@/lib/utils";

interface AuthTabsProps {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
  className?: string;
}

export const AuthTabs = ({ mode, onModeChange, className }: AuthTabsProps) => {
  return (
    <div
      role="tablist"
      aria-label="انتخاب وضعیت ورود یا ثبت‌نام"
      dir="rtl"
      className={cn(
        "relative flex w-full items-center rounded-full bg-secondary/35 p-1.5 border border-border/50",
        className,
      )}
    >
      {/* Login Tab */}
      <button
        type="button"
        role="tab"
        aria-selected={mode === "login"}
        onClick={() => onModeChange("login")}
        className={cn(
          "relative flex-1 cursor-pointer rounded-full py-2.5 text-center text-sm font-bold transition-all duration-200 select-none",
          mode === "login"
            ? "bg-card text-primary shadow-xs"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        ورود
      </button>

      {/* Signup Tab */}
      <button
        type="button"
        role="tab"
        aria-selected={mode === "signup"}
        onClick={() => onModeChange("signup")}
        className={cn(
          "relative flex-1 cursor-pointer rounded-full py-2.5 text-center text-sm font-bold transition-all duration-200 select-none",
          mode === "signup"
            ? "bg-card text-primary shadow-xs"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        ثبت‌نام
      </button>
    </div>
  );
};
