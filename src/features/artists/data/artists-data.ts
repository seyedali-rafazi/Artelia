import type { ArtistDetailItem, ArtistItem } from "../types";

export const mockArtists: ArtistItem[] = [
  {
    id: "1",
    name: "نگار سمیعی",
    specialty: "نقاشی، آبرنگ",
    category: "نقاشی",
    city: "تهران",
    rating: 4.9,
    reviewCount: 34,
    image: "/artists/artist-negar.jpg",
    isOnline: true,
    activityType: "همه موارد",
  },
  {
    id: "2",
    name: "علی رضایی",
    specialty: "مجسمه‌سازی",
    category: "مجسمه‌سازی",
    city: "تهران",
    rating: 4.8,
    reviewCount: 28,
    image: "/artists/artist-ali.jpg",
    isOnline: true,
    activityType: "همه موارد",
  },
  {
    id: "3",
    name: "سارا احمدی",
    specialty: "هنرمند سفال و سرامیک دست‌ساز",
    category: "سفال و سرامیک",
    city: "تهران",
    rating: 4.8,
    reviewCount: 42,
    image: "/artists/artist-sara.jpg",
    isOnline: true,
    activityType: "همه موارد",
  },
  {
    id: "4",
    name: "مهدی کریمی",
    specialty: "طراحی، گرافیک",
    category: "طراحی",
    city: "اصفهان",
    rating: 4.7,
    reviewCount: 19,
    image: "/artists/artist-mehdi.webp",
    isOnline: true,
    activityType: "همه موارد",
  },
  {
    id: "5",
    name: "فرهاد نادری",
    specialty: "مجسمه‌سازی",
    category: "مجسمه‌سازی",
    city: "مشهد",
    rating: 4.9,
    reviewCount: 56,
    image: "/artists/artist-farhad.png",
    isOnline: true,
    activityType: "همه موارد",
  },
  {
    id: "6",
    name: "شیما خاکی",
    specialty: "عکاسی",
    category: "عکاسی",
    city: "تهران",
    rating: 4.8,
    reviewCount: 22,
    image: "/artists/artist-shima.webp",
    isOnline: true,
    activityType: "همه موارد",
  },
  {
    id: "7",
    name: "کامران پور",
    specialty: "نقاشی، منظره",
    category: "نقاشی",
    city: "شیراز",
    rating: 4.6,
    reviewCount: 15,
    image: "/artists/artist-kamran.webp",
    isOnline: true,
    activityType: "همه موارد",
  },
  {
    id: "8",
    name: "آرمان طاهری",
    specialty: "هنر دیجیتال",
    category: "هنر دیجیتال",
    city: "تهران",
    rating: 4.8,
    reviewCount: 31,
    image: "/artists/artist-arman.jpg",
    isOnline: true,
    activityType: "همه موارد",
  },
];

export const quickCategories = [
  "همه هنرمندان",
  "نقاشی",
  "عکاسی",
  "مجسمه‌سازی",
  "هنر دیجیتال",
  "طراحی",
  "هنر تجسمی",
  "سایر",
];

export const filterCategories = [
  "همه دسته‌بندی‌ها",
  "نقاشی",
  "عکاسی",
  "مجسمه‌سازی",
  "طراحی",
  "هنر دیجیتال",
  "سایر دسته‌بندی‌ها",
];

export const filterCities = [
  "تهران",
  "اصفهان",
  "مشهد",
  "شیراز",
  "سایر شهرها",
];

export const filterRatings = [
  { stars: 5, label: "۵ ستاره و بالاتر" },
  { stars: 4, label: "۴ ستاره و بالاتر" },
  { stars: 3, label: "۳ ستاره و بالاتر" },
];

export const filterActivityTypes = [
  "همه موارد",
  "فروش اثر",
  "سفارش اثر اختصاصی",
  "نمایشگاه و گالری",
  "آموزش و منتورینگ",
];

