import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface ProductBreadcrumbsProps {
  category: string;
  title: string;
}

export const ProductBreadcrumbs = ({
  category,
  title,
}: ProductBreadcrumbsProps) => {
  return (
    <nav
      aria-label="مسیر راهنما"
      className="flex items-center gap-1.5 py-4 text-xs font-semibold text-muted-foreground"
    >
      <Link href="/" className="transition-colors hover:text-primary">
        خانه
      </Link>
      <ChevronLeft className="size-3.5 text-muted-foreground/60" />
      <Link href="/products" className="transition-colors hover:text-primary">
        محصولات
      </Link>
      <ChevronLeft className="size-3.5 text-muted-foreground/60" />
      <Link
        href={`/products?category=${encodeURIComponent(category)}`}
        className="transition-colors hover:text-primary"
      >
        {category}
      </Link>
      <ChevronLeft className="size-3.5 text-muted-foreground/60" />
      <span className="line-clamp-1 max-w-[280px] text-foreground/80 sm:max-w-md">
        {title}
      </span>
    </nav>
  );
};
