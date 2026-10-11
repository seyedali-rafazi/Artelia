import {
  Heart,
  Lock,
  MapPin,
  Settings,
  ShoppingBag,
  User,
  History,
} from "lucide-react";
import type { ProfileTabItem, UserProfile } from "./types";

export const DEFAULT_USER_PROFILE: UserProfile = {
  fullName: "سیدعلی رفظی",
  email: "seyedalirafazi80@gmail.com",
  phone: "۰۹۳۷۹۸۹۸۹۵۴",
  joinedDate: "۱۴۰۵/۰۵/۱۶",
  role: "superadmin",
  avatarLetter: "س",
};

export const PROFILE_TABS: ProfileTabItem[] = [
  {
    id: "profile",
    title: "اطلاعات حساب",
    icon: User,
  },
  {
    id: "password",
    title: "تغییر رمز عبور",
    icon: Lock,
  },
  {
    id: "addresses",
    title: "آدرس‌های من",
    icon: MapPin,
  },
  {
    id: "orders",
    title: "تاریخچه سفارش‌ها",
    icon: History,
  },
  {
    id: "cart",
    title: "سبد خرید",
    icon: ShoppingBag,
  },
  {
    id: "favorites",
    title: "علاقه‌مندی‌ها",
    icon: Heart,
  },
  {
    id: "settings",
    title: "تنظیمات حساب",
    icon: Settings,
  },
];
