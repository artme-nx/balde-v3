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
    "Balde food&bar — food&bar na plaži Soline (Šetalište Dražice) u Biogradu na Moru. Riba i meso s gradela, pržena riba i cijela veganska stranica jelovnika, uz piće nad plažom do kasno u noć.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Balde food&bar",
              description:
                "Food&bar na plaži Soline (Šetalište Dražice) u Biogradu na Moru. Riba i meso s gradela, pržena riba i cijela veganska stranica jelovnika.",
              servesCuisine: ["Mediteranska", "Riba i plodovi mora", "Roštilj", "Vegansko"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Šetalište Dražice",
                addressLocality: "Biograd na Moru",
                postalCode: "23210",
                addressRegion: "Zadarska županija",
                addressCountry: "HR",
              },
              telephone: "+385955987321",
              email: "baldefoodandbar@gmail.com",
              url: "https://artme-nx.github.io/balde-v3/",
              sameAs: ["https://www.facebook.com/baldefoodandbar/"],
              acceptsReservations: "True",
            }),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
