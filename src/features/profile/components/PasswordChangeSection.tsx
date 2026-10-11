"use client";

import { useState } from "react";
import { Check, Eye, EyeOff, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { passwordChangeSchema, type PasswordChangeFormData } from "../schemas";

export const PasswordChangeSection = () => {
  const [formData, setFormData] = useState<PasswordChangeFormData>({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errors, setErrors] = useState<Partial<Record<keyof PasswordChangeFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrors({});

    const result = passwordChangeSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof PasswordChangeFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof PasswordChangeFormData;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("رمز عبور شما با موفقیت به‌روزرسانی شد.");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      setTimeout(() => setSuccessMessage(null), 4000);
    }, 700);
  };

  return (
    <div className="rounded-2xl border border-border/70 bg-card/40 p-5 md:p-6 transition-colors">
      <h3 className="text-sm md:text-base font-bold text-foreground text-right mb-5">
        تغییر رمز عبور
      </h3>

      {successMessage && (
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs md:text-sm font-medium text-emerald-600 dark:text-emerald-400">
          <Check className="size-4 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Field 1: Current Password */}
        <div className="space-y-1.5 text-right">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Lock className="size-3.5 text-primary" />
            <span>رمز عبور فعلی</span>
          </label>
          <div className="relative">
            <Input
              type={showCurrent ? "text" : "password"}
              value={formData.currentPassword}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, currentPassword: e.target.value }))
              }
              placeholder="••••••••"
              dir="ltr"
              className="h-11 rounded-2xl border-border/80 bg-background/60 pl-11 pr-4 text-right tracking-widest font-mono text-sm placeholder:tracking-normal placeholder:font-sans focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button
              variant="ghost"
              size="bare"
              type="button"
              tabIndex={-1}
              aria-label={showCurrent ? "مخفی‌سازی رمز عبور" : "نمایش رمز عبور"}
              onClick={() => setShowCurrent((prev) => !prev)}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 transition-colors hover:text-primary cursor-pointer p-1"
            >
              {showCurrent ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </Button>
          </div>
          {errors.currentPassword && (
            <p className="text-[11px] text-destructive font-medium mt-1">
              {errors.currentPassword}
            </p>
          )}
        </div>

        {/* Field 2: New Password */}
        <div className="space-y-1.5 text-right">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Lock className="size-3.5 text-primary" />
            <span>رمز عبور جدید</span>
          </label>
          <div className="relative">
            <Input
              type={showNew ? "text" : "password"}
              value={formData.newPassword}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
              }
              placeholder="••••••••"
              dir="ltr"
              className="h-11 rounded-2xl border-border/80 bg-background/60 pl-11 pr-4 text-right tracking-widest font-mono text-sm placeholder:tracking-normal placeholder:font-sans focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button
              variant="ghost"
              size="bare"
              type="button"
              tabIndex={-1}
              aria-label={showNew ? "مخفی‌سازی رمز عبور" : "نمایش رمز عبور"}
              onClick={() => setShowNew((prev) => !prev)}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 transition-colors hover:text-primary cursor-pointer p-1"
            >
              {showNew ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </Button>
          </div>
          {errors.newPassword && (
            <p className="text-[11px] text-destructive font-medium mt-1">
              {errors.newPassword}
            </p>
          )}
        </div>

        {/* Field 3: Confirm New Password */}
        <div className="space-y-1.5 text-right">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Lock className="size-3.5 text-primary" />
            <span>تأیید رمز عبور جدید</span>
          </label>
          <div className="relative">
            <Input
              type={showConfirm ? "text" : "password"}
              value={formData.confirmNewPassword}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, confirmNewPassword: e.target.value }))
              }
              placeholder="••••••••"
              dir="ltr"
              className="h-11 rounded-2xl border-border/80 bg-background/60 pl-11 pr-4 text-right tracking-widest font-mono text-sm placeholder:tracking-normal placeholder:font-sans focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button
              variant="ghost"
              size="bare"
              type="button"
              tabIndex={-1}
              aria-label={showConfirm ? "مخفی‌سازی رمز عبور" : "نمایش رمز عبور"}
              onClick={() => setShowConfirm((prev) => !prev)}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 transition-colors hover:text-primary cursor-pointer p-1"
            >
              {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </Button>
          </div>
          {errors.confirmNewPassword && (
            <p className="text-[11px] text-destructive font-medium mt-1">
              {errors.confirmNewPassword}
            </p>
          )}
        </div>

        {/* Save button (aligned to bottom left in RTL) */}
        <div className="flex justify-end pt-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 text-xs md:text-sm font-bold shadow-xs transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 gap-2"
          >
            <Check className="size-4" />
            <span>{isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}</span>
          </Button>
        </div>
      </form>
    </div>
  );
};
