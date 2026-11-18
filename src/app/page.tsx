import type { Metadata } from "next";
import { CinematicLanding } from "@/components/home/CinematicLanding";

export const metadata: Metadata = {
  title: "Battery, Battery Plate & Motorcycle Sprocket Manufacturing",
  description:
    "Crown Accumulator manufactures SOLO batteries, AS Battery Plate, Shalimar Battery Plate, and motorcycle sprockets for trade and industrial customers.",
  keywords: [
    "Crown Accumulator",
    "SOLO batteries",
    "SOLO motorcycle battery",
    "lead acid battery factory",
    "battery plates manufacturer",
    "automotive batteries Pakistan",
    "tubular solar battery",
    "OEM battery manufacturing",
    "motorcycle sprockets",
    "Ravi automobile battery supplier",
    "Road Prince battery supplier",
  ],
  alternates: {
    canonical: "https://www.crownaccumulator.com",
  },
  openGraph: {
    title: "Battery, Battery Plate & Motorcycle Sprocket Manufacturing",
    description:
      "Precision-engineered SOLO® motorcycle, automotive, solar, and industrial batteries. High-purity lead plates and OEM private-label manufacturing.",
    url: "https://www.crownaccumulator.com",
    siteName: "Crown Accumulator",
    type: "website",
    images: [
      {
        url: "/images/products/solo-mb-200.webp",
        width: 1122,
        height: 1402,
        alt: "SOLO MB 200 battery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Battery, Battery Plate & Motorcycle Sprocket Manufacturing",
    description:
      "40+ years of lead-acid battery manufacturing excellence, supplying leading OEMs and international markets.",
    images: ["/images/products/solo-mb-200.webp"],
  },
};

export default function HomePage() {
  return <CinematicLanding />;
}
