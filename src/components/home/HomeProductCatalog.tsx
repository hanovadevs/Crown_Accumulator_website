"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import Link from "next/link";

export function HomeProductCatalog({ batteries, plates }: { batteries: Product[]; plates: Product[] }) {
  const [category, setCategory] = useState<"solo" | "plates">("solo");
  const selected = category === "solo" ? batteries : plates;

  return (
    <section className="home-catalog" aria-labelledby="catalog-title">
      <div className="section-shell">
        <div className="section-topline">
          <div><p className="eyebrow">What we manufacture</p><h2 id="catalog-title">Find your product.</h2></div>
          <Link className="text-link" href="/products">Full catalog <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="catalog-tabs" role="group" aria-label="Product category">
          <button type="button" aria-pressed={category === "solo"} onClick={() => setCategory("solo")}>SOLO batteries</button>
          <button type="button" aria-pressed={category === "plates"} onClick={() => setCategory("plates")}>Battery plates</button>
        </div>
        <div className="home-product-grid" aria-live="polite">
          {selected.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
        {category === "plates" && <Link href="/battery-plates" className="home-range-link">Explore all 13 plate profiles <span aria-hidden="true">↗</span></Link>}
      </div>
    </section>
  );
}
