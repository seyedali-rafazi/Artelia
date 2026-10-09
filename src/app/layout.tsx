import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Swap this font here to change the app typography (exposed as --font-sans-base).
const fontSans = Vazirmatn({
  variable: "--font-sans-base",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artelia",
  description: "Artelia",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="fa" dir="rtl" className={fontSans.variable} suppressHydrationWarning>
      <body className="min-h-dvh" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
