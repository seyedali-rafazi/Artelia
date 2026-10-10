"use client";

import { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ArtistContactDialogProps {
  artistName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ArtistContactDialog = ({
  artistName,
  isOpen,
  onClose,
}: ArtistContactDialogProps) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`پیام به ${artistName}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border/50 pb-3">
          <h3 className="text-base font-black text-foreground">
            ارسال پیام به {artistName}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن"
            className="grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </div>

        {sent ? (
          <div className="py-8 text-center">
            <p className="text-sm font-black text-emerald-600">
              پیام شما با موفقیت به هنرمند ارسال شد!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-xs font-bold text-foreground/80">
                نام و نام خانوادگی
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="مثال: مریم کاظمی"
                className="rounded-xl text-xs"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-foreground/80">
                شماره تماس یا ایمیل
              </label>
              <Input
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="۰۹۱۲..."
                className="rounded-xl text-xs"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-foreground/80">
                متن پیام یا سفارش
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="درخواست سفارش اختصاصی یا پرسش درباره اثر..."
                className="w-full rounded-xl border border-border/80 bg-card p-3 text-xs text-foreground focus:border-primary focus:outline-none"
              />
            </div>

            <Button type="submit" className="w-full rounded-xl">
              <Send className="size-4" />
              <span>ارسال پیام</span>
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
