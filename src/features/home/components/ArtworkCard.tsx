import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/shared/UserAvatar";
import type { Artwork } from "../types";

export const ArtworkCard = ({ artwork }: { artwork: Artwork }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${artwork.coverGradient}`}>
        {artwork.coverImage && (
          <Image
            src={artwork.coverImage}
            alt={artwork.title}
            fill
            sizes="250px"
            className="object-cover object-[75%_20%] transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <Button
          variant="ghost"
          size="bare"
          aria-label="افزودن به علاقه‌مندی"
          className="absolute top-2 left-2 size-7 bg-card/90 font-normal"
        >
          <Heart className="size-3.5" />
        </Button>
      </div>
      <div className="px-3 py-3">
        <h3 className="text-sm font-extrabold">{artwork.title}</h3>
        <p className="mt-1 text-[11px] font-bold text-primary">{artwork.price}</p>
        <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
          <UserAvatar className="size-5" />
          {artwork.artist}
        </div>
      </div>
    </article>
  );
};