export const saraAhmadiDetail: ArtistDetailItem = {
  id: "3",
  name: "سارا احمدی",
  specialty: "هنرمند سفال و سرامیک دست‌ساز",
  category: "سفال و سرامیک",
  city: "تهران",
  location: "تهران، ایران",
  rating: 4.8,
  reviewCount: 42,
  image: "/artists/artist-sara.jpg",
  isOnline: true,
  activityType: "همه موارد",
  bannerImage: "/artist-banner.webp",
  isVerified: true,
  bio: "من سارا احمدی هستم، هنرمند سفال و سرامیک. الهام من از طبیعت، فرم‌های کهن و زندگی روزمره است. در آثارم تلاش می‌کنم زیبایی سادگی را با دست‌های خودم خلق کنم.",
  stats: {
    worksCount: 128,
    followersCount: "۲.۴ هزار",
    followingCount: 38,
  },
  highlights: [
    {
      id: "h1",
      title: "پشت صحنه",
      image: "/highlights/behind-scenes.jpg",
    },
    {
      id: "h2",
      title: "فرآیند ساخت",
      image: "/highlights/craft-process.jpg",
    },
    {
      id: "h3",
      title: "سفارش اختصاصی",
      image: "/highlights/custom-order.jpg",
    },
    {
      id: "h4",
      title: "نمایشگاه‌ها",
      image: "/highlights/exhibitions.jpg",
    },
  ],
  aboutFeatures: [
    { id: "af-1", text: "هنرمند تأییدشده", icon: "verified" },
    { id: "af-2", text: "ارسال به سراسر ایران", icon: "shipping" },
    { id: "af-3", text: "امکان سفارش اختصاصی", icon: "customOrder" },
  ],
  artistInfo: [
    { id: "ai-1", label: "سبک کاری", value: "سفال و سرامیک", icon: "style" },
    { id: "ai-2", label: "سال فعالیت", value: "۱۳۹۵", icon: "calendar" },
    { id: "ai-3", label: "محل کار", value: "تهران، ایران", icon: "location" },
  ],
  quote: "«هنر، زبان بی‌کلام روح است.»",
  quoteBgImage: "/artists/quote-card-bg.jpg",
  products: [
    {
      id: "art-prod-1",
      title: "بشقاب دکوراتیو سرامیکی",
      price: 1450000,
      image: "/products/plate-decorative.jpg",
      inStock: true,
      productId: "prod-4",
    },
    {
      id: "art-prod-2",
      title: "ماگ دست‌ساز",
      price: 950000,
      image: "/products/mug-blue.jpg",
      inStock: true,
      productId: "prod-2",
    },
    {
      id: "art-prod-3",
      title: "کاسه سرامیکی لعابی",
      price: 1200000,
      image: "/products/bowl-glazed-red.jpg",
      inStock: true,
      productId: "prod-1",
    },
    {
      id: "art-prod-4",
      title: "گلدان سرامیکی طرح موج",
      price: 1800000,
      image: "/products/vase-swirl-wave.jpg",
      inStock: true,
      productId: "prod-4",
    },
  ],
};

export const getArtistById = (id: string): ArtistDetailItem | undefined => {
  if (id === "3") {
    return saraAhmadiDetail;
  }

  const base = mockArtists.find((a) => a.id === id);
  if (!base) return undefined;

  return {
    ...base,
    bannerImage: "/artist-banner.webp",
    location: `${base.city}، ایران`,
    bio: `من ${base.name} هستم، فعال در زمینه ${base.specialty}. در آثارم تلاش می‌کنم اصالت هنر و زیبایی را در قالب‌های مدرن بازآفرینی کنم.`,
    isVerified: true,
    stats: {
      worksCount: 84,
      followersCount: "۱.۸ هزار",
      followingCount: 26,
    },
    highlights: saraAhmadiDetail.highlights,
    aboutFeatures: [
      { id: "af-1", text: "هنرمند تأییدشده", icon: "verified" },
      { id: "af-2", text: "ارسال به سراسر ایران", icon: "shipping" },
      { id: "af-3", text: "امکان سفارش اختصاصی", icon: "customOrder" },
    ],
    artistInfo: [
      { id: "ai-1", label: "سبک کاری", value: base.specialty, icon: "style" },
      { id: "ai-2", label: "سال فعالیت", value: "۱۳۹۷", icon: "calendar" },
      { id: "ai-3", label: "محل کار", value: `${base.city}، ایران`, icon: "location" },
    ],
    quote: "«هنر، زبان بی‌کلام روح است.»",
    quoteBgImage: "/artists/quote-card-bg.jpg",
    products: saraAhmadiDetail.products,
  };
};

