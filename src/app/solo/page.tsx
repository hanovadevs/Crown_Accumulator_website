import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { productImages } from "@/data/product-images";

export const metadata: Metadata = {
  title: "SOLO Batteries | Super 4, MB 200 & ZB 230",
  description: "Explore SOLO Super 4, MB 200, and ZB 230 batteries from Crown Accumulator. View product labels and details, then discuss your supply requirements.",
  alternates: { canonical: "https://www.crownaccumulator.com/solo" },
  openGraph: {
    title: "SOLO Batteries | Crown Accumulator",
    images: [{
      url: productImages.mb200,
      width: 1122,
      height: 1402,
      alt: "SOLO MB 200 battery with red lid",
    }],
  },
  twitter: { card: "summary_large_image", images: [productImages.mb200] },
};

const soloProducts = products.filter((product) => product.brand === "SOLO");

export default function SoloPage() {
  return (
    <div className="solo-page">
      <section className="collection-hero section-shell">
        <div>
          <p className="eyebrow">A Crown Accumulator brand</p>
          <h1>Meet the<br />SOLO range.</h1>
          <p>
            From the compact Super 4 to the MB 200 and ZB 230, explore
            the battery models carrying the SOLO name.
          </p>
          <Link href="#solo-range" className="button button-red">
            Explore the batteries <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="collection-hero-image">
          <Image
            src={productImages.mb200}
            alt="SOLO MB 200 12V 130 Ah battery"
            fill
            preload
            className="product-photograph"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>
      <section id="solo-range" className="collection-catalog">
        <div className="section-shell">
          <div className="section-topline">
            <div>
              <p className="eyebrow">SOLO batteries</p>
              <h2>Choose your model.</h2>
            </div>
          </div>
          <div className="catalog-product-grid">
            {soloProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell product-engineering">
        <div>
          <p className="eyebrow">Before you order</p>
          <h2>A clear specification.<br />A better fit.</h2>
        </div>
        <div>
          <p className="collection-guidance">
            Share the model you need, your installation details, and the order
            quantity. Our team can confirm dimensions, connections, charging
            requirements, and availability before you place an order.
          </p>
          <Link href="/contact" className="text-link">
            Discuss a SOLO order <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
