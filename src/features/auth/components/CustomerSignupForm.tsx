"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { customerSignupSchema, CustomerSignupSchemaType } from "../schemas";
import { cn } from "@/lib/utils";

interface CustomerSignupFormProps {
  onSuccess?: () => void;
  className?: string;
}

export const CustomerSignupForm = ({
  onSuccess,
  className,
}: CustomerSignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmittingSuccess, setIsSubmittingSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CustomerSignupSchemaType>({
    resolver: zodResolver(customerSignupSchema),
    defaultValues: {
      fullName: "",
      identifier: "",
      password: "",
      confirmPassword: "",
      agreeTerms: true,
    },
  });

  const onSubmit = async (data: CustomerSignupSchemaType) => {
    void data;
    // Simulate customer registration
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmittingSuccess(true);
    setTimeout(() => {
      onSuccess?.();
    }, 1200);
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit(onSubmit)}
      className={cn("w-full space-y-4 animate-in fade-in duration-200", className)}
    >
      {/* Full Name Field */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="customer-name"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <User className="size-4 text-primary" />
          <span>نام و نام خانوادگی</span>
        </label>
        <div
          className={cn(
            "rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
            errors.fullName && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          <input
            id="customer-name"
            type="text"
            {...register("fullName")}
            placeholder="مثال: سارا محمدی"
            autoComplete="name"
            className="w-full bg-transparent px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
          />
        </div>
        {errors.fullName && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.fullName.message}</span>
          </p>
        )}
      </div>

      {/* Email / Mobile Field */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="customer-identifier"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <Mail className="size-4 text-primary" />
          <span>ایمیل یا شماره موبایل</span>
        </label>
        <div
          className={cn(
            "rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
            errors.identifier && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          <input
            id="customer-identifier"
            type="text"
            dir="ltr"
            {...register("identifier")}
            placeholder="example@gmail.com یا ۰۹۱۲..."
            autoComplete="email"
            className="w-full bg-transparent px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
          />
        </div>
        {errors.identifier && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.identifier.message}</span>
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="customer-password"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <Lock className="size-4 text-primary" />
          <span>رمز عبور</span>
        </label>
        <div
          className={cn(
            "relative flex items-center rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
            errors.password && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          <input
            id="customer-password"
            type={showPassword ? "text" : "password"}
            dir="ltr"
            {...register("password")}
            placeholder="حداقل ۶ کاراکتر"
            autoComplete="new-password"
            className="w-full bg-transparent pr-4 pl-12 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "پنهان کردن رمز" : "نمایش رمز"}
            className="absolute left-3.5 grid size-7 place-items-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            {showPassword ? (
              <EyeOff className="size-4.5" />
            ) : (
              <Eye className="size-4.5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.password.message}</span>
          </p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="customer-confirm-password"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <Lock className="size-4 text-primary" />
          <span>تکرار رمز عبور</span>
        </label>
        <div
          className={cn(
            "relative flex items-center rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
            errors.confirmPassword && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          <input
            id="customer-confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            dir="ltr"
            {...register("confirmPassword")}
            placeholder="تکرار رمز عبور"
            autoComplete="new-password"
            className="w-full bg-transparent pr-4 pl-12 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            aria-label={showConfirmPassword ? "پنهان کردن رمز" : "نمایش رمز"}
            className="absolute left-3.5 grid size-7 place-items-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            {showConfirmPassword ? (
              <EyeOff className="size-4.5" />
            ) : (
              <Eye className="size-4.5" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.confirmPassword.message}</span>
          </p>
        )}
      </div>

      {/* Terms & Conditions with Controller */}
      <div className="space-y-1 pt-1 text-right">
        <div className="flex items-center gap-2.5">
          <Controller
            control={control}
            name="agreeTerms"
            render={({ field }) => (
              <Checkbox
                id="customer-terms"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <label
            htmlFor="customer-terms"
            className="cursor-pointer text-xs font-medium text-muted-foreground select-none"
          >
            با{" "}
            <span className="font-semibold text-primary underline">
              شرایط و قوانین آرتلیا
            </span>{" "}
            موافقم.
          </label>
        </div>
        {errors.agreeTerms && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.agreeTerms.message}</span>
          </p>
        )}
      </div>

      {/* Success notification */}
      {isSubmittingSuccess && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 animate-in fade-in-50">
          <CheckCircle2 className="size-4 shrink-0" />
          <span>حساب کاربری شما با موفقیت ایجاد شد! در حال انتقال...</span>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || isSubmittingSuccess}
        className="w-full cursor-pointer rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[0_8px_20px_rgba(143,29,44,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_10px_24px_rgba(143,29,44,0.35)] active:scale-[0.99] disabled:opacity-60"
      >
        {isSubmitting ? "در حال ثبت‌نام..." : "ثبت‌نام و ایجاد حساب خریدار"}
      </Button>

      {/* Security Trust Note */}
      <div className="flex items-center justify-center gap-1.5 pt-2 text-center text-xs font-medium text-muted-foreground">
        <ShieldCheck className="size-4 text-accent" />
        <span>اطلاعات شما با رمزنگاری پیشرفته محافظت می‌شود</span>
      </div>
    </form>
  );
};
