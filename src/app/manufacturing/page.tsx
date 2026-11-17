import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productImages } from "@/data/product-images";

export const metadata: Metadata = {
  title: "Battery Manufacturing & OEM Inquiries | Crown Accumulator",
  description: "Discuss battery manufacturing, plate supply, and private-label requirements directly with Crown Accumulator.",
  alternates: { canonical: "https://www.crownaccumulator.com/manufacturing" },
  openGraph: {
    title: "Manufacturing | Crown Accumulator",
    images: [{
      url: productImages.zb230,
      width: 1122,
      height: 1402,
      alt: "SOLO ZB 230 battery manufactured by Crown Accumulator",
    }],
  },
  twitter: { card: "summary_large_image", images: [productImages.zb230] },
};

const discussions = [
  {
    title: "Finished batteries",
    description: "Start with a SOLO model and discuss the dimensions, connections, activation requirements, and quantity your business needs.",
    href: "/solo",
    link: "Explore SOLO batteries",
  },
  {
    title: "Battery plates",
    description: "Compare the supplied profiles, then confirm the body dimensions, lug arrangement, and plate specification for your assembly.",
    href: "/battery-plates",
    link: "Explore battery plates",
  },
  {
    title: "OEM & private label",
    description: "Share your product brief, branding requirements, order quantity, and delivery market to discuss a suitable manufacturing arrangement.",
    href: "/contact",
    link: "Discuss an OEM requirement",
  },
];

export default function ManufacturingPage() {
  return (
    <div className="manufacturing-page">
      <section className="collection-hero section-shell">
        <div>
          <p className="eyebrow">Manufacturing & supply</p>
          <h1>Work directly<br />with Crown.</h1>
          <p>
            Batteries and battery plates from Crown Accumulator.
            Bring us your product, assembly, or private-label requirements.
          </p>
          <Link href="/contact" className="button button-red">
            Discuss your requirements <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="collection-hero-image">
          <Image
            src={productImages.zb230}
            alt="SOLO ZB 230 12V 150 Ah battery with carrying handles"
            fill
            preload
            className="product-photograph"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="collection-catalog">
        <div className="section-shell">
          <div className="section-topline">
            <div>
              <p className="eyebrow">Your manufacturing requirement</p>
              <h2>Start with the product.</h2>
            </div>
          </div>
          <div className="plate-requirement-grid">
            {discussions.map((discussion) => (
              <div key={discussion.title} className="surface-card">
                <h3>{discussion.title}</h3>
                <p>{discussion.description}</p>
                <Link href={discussion.href} className="text-link">
                  {discussion.link} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
