import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { researchArticles } from "@/data/research";
import { BookOpen, ArrowRight, FileText } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Research & Technical",
  description:
    "Technical research papers and engineering resources on lead-acid battery chemistry, plate technology, and testing standards.",
};

export default function ResearchPage() {
  return (
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
                  <div className="relative aspect-[16/10] md:aspect-auto md:col-span-4 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:col-span-8">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-crown-maroon" />
                      <span className="text-xs font-bold uppercase tracking-wider text-crown-navy">
                        {article.category}
                      </span>
                    </div>

                    <h2 className="font-display mt-3 text-2xl font-bold text-text-primary group-hover:text-crown-navy">
                      {article.title}
                    </h2>
                    <p className="mt-1 text-xs font-semibold text-crown-maroon">
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
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
