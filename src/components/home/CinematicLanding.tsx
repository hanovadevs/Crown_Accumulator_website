"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Battery,
  Cog,
  Factory,
  Layers,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Award,
  ChevronRight,
  Sliders,
  Sparkles,
} from "lucide-react";
import { company, yearsInBusiness } from "@/data/company";
import { cinematicImages } from "@/data/cinematic-images";
import { products, type ProductCategory } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  {
    icon: Battery,
    num: "01",
    title: "SOLO Batteries",
    line: "Motorcycle · Automotive · Solar · UPS",
    desc: "Built with in-house cast grids and high-purity active materials for maximum cranking and endurance.",
    image: cinematicImages.soloProduct,
    href: "/solo",
    accent: "border-solo-red/30 hover:border-solo-red",
  },
  {
    icon: Layers,
    num: "02",
    title: "Battery Plates",
    line: "Cast, expanded & formed lead grids",
    desc: "Distributing positive and negative plates for battery assemblers with strict alloy and thickness tolerances.",
    image: cinematicImages.plateProduction,
    href: "/battery-plates",
    accent: "border-crown-maroon/30 hover:border-crown-maroon",
  },
  {
    icon: Cog,
    num: "03",
    title: "Precision Sprockets",
    line: "OEM motorcycle parts supply",
    desc: "Heavy-duty steel sprockets manufactured to exact OEM tolerances for motorcycle brands.",
    image: cinematicImages.soloMotorcycle,
    href: "/about#products",
    accent: "border-crown-navy/30 hover:border-crown-navy",
  },
  {
    icon: Factory,
    num: "04",
    title: "Private Label OEM",
    line: "Your brand, our production line",
    desc: "Complete end-to-end custom battery manufacturing, packaging, and export documentation for your brand.",
    image: cinematicImages.factory,
    href: "/manufacturing",
    accent: "border-crown-maroon/30 hover:border-crown-maroon",
  },
];

const categoryTabs: { id: ProductCategory; label: string }[] = [
  { id: "motorcycle", label: "Motorcycle" },
  { id: "automotive", label: "Automotive" },
  { id: "solar", label: "Solar & Energy" },
  { id: "tractor", label: "Agriculture & HD" },
  { id: "plates", label: "Battery Plates" },
];

