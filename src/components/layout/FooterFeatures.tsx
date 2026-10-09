import { BadgeCheck, Headphones, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "اصالت تضمین‌شده آثار",
    description: "صدور شناسنامه رسمی همراه با امضای زنده و اختصاصی هنرمند",
  },
  {
    icon: Truck,
    title: "بسته‌بندی ایمن و ارسال بیمه",
    description: "بسته‌بندی استاندارد گالری با پوشش بیمه کامل به سراسر ایران",
  },
  {
    icon: ShieldCheck,
    title: "ضمانت ۷ روزه اصالت و سلامت",
    description: "امکان عودت کامل وجه در صورت عدم تطابق با مشخصات اعلامی",
  },
  {
    icon: Headphones,
    title: "مشاوره تخصصی انتخاب اثر",
    description: "راهنمایی رایگان کارشناسان هنری در انتخاب و چیدمان مناسب",
  },
];

export const FooterFeatures = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="group flex items-start gap-3.5 rounded-2xl border border-border/70 bg-card/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
