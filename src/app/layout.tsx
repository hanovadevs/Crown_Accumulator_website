import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crownaccumulator.com"),
  title: {
    default: "Crown Accumulator | SOLO® Batteries & Battery Plates Manufacturer",
    template: "%s | Crown Accumulator",
  },
  description:
    "Crown Accumulator is an ISO 9001:2015 certified manufacturer of SOLO® motorcycle, automotive, tractor, solar deep-cycle, and UPS batteries. High-purity lead battery plates and OEM private-label contract manufacturing since 1984.",
  keywords: [
    "Crown Accumulator",
    "SOLO batteries",
    "battery manufacturer",
    "SOLO motorcycle battery",
    "lead acid battery manufacturer",
    "battery plates manufacturer",
    "automotive batteries Pakistan",
    "solar deep cycle battery",
    "tubular battery plates",
    "OEM private label battery",
    "tractor battery",
    "maintenance free battery",
    "Shahid Mahmood Crown Accumulator",
    "high purity battery plates",
    "motorcycle sprockets manufacturer",
  ],
  authors: [{ name: "Crown Accumulator Engineering Team" }],
  creator: "Crown Accumulator",
  publisher: "Crown Accumulator",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crown Accumulator | SOLO® Batteries & High-Purity Battery Plates",
    description:
      "Premier manufacturers of SOLO® automotive, motorcycle, and solar batteries, high-purity battery plates, and motorcycle sprockets since 1984.",
    url: "https://www.crownaccumulator.com",
    siteName: "Crown Accumulator",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/crown_factory_facility.png",
        width: 1200,
        height: 630,
        alt: "Crown Accumulator Manufacturing Facility & Plant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Accumulator | SOLO® Batteries & Battery Plates",
    description:
      "ISO 9001:2015 certified manufacturer of SOLO® batteries, high-purity plates, and OEM manufacturing solutions.",
    images: ["/images/crown_factory_facility.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": "https://www.crownaccumulator.com/#corporation",
      name: "Crown Accumulator",
      alternateName: ["Crown Accumulator Co.", "SOLO Batteries"],
      url: "https://www.crownaccumulator.com",
      logo: "https://www.crownaccumulator.com/logos/crown-accumulator.png",
      image: "https://www.crownaccumulator.com/images/crown_factory_facility.png",
      description:
        "Crown Accumulator manufactures SOLO motorcycle, automotive, tractor, solar, and UPS batteries. High-purity lead battery plates and OEM contract production.",
      foundingDate: "1984",
      founder: {
        "@type": "Person",
        name: "Shahid Mahmood",
        jobTitle: "Founder & Managing Director",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 42-B, Industrial Estate, Manufacturing Zone",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-42-3755-8800",
          contactType: "customer service",
          email: "crown.solo@gmail.com",
          areaServed: ["PK", "Global"],
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+92-42-3755-8800",
          contactType: "sales",
          email: "crown.solo@gmail.com",
          areaServed: ["PK", "Global"],
          availableLanguage: ["English", "Urdu"],
        },
      ],
      brand: {
        "@type": "Brand",
        name: "SOLO",
        logo: "https://www.crownaccumulator.com/logos/solo-batteries.png",
        slogan: "Maximum Cranking, Extreme Endurance",
      },
      knowsAbout: [
        "Lead-Acid Battery Manufacturing",
        "Battery Plate Casting & Pasting",
        "Motorcycle Batteries (12N7-4B, 12N9-4B)",
        "Solar Tubular Deep Cycle Batteries",
        "Automotive Batteries (DIN55, NS40Z, N70)",
        "Precision Motorcycle Sprockets",
        "OEM Private Label Production",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.crownaccumulator.com/#website",
      url: "https://www.crownaccumulator.com",
      name: "Crown Accumulator",
      description: "Official portal of Crown Accumulator and SOLO Batteries.",
      publisher: {
        "@id": "https://www.crownaccumulator.com/#corporation",
      },
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
