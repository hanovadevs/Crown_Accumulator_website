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
  return {
    title: `${product.brand} ${product.model}`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ImmersiveProductShowcase product={product} />;
}
