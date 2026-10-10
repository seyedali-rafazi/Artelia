import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AboutView } from "@/features/about/components/AboutView";

export const metadata: Metadata = {
  title: "درباره ما | آرتلیا",
  description:
    "روایت پیوند میان نبوغ هنرمندان ایران و نگاه زیبادوست شما - درباره پلتفرم تخصصی کشف و خرید آثار هنری اصیل آرتلیا",
};

const AboutUsPage = () => {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-6 md:px-8">
      <SiteHeader activeHref="/about-us" />
      <main>
        <AboutView />
      </main>
      <SiteFooter />
    </div>
  );
};

export default AboutUsPage;
