import type { Metadata } from "next";
import { AuthCard, AuthPageLayout } from "@/features/auth";

export const metadata: Metadata = {
  title: "ورود به حساب کاربری | آرتلیا",
  description: "ورود به حساب کاربری آرتلیا برای دسترسی به آثار هنری، گالری شخصی و پیگیری سفارشات",
};

export default function LoginPage() {
  return (
    <AuthPageLayout>
      <AuthCard initialMode="login" />
    </AuthPageLayout>
  );
}
