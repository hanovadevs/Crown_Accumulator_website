import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResearchArticle, researchArticles } from "@/data/research";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return researchArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchArticle(slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt };
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.includes(":**")) {
      const [heading, ...rest] = block.split("**");
      const title = heading.replace(/\*\*/g, "").trim();
      const body = rest.join("").replace(/^\s*:\s*/, "").replace(/\*\*/g, "");
      return (
        <div key={i} className="mt-8 border-l-2 border-crown-maroon pl-4">
          <h3 className="font-display text-lg font-bold text-text-primary">
            {title || block.match(/\*\*(.+?)\*\*/)?.[1]}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {body || block.replace(/\*\*(.+?)\*\*/g, "").trim()}
          </p>
        </div>
      );
    }
    const formatted = block.replace(/\*\*(.+?)\*\*/g, "<strong class='text-text-primary font-bold'>$1</strong>");
    return (
      <p
        key={i}
        className="mt-4 text-sm leading-relaxed text-text-secondary"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  });
}

export default async function ResearchArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getResearchArticle(slug);
  if (!article) notFound();

  return (
    <article className="bg-surface pb-24">
      {/* Hero */}
      <div className="bg-crown-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Research Library
          </Link>

          <span className="block text-xs font-bold uppercase tracking-widest text-solo-red-light mb-2">
            {article.category}
          </span>
          <h1 className="font-display text-3xl font-bold text-white sm:text-5xl leading-tight">
            {article.title}
          </h1>
          <p className="mt-2 text-base text-slate-300">{article.subtitle}</p>
          <p className="mt-4 text-xs text-slate-400">Published {formatDate(article.date)}</p>
        </div>
      </div>

      {/* Main Body */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 border border-border shadow-xs sm:p-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8">
            <Image src={article.image} alt={article.title} fill className="object-cover" priority sizes="100vw" />
          </div>

          <div>{renderContent(article.content)}</div>

          {article.references.length > 0 && (
            <div className="mt-12 rounded-2xl bg-slate-50 p-6 border border-border">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-crown-navy">
                References &amp; Academic Standards
              </h3>
              <ul className="mt-4 space-y-2">
                {article.references.map((ref) => (
                  <li key={ref} className="text-xs text-text-muted">
                    — {ref}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
