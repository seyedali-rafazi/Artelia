import { UserAvatar } from "@/components/shared/UserAvatar";
import type { Artist } from "../types";

export const ArtistCard = ({ artist }: { artist: Artist }) => {
  return (
    <article className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className={`h-24 bg-gradient-to-br ${artist.coverGradient}`} />
      <div className="px-3 pb-4">
        <div className="-mt-6 flex items-end gap-2">
          <UserAvatar className="size-12 shrink-0 border-2 border-card" />
          <div className="pb-1">
            <h3 className="text-sm font-extrabold">{artist.name}</h3>
            <p className="text-[11px] text-muted-foreground">{artist.productCount} محصول</p>
          </div>
        </div>
        <a
          href="#"
          className="mt-3 block rounded-full bg-secondary py-1.5 text-center text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          مشاهده صفحه
        </a>
      </div>
    </article>
  );
};
