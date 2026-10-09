import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const toPersianDigits = (value: number | string): string => {
  return value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};

interface ArtistPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ArtistPagination = ({
  currentPage = 1,
  totalPages = 4,
  onPageChange,
}: ArtistPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="صفحه‌بندی هنرمندان"
      className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2"
    >
      {/* Previous Page Button (In RTL, ChevronRight moves to previous) */}
      <Button
        type="button"
        variant="ghost"
        size="bare"
        aria-label="صفحه قبلی"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="grid size-8.5 place-items-center rounded-xl border border-border/60 bg-card text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-40"
      >
        <ChevronRight className="size-4" />
      </Button>

      {/* Page Numbers */}
      {pages.map((p) => {
        const isActive = p === currentPage;
        return (
          <Button
            key={p}
            type="button"
            variant={isActive ? "default" : "ghost"}
            size="bare"
            onClick={() => onPageChange(p)}
            className={cn(
              "grid size-8.5 place-items-center rounded-xl text-xs font-black transition-all",
              isActive
                ? "bg-primary text-primary-foreground shadow-xs"
                : "border border-border/60 bg-card text-foreground/80 hover:border-primary/40 hover:text-primary",
            )}
          >
            {toPersianDigits(p)}
          </Button>
        );
      })}

      {/* Next Page Button (In RTL, ChevronLeft moves to next) */}
      <Button
        type="button"
        variant="ghost"
        size="bare"
        aria-label="صفحه بعدی"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="grid size-8.5 place-items-center rounded-xl border border-border/60 bg-card text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-40"
      >
        <ChevronLeft className="size-4" />
      </Button>
    </nav>
  );
};
