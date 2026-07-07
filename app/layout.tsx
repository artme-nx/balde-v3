import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balde food&bar — Biograd na Moru | Beach bar na plaži Soline",
  description:
    "Balde food&bar — beach bar na plaži Soline u Biogradu na Moru. Domaće povrće iz vlastitog vrta, burgeri, roštilj, bogata vegan ponuda i koktELI uz more do kasno u noć.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
