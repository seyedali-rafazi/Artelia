"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLoginButton } from "./SocialLoginButton";
import { ForgotPasswordModal } from "./ForgotPasswordModal";
import { loginSchema, LoginSchemaType } from "../schemas";
import { cn } from "@/lib/utils";

interface LoginFormProps {
  onSuccess?: () => void;
  className?: string;
}

export const LoginForm = ({ onSuccess, className }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isSubmittingSuccess, setIsSubmittingSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "seyedalirafazi80@gmail.com",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    void data;
    // Simulate authentication processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmittingSuccess(true);
    setTimeout(() => {
      onSuccess?.();
    }, 1200);
  };

  return (
    <div dir="rtl" className={cn("w-full space-y-5", className)}>
      {/* Quick Google Auth Button */}
      <SocialLoginButton
        email="seyedalirafazi80@gmail.com"
        userName="Ali"
        onSuccess={() => {
          setIsSubmittingSuccess(true);
          setTimeout(() => onSuccess?.(), 1000);
        }}
      />

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-border/70" />
        <span className="absolute bg-card px-3 text-xs font-medium text-muted-foreground">
          یا با ایمیل
        </span>
      </div>

      {/* Login Form with react-hook-form & Zod */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Identifier Field (Email / Mobile) */}
        <div className="space-y-1.5 text-right">
          <label
            htmlFor="login-identifier"
            className="flex items-center gap-1.5 text-xs font-bold text-foreground"
          >
            <Mail className="size-4 text-primary" />
            <span>ایمیل یا شماره موبایل</span>
          </label>
          <div
            className={cn(
              "relative rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
              errors.identifier && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
            )}
          >
            <input
              id="login-identifier"
              type="text"
              dir="ltr"
              {...register("identifier")}
              placeholder="example@gmail.com یا ۰۹۱۲..."
              autoComplete="username"
              className="w-full bg-transparent px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
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
          <div className="flex items-center justify-between">
            <label
              htmlFor="login-password"
              className="flex items-center gap-1.5 text-xs font-bold text-foreground"
            >
              <Lock className="size-4 text-primary" />
              <span>رمز عبور</span>
            </label>
            <button
              type="button"
              onClick={() => setIsForgotModalOpen(true)}
              className="text-xs font-semibold text-primary transition-colors hover:text-primary/80 hover:underline cursor-pointer"
            >
              فراموشی رمز عبور؟
            </button>
          </div>
          <div
            className={cn(
              "relative flex items-center rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
              errors.password && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
            )}
          >
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              dir="ltr"
              {...register("password")}
              placeholder="رمز عبور خود را وارد نمایید"
              autoComplete="current-password"
              className="w-full bg-transparent pr-4 pl-12 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-hidden"
            />
            {/* Eye toggle on left in RTL */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "پنهان کردن رمز عبور" : "نمایش رمز عبور"}
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

        {/* Success notification */}
        {isSubmittingSuccess && (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 animate-in fade-in-50">
            <CheckCircle2 className="size-4 shrink-0" />
            <span>ورود با موفقیت انجام شد. در حال انتقال...</span>
          </div>
        )}

        {/* Submit Button with Website Primary Color */}
        <Button
          type="submit"
          disabled={isSubmitting || isSubmittingSuccess}
          className="w-full cursor-pointer rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[0_8px_20px_rgba(143,29,44,0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_10px_24px_rgba(143,29,44,0.35)] active:scale-[0.99] disabled:opacity-60"
        >
          {isSubmitting ? "در حال ورود..." : "ورود به حساب کاربری"}
        </Button>
      </form>

      {/* Security Trust Note */}
      <div className="flex items-center justify-center gap-1.5 pt-2 text-center text-xs font-medium text-muted-foreground">
        <ShieldCheck className="size-4 text-accent" />
        <span>اطلاعات شما با رمزنگاری پیشرفته محافظت می‌شود</span>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
      />
    </div>
  );
};
