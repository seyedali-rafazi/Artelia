import { Star } from "lucide-react";

export const RatingLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-1.5">
    <span>{label}</span>
    <div className="flex items-center gap-0.5 text-amber-400">
      <Star className="size-3 fill-amber-400" />
      <Star className="size-3 fill-amber-400" />
    </div>
  </div>
);
