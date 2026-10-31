import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { ArrowRight, Cog, FlaskConical, Package, CheckCircle2, ShieldCheck, Factory } from "lucide-react";
import { company } from "@/data/company";
import { cinematicImages } from "@/data/cinematic-images";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Lead-Acid Battery Plates Manufacturer | Cast & Expanded Grids | Crown Accumulator",
  description:
    "Crown Accumulator manufactures and distributes high-purity positive and negative lead-acid battery plates for battery assemblers worldwide. In-house casting, paste density control, and tank formation.",
  keywords: [
    "battery plates manufacturer",
    "lead acid battery plates",
    "cast positive grids",
    "expanded negative grids",
    "tubular battery plates",
    "battery plate distribution",
    "formed battery plates",
    "Crown Accumulator plates",
    "automotive battery plates",
    "solar battery plates",
  ],
  alternates: {
    canonical: "https://www.crownaccumulator.com/battery-plates",
  },
  openGraph: {
    title: "Lead-Acid Battery Plates Manufacturer | Crown Accumulator",
    description:
      "High-purity antimony and calcium alloys, automated pasting lines, and formation testing for motorcycle, automotive, and solar batteries.",
    url: "https://www.crownaccumulator.com/battery-plates",
    siteName: "Crown Accumulator",
    type: "website",
    images: [
      {
        url: "/images/battery_plate_production.png",
        width: 1200,
        height: 630,
        alt: "Lead-Acid Battery Plate Manufacturing at Crown Accumulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead-Acid Battery Plates Manufacturer | Crown Accumulator",
    description:
      "Precision-cast positive grids and expanded negative strips engineered to ±2% paste weight tolerance.",
    images: ["/images/battery_plate_production.png"],
  },
};

const platesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.crownaccumulator.com/battery-plates#product",
      name: "Crown Accumulator High-Purity Lead-Acid Battery Plates",
      description:
        "Industrial lead-acid battery plates including cast positive grids, expanded negative grids, and tubular deep-cycle plates for battery assemblers.",
      image: "https://www.crownaccumulator.com/images/battery_plate_production.png",
      brand: {
        "@type": "Brand",
        name: "Crown Accumulator",
      },
      manufacturer: {
        "@type": "Organization",
        name: "Crown Accumulator",
        url: "https://www.crownaccumulator.com",
      },
      category: "Industrial Battery Components",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.crownaccumulator.com/battery-plates#breadcrumbs",
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
          name: "Battery Plates",
          item: "https://www.crownaccumulator.com/battery-plates",
        },
      ],
    },
  ],
};

const plateProducts = getProductsByCategory("plates");

const process = [
  {
    icon: Cog,
    step: "01",
    title: "Grid Casting & Expansion",
    description:
      "High-purity lead alloy is melted and cast into positive grids on automated casting lines. Negative grids are expanded from continuous lead strip for maximum conductivity.",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "Paste Mixing & Application",
    description:
      "Active lead oxide paste is formulated to precise density recipes, applied onto grids, and cured in humidity-controlled chambers for 48–72 hours.",
  },
  {
    icon: Package,
    step: "03",
    title: "Formation & Quality Control",
    description:
      "Plates can be supplied tank-formed or unformed. Every batch is weight-sorted, inspected, and palletized for export or local shipment.",
  },
];

export default function BatteryPlatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(platesSchema) }}
      />
      <div className="bg-surface">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-crown-navy py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={cinematicImages.plateProduction}
            alt="Battery plate production"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
              Manufacturing &amp; Distribution
            </span>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold text-white sm:text-6xl">
              High-Purity Battery Plates — The Heart of Every Cell
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              Crown Accumulator has been casting and distributing positive and negative lead-acid battery plates since {company.foundedYear} — serving battery assemblers across South Asia, the Middle East, and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Battery+Plate+Order"
                className="font-display inline-flex items-center gap-2 rounded-xl bg-crown-maroon px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-crown-maroon-dark"
              >
                Request Plate Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── MANUFACTURING PROCESS ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
                <Image
                  src={cinematicImages.plateProduction}
                  alt="Battery plate manufacturing process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="Precision Casting"
                title="Strict metallurgical & thickness controls"
              />
              <div className="mt-6 space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
                <p>
                  The electrical capacity and cycle life of a lead-acid battery are determined directly by grid quality. Variations in paste weight or grid thickness result in uneven cell discharge.
                </p>
                <p>
                  Our foundry operates three automated casting machines and two expansion lines, with a combined capacity of over <strong>500,000 plates per month</strong>.
                </p>
                <p>
                  We supply cast grids, expanded metal mesh, and tubular positive plates in Calcium-Tin (Ca-Sn), Low-Antimony, and Antimonial alloys.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── STEP BY STEP PROCESS ─── */}
      <section className="bg-surface-subtle py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Production Line"
            title="How we manufacture battery plates"
            align="center"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {process.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <ScrollReveal key={step.step} delay={idx * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-8 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-crown-navy/10 text-crown-navy">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="font-display text-2xl font-bold text-slate-300">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-display mt-6 text-xl font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PLATE PRODUCTS SHOWCASE ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Plate Catalog"
            title="Positive &amp; negative plate options"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {plateProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
