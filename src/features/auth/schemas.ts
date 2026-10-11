import { z } from "zod";

/**
 * Validates an email or an Iranian mobile phone number
 */
const identifierSchema = z
  .string()
  .min(1, "لطفاً ایمیل یا شماره موبایل خود را وارد نمایید.")
  .refine(
    (val) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^(\+98|0)?9\d{9}$/;
      const cleaned = val.trim().replace(/\s+/g, "");
      return emailRegex.test(cleaned) || phoneRegex.test(cleaned);
    },
    {
      message: "فرمت ایمیل یا شماره موبایل وارد شده معتبر نیست.",
    },
  );

export const loginSchema = z.object({
  identifier: identifierSchema,
  password: z
    .string()
    .min(1, "رمز عبور را وارد نمایید.")
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
  rememberMe: z.boolean().optional(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const customerSignupSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "نام و نام خانوادگی الزامی است.")
      .min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد."),
    identifier: identifierSchema,
    password: z
      .string()
      .min(1, "رمز عبور الزامی است.")
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
    confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است."),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: "پذیرش شرایط و قوانین آرتلیا الزامی است.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند.",
    path: ["confirmPassword"],
  });

export type CustomerSignupSchemaType = z.infer<typeof customerSignupSchema>;

export const sellerSignupSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "نام و نام خانوادگی هنرمند یا مدیر الزامی است.")
      .min(3, "نام باید حداقل ۳ کاراکتر باشد."),
    storeName: z
      .string()
      .min(1, "نام گالری، استودیو یا برند هنری الزامی است.")
      .min(2, "نام برند باید حداقل ۲ کاراکتر باشد."),
    artCategory: z.string().min(1, "انتخاب زمینه تخصصی فعالیت هنری الزامی است."),
    phone: z
      .string()
      .min(1, "شماره تماس همراه الزامی است.")
      .refine(
        (val) => /^(\+98|0)?9\d{9}$/.test(val.trim().replace(/\s+/g, "")),
        { message: "شماره موبایل وارد شده معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹)." },
      ),
    email: z
      .string()
      .min(1, "ایمیل کاری الزامی است.")
      .email("فرمت ایمیل کاری وارد شده معتبر نیست."),
    password: z
      .string()
      .min(1, "رمز عبور الزامی است.")
      .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
    confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است."),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: "پذیرش ضوابط و شرایط فروشندگان الزامی است.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند.",
    path: ["confirmPassword"],
  });

export type SellerSignupSchemaType = z.infer<typeof sellerSignupSchema>;

export const forgotPasswordSchema = z.object({
  identifier: identifierSchema,
});

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
