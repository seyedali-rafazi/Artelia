import Image from "next/image";
import {
  Calendar,
  CheckCircle2,
  MapPin,
  Palette,
  Sparkles,
  Truck,
} from "lucide-react";
import type { ArtistDetailItem } from "../../types";

interface ArtistSidebarProps {
  artist: ArtistDetailItem;
}

export const ArtistSidebar = ({ artist }: ArtistSidebarProps) => {
  return (
    <aside className="flex flex-col gap-4">
      {/* Main Info Card */}
      <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-xs transition-all">
        {/* Section 1: درباره هنرمند */}
        <div>
          <h2 className="text-sm font-black text-foreground">درباره هنرمند</h2>
          <ul className="mt-3.5 space-y-3">
            <li className="flex items-center justify-between gap-2 text-xs font-bold text-foreground/90">
              <span>هنرمند تأییدشده</span>
              <CheckCircle2 className="size-4 shrink-0 text-[#1DA1F2]" />
            </li>
            <li className="flex items-center justify-between gap-2 text-xs font-bold text-foreground/90">
              <span>ارسال به سراسر ایران</span>
              <Truck className="size-4 shrink-0 text-muted-foreground" />
            </li>
            <li className="flex items-center justify-between gap-2 text-xs font-bold text-foreground/90">
              <span>امکان سفارش اختصاصی</span>
              <Sparkles className="size-4 shrink-0 text-amber-500" />
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-border/60" />

        {/* Section 2: اطلاعات هنرمند */}
        <div>
          <h2 className="text-sm font-black text-foreground">اطلاعات هنرمند</h2>
          <ul className="mt-3.5 space-y-3 text-xs">
            <li className="flex items-center justify-between gap-2">
              <span className="font-extrabold text-foreground">سفال و سرامیک</span>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span className="font-bold">سبک کاری</span>
                <Palette className="size-4 text-primary" />
              </div>
            </li>
            <li className="flex items-center justify-between gap-2">
              <span className="font-extrabold text-foreground">۱۳۹۵</span>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span className="font-bold">سال فعالیت</span>
                <Calendar className="size-4 text-primary" />
              </div>
            </li>
            <li className="flex items-center justify-between gap-2">
              <span className="font-extrabold text-foreground">تهران، ایران</span>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span className="font-bold">محل کار</span>
                <MapPin className="size-4 text-primary" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3: Decorative Artistic Quote Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-[#F9F5EF] p-6 text-center shadow-xs dark:bg-card">
        {artist.quoteBgImage && (
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <Image
              src={artist.quoteBgImage}
              alt="تزیین گل و گیاه"
              fill
              className="object-cover object-bottom"
            />
          </div>
        )}
        <div className="relative z-10 flex flex-col items-center justify-center py-2">
          <p className="text-sm font-black leading-loose text-foreground/90">
            {artist.quote}
          </p>
        </div>
      </div>
    </aside>
  );
};
