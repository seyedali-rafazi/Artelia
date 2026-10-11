import type { LucideIcon } from "lucide-react";

export type ProfileTabId =
  | "profile"
  | "password"
  | "addresses"
  | "orders"
  | "cart"
  | "favorites"
  | "settings";

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  joinedDate: string;
  role: string;
  avatarLetter: string;
}

export interface ProfileTabItem {
  id: ProfileTabId;
  title: string;
  icon: LucideIcon;
  badge?: string | number;
}
