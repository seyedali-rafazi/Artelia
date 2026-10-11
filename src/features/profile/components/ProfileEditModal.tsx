"use client";

import { useEffect, useState } from "react";
import { User, Mail, Phone, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { UserProfile } from "../types";
import { userProfileSchema, type UserProfileFormData } from "../schemas";

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onSave: (updated: Partial<UserProfile>) => void;
}

export const ProfileEditModal = ({
  isOpen,
  onClose,
  user,
  onSave,
}: ProfileEditModalProps) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ProfileEditModalContent
      key={`${user.fullName}-${user.email}`}
      onClose={onClose}
      user={user}
      onSave={onSave}
    />
  );
};

const ProfileEditModalContent = ({
  onClose,
  user,
  onSave,
}: Omit<ProfileEditModalProps, "isOpen">) => {
  const [formData, setFormData] = useState<UserProfileFormData>({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof UserProfileFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = userProfileSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof UserProfileFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof UserProfileFormData;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSave({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        avatarLetter: formData.fullName.trim().charAt(0) || "س",
      });
      onClose();
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-profile-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-border/80 bg-card p-6 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200 text-right">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border/60">
          <h3 id="edit-profile-title" className="text-base font-bold text-foreground">
            ویرایش اطلاعات حساب
          </h3>
          <Button
            variant="ghost"
            size="bare"
            type="button"
            aria-label="بستن"
            onClick={onClose}
            className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary cursor-pointer"
          >
            <X className="size-4" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Full Name */}
          <div className="space-y-1.5 text-right">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <User className="size-3.5 text-primary" />
              <span>نام و نام خانوادگی</span>
            </label>
            <div className="relative flex items-center rounded-2xl border border-border/80 bg-background/60 px-3.5 py-2.5 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
              <Input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                }
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                className="text-right text-sm"
              />
            </div>
            {errors.fullName && (
              <p className="text-[11px] text-destructive font-medium mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5 text-right">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Mail className="size-3.5 text-primary" />
              <span>ایمیل</span>
            </label>
            <div className="relative flex items-center rounded-2xl border border-border/80 bg-background/60 px-3.5 py-2.5 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="example@mail.com"
                dir="ltr"
                className="text-right text-sm"
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-destructive font-medium mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5 text-right">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Phone className="size-3.5 text-primary" />
              <span>شماره تماس</span>
            </label>
            <div className="relative flex items-center rounded-2xl border border-border/80 bg-background/60 px-3.5 py-2.5 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                className="text-right text-sm"
              />
            </div>
            {errors.phone && (
              <p className="text-[11px] text-destructive font-medium mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/60">
            <Button
              variant="outline"
              size="sm"
              type="button"
              onClick={onClose}
              className="rounded-xl px-5 cursor-pointer"
            >
              انصراف
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 text-xs font-bold cursor-pointer gap-2"
            >
              <Check className="size-3.5" />
              <span>{isSubmitting ? "در حال ذخیره..." : "ذخیره اطلاعات"}</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
