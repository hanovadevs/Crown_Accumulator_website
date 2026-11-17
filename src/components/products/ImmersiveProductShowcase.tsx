import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { categoryLabels, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function ImmersiveProductShowcase({ product }: { product: Product }) {
  const related = getProductsByCategory(product.category).filter((item) => item.slug !== product.slug).slice(0, 3);
  return (
    <div className="product-detail">
      <section className="section-shell product-detail-hero">
        <div className="product-detail-copy">
          <Link className="product-back" href="/products">Back to products</Link>
          <p className="eyebrow">{product.brand} / {categoryLabels[product.category]}</p>
          <h1>{product.name}<span>{product.model}</span></h1>
          <p className="product-detail-tagline">{product.tagline}</p>
          <div className="product-detail-actions"><Link className="button button-red" href="/contact">Request a quote <span aria-hidden="true">↗</span></Link><Link className="text-link" href="#specs">Technical specifications</Link></div>
        </div>
        <div className="product-detail-image"><Image src={product.heroImage} alt={product.name + " " + product.model} fill preload className="object-cover" sizes="(max-width: 760px) 100vw, 50vw" /></div>
      </section>
      <section id="specs" className="product-specification-section">
        <div className="section-shell"><div className="section-topline"><div><p className="eyebrow">Product details</p><h2>The specification.</h2></div></div><dl className="product-specification-grid">{product.specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></div>
      </section>
      <section className="section-shell product-engineering">
        <div><p className="eyebrow">Design & application</p><h2>Built for the job.</h2><p className="product-description">{product.description}</p></div>
        <div><h3>Features</h3><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><h3>Applications</h3><ul>{product.applications.map((application) => <li key={application}>{application}</li>)}</ul></div>
      </section>
      {product.gallery.length > 1 && <section className="section-shell product-gallery" aria-label="Product and application gallery">{product.gallery.map((image, index) => <div key={image + index}><Image src={image} alt={product.name + " — " + (index === 0 ? "product" : "application") + " view " + (index + 1)} fill className="object-cover" sizes="(max-width: 760px) 100vw, 33vw" /></div>)}</section>}
      {related.length > 0 && <section className="related-products"><div className="section-shell"><div className="section-topline"><div><p className="eyebrow">Explore the range</p><h2>Related products.</h2></div><Link className="text-link" href="/products">View all products <span aria-hidden="true">↗</span></Link></div><div className="catalog-product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></div></section>}
    </div>
  );
}
