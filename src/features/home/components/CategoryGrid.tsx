import { SectionHeader } from "@/components/shared/SectionHeader";
import { categories } from "../data/home-content";

export const CategoryGrid = () => {
  return (
    <section className="mt-8">
      <SectionHeader title="دسته‌بندی‌ها" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map(({ label, icon: Icon }) => (
          <a
            key={label}
            href="#"
            className="group flex flex-col items-center gap-2 rounded-2xl border bg-card px-3 py-5 text-sm font-bold shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <Icon className="size-6 text-primary transition-transform group-hover:scale-110" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
};
