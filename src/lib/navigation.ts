export type NavLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: NavLink[];
};

export const mainNav: NavLink[] = [
  { label: "صفحه اصلی", href: "/" },
  { label: "هنرمندان", href: "/artists" },
  { label: "محصولات", href: "/products" },
  { label: "درباره ما", href: "/about-us" },
  { label: "وبلاگ", href: "#" },
];

export const footerNav: NavLink[] = [...mainNav, { label: "تماس با ما", href: "#" }];

export const footerSections: FooterSection[] = [
  {
    title: "کشف و خرید آثار",
    links: [
      { label: "نقاشی و طراحی", href: "#" },
      { label: "عکاسی فاخر", href: "#" },
      { label: "مجسمه‌سازی و حجم", href: "#" },
      { label: "خوشنویسی و کالیگرافی", href: "#" },
      { label: "هنر دیجیتال و تصویرسازی", href: "#" },
      { label: "جدیدترین آثار اضافه شده", href: "#" },
    ],
  },
  {
    title: "خدمات هنرمندان",
    links: [
      { label: "عضویت و ایجاد گالری", href: "#" },
      { label: "راهنمای فروش اثر هنری", href: "#" },
      { label: "استانداردهای قیمت‌گذاری و اصالت", href: "#" },
      { label: "بسته‌بندی و ارسال استاندارد", href: "#" },
      { label: "نمایشگاه‌ها و حراجی‌های آنلاین", href: "#" },
      { label: "پرسش‌های متداول هنرمندان", href: "#" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { label: "راهنمای خرید و پرداخت", href: "#" },
      { label: "شیوه‌های ارسال و بیمه تخصصی", href: "#" },
      { label: "ضمانت ۷ روزه بازگشت اثر", href: "#" },
      { label: "مشاوره رایگان انتخاب و چیدمان", href: "#" },
      { label: "پیگیری سفارشات", href: "#" },
      { label: "پرسش‌های متداول خریداران", href: "#" },
    ],
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "حریم خصوصی", href: "#" },
  { label: "شرایط و قوانین استفاده", href: "#" },
  { label: "فرصت‌های شغلی", href: "#" },
  { label: "نقشه سایت", href: "#" },
];

export const footerContactInfo = {
  phoneDisplay: "۰۲۱ - ۸۸۹۹۲۴۵۶",
  phoneTel: "tel:02188992456",
  emailDisplay: "info@artelia.art",
  emailMailto: "mailto:info@artelia.art",
  address: "تهران، خیابان ولیعصر، بالاتر از پارک ساعی، برج هنر، طبقه ۴",
  workingHours: "شنبه تا چهارشنبه ۹:۰۰ الی ۱۸:۰۰ | پنجشنبه ۹:۰۰ الی ۱۳:۰۰",
};

