import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RF Photography | Fotografie & Filmare Nuntă Constanța",
  description:
    "RF Photography - servicii profesionale de fotografie și filmare nuntă, botez, logodnă și evenimente în Constanța. Ramona și Florin Cojocaru.",
  keywords: "fotografie nunta constanta, filmare nunta constanta, RF Photography, fotograf constanta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${cormorant.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
