import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={"/products/" + product.slug} className="product-card">
      <div className="product-card-image">
        <span className="product-brand">{product.brand}</span>
        <Image src={product.heroImage} alt={product.name + " " + product.model} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
      </div>
      <div className="product-card-body">
        <p className="product-model">{product.model}</p>
        <h3>{product.name}</h3>
        <p className="product-summary">{product.tagline}</p>
        <dl className="product-card-specs">{product.specs.slice(0, 2).map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
        <span className="product-card-link">View product <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
