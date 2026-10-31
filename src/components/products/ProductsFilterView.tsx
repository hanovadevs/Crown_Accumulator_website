"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import {
  products,
  categoryLabels,
  type ProductCategory,
} from "@/data/products";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

const categories = Object.entries(categoryLabels) as [ProductCategory, string][];

export function ProductsFilterView() {
  const searchParams = useSearchParams();
  const activeCategoryParam = searchParams.get("category") as ProductCategory | null;
  const activeBrandParam = searchParams.get("brand");

  const [category, setCategory] = useState<ProductCategory | "all">(activeCategoryParam || "all");
  const [selectedBrand, setSelectedBrand] = useState<string>(activeBrandParam || "all");

  useEffect(() => {
    if (activeCategoryParam) setCategory(activeCategoryParam);
    if (activeBrandParam) setSelectedBrand(activeBrandParam);
  }, [activeCategoryParam, activeBrandParam]);

  let filtered = products;
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (selectedBrand !== "all") {
    filtered = filtered.filter((p) => p.brand === selectedBrand);
  }

  return (
    <div className="bg-surface pb-24">
      {/* Page Header */}
      <section className="bg-crown-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
            Catalog &amp; Specs
          </span>
          <h1 className="font-display mt-2 text-4xl font-bold text-white sm:text-5xl">
            Complete Product Range
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            Explore Crown Accumulator&apos;s full lineup of SOLO batteries, battery plates, sprockets, and OEM manufacturing solutions.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border bg-white sticky top-16 z-30 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col py-4 gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setCategory("all")}
                className={cn(
                  "font-display shrink-0 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors",
                  category === "all"
                    ? "bg-crown-navy text-white shadow-xs"
                    : "bg-slate-100 text-text-muted hover:text-crown-navy"
                )}
              >
                All ({products.length})
              </button>
              {categories.map(([key, label]) => {
                const count = products.filter((p) => p.category === key).length;
                return (
                  <button
                    key={key}
                    onClick={() => setCategory(key)}
                    className={cn(
                      "font-display shrink-0 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors",
                      category === key
                        ? "bg-crown-navy text-white shadow-xs"
                        : "bg-slate-100 text-text-muted hover:text-crown-navy"
                    )}
                  >
                    {label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Brand Filter */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Brand:
              </span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="rounded-lg border border-border bg-slate-50 px-3 py-1.5 text-xs font-semibold text-text-primary outline-none focus:border-crown-navy"
              >
                <option value="all">All Brands</option>
                <option value="SOLO">SOLO®</option>
                <option value="Crown Accumulator">Crown Accumulator</option>
                <option value="OEM">OEM Private Label</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-20 text-center rounded-2xl border border-dashed border-border bg-white">
              <p className="font-display text-lg font-bold text-text-primary">
                No products found matching your filters.
              </p>
              <button
                onClick={() => {
                  setCategory("all");
                  setSelectedBrand("all");
                }}
                className="mt-4 font-display text-xs font-bold uppercase tracking-wider text-crown-maroon underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