export function CinematicLanding() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("motorcycle");

  const filteredProducts = products.filter((p) => p.category === activeCategory);

  return (
    <div className="relative bg-surface">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 rounded-full border border-crown-navy/15 bg-white/80 px-4 py-1.5 shadow-2xs backdrop-blur-md">
                  <span className="flex h-2 w-2 rounded-full bg-solo-red animate-pulse" />
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-crown-navy">
                    Established {company.foundedYear} · Over {yearsInBusiness()} Years of Excellence
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl leading-[1.05]">
                  Engineered Power for <span className="text-crown-maroon">Industries</span> &amp; <span className="text-solo-red">Riders</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                  Crown Accumulator is Pakistan&apos;s premier battery manufacturer — building SOLO® batteries, high-purity lead battery plates, and OEM sprockets for top motorcycle brands and energy networks.
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/products"
                    className="font-display inline-flex items-center gap-2 rounded-xl bg-crown-navy px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-crown-navy-light hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Explore Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="font-display inline-flex items-center gap-2 rounded-xl border border-border bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-crown-navy shadow-2xs transition-all hover:border-crown-maroon hover:text-crown-maroon hover:-translate-y-0.5"
                  >
                    Request OEM Quote
                  </Link>
                </div>
              </ScrollReveal>

              {/* Stat Highlights */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                  <div>
                    <p className="font-display text-2xl font-bold text-crown-navy sm:text-3xl">
                      <AnimatedCounter value={yearsInBusiness()} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                      Years Manufacturing
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-crown-maroon sm:text-3xl">
                      <AnimatedCounter value={500} suffix="K+" />
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                      Plates / Month
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-solo-red sm:text-3xl">
                      <AnimatedCounter value={8} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                      Major OEM Clients
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Backdrop glow */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-crown-navy/10 via-crown-maroon/10 to-solo-red/10 blur-2xl" />
                  
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={cinematicImages.hero}
                        alt="Crown Accumulator manufacturing floor"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="inline-flex items-center gap-1.5 rounded-md bg-solo-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                          SOLO® Flagship Line
                        </div>
                        <h3 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">
                          In-House Foundry &amp; Assembly
                        </h3>
                        <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                          Every battery features cast grids produced directly in our facility for consistent cranking power.
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 p-1">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="font-display text-xs font-bold text-crown-navy">ISO 9001:2015</p>
                        <p className="text-[11px] text-text-muted">Strict Quality Assurance</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="font-display text-xs font-bold text-crown-maroon">OEM Partner</p>
                        <p className="text-[11px] text-text-muted">Road Prince &amp; Ravi Auto</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT / PARTNER MARQUEE ─── */}
      <section className="border-y border-border bg-surface-elevated py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
          <p className="font-display text-center text-xs font-bold uppercase tracking-[0.25em] text-text-muted">
            Trusted Supply Partner For Leading Brands Across Pakistan
          </p>
        </div>
        <MarqueeStrip items={company.customers} />
      </section>

      {/* ─── CAPABILITIES GRID ─── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Everything we manufacture under one roof"
            description="From raw lead casting to final battery formation and testing — we control every phase of the manufacturing process."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => {
              const IconComp = cap.icon;
              return (
                <ScrollReveal key={cap.num} delay={i * 0.1}>
                  <Link
                    href={cap.href}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${cap.accent}`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="rounded-xl bg-slate-100 p-3 text-crown-navy transition-colors group-hover:bg-crown-navy group-hover:text-white">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="font-display text-2xl font-bold text-slate-300 group-hover:text-crown-maroon transition-colors">
                          {cap.num}
                        </span>
                      </div>

                      <h3 className="font-display mt-6 text-xl font-bold text-text-primary group-hover:text-crown-navy">
                        {cap.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-crown-maroon">
                        {cap.line}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-text-muted">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-crown-navy group-hover:underline">
                        Explore Category
                      </span>
                      <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-crown-navy" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SOLO BRAND SPOTLIGHT ─── */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src={cinematicImages.soloMotorcycle}
            alt="SOLO Battery context"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right">
                <Image
                  src="/logos/solo-batteries.png"
                  alt="SOLO Batteries & Parts"
                  width={240}
                  height={80}
                  className="h-16 w-auto sm:h-20"
                />
                
                <h2 className="font-display mt-8 text-3xl font-bold text-white sm:text-5xl leading-tight">
                  The Brand Riders &amp; Fleets Trust Daily
                </h2>

                <p className="mt-6 text-base leading-relaxed text-slate-300">
                  SOLO® is Crown Accumulator&apos;s direct consumer brand. Built specifically for high heat tolerance, vibration resistance, and instant cranking response under tough climate conditions.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "100% In-house cast grids for prolonged cycle life",
                    "Automated battery plate formation and chemical testing",
                    "Spill-proof maintenance-free casing for motorcycles & cars",
                    "Over 200+ authorized dealers & service centers nationwide",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-solo-red-light" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/solo"
                    className="font-display inline-flex items-center gap-2 rounded-xl bg-solo-red px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-solo-red-dark hover:shadow-lg"
                  >
                    Explore SOLO Brand
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/products?brand=SOLO"
                    className="font-display inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800"
                  >
                    View Products
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Product Image Visual */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -inset-4 rounded-3xl bg-solo-red/20 blur-3xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-2xl">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={cinematicImages.soloProduct}
                        alt="SOLO Battery Product Showcase"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-400">
                      <span>SOLO 12N7-4B &amp; DIN 55 Series</span>
                      <span className="text-solo-red font-bold font-display">100% Factory Charged</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE PRODUCT FINDER / CATEGORY SHOWCASE ─── */}
      <section className="py-24 sm:py-32 bg-surface-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Product Catalog"
            title="Browse products by industry & application"
            description="Filter through our complete range of motorcycle, automotive, solar, and battery plate lines."
            align="center"
          />

          {/* Category Tabs */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-white p-1.5 shadow-xs">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`font-display rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === tab.id
                      ? "bg-crown-navy text-white shadow-xs"
                      : "text-text-muted hover:text-crown-navy hover:bg-slate-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <Image
                        src={product.heroImage}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <span className="font-display absolute left-4 top-4 rounded-md bg-crown-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        {product.brand}
                      </span>
                      <span className="font-display absolute bottom-3 left-4 text-xl font-bold text-white">
                        {product.model}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-crown-navy">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-text-muted line-clamp-2 flex-1">
                        {product.tagline}
                      </p>

                      <div className="mt-4 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-text-secondary">
                        {product.specs.slice(0, 2).map((s) => (
                          <div key={s.label}>
                            <span className="text-[10px] uppercase text-text-muted block">{s.label}</span>
                            <span className="font-bold font-display text-crown-navy">{s.value}</span>
                          </div>
                        ))}
                        <ChevronRight className="h-5 w-5 text-crown-maroon transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="font-display inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crown-navy hover:text-crown-maroon"
            >
              View Full Product Catalog ({products.length} Items) →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MANUFACTURING & PLATE TECH SPOTLIGHT ─── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <ScrollReveal direction="right">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
                  <Image
                    src={cinematicImages.plateProduction}
                    alt="Precision Battery Plate Production"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-crown-navy/40 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="left">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-crown-maroon">
                  Vertical Integration &amp; Quality
                </span>
                <h2 className="font-display mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
                  High-Purity Battery Plate Production
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  We cast and expand positive and negative lead-acid battery plates directly in our factory. Our automated grid casting ensures exact weight, thickness, and alloy composition.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border bg-white p-5">
                    <Zap className="h-6 w-6 text-crown-maroon" />
                    <h4 className="font-display mt-3 text-base font-bold text-text-primary">
                      Cast &amp; Expanded
                    </h4>
                    <p className="mt-1 text-xs text-text-muted">
                      Custom alloys including Ca-Sn and low-antimony formulations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-white p-5">
                    <ShieldCheck className="h-6 w-6 text-crown-navy" />
                    <h4 className="font-display mt-3 text-base font-bold text-text-primary">
                      Formation Testing
                    </h4>
                    <p className="mt-1 text-xs text-text-muted">
                      Tank-formed or unformed options available for assemblers.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/battery-plates"
                    className="font-display inline-flex items-center gap-2 rounded-xl bg-crown-maroon px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-crown-maroon-dark"
                  >
                    Battery Plate Specifications
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KNOWLEDGE & BLOG INSIGHTS ─── */}
      <section className="py-24 sm:py-32 bg-surface-elevated border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-widest text-crown-maroon">
                Technical Insights
              </span>
              <h2 className="font-display mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
                Engineering Articles &amp; Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-display text-xs font-bold uppercase tracking-wider text-crown-navy hover:text-crown-maroon"
            >
              All Articles →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-crown-maroon">
                      {post.category} · {post.readTime}
                    </span>
                    <h3 className="font-display mt-2 text-base font-bold text-text-primary group-hover:text-crown-navy line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="relative overflow-hidden bg-crown-navy py-20 text-white">
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <ScrollReveal direction="up">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
              Get In Touch With Manufacturing Team
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-5xl">
              Ready to Order Batteries or Custom Plates?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
              Whether you need SOLO batteries for distribution, custom battery plates for assembly, or an OEM private label program — our engineering team is ready.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="font-display inline-flex items-center gap-2 rounded-xl bg-crown-maroon px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-crown-maroon-dark"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="font-display inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/70 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800"
              >
                Company Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
