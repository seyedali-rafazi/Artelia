"use client";

import { useState } from "react";
import { UserTypeSelector } from "./UserTypeSelector";
import { CustomerSignupForm } from "./CustomerSignupForm";
import { SellerSignupForm } from "./SellerSignupForm";
import { UserType } from "../types";
import { cn } from "@/lib/utils";

interface SignupFormProps {
  initialType?: UserType;
  onSuccess?: () => void;
  className?: string;
}

export const SignupForm = ({
  initialType = "customer",
  onSuccess,
  className,
}: SignupFormProps) => {
  const [userType, setUserType] = useState<UserType>(initialType);

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* User Type Switcher (Customer vs Seller) */}
      <UserTypeSelector userType={userType} onChange={setUserType} />

      {/* Conditional Form Rendering based on Selected User Type */}
      {userType === "customer" ? (
        <CustomerSignupForm onSuccess={onSuccess} />
      ) : (
        <SellerSignupForm onSuccess={onSuccess} />
      )}
    </div>
  );
};
