import Image from "next/image";
import Link from "next/link";
import { categoryLabels, getProductsByCategory, type Product } from "@/data/products";
import { productDisplayName, showroomImage } from "@/data/showroom";
import { ProductCard } from "@/components/products/ProductCard";
import { ZB230Viewer } from "@/components/products/ZB230Viewer";

export function ImmersiveProductShowcase({ product }: { product: Product }) {
  const name = productDisplayName(product);
  const isPlate = product.category === "plates";
  const hasModel = product.slug === "solo-zb-230";
  const related = (isPlate ? getProductsByCategory("plates") : [...getProductsByCategory("motorcycle"), ...getProductsByCategory("batteries")])
    .filter((item) => item.slug !== product.slug).slice(0, 3);
  const enquiry = `/contact?product=${encodeURIComponent(product.slug)}`;
  const detailPhoto = isPlate ? product.heroImage : `/images/showroom/${product.slug}-detail.webp`;

  return (
    <div className="product-detail">
      <section className="product-detail-hero" aria-labelledby="product-title">
        <div className="section-shell product-hero-shell">
          <div className="product-detail-copy">
            <Link className="product-back" href="/products"><span aria-hidden="true">←</span> All products</Link>
            <p className="eyebrow">{categoryLabels[product.category]}</p>
            <h1 id="product-title">{name}</h1>
            <p className="product-detail-tagline">{product.tagline}</p>
            <dl className="product-key-specs">{product.specs.slice(0, 2).map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            <div className="product-detail-actions">
              <Link className="button button-red" href={enquiry}>Enquire about this product <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="#specs">Specifications</Link>
            </div>
          </div>
          <div className="product-hero-stage">
            {hasModel ? <ZB230Viewer poster={showroomImage(product)} name={name} /> : <div className={`product-hero-image ${isPlate ? "product-profile" : "product-cutout"}`}>
              <Image src={showroomImage(product)} alt={name} fill preload sizes="(max-width: 900px) 90vw, 49vw" />
            </div>}
          </div>
        </div>
      </section>

      <section className="section-shell product-feature" aria-labelledby="overview-title">
        <div className="product-feature-copy"><p className="eyebrow">Product overview</p><h2 id="overview-title">{isPlate ? "Designed around the profile." : "A closer look at the build."}</h2><p>{product.description}</p>
          <h3>Product features</h3><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </div>
        <figure className={`product-closeup ${isPlate ? "plate-closeup" : ""}`}>
          <div><Image src={detailPhoto} alt={isPlate ? `${name} showing the lug and plate surface` : `${name} showing the case and top connections`} fill sizes="(max-width: 800px) 90vw, 52vw" /></div>
          <figcaption>{isPlate ? "Plate surface and lug detail" : "Case and connection detail"}</figcaption>
        </figure>
      </section>

      <section id="specs" className="product-specification-section" aria-labelledby="specs-title">
        <div className="section-shell spec-layout">
          <div><p className="eyebrow">Technical data</p><h2 id="specs-title">Specifications.</h2>{product.specificationNote && <p className="specification-note">{product.specificationNote}</p>}</div>
          <dl className="product-specification-grid">{product.specs.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </section>
      <section className="section-shell product-applications" aria-labelledby="applications-title">
        <div><p className="eyebrow">Applications & supply</p><h2 id="applications-title">Discuss your application.</h2></div>
        <div><ul>{product.applications.map((application) => <li key={application}>{application}</li>)}</ul><Link className="text-link" href={enquiry}>Ask about fit and availability <span aria-hidden="true">↗</span></Link></div>
      </section>
      {product.gallery.length > 1 && <section className="section-shell product-gallery" aria-label="Product gallery">{product.gallery.map((image, index) => <div key={image}><Image src={image} alt={`${name}, view ${index + 1}`} fill className="product-photograph" sizes="(max-width: 760px) 100vw, 33vw" /></div>)}</section>}
      {related.length > 0 && <section className="related-products"><div className="section-shell"><div className="section-topline"><div><p className="eyebrow">Explore the range</p><h2>Related products.</h2></div><Link className="text-link" href="/products">View all products <span aria-hidden="true">↗</span></Link></div><div className="catalog-product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></div></section>}
      <section className="product-order"><div className="section-shell"><div><p className="eyebrow">Product enquiry</p><h2>Request a quote for {name}.</h2><p>Include your intended application, quantity and delivery location.</p></div><Link href={enquiry} className="button button-light">Start your enquiry <span aria-hidden="true">↗</span></Link></div></section>
    </div>
  );
}
