import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export const UserAvatar = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "inline-grid place-items-center rounded-full bg-gradient-to-br from-stone-700 to-stone-950 text-primary-foreground",
        className,
      )}
    >
      <User className="size-1/2" />
    </span>
  );
};
