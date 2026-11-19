import type { Product } from "@/data/products";

export function productDisplayName(product: Product) {
  return product.category === "plates" ? product.name : product.name.replace(/ Battery$/, "");
}

export function showroomImage(product: Product) {
  return product.brand === "SOLO" ? `/images/showroom/${product.slug}.webp` : product.heroImage;
}
