import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  footerContactInfo,
  footerLegalLinks,
  footerSections,
} from "@/lib/navigation";
import { FooterFeatures } from "./FooterFeatures";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { FooterTrustBadges } from "./FooterTrustBadges";
import { Logo } from "./Logo";
import { ScrollToTopButton } from "./ScrollToTopButton";

export const SiteFooter = () => {
  return (
    <footer className="mt-16 space-y-10 rounded-3xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm sm:p-8 md:p-10">
      {/* Top Value Proposition Features */}
      <FooterFeatures />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Main Navigation & Info Grid */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Brand identity & Contact details */}
        <div className="space-y-5 lg:col-span-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Logo className="text-3xl" />
              <span
                dir="ltr"
                className="font-serif text-sm italic tracking-wide text-accent"
              >
                Art for a Better Tomorrow
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              آرتلیا؛ پلتفرم تخصصی کشف، معرفی و خرید مستقیم آثار اصیل از برترین
              هنرمندان تجسمی ایران. پلی میان خلاقیت ناب هنرمند و نگاه زیباپسند
              مجموعه‌داران و دوستداران هنر.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-2.5 text-xs text-muted-foreground">
            <a
              href={footerContactInfo.phoneTel}
              className="flex items-center gap-2.5 transition-colors hover:text-primary"
            >
              <Phone className="size-4 shrink-0 text-primary" />
              <span>
                پشتیبانی تلفنی:{" "}
                <bdi dir="ltr" className="font-sans font-semibold">
                  {footerContactInfo.phoneDisplay}
                </bdi>
              </span>
            </a>
            <a
              href={footerContactInfo.emailMailto}
              className="flex items-center gap-2.5 transition-colors hover:text-primary"
            >
              <Mail className="size-4 shrink-0 text-primary" />
              <span dir="ltr">{footerContactInfo.emailDisplay}</span>
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="leading-relaxed">{footerContactInfo.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="size-4 shrink-0 text-primary" />
              <span>{footerContactInfo.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-bold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block transition-transform duration-200 hover:-translate-x-1 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-border/60" />

      {/* Trust Badges & Social Community */}
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4 md:items-start">
          <span className="text-xs font-bold text-foreground">
            مجوزها و نمادهای اعتماد:
          </span>
          <FooterTrustBadges />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-muted-foreground">
            همراه ما باشید:
          </span>
          <FooterSocialLinks />
        </div>
      </div>

      <div className="h-px w-full bg-border/60" />

      {/* Bottom Bar: Copyright, Legal Links, and Scroll-to-Top */}
      <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
        <div>
          <span>© ۲۰۲۵ آرتلیا (Artelia). تمامی حقوق مادی و معنوی محفوظ است.</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
          {footerLegalLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <ScrollToTopButton />
      </div>
    </footer>
  );
};
