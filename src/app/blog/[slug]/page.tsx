import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts
    .filter((p) => p.slug !== "hanova-devs")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  const title = `${post.title} | Crown Accumulator Blog`;
  const description = post.excerpt;

  return {
    title,
    description,
    keywords: [
      post.title,
      post.category,
      ...post.tags,
      "Crown Accumulator",
      "battery engineering",
      "SOLO batteries",
    ],
    alternates: {
      canonical: `https://www.crownaccumulator.com/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.crownaccumulator.com/blog/${post.slug}`,
      siteName: "Crown Accumulator",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    const formatted = block.replace(/\*\*(.+?)\*\*/g, "<strong class='text-text-primary font-bold'>$1</strong>");
    return (
      <p
        key={i}
        className="mt-5 text-base leading-relaxed text-text-secondary"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://www.crownaccumulator.com/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: {
          "@type": "Organization",
          name: "Crown Accumulator",
          url: "https://www.crownaccumulator.com",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.crownaccumulator.com/blog/${post.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.crownaccumulator.com/blog/${post.slug}#breadcrumbs`,
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
            name: "Blog",
            item: "https://www.crownaccumulator.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://www.crownaccumulator.com/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <article className="editorial-article">
        <header className="article-masthead">
          <div className="section-shell article-masthead-layout">
            <div className="article-headline">
              <Link href="/blog" className="article-back"><span aria-hidden="true">&larr; </span>Back to the journal</Link>
              <p className="eyebrow">{post.category}</p>
              <h1>{post.title}</h1>
              <div className="article-meta"><span>{post.author}</span><time dateTime={post.date}>{formatDate(post.date)}</time><span>{post.readTime}</span></div>
            </div>
            <div className="article-photo"><Image src={post.image} alt={post.imageAlt} fill preload sizes="(max-width: 700px) 95vw, 43vw" /></div>
          </div>
        </header>
        <div className="article-reading">
          {renderContent(post.content)}
        </div>
      </article>
    </>
  );
}
