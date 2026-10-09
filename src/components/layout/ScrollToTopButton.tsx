"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScrollToTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleScrollTop}
      aria-label="بازگشت به بالای صفحه"
      className="group flex items-center gap-2 border border-border/70 bg-card/60 px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-card hover:text-primary"
    >
      <span>بازگشت به بالا</span>
      <ArrowUp className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </Button>
  );
};
