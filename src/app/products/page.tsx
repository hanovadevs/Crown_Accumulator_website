import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsFilterView } from "@/components/products/ProductsFilterView";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "SOLO® Batteries & Battery Plates Catalog",
  description:
    "Explore Crown Accumulator's full catalog of SOLO motorcycle batteries, automotive starter batteries, deep-cycle solar batteries, tractor batteries, and industrial lead plates.",
  keywords: [
    "SOLO battery catalog",
    "motorcycle batteries",
    "automotive batteries",
    "solar tubular batteries",
    "tractor batteries",
    "lead acid battery plates",
    "battery specifications",
    "12N7-4B battery",
    "12N9-4B battery",
    "DIN55 battery",
    "Crown Accumulator products",
  ],
  alternates: {
    canonical: "https://www.crownaccumulator.com/products",
  },
  openGraph: {
    title: "SOLO® Batteries & Battery Plates Catalog | Crown Accumulator",
    description:
      "Complete technical specifications for SOLO motorcycle, automotive, solar, and industrial batteries, plus battery plates and sprockets.",
    url: "https://www.crownaccumulator.com/products",
    siteName: "Crown Accumulator",
    type: "website",
    images: [
      {
        url: "/images/solo_battery_product.png",
        width: 1200,
        height: 630,
        alt: "Crown Accumulator Product Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLO® Batteries & Battery Plates Catalog | Crown Accumulator",
    description:
      "Browse our high-performance lead-acid battery lineup and high-purity plate products.",
    images: ["/images/solo_battery_product.png"],
  },
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crown Accumulator & SOLO Batteries Catalog",
  url: "https://www.crownaccumulator.com/products",
  description:
    "Full catalog of SOLO automotive, motorcycle, tractor, and solar batteries, battery plates, and OEM manufacturing solutions.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: `${product.brand} ${product.model} - ${product.name}`,
        url: `https://www.crownaccumulator.com/products/${product.slug}`,
        description: product.tagline,
        image: `https://www.crownaccumulator.com${product.heroImage}`,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
      },
    })),
  },
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <Suspense
        fallback={
          <div className="py-32 text-center text-text-muted">
            Loading products...
          </div>
        }
      >
        <ProductsFilterView />
      </Suspense>
    </>
  );
}
