import type { Metadata } from "next";
import { Rajdhani, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Main } from "@/components/layout/Main";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Crown Accumulator | SOLO Batteries & Battery Plates",
    template: "%s | Crown Accumulator",
  },
  description:
    "Crown Accumulator manufactures SOLO motorcycle, automotive, tractor, solar, and UPS batteries. OEM private label production and battery plate distribution.",
  keywords: [
    "battery manufacturer",
    "SOLO batteries",
    "motorcycle battery",
    "solar battery",
    "battery plates",
    "lead acid battery",
    "OEM batteries",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
