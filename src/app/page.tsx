import type { Metadata } from "next";
import { CinematicLanding } from "@/components/home/CinematicLanding";

export const metadata: Metadata = {
  title: "SOLO® Batteries & Battery Plates Manufacturer | Crown Accumulator",
  description:
    "Crown Accumulator is an ISO 9001:2015 certified manufacturer of SOLO® motorcycle, automotive, solar, and tractor batteries, high-purity battery plates, and motorcycle sprockets since 1984.",
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
    title: "SOLO® Batteries & Battery Plates Manufacturer | Crown Accumulator",
    description:
      "Precision-engineered SOLO® motorcycle, automotive, solar, and industrial batteries. High-purity lead plates and OEM private-label manufacturing.",
    url: "https://www.crownaccumulator.com",
    siteName: "Crown Accumulator",
    type: "website",
    images: [
      {
        url: "/images/crown_factory_facility.png",
        width: 1200,
        height: 630,
        alt: "Crown Accumulator Production Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLO® Batteries & Battery Plates Manufacturer | Crown Accumulator",
    description:
      "40+ years of lead-acid battery manufacturing excellence, supplying leading OEMs and international markets.",
    images: ["/images/crown_factory_facility.png"],
  },
};

export default function HomePage() {
  return <CinematicLanding />;
}
