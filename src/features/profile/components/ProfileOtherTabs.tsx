"use client";

import {
  Heart,
  Lock,
  MapPin,
  Package,
  Plus,
  Settings,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProfileTabId } from "../types";
import { PasswordChangeSection } from "./PasswordChangeSection";

interface ProfileOtherTabsProps {
  activeTab: ProfileTabId;
}

export const ProfileOtherTabs = ({ activeTab }: ProfileOtherTabsProps) => {
  if (activeTab === "password") {
    return (
      <div className="w-full">
        <div className="flex items-center gap-2 mb-3.5 text-foreground">
          <Lock className="size-4.5 text-primary" />
          <h2 className="text-sm md:text-base font-bold">تغییر رمز عبور</h2>
        </div>
        <div className="rounded-3xl border border-border/80 bg-card/70 p-4 sm:p-6 md:p-8 shadow-2xs backdrop-blur-xs">
          <PasswordChangeSection />
        </div>
      </div>
    );
  }

  if (activeTab === "addresses") {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-3.5 text-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="size-4.5 text-primary" />
            <h2 className="text-sm md:text-base font-bold">آدرس‌های من</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-xs font-bold gap-1.5 hover:border-primary hover:bg-primary/10 hover:text-primary cursor-pointer"
          >
            <Plus className="size-3.5" />
            <span>افزودن آدرس جدید</span>
          </Button>
        </div>
        <div className="rounded-3xl border border-border/80 bg-card/70 p-8 shadow-2xs backdrop-blur-xs text-center flex flex-col items-center justify-center min-h-[300px]">
          <div className="grid size-16 place-items-center rounded-2xl bg-secondary text-primary mb-4 border border-primary/20">
            <MapPin className="size-8" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-1">
            هنوز آدرسی ثبت نکرده‌اید
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm mb-5">
            با افزودن آدرس تحویل سفارش، فرآیند خرید آثار هنری در آرتلیا سریع‌تر انجام می‌شود.
          </p>
          <Button className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-xs font-bold hover:bg-primary/90 cursor-pointer shadow-xs">
            افزودن اولین آدرس
          </Button>
        </div>
      </div>
    );
  }

  if (activeTab === "orders") {
    return (
      <div className="w-full">
        <div className="flex items-center gap-2 mb-3.5 text-foreground">
          <Package className="size-4.5 text-primary" />
          <h2 className="text-sm md:text-base font-bold">تاریخچه سفارش‌ها</h2>
        </div>
        <div className="rounded-3xl border border-border/80 bg-card/70 p-8 shadow-2xs backdrop-blur-xs text-center flex flex-col items-center justify-center min-h-[300px]">
          <div className="grid size-16 place-items-center rounded-2xl bg-secondary text-primary mb-4 border border-primary/20">
            <ShoppingBag className="size-8" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-1">
            سفارشی یافت نشد
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm mb-5">
            شما هنوز اثری از آرتلیا سفارش نداده‌اید. آثار منتخب گالری را مرور کنید.
          </p>
          <Button
            variant="outline"
            className="rounded-full border-border/80 hover:border-primary hover:bg-primary/10 hover:text-primary px-6 py-2.5 text-xs font-bold cursor-pointer"
          >
            مشاهده گالری آثار
          </Button>
        </div>
      </div>
    );
  }

  if (activeTab === "cart") {
    return (
      <div className="w-full">
        <div className="flex items-center gap-2 mb-3.5 text-foreground">
          <ShoppingBag className="size-4.5 text-primary" />
          <h2 className="text-sm md:text-base font-bold">سبد خرید</h2>
        </div>
        <div className="rounded-3xl border border-border/80 bg-card/70 p-8 shadow-2xs backdrop-blur-xs text-center flex flex-col items-center justify-center min-h-[300px]">
          <div className="grid size-16 place-items-center rounded-2xl bg-secondary text-primary mb-4 border border-primary/20">
            <ShoppingBag className="size-8" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-1">
            سبد خرید شما خالی است
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm mb-5">
            آثار هنری مورد علاقه خود را انتخاب کرده و به سبد خرید اضافه نمایید.
          </p>
        </div>
      </div>
    );
  }

  if (activeTab === "favorites") {
    return (
      <div className="w-full">
        <div className="flex items-center gap-2 mb-3.5 text-foreground">
          <Heart className="size-4.5 text-primary" />
          <h2 className="text-sm md:text-base font-bold">علاقه‌مندی‌ها</h2>
        </div>
        <div className="rounded-3xl border border-border/80 bg-card/70 p-8 shadow-2xs backdrop-blur-xs text-center flex flex-col items-center justify-center min-h-[300px]">
          <div className="grid size-16 place-items-center rounded-2xl bg-secondary text-primary mb-4 border border-primary/20">
            <Heart className="size-8" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-1">
            لیست علاقه‌مندی‌ها خالی است
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm mb-5">
            با کلیک بر روی آیکون قلب روی آثار هنری، آن‌ها را در این بخش ذخیره کنید.
          </p>
        </div>
      </div>
    );
  }

  if (activeTab === "settings") {
    return (
      <div className="w-full">
        <div className="flex items-center gap-2 mb-3.5 text-foreground">
          <Settings className="size-4.5 text-primary" />
          <h2 className="text-sm md:text-base font-bold">تنظیمات حساب</h2>
        </div>
        <div className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-2xs backdrop-blur-xs space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl border border-border/70 bg-card">
            <span className="text-xs text-primary font-bold">فعال</span>
            <div className="text-right">
              <p className="text-sm font-bold text-foreground">دریافت اعلان‌های پیامکی</p>
              <p className="text-xs text-muted-foreground">اطلاع‌رسانی وضعیت سفارش و ارسال آثار</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl border border-border/70 bg-card">
            <span className="text-xs text-primary font-bold">فعال</span>
            <div className="text-right">
              <p className="text-sm font-bold text-foreground">خبرنامه ایمیلی آرتلیا</p>
              <p className="text-xs text-muted-foreground">معرفی آثار برگزیده و نمایشگاه‌های جدید</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
