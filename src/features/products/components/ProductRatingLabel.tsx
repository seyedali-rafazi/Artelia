import { Star } from "lucide-react";

interface ProductRatingLabelProps {
  label: string;
  stars: number;
}

export const ProductRatingLabel = ({ label, stars }: ProductRatingLabelProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`size-3 ${
              i < stars ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-semibold text-foreground/85">{label}</span>
    </div>
  );
};
