import type { Metadata } from "next";
import { ContactFormView } from "@/components/contact/ContactFormView";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Crown Accumulator | Sales, OEM & Distribution Inquiries",
  description:
    "Get in touch with Crown Accumulator for SOLO battery distribution, battery plate bulk supply, OEM private-label contract manufacturing, and technical support.",
  keywords: [
    "Contact Crown Accumulator",
    "SOLO battery dealership",
    "battery plates wholesale",
    "OEM battery supplier contact",
    "Crown Accumulator Lahore address",
    "lead acid battery distributor Pakistan",
    "Crown Accumulator phone number",
  ],
  alternates: {
    canonical: "https://www.crownaccumulator.com/contact",
  },
  openGraph: {
    title: "Contact Crown Accumulator | Sales & OEM Manufacturing Inquiries",
    description:
      "Direct line to Crown Accumulator sales, engineering, and OEM private-label divisions. Located in Industrial Estate, Lahore.",
    url: "https://www.crownaccumulator.com/contact",
    siteName: "Crown Accumulator",
    type: "website",
    images: [
      {
        url: "/images/crown_factory_facility.png",
        width: 1200,
        height: 630,
        alt: "Crown Accumulator Factory & Headquarters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Crown Accumulator | Sales & OEM Manufacturing",
    description:
      "Reach out for SOLO battery wholesale, plate orders, or contract manufacturing inquiries.",
    images: ["/images/crown_factory_facility.png"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.crownaccumulator.com/contact#contactpage",
      name: "Contact Crown Accumulator",
      url: "https://www.crownaccumulator.com/contact",
      description:
        "Official contact information and inquiry portal for Crown Accumulator and SOLO Batteries.",
      mainEntity: {
        "@type": "LocalBusiness",
        name: "Crown Accumulator",
        image: "https://www.crownaccumulator.com/images/crown_factory_facility.png",
        telephone: "+92-42-3755-8800",
        email: company.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot 42-B, Industrial Estate, Manufacturing Zone",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.crownaccumulator.com/contact#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.crownaccumulator.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: "https://www.crownaccumulator.com/contact",
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactFormView />
    </>
  );
}
