import { ArrowLeft } from "lucide-react";
import { Lalezar } from "next/font/google";
import { cn } from "@/lib/utils";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["arabic"],
  display: "swap",
});

interface SectionHeaderProps {
  title: string;
  href?: string;
  actions?: React.ReactNode;
}

export const SectionHeader = ({ title, href = "#", actions }: SectionHeaderProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className={cn("text-2xl tracking-wide md:text-3xl", lalezar.className)}>{title}</h2>
      <div className="flex items-center gap-3">
        {actions}
        <a href={href} className="flex items-center gap-1 text-xs font-bold text-primary hover:underline">
          <ArrowLeft className="size-3" />
          مشاهده همه
        </a>
      </div>
    </div>
  );
};

