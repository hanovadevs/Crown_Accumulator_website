"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categoryLabels, type ProductCategory } from "@/data/products";

type Filter = ProductCategory | "all" | "sprockets";
const brands = [...new Set(products.map((product) => product.brand))];
const filters: [Filter, string][] = [
  ["all", "All products"], ["motorcycle", "Motorcycle batteries"],
  ["batteries", "Automotive batteries"], ["plates", "Battery plates"], ["sprockets", "Motorcycle sprockets"],
];
const entries = products.map((product) => ({
  product,
  terms: normalize([product.name, product.model, product.brand, categoryLabels[product.category], product.specs.map(({ value }) => value).join(" ")].join(" ")),
}));

function normalize(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, ""); }

export function ProductsFilterView({ initialCategory, initialBrand }: { initialCategory?: string; initialBrand?: string }) {
  const [category, setCategory] = useState<Filter>(filters.find(([key]) => key === initialCategory)?.[0] ?? "all");
  const [brand, setBrand] = useState(brands.find((item) => item === initialBrand) ?? "all");
  const [query, setQuery] = useState("");
  const words = query.split(/\s+/).map(normalize).filter(Boolean);
  const filtered = entries.filter(({ product, terms }) => (category === "all" || product.category === category) && (brand === "all" || product.brand === brand) && words.every((word) => terms.includes(word)));
  const sprocketMatch = category === "sprockets" || (category === "all" && brand === "all" && words.length > 0 && words.every((word) => "motorcyclesprocketschainsdrivecomponents".includes(word)));

  function selectCategory(value: Filter) { setCategory(value); setBrand("all"); }
  function reset() { selectCategory("all"); setQuery(""); }

  return (
    <div className="catalog-page">
      <section className="page-intro showroom-intro">
        <div className="section-shell"><p className="eyebrow">Product catalogue</p><h1>Find the right power.</h1><p>Compare SOLO batteries, browse battery plate profiles, or enquire about motorcycle sprockets.</p></div>
      </section>
      <section className="catalog-content section-shell" aria-label="Product explorer">
        <div className="catalog-toolbar">
          <div className="catalog-tabs" role="group" aria-label="Filter by product category">
            {filters.map(([key, label]) => <button type="button" key={key} onClick={() => selectCategory(key)} aria-pressed={category === key}>{label}</button>)}
          </div>
          <label className="catalog-search"><span className="sr-only">Search products</span><input type="search" placeholder="Search model, brand or rating" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        </div>
        <div className="catalog-status-row">
          <p className="catalog-result-count" aria-live="polite">{sprocketMatch && filtered.length === 0 ? "Available by enquiry" : `${filtered.length} ${filtered.length === 1 ? "product" : "products"}`}</p>
          {(category === "all" || category === "plates") && <div className="brand-filter"><label htmlFor="brand-filter">Brand</label><select id="brand-filter" value={brand} onChange={(event) => setBrand(event.target.value)}><option value="all">All brands</option>{brands.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>}
        </div>
        {filtered.length > 0 && <div className="catalog-product-grid">{filtered.map(({ product }) => <ProductCard key={product.slug} product={product} />)}</div>}
        {sprocketMatch ? (
          <div className="catalog-sprocket"><div><p className="eyebrow">Motorcycle sprockets</p><h2>Find the right fit.</h2><p>Share a sample or the motorcycle model, tooth count and chain pitch to discuss an order.</p></div><Link className="button button-red" href="/manufacturing#sprockets">Sprocket enquiries <span aria-hidden="true">↗</span></Link></div>
        ) : filtered.length === 0 && (
          <div className="empty-catalog"><h2>No matching products.</h2><p>Try a model number, a brand name, or a different category.</p><button type="button" className="text-link" onClick={reset}>Clear all filters</button></div>
        )}
      </section>
    </div>
  );
}
