"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/navigation";
import { Logo } from "./Logo";

export const SiteHeader = ({ activeHref = "/" }: { activeHref?: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex h-16 items-center justify-between gap-4">
      {/* Right side: Hamburger (mobile only) + Logo */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="bare"
          aria-label={isMobileMenuOpen ? "بستن منو" : "منو"}
          className="p-1 text-foreground transition-colors hover:text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </Button>
        <Logo />
      </div>

      {/* Center: Navigation pages (desktop) */}
      <nav className="hidden items-center gap-7 text-sm font-bold md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
        {mainNav.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={
              l.href === activeHref
                ? "border-b-2 border-primary pb-1 text-primary"
                : "pb-1 text-foreground/80 transition-colors hover:text-primary"
            }
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Left side: Cart + Profile */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="سبد خرید"
          className="relative cursor-pointer text-foreground/80 transition-colors hover:text-primary"
        >
          <ShoppingBag className="size-5" />
          <span className="absolute -top-1.5 -right-1.5 grid size-3.5 place-items-center rounded-full bg-primary text-[8px] text-primary-foreground">
            ۰
          </span>
        </button>
        <button
          type="button"
          aria-label="پروفایل کاربری"
          className="grid size-8 cursor-pointer place-items-center overflow-hidden rounded-full bg-gradient-to-br from-stone-600 to-stone-900 transition-transform hover:scale-105"
        >
          <User className="size-4 text-primary-foreground" />
        </button>
      </div>

      {/* Responsive mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full inset-x-0 z-50 mt-2 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-2 text-sm font-bold">
            {mainNav.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={
                  l.href === activeHref
                    ? "rounded-xl bg-primary/10 px-4 py-2.5 text-primary"
                    : "rounded-xl px-4 py-2.5 text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
