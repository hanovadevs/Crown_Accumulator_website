import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { cinematicImages } from "@/data/cinematic-images";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "SOLO Brand",
  description:
    "SOLO Batteries & Parts — Crown Accumulator's flagship brand for motorcycle, automotive, tractor, solar, and UPS batteries.",
};

const soloProducts = products.filter((p) => p.brand === "SOLO");

export default function SoloBrandPage() {
  return (
    <div className="bg-surface">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-red-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={cinematicImages.soloMotorcycle}
            alt="SOLO Batteries in action"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <ScrollReveal direction="up">
                <Image
                  src="/logos/solo-batteries.png"
                  alt="SOLO Batteries & Parts"
                  width={280}
                  height={100}
                  className="h-20 w-auto sm:h-24"
                />
                <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Power Built For Extreme Performance
                </h1>
                <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                  SOLO® is Crown Accumulator&apos;s flagship brand — engineered with high-purity cast grids, dense active materials, and vibration-resistant casings to deliver dependable starting power.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#solo-range"
                    className="font-display inline-flex items-center gap-2 rounded-xl bg-solo-red px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-solo-red-dark"
                  >
                    View SOLO Product Range
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="font-display inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800"
                  >
                    Become a Dealer
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -inset-4 rounded-3xl bg-solo-red/30 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-3 shadow-2xl">
                    <div className="relative aspect-square overflow-hidden rounded-2xl">
                      <Image
                        src={cinematicImages.soloProduct}
                        alt="SOLO 12V Battery"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY TICKER ─── */}
      <section className="border-y border-border bg-solo-red py-6 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6">
          {[
            "Motorcycle",
            "Automotive",
            "Tractor & HD",
            "Solar Deep-Cycle",
            "UPS & Backup",
          ].map((cat) => (
            <span key={cat} className="font-display text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap className="h-4 w-4 text-white/80" />
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ─── PRODUCT RANGE ─── */}
      <section id="solo-range" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SOLO Range"
            title="Complete SOLO® Battery Catalog"
            description="Backed by Crown Accumulator manufacturing standards and our nationwide warranty support."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {soloProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE SOLO ─── */}
      <section className="bg-surface-subtle py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
                <Image
                  src={cinematicImages.soloMotorcycle}
                  alt="SOLO Motorcycle Battery in use"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="The SOLO Advantage"
                title="Engineering Quality Built Into Every Battery"
              />

              <div className="mt-8 space-y-4">
                {[
                  "Cast Grids In-House — Formulated with tin-calcium alloys for zero maintenance",
                  "Vibration Resistant — Polypropylene case structure protects internal plates",
                  "Factory Charged — 100% ready to install right out of the box",
                  "18-Month Warranty — Comprehensive warranty coverage on automotive range",
                  "Nationwide Support — Network of 200+ authorized dealers and service points",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-solo-red mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
