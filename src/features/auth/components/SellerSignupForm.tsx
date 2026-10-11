"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  Store,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Palette,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { sellerSignupSchema, SellerSignupSchemaType } from "../schemas";
import { ART_CATEGORIES } from "../types";
import { cn } from "@/lib/utils";

interface SellerSignupFormProps {
  onSuccess?: () => void;
  className?: string;
}

export const SellerSignupForm = ({
  onSuccess,
  className,
}: SellerSignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmittingSuccess, setIsSubmittingSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SellerSignupSchemaType>({
    resolver: zodResolver(sellerSignupSchema),
    defaultValues: {
      fullName: "",
      storeName: "",
      artCategory: "painting",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: true,
    },
  });

  const onSubmit = async (data: SellerSignupSchemaType) => {
    void data;
    // Simulate seller/artist gallery registration
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
      {/* Seller Benefit Notice in Website Secondary/Accent Palette */}
      <div className="rounded-2xl border border-primary/20 bg-secondary/40 p-3 text-right text-xs leading-relaxed text-foreground">
        <p className="font-bold flex items-center gap-1.5 text-primary">
          <Palette className="size-4 text-primary" />
          <span>مزایای ویژه فروشندگان و هنرمندان آرتلیا</span>
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          امکان نمایش آثار در ویترین برگزیده، صدور شناسنامه اصالت اثر و تسویه حساب سریع.
        </p>
      </div>

      {/* Artist / Owner Full Name */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="seller-name"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <User className="size-4 text-primary" />
          <span>نام و نام خانوادگی هنرمند / مدیر گالری</span>
        </label>
        <div
          className={cn(
            "rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
            errors.fullName && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          <input
            id="seller-name"
            type="text"
            {...register("fullName")}
            placeholder="مثال: استاد علیرضا کاویانی"
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

      {/* Gallery / Studio Name */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="seller-store"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <Store className="size-4 text-primary" />
          <span>نام گالری، آتلیه یا برند هنری</span>
        </label>
        <div
          className={cn(
            "rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
            errors.storeName && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          <input
            id="seller-store"
            type="text"
            {...register("storeName")}
            placeholder="مثال: استودیو نقش جهان"
            className="w-full bg-transparent px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
          />
        </div>
        {errors.storeName && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.storeName.message}</span>
          </p>
        )}
      </div>

      {/* Specialty Category */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="seller-category"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <Palette className="size-4 text-primary" />
          <span>زمینه اصلی فعالیت هنری</span>
        </label>
        <Select
          id="seller-category"
          {...register("artCategory")}
          className="h-11 rounded-2xl border-border/60 bg-secondary/35 py-2 px-3 text-sm text-foreground focus:border-primary focus:bg-card"
        >
          {ART_CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </Select>
        {errors.artCategory && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.artCategory.message}</span>
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="seller-phone"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <Phone className="size-4 text-primary" />
          <span>شماره تماس همراه</span>
        </label>
        <div
          className={cn(
            "rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
            errors.phone && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          <input
            id="seller-phone"
            type="tel"
            dir="ltr"
            {...register("phone")}
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            autoComplete="tel"
            className="w-full bg-transparent px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
          />
        </div>
        {errors.phone && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.phone.message}</span>
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="seller-email"
          className="flex items-center gap-1.5 text-xs font-bold text-foreground"
        >
          <Mail className="size-4 text-primary" />
          <span>ایمیل کاری</span>
        </label>
        <div
          className={cn(
            "rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
            errors.email && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
          )}
        >
          <input
            id="seller-email"
            type="email"
            dir="ltr"
            {...register("email")}
            placeholder="art@gallery.com"
            autoComplete="email"
            className="w-full bg-transparent px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
          />
        </div>
        {errors.email && (
          <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>{errors.email.message}</span>
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-1.5 text-right">
        <label
          htmlFor="seller-password"
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
            id="seller-password"
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
          htmlFor="seller-confirm-password"
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
            id="seller-confirm-password"
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
                id="seller-terms"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <label
            htmlFor="seller-terms"
            className="cursor-pointer text-xs font-medium text-muted-foreground select-none"
          >
            با{" "}
            <span className="font-semibold text-primary underline">
              شرایط و قوانین فروشندگان و اصالت آثار
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
          <span>درخواست افتتاح گالری ثبت شد! در حال بررسی...</span>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || isSubmittingSuccess}
        className="w-full cursor-pointer rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[0_8px_20px_rgba(143,29,44,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_10px_24px_rgba(143,29,44,0.35)] active:scale-[0.99] disabled:opacity-60"
      >
        {isSubmitting ? "در حال ثبت درخواست..." : "ثبت‌نام و افتتاح گالری فروشنده"}
      </Button>

      {/* Security Trust Note */}
      <div className="flex items-center justify-center gap-1.5 pt-2 text-center text-xs font-medium text-muted-foreground">
        <ShieldCheck className="size-4 text-accent" />
        <span>اطلاعات شما با رمزنگاری پیشرفته محافظت می‌شود</span>
      </div>
    </form>
  );
};
