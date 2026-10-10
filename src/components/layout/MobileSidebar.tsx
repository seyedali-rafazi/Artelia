"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Phone, ShoppingBag, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav, footerContactInfo } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeHref?: string;
}

export const MobileSidebar = ({
  isOpen,
  onClose,
  activeHref,
}: MobileSidebarProps) => {
  const pathname = usePathname();
  const currentPath = activeHref ?? pathname;

  // Close sidebar on ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while sidebar is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Auto-close when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      id="mobile-sidebar"
      role="dialog"
      aria-modal="true"
      aria-label="منوی ناوبری اصلی"
      className={cn(
        "fixed inset-0 z-50 md:hidden",
        isOpen
          ? "visible pointer-events-auto"
          : "invisible pointer-events-none transition-[visibility] delay-300",
      )}
    >
      {/* Backdrop overlay with fade in/out animation */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Drawer panel with right-to-left slide in / slide out animation */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-full w-72 sm:w-80 max-w-[85vw] flex-col border-s border-border bg-card/98 p-5 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Sidebar Header: Logo & Close Button */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            aria-label="بستن منو"
            onClick={onClose}
            className="size-8 rounded-full text-foreground/80 hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" />
          </Button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-1">
          <p className="px-3 pb-2 text-xs font-semibold text-muted-foreground">
            بخش‌های وبسایت
          </p>
          {mainNav.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold transition-all",
                  isActive
                    ? "bg-primary/12 text-primary shadow-xs"
                    : "text-foreground/80 hover:bg-muted hover:text-primary",
                )}
              >
                <span>{item.label}</span>
                <ChevronLeft
                  className={cn(
                    "size-4 transition-transform duration-200",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground/50 group-hover:-translate-x-0.5 group-hover:text-primary",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Quick Actions & Contact Info */}
        <div className="space-y-4 border-t border-border/70 pt-4">
          {/* Cart & Profile shortcuts */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-full justify-center gap-2 rounded-xl text-xs font-bold"
            >
              <div className="relative">
                <ShoppingBag className="size-4" />
                <span className="absolute -top-1.5 -right-2 grid size-3.5 place-items-center rounded-full bg-primary text-[8px] text-primary-foreground font-sans">
                  ۰
                </span>
              </div>
              <span>سبد خرید</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-full justify-center gap-2 rounded-xl text-xs font-bold"
            >
              <User className="size-4" />
              <span>پروفایل</span>
            </Button>
          </div>

          {/* Support snippet */}
          <div className="rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 font-medium text-foreground mb-1">
              <Phone className="size-3.5 text-primary" />
              <span>پشتیبانی و مشاوره</span>
            </div>
            <a
              href={footerContactInfo.phoneTel}
              dir="ltr"
              className="block text-end font-semibold text-foreground/90 transition-colors hover:text-primary"
            >
              {footerContactInfo.phoneDisplay}
            </a>
          </div>

          {/* Tagline branding */}
          <p className="text-center text-[11px] text-muted-foreground/80">
            آرتلیا؛ پلتفرم جامع آثار و خدمات هنری
          </p>
        </div>
      </aside>
    </div>
  );
};
