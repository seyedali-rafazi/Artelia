"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toPersianDigits } from "../lib/product-filters";
import { cn } from "@/lib/utils";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ProductPagination = ({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
}: ProductPaginationProps) => {
  // Generate visible page numbers
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 1) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show sequence with ellipsis
      for (let i = 1; i <= Math.min(maxVisible, totalPages - 1); i++) {
        pages.push(i);
      }
      if (totalPages > maxVisible) {
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      aria-label="صفحه‌بندی محصولات"
      dir="ltr"
      className="mt-10 flex items-center justify-center gap-1.5 sm:gap-2"
    >
      {/* Previous Button (<) on the left */}
      <Button
        type="button"
        variant="ghost"
        size="bare"
        aria-label="Previous Page"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="grid size-8 place-items-center rounded-full border border-border/60 bg-card text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-30"
      >
        <ChevronLeft className="size-4" />
      </Button>

      {/* Page Numbers */}
      {pages.map((p, index) => {
        if (typeof p === "string") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="grid size-8 place-items-center text-xs font-bold text-muted-foreground"
            >
              ...
            </span>
          );
        }

        const isActive = p === currentPage;
        return (
          <Button
            key={p}
            type="button"
            variant={isActive ? "default" : "ghost"}
            size="bare"
            onClick={() => onPageChange(p)}
            className={cn(
              "grid size-8 place-items-center rounded-full text-xs font-black transition-all",
              isActive
                ? "bg-primary text-primary-foreground shadow-xs hover:bg-primary/95"
                : "border border-border/60 bg-card text-foreground/80 hover:border-primary/40 hover:text-primary",
            )}
          >
            {toPersianDigits(p)}
          </Button>
        );
      })}

      {/* Next Button (>) on the right */}
      <Button
        type="button"
        variant="ghost"
        size="bare"
        aria-label="Next Page"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="grid size-8 place-items-center rounded-full border border-border/60 bg-card text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-30"
      >
        <ChevronRight className="size-4" />
      </Button>
    </nav>
  );
};
