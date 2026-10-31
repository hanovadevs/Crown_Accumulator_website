import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { researchArticles } from "@/data/research";
import { BookOpen, ArrowRight, FileText } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Battery Research & Engineering Whitepapers | Crown Accumulator",
  description:
    "Technical research whitepapers and laboratory reports on lead-acid battery electrochemistry, tubular vs flat plate solar technology, grid metallurgy, and CCA standards.",
  keywords: [
    "battery research",
    "lead acid electrochemistry",
    "tubular vs flat plate battery",
    "grid alloy metallurgy",
    "CCA testing standards SAE DIN",
    "Crown Accumulator laboratory",
    "battery engineering whitepapers",
  ],
  alternates: {
    canonical: "https://www.crownaccumulator.com/research",
  },
  openGraph: {
    title: "Battery Research & Engineering Whitepapers | Crown Accumulator",
    description:
      "In-depth research and technical documentation from Crown Accumulator's metallurgy lab and QC engineering division.",
    url: "https://www.crownaccumulator.com/research",
    siteName: "Crown Accumulator",
    type: "website",
    images: [
      {
        url: "/images/solar_battery_storage.png",
        width: 1200,
        height: 630,
        alt: "Battery Research & Technical Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Battery Research & Engineering Whitepapers | Crown Accumulator",
    description:
      "Technical laboratory papers covering electrochemistry, grid metallurgy, and battery testing standards.",
    images: ["/images/solar_battery_storage.png"],
  },
};

const researchCatalogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.crownaccumulator.com/research#collection",
      name: "Crown Accumulator Technical Research Papers",
      url: "https://www.crownaccumulator.com/research",
      description:
        "Technical library and laboratory research papers on lead-acid battery technology.",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: researchArticles.length,
        itemListElement: researchArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "TechArticle",
            headline: article.title,
            url: `https://www.crownaccumulator.com/research/${article.slug}`,
            description: article.excerpt,
            datePublished: article.date,
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.crownaccumulator.com/research#breadcrumbs",
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
          name: "Research & Technical",
          item: "https://www.crownaccumulator.com/research",
        },
      ],
    },
  ],
};

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchCatalogSchema) }}
      />
      <div className="bg-surface pb-24">
        {/* Header */}
        <section className="bg-crown-navy py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
              Technical Library &amp; Laboratory Papers
            </span>
            <h1 className="font-display mt-2 text-4xl font-bold text-white sm:text-5xl">
              Research &amp; Technical Documentation
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-slate-300">
              In-depth technical papers from our metallurgy lab, QC department, and solar engineering team covering electrochemistry, grid metallurgy, and battery testing standards.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {researchArticles.map((article, idx) => (
                <ScrollReveal key={article.slug} delay={idx * 0.08}>
                  <Link
                    href={`/research/${article.slug}`}
                    className="group grid overflow-hidden rounded-3xl border border-border bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-12"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden md:col-span-5 md:aspect-auto">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                    <div className="flex flex-col justify-between p-8 md:col-span-7">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-crown-maroon">
                            {article.category}
                          </span>
                          <span className="text-slate-300">·</span>
                          <span className="flex items-center gap-1 text-xs text-text-muted">
                            <BookOpen className="h-3 w-3 text-crown-navy" />
                            Research Paper
                          </span>
                        </div>
                        <h2 className="font-display mt-2 text-2xl font-bold text-text-primary group-hover:text-crown-navy sm:text-3xl">
                          {article.title}
                        </h2>
                        <p className="mt-2 text-xs font-semibold text-text-secondary">
                          {article.subtitle}
                        </p>
                        <p className="mt-3 text-xs leading-relaxed text-text-muted">
                          {article.excerpt}
                        </p>

                        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                          <span className="text-[11px] text-text-muted">
                            Published {article.date} · Metallurgy Lab
                          </span>
                          <span className="font-display text-xs font-bold uppercase tracking-wider text-crown-navy flex items-center gap-1 group-hover:underline">
                            Read Full Paper <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
