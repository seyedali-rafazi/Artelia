import { Suspense } from "react";
import type { Metadata } from "next";
import { AuthCard, AuthPageLayout, UserType } from "@/features/auth";

export const metadata: Metadata = {
  title: "ثبت‌نام در آرتلیا | خریداران و فروشندگان آثار هنری",
  description:
    "ایجاد حساب کاربری در گالری آرتلیا برای خریداران آثار و فروشندگان و هنرمندان",
};

interface SignupPageProps {
  searchParams?: Promise<{ type?: string }>;
}

const SignupCardContent = async ({ searchParams }: SignupPageProps) => {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialType: UserType =
    resolvedParams?.type === "seller" ? "seller" : "customer";

  return <AuthCard initialMode="signup" initialUserType={initialType} />;
};

export default function SignupPage({ searchParams }: SignupPageProps) {
  return (
    <AuthPageLayout>
      <Suspense fallback={<AuthCard initialMode="signup" initialUserType="customer" />}>
        <SignupCardContent searchParams={searchParams} />
      </Suspense>
    </AuthPageLayout>
  );
}
