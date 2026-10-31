import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImmersiveProductShowcase } from "@/components/products/ImmersiveProductShowcase";
import { getProductBySlug, products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  const specsSummary = product.specs
    .slice(0, 4)
    .map((s) => `${s.label}: ${s.value}`)
    .join(" · ");

  const title = `${product.brand} ${product.model} - ${product.name} | Specs & Dimensions`;
  const description = `${product.tagline} ${product.description.slice(0, 120)}... Key specs: ${specsSummary}.`;

  const imageUrl = product.heroImage.startsWith("http")
    ? product.heroImage
    : `https://www.crownaccumulator.com${product.heroImage}`;

  return {
    title,
    description,
    keywords: [
      product.brand,
      product.model,
      product.name,
      `${product.brand} ${product.model}`,
      `${product.category} battery`,
      "battery specifications",
      "lead acid battery",
      "Crown Accumulator",
      ...product.applications,
      ...product.features.slice(0, 3),
    ],
    alternates: {
      canonical: `https://www.crownaccumulator.com/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.crownaccumulator.com/products/${product.slug}`,
      siteName: "Crown Accumulator",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${product.brand} ${product.model} Battery`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const imageUrl = product.heroImage.startsWith("http")
    ? product.heroImage
    : `https://www.crownaccumulator.com${product.heroImage}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://www.crownaccumulator.com/products/${product.slug}#product`,
        name: `${product.brand} ${product.model} - ${product.name}`,
        image: [imageUrl],
        description: `${product.tagline} ${product.description}`,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
        model: product.model,
        category: product.category,
        manufacturer: {
          "@type": "Organization",
          name: "Crown Accumulator",
          url: "https://www.crownaccumulator.com",
        },
        offers: {
          "@type": "Offer",
          url: `https://www.crownaccumulator.com/products/${product.slug}`,
          priceCurrency: "PKR",
          price: "0",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "Crown Accumulator",
          },
        },
        additionalProperty: product.specs.map((spec) => ({
          "@type": "PropertyValue",
          name: spec.label,
          value: spec.value,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.crownaccumulator.com/products/${product.slug}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.crownaccumulator.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: "https://www.crownaccumulator.com/products",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${product.brand} ${product.model}`,
            item: `https://www.crownaccumulator.com/products/${product.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ImmersiveProductShowcase product={product} />
    </>
  );
}
