import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};
