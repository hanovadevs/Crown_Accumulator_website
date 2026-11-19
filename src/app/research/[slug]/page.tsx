import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResearchArticle, researchArticles } from "@/data/research";
import { formatDate } from "@/lib/utils";

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

  const title = `${article.title} | Battery Engineering Research`;
  const description = `${article.subtitle}. ${article.excerpt}`;

  return {
    title,
    description,
    keywords: [
      article.title,
      article.category,
      "lead acid electrochemistry",
      "battery research paper",
      "Crown Accumulator metallurgy lab",
      "battery engineering standards",
      ...article.references.slice(0, 3),
    ],
    alternates: {
      canonical: `https://www.crownaccumulator.com/research/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.crownaccumulator.com/research/${article.slug}`,
      siteName: "Crown Accumulator",
      type: "article",
      publishedTime: article.date,
      authors: ["Crown Accumulator Metallurgy Lab"],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.image],
    },
  };
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://www.crownaccumulator.com/research/${article.slug}#article`,
        headline: article.title,
        alternativeHeadline: article.subtitle,
        description: article.excerpt,
        image: article.image,
        datePublished: article.date,
        author: {
          "@type": "Organization",
          name: "Crown Accumulator Metallurgy Laboratory",
          url: "https://www.crownaccumulator.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Crown Accumulator",
          url: "https://www.crownaccumulator.com",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.crownaccumulator.com/research/${article.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.crownaccumulator.com/research/${article.slug}#breadcrumbs`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `https://www.crownaccumulator.com/research/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="editorial-article">
        <header className="article-masthead">
          <div className="section-shell article-masthead-layout">
            <div className="article-headline">
              <Link href="/research" className="article-back"><span aria-hidden="true">&larr; </span>Back to the research library</Link>
              <p className="eyebrow">{article.category}</p>
              <h1>{article.title}</h1>
              <p className="article-deck">{article.subtitle}</p>
              <div className="article-meta"><time dateTime={article.date}>{formatDate(article.date)}</time></div>
            </div>
            <div className="article-photo"><Image src={article.image} alt={article.imageAlt} fill preload sizes="(max-width: 700px) 95vw, 43vw" /></div>
          </div>
        </header>
        <div className="article-reading">
          {renderContent(article.content)}
          {article.references.length > 0 && <section className="article-references" aria-labelledby="research-references">
            <h2 className="font-display text-lg font-semibold" id="research-references">References &amp; academic standards</h2>
            <ul>{article.references.map((ref) => <li key={ref}>{ref}</li>)}</ul>
          </section>}
        </div>
      </article>
    </>
  );
}
