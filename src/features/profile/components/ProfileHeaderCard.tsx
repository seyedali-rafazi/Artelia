"use client";

import { Pencil, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UserProfile } from "../types";

interface ProfileHeaderCardProps {
  user: UserProfile;
  onEditClick: () => void;
}

export const ProfileHeaderCard = ({
  user,
  onEditClick,
}: ProfileHeaderCardProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6">
      {/* Right side (in RTL): Avatar + Name + Email + Role */}
      <div className="flex items-center gap-4">
        {/* Avatar Squircle */}
        <div className="grid size-16 md:size-20 shrink-0 place-items-center rounded-2xl md:rounded-3xl bg-secondary text-2xl md:text-3xl font-extrabold text-primary shadow-2xs border border-primary/20">
          {user.avatarLetter || user.fullName.charAt(0)}
        </div>

        {/* User Info Stack */}
        <div className="flex flex-col items-start text-right">
          <h2 className="text-lg md:text-xl font-black text-foreground">
            {user.fullName}
          </h2>
          <span
            dir="ltr"
            className="text-xs md:text-sm text-muted-foreground font-mono mt-0.5 text-right"
          >
            {user.email}
          </span>

          {/* Role Badge */}
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary shadow-2xs">
            <span className="font-sans lowercase">{user.role}</span>
            <ShieldCheck className="size-3.5 text-primary" />
          </div>
        </div>
      </div>

      {/* Left side (in RTL): Edit Profile Button */}
      <div className="flex items-center self-start sm:self-center">
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={onEditClick}
          className="group rounded-full border-border/80 bg-card px-4 py-2 text-xs font-bold text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary cursor-pointer shadow-2xs gap-2"
        >
          <span>ویرایش پروفایل</span>
          <Pencil className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
        </Button>
      </div>
    </div>
  );
};
