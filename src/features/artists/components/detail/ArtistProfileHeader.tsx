"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Mail, MapPin, Share2, UserCheck, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ArtistDetailItem } from "../../types";

const toPersianDigits = (value: number | string): string => {
  return value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};

interface ArtistProfileHeaderProps {
  artist: ArtistDetailItem;
  onOpenContact?: () => void;
}

export const ArtistProfileHeader = ({
  artist,
  onOpenContact,
}: ArtistProfileHeaderProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/60 shadow-xs transition-all md:rounded-3xl">
      {/* Background Banner Image */}
      <div className="relative min-h-[300px] w-full p-5 sm:p-7 md:min-h-[320px] md:p-8">
        <Image
          src={artist.bannerImage || "/artist-banner.webp"}
          alt={`${artist.name} - بنر`}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
        />

        {/* Soft overlay gradient to ensure high readability */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[0.5px] dark:bg-background/60" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between gap-6 rounded-2xl bg-card/80 p-5 shadow-xs backdrop-blur-md sm:p-6">
          {/* Top Info: Avatar on right (RTL), details on left of avatar */}
          <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:text-right">
            {/* Avatar with Verified Badge */}
            <div className="relative size-24 shrink-0 sm:size-28 md:size-32">
              <div className="relative size-full overflow-hidden rounded-full border-4 border-card bg-card shadow-md">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 112px, 128px"
                  className="object-cover object-center"
                />
              </div>

              {/* Blue Verified Badge */}
              {artist.isVerified && (
                <div
                  title="هنرمند تأییدشده"
                  className="absolute bottom-1 left-1 grid size-6 place-items-center rounded-full border-2 border-card bg-[#1DA1F2] text-white shadow-xs md:size-7"
                >
                  <Check className="size-3.5 stroke-[3] md:size-4" />
                </div>
              )}
            </div>

            {/* Artist Text Details */}
            <div className="flex flex-1 flex-col text-center md:text-right">
              <h1 className="text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
                {artist.name}
              </h1>

              <p className="mt-1 text-sm font-black text-foreground/90">
                {artist.specialty}
              </p>

              <div className="mt-1 flex items-center justify-center gap-1 text-xs font-bold text-foreground/75 md:justify-start">
                <MapPin className="size-3.5 text-primary" />
                <span>{artist.location || `${artist.city}، ایران`}</span>
              </div>

              <p className="mt-3 max-w-2xl text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                {artist.bio}
              </p>
            </div>
          </div>

          {/* Bottom Bar: In RTL, first child is on the RIGHT, second is on the LEFT */}
          <div className="flex flex-col items-center justify-between gap-5 border-t border-border/60 pt-5 md:flex-row">
            {/* Stats (LEFT side in RTL) */}
            <div className="flex items-center gap-6 text-center sm:gap-8 md:text-right">
              <div>
                <span className="block text-base font-black text-foreground sm:text-lg">
                  {toPersianDigits(artist.stats.worksCount)}
                </span>
                <span className="text-xs font-bold text-foreground/70">
                  اثر
                </span>
              </div>
              <div className="h-6 w-px bg-border/50" />
              <div>
                <span className="block text-base font-black text-foreground sm:text-lg">
                  {toPersianDigits(artist.stats.followersCount)}
                </span>
                <span className="text-xs font-bold text-foreground/70">
                  دنبال‌کننده
                </span>
              </div>
              <div className="h-6 w-px bg-border/50" />
              <div>
                <span className="block text-base font-black text-foreground sm:text-lg">
                  {toPersianDigits(artist.stats.followingCount)}
                </span>
                <span className="text-xs font-bold text-foreground/70">
                  دنبال‌شونده
                </span>
              </div>
            </div>

            {/* Action Buttons (RIGHT side in RTL) */}
            <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:w-auto md:justify-start">
              {/* Follow button */}
              <Button
                size="sm"
                onClick={() => setIsFollowing((prev) => !prev)}
                className={`rounded-xl px-5 py-2 text-xs font-bold shadow-xs active:scale-95 transition-all ${
                  isFollowing
                    ? "bg-secondary text-primary hover:bg-secondary/80"
                    : "bg-[#8F1D2C] text-white hover:bg-[#781824]"
                }`}
              >
                {isFollowing ? (
                  <>
                    <UserCheck className="size-4" />
                    <span>دنبال می‌کنید</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="size-4" />
                    <span>دنبال کردن</span>
                  </>
                )}
              </Button>

              {/* Message button */}
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenContact}
                aria-label="ارسال پیام به هنرمند"
                className="rounded-xl border-border/70 bg-card/90 px-4 py-2 text-xs font-bold text-foreground shadow-2xs backdrop-blur-xs transition-transform active:scale-95 hover:border-primary/50 hover:text-primary"
              >
                <Mail className="size-4" />
                <span>پیام به هنرمند</span>
              </Button>

              {/* Share button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                aria-label="اشتراک‌گذاری پروفایل"
                className="rounded-xl border-border/70 bg-card/90 px-3.5 py-2 text-xs font-bold text-foreground shadow-2xs backdrop-blur-xs transition-transform active:scale-95 hover:border-primary/50 hover:text-primary"
              >
                <Share2 className="size-4" />
                <span>{copied ? "کپی شد!" : "اشتراک‌گذاری"}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
