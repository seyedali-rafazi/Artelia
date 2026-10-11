"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  Heart,
  LayoutGrid,
  LogOut,
  MapPin,
  ShoppingBag,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProfileDropdownProps {
  className?: string;
  user?: {
    name: string;
    email: string;
    avatarLetter?: string;
  };
}

const defaultUser = {
  name: "سیدعلی رفظی",
  email: "seyedalirafazi80@gmail.com",
  avatarLetter: "س",
};

export const ProfileDropdown = ({
  className,
  user = defaultUser,
}: ProfileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const router = useRouter();

  const handleLogout = () => {
    setIsOpen(false);
    router.push("/login");
  };

  const menuItems = [
    {
      title: "پنل مدیریت",
      href: "/admin",
      icon: LayoutGrid,
    },
    {
      title: "پروفایل کاربری",
      href: "/profile",
      icon: User,
    },
    {
      title: "سفارش‌های من",
      href: "/orders",
      icon: ShoppingBag,
    },
    {
      title: "علاقه‌مندی‌ها",
      href: "/favorites",
      icon: Heart,
    },
    {
      title: "آدرس‌های من",
      href: "/addresses",
      icon: MapPin,
    },
  ];

  return (
    <div ref={dropdownRef} className={cn("relative inline-block", className)}>
      {/* Pill Profile Trigger Button */}
      <Button
        variant="ghost"
        size="bare"
        type="button"
        aria-label="منوی کاربری"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "group flex cursor-pointer items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1.5 text-foreground transition-all duration-200 hover:border-primary/60 hover:bg-secondary/40",
          isOpen && "border-primary bg-secondary/50 shadow-2xs",
        )}
      >
        <User className="size-4.5 text-primary transition-colors" />
        <ChevronDown
          className={cn(
            "size-3.5 text-muted-foreground transition-transform duration-200 group-hover:text-primary",
            isOpen && "rotate-180 text-primary",
          )}
        />
      </Button>

      {/* Profile Popup */}
      {isOpen && (
        <div
          role="menu"
          aria-label="گزینه‌های حساب کاربری"
          className="absolute left-0 top-full mt-2.5 z-50 w-64 sm:w-72 max-w-[calc(100vw-2rem)] origin-top-left overflow-hidden rounded-3xl border border-border/80 bg-card p-3 shadow-xl backdrop-blur-md transition-all animate-in fade-in-0 zoom-in-95 duration-150"
        >
          {/* Header Card: User Info */}
          <div className="mb-2 flex items-center gap-3 rounded-2xl border border-border/50 bg-secondary/35 p-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-base font-bold text-primary shadow-2xs">
              {user.avatarLetter || user.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1 text-right">
              <p className="truncate text-sm font-bold text-foreground">
                {user.name}
              </p>
              <p
                className="truncate text-[11px] text-muted-foreground"
                dir="ltr"
              >
                {user.email}
              </p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-0.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || item.href === "/profile";
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-bold transition-colors",
                    isActive
                      ? "bg-secondary/60 text-primary"
                      : "text-foreground/80 hover:bg-secondary/40 hover:text-primary",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-4.5 shrink-0 transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-foreground/70 group-hover:text-primary",
                    )}
                  />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-1.5 h-px bg-border/60" />

          {/* Logout Button */}
          <Button
            variant="ghost"
            size="bare"
            type="button"
            role="menuitem"
            onClick={handleLogout}
            className="group flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/10"
          >
            <LogOut className="size-4.5 shrink-0 transition-colors group-hover:text-primary" />
            <span>خروج از حساب</span>
          </Button>
        </div>
      )}
    </div>
  );
};
