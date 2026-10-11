"use client";

import { ShoppingBag, Palette } from "lucide-react";
import { UserType } from "../types";
import { cn } from "@/lib/utils";

interface UserTypeSelectorProps {
  userType: UserType;
  onChange: (type: UserType) => void;
  className?: string;
}

export const UserTypeSelector = ({
  userType,
  onChange,
  className,
}: UserTypeSelectorProps) => {
  return (
    <div dir="rtl" className={cn("grid grid-cols-2 gap-2.5", className)}>
      {/* Customer Option */}
      <button
        type="button"
        onClick={() => onChange("customer")}
        aria-pressed={userType === "customer"}
        className={cn(
          "group flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-3 text-center transition-all duration-200 cursor-pointer",
          userType === "customer"
            ? "border-primary bg-secondary/50 text-primary shadow-xs"
            : "border-border/70 bg-card/60 text-muted-foreground hover:border-primary/50 hover:bg-secondary/20 hover:text-foreground",
        )}
      >
        <div
          className={cn(
            "grid size-9 place-items-center rounded-xl transition-colors",
            userType === "customer"
              ? "bg-primary/12 text-primary"
              : "bg-muted text-muted-foreground group-hover:text-foreground",
          )}
        >
          <ShoppingBag className="size-4.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold">ثبت‌نام خریدار</span>
          <span className="text-[10px] text-muted-foreground">خرید و جمع‌آوری آثار</span>
        </div>
      </button>

      {/* Seller Option */}
      <button
        type="button"
        onClick={() => onChange("seller")}
        aria-pressed={userType === "seller"}
        className={cn(
          "group flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-3 text-center transition-all duration-200 cursor-pointer",
          userType === "seller"
            ? "border-primary bg-secondary/50 text-primary shadow-xs"
            : "border-border/70 bg-card/60 text-muted-foreground hover:border-primary/50 hover:bg-secondary/20 hover:text-foreground",
        )}
      >
        <div
          className={cn(
            "grid size-9 place-items-center rounded-xl transition-colors",
            userType === "seller"
              ? "bg-primary/12 text-primary"
              : "bg-muted text-muted-foreground group-hover:text-foreground",
          )}
        >
          <Palette className="size-4.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold">ثبت‌نام فروشنده</span>
          <span className="text-[10px] text-muted-foreground">هنرمند و نگارخانه</span>
        </div>
      </button>
    </div>
  );
};
