"use client";

import { Calendar, Mail, Phone, User } from "lucide-react";
import type { UserProfile } from "../types";

interface ProfileInfoGridProps {
  user: UserProfile;
}

export const ProfileInfoGrid = ({ user }: ProfileInfoGridProps) => {
  const infoItems = [
    {
      id: "fullName",
      label: "نام و نام خانوادگی",
      value: user.fullName,
      icon: User,
      ltr: false,
    },
    {
      id: "email",
      label: "ایمیل",
      value: user.email,
      icon: Mail,
      ltr: true,
    },
    {
      id: "phone",
      label: "شماره تماس",
      value: user.phone,
      icon: Phone,
      ltr: false,
    },
    {
      id: "joinedDate",
      label: "عضو از:",
      value: user.joinedDate,
      icon: Calendar,
      ltr: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-6">
      {infoItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="group flex items-center justify-between rounded-2xl border border-border/70 bg-card/80 p-4 md:p-5 transition-all duration-200 hover:border-primary/30 hover:bg-card hover:shadow-2xs"
          >
            {/* Right side in RTL: Icon on the right + Label/Value */}
            <div className="flex items-center gap-3.5">
              {/* Icon Container (starts on the right in RTL) */}
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary border border-border/40 transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                <Icon className="size-5" />
              </div>

              {/* Text details */}
              <div className="flex flex-col text-right">
                <span className="text-xs text-muted-foreground font-medium mb-1">
                  {item.label}
                </span>
                <span
                  dir={item.ltr ? "ltr" : "rtl"}
                  className="text-sm md:text-base font-bold text-foreground transition-colors text-right"
                >
                  {item.value}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
