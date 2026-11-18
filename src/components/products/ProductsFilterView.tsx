"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categoryLabels, type ProductCategory } from "@/data/products";

const brands = [...new Set(products.map((product) => product.brand))];

const categories = Object.entries(categoryLabels) as [ProductCategory, string][];

export function ProductsFilterView() {
  const params = useSearchParams();
  const category = params.get("category");
  const brand = params.get("brand");
  return <ProductCatalog key={params.toString()} initialCategory={category && category in categoryLabels ? category as ProductCategory : "all"} initialBrand={brands.some((item) => item === brand) ? brand! : "all"} />;
}

function ProductCatalog({ initialCategory, initialBrand }: { initialCategory: ProductCategory | "all"; initialBrand: string }) {
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);
  const filtered = products.filter((product) => (category === "all" || product.category === category) && (brand === "all" || product.brand === brand));

  return (
    <div className="catalog-page">
      <section className="page-intro">
        <div className="section-shell"><p className="eyebrow">Crown Accumulator products</p><h1>Find your power.</h1><p>Explore the SOLO battery models and battery plate profiles available for supply inquiries.</p></div>
      </section>
      <section className="catalog-content section-shell">
        <div className="catalog-toolbar">
          <div className="catalog-tabs" role="group" aria-label="Filter products by application">
            <button type="button" onClick={() => setCategory("all")} aria-pressed={category === "all"}>All products</button>
            {categories.map(([key, label]) => <button type="button" key={key} onClick={() => setCategory(key)} aria-pressed={category === key}>{label}</button>)}
          </div>
          <div className="brand-filter"><label htmlFor="brand-filter">Brand</label><select id="brand-filter" value={brand} onChange={(event) => setBrand(event.target.value)}><option value="all">All brands</option>{brands.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
        </div>
        <p className="catalog-result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "product" : "products"}</p>
        {filtered.length ? <div className="catalog-product-grid">{filtered.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="empty-catalog"><h2>No matching products.</h2><p>Try another application or brand.</p><button type="button" className="text-link" onClick={() => { setCategory("all"); setBrand("all"); }}>Reset filters</button></div>}
      </section>
    </div>
  );
}
