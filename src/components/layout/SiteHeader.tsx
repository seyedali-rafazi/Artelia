"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/navigation";
import { Logo } from "./Logo";
import { MobileSidebar } from "./MobileSidebar";
import { ProfileDropdown } from "./ProfileDropdown";

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
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-sidebar"
          className="p-1 text-foreground transition-colors hover:text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Menu className="size-6" />
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
        <Button
          variant="ghost"
          size="bare"
          aria-label="سبد خرید"
          className="relative cursor-pointer text-foreground/80 transition-colors hover:text-primary"
        >
          <ShoppingBag className="size-5" />
          <span className="absolute -top-1.5 -right-1.5 grid size-3.5 place-items-center rounded-full bg-primary text-[8px] text-primary-foreground font-sans">
            ۰
          </span>
        </Button>
        <ProfileDropdown />
      </div>

      {/* Responsive mobile sidebar (drawer sliding from right to left) */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeHref={activeHref}
      />
    </header>
  );
};
