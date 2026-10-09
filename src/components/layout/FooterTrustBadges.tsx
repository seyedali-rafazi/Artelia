import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

const badges = [
  {
    title: "نماد اعتماد الکترونیکی",
    subtitle: "وزارت صمت و اینماد",
    icon: ShieldCheck,
  },
  {
    title: "نشان ملی ثبت رسانه",
    subtitle: "ساماندهی دیجیتال",
    icon: BadgeCheck,
  },
  {
    title: "گواهی اصالت اثر هنری",
    subtitle: "صنف هنرهای تجسمی",
    icon: Award,
  },
];

export const FooterTrustBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {badges.map((b) => {
        const Icon = b.icon;
        return (
          <div
            key={b.title}
            className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/60 px-3.5 py-2 transition-all duration-200 hover:border-primary/40 hover:bg-card hover:shadow-xs"
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-4" />
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-foreground">{b.title}</p>
              <p className="text-[10px] text-muted-foreground">{b.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
