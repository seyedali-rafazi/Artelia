"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { forgotPasswordSchema, ForgotPasswordSchemaType } from "../schemas";
import { cn } from "@/lib/utils";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForgotPasswordModal = ({
  isOpen,
  onClose,
}: ForgotPasswordModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedIdentifier, setSubmittedIdentifier] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      identifier: "",
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: ForgotPasswordSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedIdentifier(data.identifier);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    reset();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="بازیابی رمز عبور"
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in-0 duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-2xl sm:p-8 animate-in zoom-in-95 duration-200 text-right">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="بستن پنجره"
          className="absolute left-5 top-5 grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer transition-colors"
        >
          <X className="size-4.5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-foreground">
                بازیابی رمز عبور
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ایمیل یا شماره همراه خود را وارد کنید تا لینک بازنشانی رمز عبور برای شما ارسال شود.
              </p>
            </div>

            <div className="space-y-1.5 pt-2">
              <label
                htmlFor="forgot-identifier"
                className="flex items-center gap-1.5 text-xs font-bold text-foreground"
              >
                <Mail className="size-3.5 text-primary" />
                <span>ایمیل یا شماره موبایل</span>
              </label>
              <div
                className={cn(
                  "rounded-2xl bg-secondary/35 transition-all border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-card",
                  errors.identifier && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
                )}
              >
                <input
                  id="forgot-identifier"
                  type="text"
                  dir="ltr"
                  {...register("identifier")}
                  placeholder="example@gmail.com یا ۰۹۱۲۳۴۵۶۷۸۹"
                  className="w-full bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden"
                />
              </div>
              {errors.identifier && (
                <p className="flex items-center gap-1 text-[11px] font-medium text-destructive animate-in fade-in-50">
                  <AlertCircle className="size-3.5 shrink-0" />
                  <span>{errors.identifier.message}</span>
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-2xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? "در حال ارسال..." : "ارسال لینک بازیابی"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4 py-3 text-center">
            <div className="mx-auto grid size-12 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-7" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-lg font-bold text-foreground">
                درخواست ارسال شد
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                دستورالعمل بازیابی رمز عبور به{" "}
                <span className="font-sans font-bold text-foreground" dir="ltr">
                  {submittedIdentifier}
                </span>{" "}
                ارسال گردید. لطفاً ایمیل یا پیامک‌های خود را بررسی نمایید.
              </p>
            </div>
            <Button
              type="button"
              onClick={handleClose}
              className="w-full rounded-2xl bg-primary py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary/90 cursor-pointer"
            >
              بازگشت به صفحه ورود
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
