"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import type { ProfileTabId, UserProfile } from "../types";
import { DEFAULT_USER_PROFILE } from "../constants";
import { ProfileSidebar } from "./ProfileSidebar";
import { ProfileInfoTab } from "./ProfileInfoTab";
import { ProfileOtherTabs } from "./ProfileOtherTabs";
import { ProfileMobileNav } from "./ProfileMobileNav";

export const ProfileView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get active tab from URL query params (default: 'profile')
  const rawTab = searchParams.get("tab");
  const validTabs: ProfileTabId[] = [
    "profile",
    "password",
    "addresses",
    "orders",
    "cart",
    "favorites",
    "settings",
  ];
  const activeTab: ProfileTabId = validTabs.includes(rawTab as ProfileTabId)
    ? (rawTab as ProfileTabId)
    : "profile";

  const [user, setUser] = useState<UserProfile>(DEFAULT_USER_PROFILE);

  const handleTabChange = (tabId: ProfileTabId) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleUpdateUser = (updated: Partial<UserProfile>) => {
    setUser((prev) => ({
      ...prev,
      ...updated,
    }));
  };

  return (
    <div
      dir="rtl"
      className="py-6 md:py-8 w-full text-right"
      style={{ direction: "rtl" }}
      suppressHydrationWarning
    >
      {/* Mobile Top Header (screen < md): Title "پروفایل کاربری" on the Right, Tab selector "اطلاعات حساب" on the Left */}
      <div
        className="mb-5 flex items-center justify-between md:hidden"
        dir="rtl"
        style={{ direction: "rtl" }}
      >
        {/* Right side: Title "پروفایل کاربری" */}
        <h1 className="text-xl font-black text-foreground text-right">
          پروفایل کاربری
        </h1>

        {/* Left side: Mobile Tab Trigger Button */}
        <ProfileMobileNav
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      {/* Main Container: RTL Layout (Right side: "پروفایل کاربری" & Sidebar | Left side: "اطلاعات حساب" & Main Content) */}
      <div
        className="flex flex-col md:flex-row items-start gap-6 lg:gap-8 w-full"
        dir="rtl"
        style={{ direction: "rtl" }}
      >
        {/* RIGHT COLUMN (Desktop/Tablet): Title "پروفایل کاربری" + Sidebar Navigation */}
        <aside className="hidden md:flex w-72 lg:w-80 shrink-0 flex-col gap-4 text-right">
          {/* Title directly above sidebar on the RIGHT */}
          <h1 className="text-xl md:text-2xl font-black text-foreground text-right leading-none py-1">
            پروفایل کاربری
          </h1>

          {/* Sidebar Navigation */}
          <ProfileSidebar
            user={user}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </aside>

        {/* LEFT COLUMN (Desktop/Tablet): "اطلاعات حساب" Subheading + Main Card */}
        <main className="flex-1 min-w-0 w-full text-right">
          {activeTab === "profile" ? (
            <ProfileInfoTab user={user} onUpdateUser={handleUpdateUser} />
          ) : (
            <ProfileOtherTabs activeTab={activeTab} />
          )}
        </main>
      </div>
    </div>
  );
};
