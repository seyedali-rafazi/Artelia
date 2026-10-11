import { z } from "zod";

export const passwordChangeSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, "رمز عبور فعلی را وارد نمایید.")
      .min(6, "رمز عبور فعلی باید حداقل ۶ کاراکتر باشد."),
    newPassword: z
      .string()
      .min(1, "رمز عبور جدید را وارد نمایید.")
      .min(6, "رمز عبور جدید باید حداقل ۶ کاراکتر باشد."),
    confirmNewPassword: z
      .string()
      .min(1, "تکرار رمز عبور جدید را وارد نمایید."),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "رمز عبور جدید و تکرار آن یکسان نیستند.",
    path: ["confirmNewPassword"],
  });

export type PasswordChangeFormData = z.infer<typeof passwordChangeSchema>;

export const userProfileSchema = z.object({
  fullName: z
    .string()
    .min(1, "نام و نام خانوادگی الزامی است.")
    .min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد."),
  email: z
    .string()
    .min(1, "ایمیل الزامی است.")
    .email("فرمت ایمیل وارد شده معتبر نیست."),
  phone: z
    .string()
    .min(1, "شماره تماس الزامی است.")
    .refine((val) => /^(\+98|0)?9\d{9}$/.test(val.trim().replace(/\s+/g, "")), {
      message: "شماره موبایل وارد شده معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹).",
    }),
});

export type UserProfileFormData = z.infer<typeof userProfileSchema>;
