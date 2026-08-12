import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { Globe, Tag, Award, Users, ArrowRight, CheckCircle2, Factory } from "lucide-react";
import { cinematicImages } from "@/data/cinematic-images";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "OEM Manufacturing",
  description:
    "Private label battery manufacturing by Crown Accumulator. Custom branding, full production pipeline, export support.",
};

const oemProducts = getProductsByCategory("oem");

const benefits = [
  {
    icon: Tag,
    title: "Full Brand Customization",
    description:
      "Custom labels, carton artwork, terminal caps, and warranty cards bearing your company logo and design specs.",
  },
  {
    icon: Award,
    title: "SOLO-Grade Quality",
    description:
      "OEM private-label batteries are produced on the same automated lines, using identical cast alloys and formation testing.",
  },
  {
    icon: Globe,
    title: "Export Ready Documentation",
    description:
      "CE certificates, MSDS sheets, and export packaging prepared for smooth international shipments.",
  },
  {
    icon: Users,
    title: "Dedicated Account Support",
    description:
      "Assigned project manager, technical documentation, and production scheduling assistance.",
  },
];

export default function ManufacturingPage() {
  return (
    <div className="bg-surface">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-crown-navy py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={cinematicImages.factory}
            alt="Crown Accumulator manufacturing facility"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
              OEM &amp; Private Label Programs
            </span>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold text-white sm:text-6xl">
              Your Brand. Our Manufacturing Infrastructure.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              Crown Accumulator produces batteries under private labels for distributors, automotive chains, and energy companies. Leverage our four decades of manufacturing expertise without building a factory.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=OEM+Private+Label"
                className="font-display inline-flex items-center gap-2 rounded-xl bg-crown-maroon px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-crown-maroon-dark"
              >
                Discuss Private Label Program
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Manufacturing Partnership Benefits"
            align="center"
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <ScrollReveal key={b.title} delay={idx * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-xs text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-crown-navy/10 text-crown-navy">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="font-display mt-4 text-lg font-bold text-text-primary">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted">
                      {b.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES LIST ─── */}
      <section className="bg-surface-subtle py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="right">
              <SectionHeading
                eyebrow="Scope &amp; Range"
                title="What we can produce for your brand"
              />
              <div className="mt-6 space-y-3">
                {[
                  "Motorcycle batteries (70cc – 250cc standard sizes)",
                  "Automotive DIN and JIS format batteries (45Ah – 100Ah)",
                  "Tractor and agricultural heavy-duty flooded batteries",
                  "Solar tubular deep-cycle batteries (100Ah – 200Ah)",
                  "UPS AGM sealed maintenance-free batteries",
                  "Custom terminal orientations & container colors",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-border/60 pb-3 text-sm text-text-secondary">
                    <CheckCircle2 className="h-5 w-5 text-crown-maroon shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
                <Image
                  src={cinematicImages.factory}
                  alt="Battery assembly line"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PROGRAM PRODUCTS ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Program Structure" title="OEM Private Label Options" />
          <div className="mt-12 max-w-2xl">
            {oemProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
