import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked = false, onCheckedChange, disabled, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={cn(
          "relative inline-flex size-4.5 shrink-0 cursor-pointer items-center justify-center rounded-[5px] border transition-colors select-none",
          checked
            ? "border-primary bg-primary text-primary-foreground shadow-2xs"
            : "border-muted-foreground/40 bg-card hover:border-primary/60",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="sr-only"
          {...props}
        />
        {checked && <Check className="size-3.5 stroke-[3]" />}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
