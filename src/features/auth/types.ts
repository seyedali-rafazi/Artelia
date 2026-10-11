export type AuthMode = "login" | "signup";

export type UserType = "customer" | "seller";

export {
  type LoginSchemaType as LoginFormData,
  type CustomerSignupSchemaType as CustomerSignupFormData,
  type SellerSignupSchemaType as SellerSignupFormData,
  type ForgotPasswordSchemaType as ForgotPasswordFormData,
} from "./schemas";

export interface AuthFormState {
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
}

export const ART_CATEGORIES = [
  { value: "painting", label: "نقاشی و طراحی" },
  { value: "sculpture", label: "مجسمه‌سازی و حجم" },
  { value: "photography", label: "عکاسی فاخر" },
  { value: "calligraphy", label: "خوشنویسی و کالیگرافی" },
  { value: "digital_art", label: "هنر دیجیتال و تصویرسازی" },
  { value: "handicrafts", label: "صنایع دستی و هنرهای سنتی" },
  { value: "other", label: "سایر زمینه‌ها" },
] as const;
