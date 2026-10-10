import { AboutBanner } from "./AboutBanner";
import { AboutStorySection } from "./AboutStorySection";
import { AboutStatsSection } from "./AboutStatsSection";
import { AboutValuesSection } from "./AboutValuesSection";
import { AboutCuratorsSection } from "./AboutCuratorsSection";
import { AboutCtaSection } from "./AboutCtaSection";

export const AboutView = () => {
  return (
    <article className="pb-12">
      {/* 1. Hero Banner with matching responsive height and typography */}
      <AboutBanner />

      {/* 2. Key Platform Statistics & Milestones */}
      <AboutStatsSection />

      {/* 3. The Story and Vision */}
      <AboutStorySection />

      {/* 4. Core Pillars and Values */}
      <AboutValuesSection />

      {/* 5. Curation Committee & Experts */}
      <AboutCuratorsSection />

      {/* 6. Call to Action for Artists and Collectors */}
      <AboutCtaSection />
    </article>
  );
};
