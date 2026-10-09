import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  wrapperClassName?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, wrapperClassName, children, ...props }, ref) => {
    return (
      <div className={cn("relative w-full", wrapperClassName)}>
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none rounded-xl border border-border/80 bg-card py-2.5 pr-3 pl-9 text-xs font-medium text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    );
  },
);

Select.displayName = "Select";
