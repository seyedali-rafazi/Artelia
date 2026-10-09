import { AtSign, Briefcase, Camera, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterSection = () => {
  return (
    <section className="mt-8 flex flex-col items-center gap-5 rounded-2xl bg-secondary px-8 py-6 md:flex-row md:justify-between">
      <div className="text-center md:text-right">
        <h2 className="text-base font-extrabold">در جریان جدیدترین آثار قرار بگیرید!</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          ایمیل خود را وارد کنید تا از جدیدترین آثار و رویدادها مطلع شوید.
        </p>
      </div>
      <form className="flex w-full max-w-sm overflow-hidden rounded-full bg-card ring-1 ring-border">
        <Input
          type="email"
          aria-label="ایمیل"
          placeholder="ایمیل شما ..."
          className="px-4 py-2"
        />
        <Button variant="secondary" size="sm" className="rounded-none">
          عضویت
        </Button>
      </form>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-bold">ما را دنبال کنید</span>
        <div className="flex gap-3 text-primary">
          <Camera className="size-5" />
          <Send className="size-5" />
          <AtSign className="size-5" />
          <Briefcase className="size-5" />
        </div>
      </div>
    </section>
  );
};
