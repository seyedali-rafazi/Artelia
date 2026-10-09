import {
  Brush,
  Camera,
  Image,
  LayoutGrid,
  Layers,
  Palette,
  PenTool,
  Shapes,
} from "lucide-react";
import type { Artist, Artwork, Category, HeroSlide } from "../types";

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/mainphoto1.png",
    responsiveImage: "/mainphotoresponsive1.webp",
    alt: "کشف و خرید آثار هنری اصیل",
    badge: "آثاری الهام‌بخش از دنیای هنرمندان",
    title: "کشف و خرید آثار هنری",
    highlight: "از هنرمندان مستقل",
    description:
      "در Artelia، هر هنرمند صفحه اختصاصی خودش را دارد. آثاری اصیل، متفاوت و منحصربه‌فرد را مستقیماً از هنرمندان خریداری کنید.",
  },
  {
    id: "slide-2",
    image: "/mainphoto2.webp",
    responsiveImage: "/mainphotoresponsive2.webp",
    alt: "کارگاه خلاقیت و شاهکارهای معاصر",
    badge: "کارگاه خلاقیت و شاهکارهای معاصر",
    title: "شکوفایی و خلاقیت",
    highlight: "در جامعه هنری آرتلیا",
    description:
      "مجموعه‌ای دست‌چین از ابزارها، تندیس‌ها و نقاشی‌های ناب با بهترین اصالت و کیفیت، برای دوستداران هنر معاصر.",
  },
];

export const heroChips = ["نقاشی", "طراحی", "عکاسی", "خوشنویسی", "مجسمه‌سازی"];

export const categories: Category[] = [
  { label: "نقاشی", icon: Palette },
  { label: "طراحی", icon: Brush },
  { label: "عکاسی", icon: Camera },
  { label: "خوشنویسی", icon: PenTool },
  { label: "مجسمه سازی", icon: Shapes },
  { label: "چاپ دیجیتال", icon: Image },
  { label: "گرافیک", icon: Layers },
  { label: "سایر", icon: LayoutGrid },
];

export const featuredArtists: Artist[] = [
  {
    name: "مریم احمدی",
    productCount: "۱۲",
    coverGradient: "from-amber-300 via-orange-400 to-emerald-800",
  },
  {
    name: "علی کاظمی",
    productCount: "۸",
    coverGradient: "from-stone-500 via-amber-700 to-stone-900",
  },
  {
    name: "سارا نادری",
    productCount: "۱۵",
    coverGradient: "from-red-400 via-orange-300 to-emerald-700",
  },
  {
    name: "رضا کاوه",
    productCount: "۹",
    coverGradient: "from-sky-300 via-teal-500 to-emerald-900",
  },
  {
    name: "نگین فراهانی",
    productCount: "۷",
    coverGradient: "from-amber-100 via-amber-200 to-stone-700",
  },
];

const PRICE = "۲,۸۰۰,۰۰۰ تومان";

export const latestArtworks: Artwork[] = [
  {
    title: "پاییز در کنار دریاچه",
    artist: "مریم احمدی",
    price: PRICE,
    coverGradient: "from-orange-300 via-red-500 to-amber-900",
  },
  {
    title: "رقص عشق",
    artist: "نگین فراهانی",
    price: PRICE,
    coverGradient: "from-amber-100 via-orange-200 to-stone-600",
  },
  {
    title: "کوچه‌های قدیمی",
    artist: "سارا نادری",
    price: PRICE,
    coverGradient: "from-orange-200 via-amber-600 to-sky-700",
  },
  {
    title: "طعم زندگی",
    artist: "رضا کاوه",
    price: PRICE,
    coverGradient: "from-red-700 via-red-900 to-emerald-900",
  },
  {
    title: "تکامل",
    artist: "علی کاظمی",
    price: PRICE,
    coverGradient: "from-red-600 via-rose-900 to-stone-950",
    coverImage: "/mainphoto1.png",
  },
];
