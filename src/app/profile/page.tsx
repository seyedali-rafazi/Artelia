import { Suspense } from "react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProfileView } from "@/features/profile";

export const metadata: Metadata = {
  title: "پروفایل کاربری | آرتلیا",
  description: "مشاهده و ویرایش اطلاعات حساب کاربری، امنیت و سفارشات در آرتلیا",
};

const ProfileSkeleton = () => {
  return (
    <div className="py-6 md:py-8 w-full animate-pulse">
      <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8 w-full" dir="rtl">
        <div className="hidden md:flex w-72 lg:w-80 shrink-0 flex-col gap-4">
          <div className="h-8 w-40 bg-secondary/50 rounded-lg" />
          <div className="h-20 rounded-2xl bg-card/70 border border-border/70" />
          <div className="h-64 rounded-2xl bg-card/70 border border-border/70" />
        </div>
        <div className="flex-1 min-w-0 w-full">
          <div className="h-6 w-32 bg-secondary/50 rounded-lg mb-4" />
          <div className="h-96 rounded-3xl bg-card/60 border border-border/70 p-6" />
        </div>
      </div>
    </div>
  );
};

export default function ProfilePage() {
  return (
    <div
      dir="rtl"
      className="mx-auto max-w-[1280px] px-4 pb-12 md:px-8 text-right"
      suppressHydrationWarning
    >
      <SiteHeader activeHref="/profile" />
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileView />
      </Suspense>
      <SiteFooter />
    </div>
  );
}
