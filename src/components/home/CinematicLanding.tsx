"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { productImages } from "@/data/product-images";
import { company } from "@/data/company";
import { ProductCard } from "@/components/products/ProductCard";
import { ClientsSection } from "@/components/company/ClientsSection";

const supplyOptions = [
  {
    title: "Battery plates",
    description: "Compare plate profiles and lug positions. Send a drawing or sample to confirm your specification.",
    href: "/battery-plates",
    action: "View plate range",
  },
  {
    title: "OEM & private label",
    description: "Discuss your product brief, branding, order quantity, and delivery requirements directly with our team.",
    href: "/manufacturing",
    action: "Explore manufacturing",
  },
  {
    title: "Trade supply",
    description: "Speak with Crown about battery orders, plate supply, and distribution requirements.",
    href: "/contact",
    action: "Contact sales",
  },
];

export function CinematicLanding() {
  const [category, setCategory] = useState<"solo" | "plates">("solo");
  const selectedProducts = products
    .filter((product) => category === "solo"
      ? product.brand === "SOLO"
      : product.category === "plates")
    .slice(0, 3);

  return (
    <div className="home-page">
      <section className="home-hero section-shell" aria-labelledby="hero-title">
        <div className="home-hero-copy">
          <p className="eyebrow">Crown Accumulator · Pakistan</p>
          <h1 id="hero-title">Battery manufacturing.<br /><span>Since {company.foundedYear}.</span></h1>
          <p className="home-hero-description">
            SOLO batteries, battery plates, and motorcycle sprockets
            for trade and OEM supply.
          </p>
          <div className="home-hero-actions">
            <Link className="button button-red" href="/products">View products <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/contact">Discuss your requirements</Link>
          </div>
        </div>
        <Link href="/products/solo-mb-200" className="home-hero-product" aria-label="View SOLO MB 200 battery">
          <div className="home-hero-image">
            <Image
              src={productImages.mb200}
              alt="SOLO MB 200 battery with red lid"
              fill
              preload
              sizes="(max-width: 760px) 100vw, 48vw"
              className="product-photograph"
            />
          </div>
          <div className="home-hero-caption">
            <div><span>SOLO MB 200</span><p>12V · 130 Ah</p></div>
            <span aria-hidden="true">↗</span>
          </div>
        </Link>
      </section>

      <section className="home-catalog" aria-labelledby="catalog-title">
        <div className="section-shell">
          <div className="section-topline">
            <div><p className="eyebrow">Our products</p><h2 id="catalog-title">Find your specification.</h2></div>
            <Link className="text-link" href="/products">Full product catalog <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="catalog-tabs" role="group" aria-label="Product category">
            <button type="button" aria-pressed={category === "solo"} onClick={() => setCategory("solo")}>SOLO batteries</button>
            <button type="button" aria-pressed={category === "plates"} onClick={() => setCategory("plates")}>Battery plates</button>
          </div>
          <div className="home-product-grid" aria-live="polite">
            {selectedProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
          {category === "plates" && <Link href="/battery-plates" className="home-range-link">View all 13 plate profiles <span aria-hidden="true">↗</span></Link>}
        </div>
      </section>

      <section className="section-shell business-section" aria-labelledby="supply-title">
        <div className="section-topline">
          <div><p className="eyebrow">Manufacturing & supply</p><h2 id="supply-title">Work directly with Crown.</h2></div>
          <p className="business-intro">From individual components to finished batteries.</p>
        </div>
        <div className="business-grid">
          {supplyOptions.map((option) => (
            <div className="business-card" key={option.href}>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <Link href={option.href}>{option.action}<span aria-hidden="true">↗</span></Link>
            </div>
          ))}
        </div>
      </section>
      <ClientsSection />
    </div>
  );
}
