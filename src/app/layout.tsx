import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIoRank - Boost your rankings with AI",
  description:
    "AI SEO Platform. Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white antialiased")}>{children}</body>
    </html>
  );
}
