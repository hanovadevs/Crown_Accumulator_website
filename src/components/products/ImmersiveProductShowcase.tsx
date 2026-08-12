"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Zap, ShieldCheck, Factory, Award, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const accentColors = {
  navy: {
    bg: "bg-crown-navy",
    text: "text-crown-navy",
    border: "border-crown-navy/20",
    badge: "bg-crown-navy text-white",
  },
  maroon: {
    bg: "bg-crown-maroon",
    text: "text-crown-maroon",
    border: "border-crown-maroon/20",
    badge: "bg-crown-maroon text-white",
  },
  "solo-red": {
    bg: "bg-solo-red",
    text: "text-solo-red",
    border: "border-solo-red/20",
    badge: "bg-solo-red text-white",
  },
};

export function ImmersiveProductShowcase({ product }: { product: Product }) {
  const accent = accentColors[product.accentColor];
  const relatedProducts = getProductsByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-surface pb-24">
      {/* ─── HERO HEADER ─── */}
      <section className="relative overflow-hidden bg-crown-navy py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Product Catalog
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <span
                className={cn(
                  "font-display inline-block rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4",
                  accent.badge
                )}
              >
                {product.brand} · {product.category.toUpperCase()}
              </span>

              <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {product.name} — <span className="text-solo-red-light">{product.model}</span>
              </h1>

              <p className="mt-4 text-base text-slate-300 sm:text-lg">
                {product.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="font-display inline-flex items-center gap-2 rounded-xl bg-crown-maroon px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-crown-maroon-dark"
                >
                  Request Product Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#specs"
                  className="font-display inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800"
                >
                  Technical Specs
                </Link>
              </div>
            </div>

            {/* Right Product Image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-4 shadow-2xl">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECS SECTION ─── */}
      <section id="specs" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-crown-maroon">
            Technical Matrix
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            Product Specifications
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.specs.map((spec, idx) => (
              <ScrollReveal key={spec.label} delay={idx * 0.05}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-xs">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block">
                    {spec.label}
                  </span>
                  <span className="font-display mt-1 block text-2xl font-bold text-crown-navy">
                    {spec.value}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES & DESCRIPTION ─── */}
      <section className="bg-surface-subtle py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <ScrollReveal direction="right">
                <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
                  Engineering Highlights &amp; Features
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {product.description}
                </p>

                <div className="mt-8 space-y-3">
                  {product.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-crown-maroon text-white text-xs">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-crown-navy mb-3">
                    Recommended Applications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-lg border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-text-primary shadow-2xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-xl">
                  <Image
                    src={product.gallery[1] ?? product.heroImage}
                    alt={`${product.name} detail view`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY STRIP ─── */}
      {product.gallery.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-8">
              Product Image Gallery
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {product.gallery.map((img, idx) => (
                <div key={img + idx} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-xs">
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── RELATED PRODUCTS ─── */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-8">
              Related Products In {product.category.toUpperCase()}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
