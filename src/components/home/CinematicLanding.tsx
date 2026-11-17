"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, type ProductCategory } from "@/data/products";
import { cinematicImages } from "@/data/cinematic-images";
import { company } from "@/data/company";
import { ProductCard } from "@/components/products/ProductCard";
import { ClientsSection } from "@/components/company/ClientsSection";

const ranges = [
  { title: "SOLO batteries", label: "For the road. For everyday power.", image: cinematicImages.soloProduct, href: "/solo", className: "range-batteries" },
  { title: "Battery plates", label: "At the core of every battery.", image: cinematicImages.plateProduction, href: "/battery-plates", className: "range-plates" },
  { title: "OEM manufacturing", label: "Your brand. Our manufacturing.", image: cinematicImages.factory, href: "/manufacturing", className: "range-oem" },
];
const categories: { id: ProductCategory; label: string }[] = [
  { id: "motorcycle", label: "Motorcycle" },
  { id: "automotive", label: "Automotive" },
  { id: "solar", label: "Solar" },
  { id: "tractor", label: "Tractor & heavy duty" },
  { id: "plates", label: "Battery plates" },
];

export function CinematicLanding() {
  const [category, setCategory] = useState<ProductCategory>("motorcycle");
  const selectedProducts = products.filter((product) => product.category === category);

  return (
    <div className="home-page">
      <section className="factory-hero" aria-labelledby="hero-title">
        <div className="hero-photograph">
          <Image src={cinematicImages.hero} alt="Industrial battery production equipment" fill preload sizes="(max-width: 760px) 100vw, 60vw" className="object-cover" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Crown Accumulator · Est. {company.foundedYear}</p>
          <h1 id="hero-title">Built to power.<br /><span>Made to last.</span></h1>
          <p className="hero-description">Manufacturers of SOLO batteries, battery plates, and motorcycle sprockets. Bringing manufacturing experience to every component.</p>
          <div className="hero-actions">
            <Link className="button button-red" href="/products">Explore our products <span aria-hidden="true">↗</span></Link>
            <Link className="hero-secondary" href="/manufacturing">OEM manufacturing <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-footnote"><span>Manufacturing & development</span><span>Pakistan</span></div>
        </div>
        <div className="hero-image-caption"><span>From component to complete battery.</span><Link href="/about">Discover Crown <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="section-shell range-section" aria-labelledby="range-title">
        <div className="section-intro"><p className="eyebrow">What we make</p><div><h2 id="range-title">Manufacturing at<br />the heart of power.</h2><p>From the plates inside a battery to the name on its case. Explore our products and manufacturing programs.</p></div></div>
        <div className="range-grid">
          {ranges.map((range, index) => (
            <Link key={range.href} href={range.href} className={"range-card " + range.className}>
              <div className="range-image"><Image src={range.image} alt={range.title} fill sizes="(max-width: 760px) 100vw, 33vw" className="object-cover" /></div>
              <div className="range-copy"><span className="range-number">0{index + 1}</span><div><h3>{range.title}</h3><p>{range.label}</p></div><span className="range-arrow" aria-hidden="true">↗</span></div>
            </Link>
          ))}
        </div>
        <div className="sprockets-link"><p>Also manufacturing motorcycle sprockets for OEM supply.</p><Link href="/about#products">Explore our capabilities <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="catalog-section" aria-labelledby="catalog-title">
        <div className="section-shell">
          <div className="section-topline"><div><p className="eyebrow">The product range</p><h2 id="catalog-title">Power for your application.</h2></div><Link className="text-link" href="/products">View full catalog <span aria-hidden="true">↗</span></Link></div>
          <div className="catalog-tabs" role="group" aria-label="Product category">
            {categories.map((item) => <button type="button" key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}
          </div>
          <div className="home-product-grid" aria-live="polite">{selectedProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div>
      </section>
      <section className="manufacturing-feature" aria-labelledby="manufacturing-title">
        <div className="manufacturing-image"><Image src={cinematicImages.plateProduction} alt="Battery plate production equipment" fill sizes="(max-width: 760px) 100vw, 50vw" className="object-cover" /></div>
        <div className="manufacturing-copy"><p className="eyebrow">The company behind the product</p><h2 id="manufacturing-title">A manufacturing partner.<br /><span>From the inside out.</span></h2><p>Battery plates, finished batteries, and private-label production. Work directly with Crown Accumulator to discuss your product and supply requirements.</p><Link className="button button-light" href="/manufacturing">Inside our manufacturing <span aria-hidden="true">↗</span></Link></div>
      </section>
      <ClientsSection />
    </div>
  );
}
