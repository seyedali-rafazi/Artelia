"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProfileTabId } from "../types";
import { PROFILE_TABS } from "../constants";

interface ProfileMobileNavProps {
  activeTab: ProfileTabId;
  onTabChange: (tabId: ProfileTabId) => void;
}

export const ProfileMobileNav = ({
  activeTab,
  onTabChange,
}: ProfileMobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentTab = PROFILE_TABS.find((t) => t.id === activeTab) || PROFILE_TABS[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative md:hidden">
      {/* Mobile Tab Selector Pill Button (as shown in image 2) */}
      <Button
        variant="outline"
        size="sm"
        type="button"
        aria-expanded={isOpen}
        aria-label="انتخاب بخش پروفایل"
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full border-border/80 bg-card px-3.5 py-1.5 text-xs font-bold text-foreground shadow-2xs hover:border-primary hover:text-primary gap-2 cursor-pointer"
      >
        <span>{currentTab.title}</span>
        <Menu className="size-4 text-muted-foreground" />
      </Button>

      {/* Dropdown Menu on Mobile */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 z-40 w-56 rounded-2xl border border-border/80 bg-card p-2 shadow-xl backdrop-blur-md animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="flex items-center justify-between px-2 py-1.5 mb-1 border-b border-border/50">
            <span className="text-[11px] font-bold text-muted-foreground">
              بخش‌های پروفایل
            </span>
            <Button
              variant="ghost"
              size="bare"
              onClick={() => setIsOpen(false)}
              className="p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="size-3.5" />
            </Button>
          </div>

          <div className="space-y-1">
            {PROFILE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    onTabChange(tab.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold transition-colors text-right cursor-pointer",
                    isActive
                      ? "bg-primary text-primary-foreground font-extrabold shadow-xs"
                      : "text-foreground/80 hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
