"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductFilterAccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  defaultOpen?: boolean;
}

export const ProductFilterAccordion = ({
  title,
  children,
  className,
  contentClassName = "mt-2.5 space-y-2",
  defaultOpen = true,
}: ProductFilterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const Chevron = isOpen ? ChevronUp : ChevronDown;

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-1 text-sm font-bold text-foreground transition-colors hover:text-primary"
      >
        <span>{title}</span>
        <Chevron className="size-4 text-muted-foreground" />
      </button>
      {isOpen && <div className={cn(contentClassName)}>{children}</div>}
    </div>
  );
};
