import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

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
  return { title: post.title, description: post.excerpt };
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

  return (
    <article className="bg-surface pb-24">
      {/* Hero Header Image */}
      <div className="relative h-80 overflow-hidden sm:h-96 bg-crown-navy">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="mx-auto max-w-4xl text-white">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-white mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <span className="block text-xs font-bold uppercase tracking-widest text-solo-red-light mb-2">
              {post.category}
            </span>
            <h1 className="font-display text-3xl font-bold text-white sm:text-5xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 text-xs text-text-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-semibold text-text-primary">
              <User className="h-4 w-4 text-crown-navy" />
              {post.author}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-crown-maroon" />
              {formatDate(post.date)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-crown-navy" />
              {post.readTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-crown-navy"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-xs border border-border sm:p-12">
          {renderContent(post.content)}
        </div>
      </div>
    </article>
  );
}
