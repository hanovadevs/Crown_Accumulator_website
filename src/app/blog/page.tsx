import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Battery guides, maintenance tips, and industry insights from the Crown Accumulator team.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="bg-surface pb-24">
      {/* Header */}
      <section className="bg-crown-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
            Engineering Blog &amp; Guides
          </span>
          <h1 className="font-display mt-2 text-4xl font-bold text-white sm:text-5xl">
            Practical Battery Knowledge
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            Insights on battery chemistry, solar sizing, plate quality control, and winter maintenance from our engineers.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          {featuredPost && (
            <ScrollReveal direction="up" className="mb-16">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-border bg-white shadow-xs transition-all hover:shadow-xl lg:grid-cols-12"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12 lg:col-span-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-crown-maroon">
                    Featured Article · {featuredPost.category}
                  </span>
                  <h2 className="font-display mt-3 text-2xl font-bold text-text-primary group-hover:text-crown-navy sm:text-3xl leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-xs leading-relaxed text-text-muted line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-4 text-xs text-text-muted border-t border-slate-100 pt-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-crown-navy" />
                      {featuredPost.author}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-crown-maroon" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Remaining Posts */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.08}>
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
                    <h3 className="font-display mt-2 text-lg font-bold text-text-primary group-hover:text-crown-navy line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-[11px] text-text-muted border-t border-slate-100 pt-3">
                      {formatDate(post.date)} · {post.author}
                    </p>
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
