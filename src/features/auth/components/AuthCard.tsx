"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AuthLogo } from "./AuthLogo";
import { AuthTabs } from "./AuthTabs";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { AuthMode, UserType } from "../types";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  initialMode?: AuthMode;
  initialUserType?: UserType;
  className?: string;
}

export const AuthCard = ({
  initialMode = "login",
  initialUserType = "customer",
  className,
}: AuthCardProps) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const router = useRouter();

  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    // Smoothly update URL without full page reload
    if (newMode === "login") {
      window.history.replaceState(null, "", "/login");
    } else {
      window.history.replaceState(null, "", "/signup");
    }
  };

  const handleSuccess = () => {
    // Redirect to home on successful authentication
    setTimeout(() => {
      router.push("/");
    }, 800);
  };

  return (
    <div dir="rtl" className={cn("flex flex-col items-center w-full max-w-[460px]", className)}>
      {/* Return to Home Link at top right */}
      <div className="w-full flex justify-end pb-3.5 pr-2">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-bold text-foreground/80 transition-colors hover:text-primary"
        >
          <span>بازگشت به صفحه اصلی</span>
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Main Glass/Card Container */}
      <div className="w-full rounded-[32px] border border-border/80 bg-card p-6 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-9 md:p-10 dark:shadow-[0_16px_50px_rgba(0,0,0,0.4)]">
        {/* Brand Logo Emblem */}
        <div className="mb-4 flex justify-center">
          <AuthLogo />
        </div>

        {/* Dynamic Heading & Subtitle */}
        <div className="space-y-1.5 text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {mode === "login" ? "ورود به حساب کاربری" : "ایجاد حساب کاربری"}
          </h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {mode === "login"
              ? "خوش آمدید! لطفا اطلاعات ورود خود را وارد نمایید"
              : "خوش آمدید! لطفا نوع حساب و اطلاعات خود را وارد نمایید"}
          </p>
        </div>

        {/* Auth Mode Tabs (ورود / ثبت‌نام) */}
        <div className="my-5">
          <AuthTabs mode={mode} onModeChange={handleModeChange} />
        </div>

        {/* Form Body */}
        {mode === "login" ? (
          <LoginForm onSuccess={handleSuccess} />
        ) : (
          <SignupForm initialType={initialUserType} onSuccess={handleSuccess} />
        )}
      </div>
    </div>
  );
};
