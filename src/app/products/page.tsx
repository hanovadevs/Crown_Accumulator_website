import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsFilterView } from "@/components/products/ProductsFilterView";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "SOLO® Batteries & Battery Plates Catalog",
  description:
    "Explore SOLO Super 4, MB 200, and ZB 230 batteries alongside 13 battery plate profiles. View product details and enquire directly with Crown Accumulator.",
  keywords: [
    "SOLO battery catalog",
    "motorcycle batteries",


    "lead acid battery plates",
    "battery specifications",
    "SOLO Super 4",
    "SOLO MB 200",
    "SOLO ZB 230",
    "Crown Accumulator products",
  ],
  alternates: {
    canonical: "https://www.crownaccumulator.com/products",
  },
  openGraph: {
    title: "SOLO® Batteries & Battery Plates Catalog | Crown Accumulator",
    description:
      "Product images and details for the SOLO battery range and Crown Accumulator battery plate selection.",
    url: "https://www.crownaccumulator.com/products",
    siteName: "Crown Accumulator",
    type: "website",
    images: [
      {
        url: "/images/products/solo-zb-230.webp",
        width: 1122,
        height: 1402,
        alt: "SOLO ZB 230 12V battery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLO® Batteries & Battery Plates Catalog | Crown Accumulator",
    description:
      "Browse our high-performance lead-acid battery lineup and high-purity plate products.",
    images: ["/images/products/solo-zb-230.webp"],
  },
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Crown Accumulator & SOLO Batteries Catalog",
  url: "https://www.crownaccumulator.com/products",
  description:
    "SOLO Super 4, MB 200, and ZB 230 batteries and 13 battery plate profiles.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
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
