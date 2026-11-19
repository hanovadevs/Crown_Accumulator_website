import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { productDisplayName, showroomImage } from "@/data/showroom";

export function ProductCard({ product }: { product: Product }) {
  const name = productDisplayName(product);
  const battery = product.category !== "plates";
  return (
    <Link href={`/products/${product.slug}`} className="product-card" aria-label={`View ${name}`}>
      <div className={`product-card-image ${battery ? "product-cutout" : "product-profile"}`}>
        <Image src={showroomImage(product)} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 46vw, 30vw" />
      </div>
      <div className="product-card-body">
        <h3>{name}</h3>
        {battery ? <p className="product-summary">{product.specs.slice(0, 2).map(({ value }) => value).join(" · ")}</p> : <p className="product-summary">{product.brand} · {product.model}</p>}
        <span className="product-card-link">View product <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
