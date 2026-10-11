"use client";

import { useState } from "react";
import { User } from "lucide-react";
import type { UserProfile } from "../types";
import { ProfileHeaderCard } from "./ProfileHeaderCard";
import { ProfileInfoGrid } from "./ProfileInfoGrid";
import { PasswordChangeSection } from "./PasswordChangeSection";
import { ProfileEditModal } from "./ProfileEditModal";

interface ProfileInfoTabProps {
  user: UserProfile;
  onUpdateUser: (updated: Partial<UserProfile>) => void;
}

export const ProfileInfoTab = ({
  user,
  onUpdateUser,
}: ProfileInfoTabProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Subheading above main card */}
      <div className="flex items-center gap-2 mb-4 text-foreground py-1">
        <User className="size-5 text-primary shrink-0" />
        <h2 className="text-xl md:text-2xl font-black text-foreground leading-none">اطلاعات حساب</h2>
      </div>

      {/* Main Container Card */}
      <div className="rounded-3xl border border-border/80 bg-card/70 p-4 sm:p-6 md:p-8 shadow-2xs backdrop-blur-xs transition-all">
        {/* User Identity Banner */}
        <ProfileHeaderCard
          user={user}
          onEditClick={() => setIsEditModalOpen(true)}
        />

        {/* 4 Details Cards Grid */}
        <ProfileInfoGrid user={user} />

        {/* Change Password Section */}
        <PasswordChangeSection />
      </div>

      {/* Edit Profile Modal */}
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={onUpdateUser}
      />
    </div>
  );
};
