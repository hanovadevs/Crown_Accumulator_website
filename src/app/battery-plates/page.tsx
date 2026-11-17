import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { productImages } from "@/data/product-images";

export const metadata: Metadata = {
  title: "Battery Plate Range | Crown Accumulator",
  description: "Explore 13 battery plate profiles from Crown Accumulator. Compare body shapes and lug positions, and discuss dimensions and plate specifications for your assembly.",
  alternates: { canonical: "https://www.crownaccumulator.com/battery-plates" },
  openGraph: {
    title: "Battery Plates | Crown Accumulator",
    images: [{
      url: productImages.graphitePlate,
      width: 1122,
      height: 1402,
      alt: "Graphite battery plate with upper-left lug",
    }],
  },
  twitter: { card: "summary_large_image", images: [productImages.graphitePlate] },
};

const plates = getProductsByCategory("plates");
const requirements = [
  {
    title: "Plate geometry",
    description: "Share body width and height, overall height, lug position, and thickness. A drawing or reference sample helps us compare the profile.",
  },
  {
    title: "Plate specification",
    description: "Confirm the required polarity, alloy, formation state, and intended battery assembly with our team.",
  },
  {
    title: "Supply requirements",
    description: "Tell us the quantity, packing needs, and delivery location so we can discuss availability and a quotation.",
  },
];

export default function BatteryPlatesPage() {
  return (
    <div className="plates-page">
      <section className="collection-hero section-shell">
        <div>
          <p className="eyebrow">Battery components</p>
          <h1>Find your<br />plate profile.</h1>
          <p>
            Compare the shapes, faces, and lug positions in our plate selection.
            Start with a profile, then speak with us about your exact specification.
          </p>
          <Link href="#plate-range" className="button button-red">
            Explore the plates <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="collection-hero-image">
          <Image
            src={productImages.graphitePlate}
            alt="Graphite battery plate with an upper-left lug"
            fill
            preload
            className="product-photograph"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>
      <section id="plate-range" className="collection-catalog">
        <div className="section-shell">
          <div className="section-topline">
            <div>
              <p className="eyebrow">The plate selection</p>
              <h2>Profiles for your inquiry.</h2>
            </div>
          </div>
          <p className="collection-note">
            Descriptive names identify the images. Confirm dimensions and the
            required plate specification with our team before ordering.
          </p>
          <div className="catalog-product-grid">
            {plates.map((plate) => (
              <ProductCard key={plate.slug} product={plate} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell plate-order-section">
        <div className="section-topline">
          <div>
            <p className="eyebrow">Discuss your requirements</p>
            <h2>From a profile to a specification.</h2>
          </div>
          <Link href="/contact" className="text-link">
            Enquire about plates <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="plate-requirement-grid">
          {requirements.map((requirement) => (
            <div key={requirement.title} className="surface-card">
              <h3>{requirement.title}</h3>
              <p>{requirement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
