"use client";

import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProfileTabId, UserProfile } from "../types";
import { PROFILE_TABS } from "../constants";

interface ProfileSidebarProps {
  user: UserProfile;
  activeTab: ProfileTabId;
  onTabChange: (tabId: ProfileTabId) => void;
  className?: string;
}

export const ProfileSidebar = ({
  user,
  activeTab,
  onTabChange,
  className,
}: ProfileSidebarProps) => {
  return (
    <aside className={cn("flex flex-col gap-3 w-full", className)}>
      {/* Top User Summary Card (Avatar on the RIGHT, Name & Email on the LEFT) */}
      <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/90 p-3.5 shadow-2xs">
        {/* Squircle Avatar (Right side in RTL) */}
        <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-base font-extrabold text-primary border border-primary/20 shadow-2xs">
          {user.avatarLetter || user.fullName.charAt(0)}
        </div>

        {/* User Info (Left side of avatar in RTL) */}
        <div className="min-w-0 flex-1 text-right">
          <p className="truncate text-sm font-bold text-foreground">
            {user.fullName}
          </p>
          <p
            dir="ltr"
            className="truncate text-[11px] text-muted-foreground font-mono mt-0.5 text-right"
          >
            {user.email}
          </p>
        </div>
      </div>

      {/* Tabs Navigation List */}
      <nav aria-label="منوی پنل کاربری" className="space-y-1">
        {PROFILE_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "group flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-xs md:text-sm font-bold transition-all duration-200 text-right outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isActive
                  ? "bg-primary text-primary-foreground font-extrabold shadow-sm"
                  : "text-foreground/80 hover:bg-primary/10 hover:text-primary",
              )}
            >
              {/* Right side in RTL: Icon + Title */}
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "size-4.5 shrink-0 transition-colors",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground group-hover:text-primary",
                  )}
                />
                <span>{tab.title}</span>
              </div>

              {/* Left side in RTL: Chevron for inactive, nothing for active */}
              <div className="flex items-center">
                {!isActive && (
                  <ChevronLeft className="size-4 text-muted-foreground/60 transition-transform group-hover:-translate-x-0.5 group-hover:text-primary" />
                )}
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
