import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

const accentMap = {
  navy: "group-hover:border-crown-navy/50 group-hover:shadow-crown-navy/10",
  maroon: "group-hover:border-crown-maroon/50 group-hover:shadow-crown-maroon/10",
  "solo-red": "group-hover:border-solo-red/50 group-hover:shadow-solo-red/10",
};

const brandColorMap = {
  SOLO: "bg-solo-red text-white",
  "Crown Accumulator": "bg-crown-navy text-white",
  OEM: "bg-crown-maroon text-white",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        accentMap[product.accentColor]
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        
        <span
          className={cn(
            "font-display absolute left-4 top-4 rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-xs",
            brandColorMap[product.brand]
          )}
        >
          {product.brand}
        </span>
        
        <span className="font-display absolute bottom-3 left-4 text-2xl font-bold text-white tracking-tight">
          {product.model}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-crown-navy transition-colors">
          {product.name}
        </h3>
        
        <p className="mt-2 flex-1 text-xs leading-relaxed text-text-muted line-clamp-2">
          {product.tagline}
        </p>

        {/* Feature bullets snippet */}
        <div className="mt-4 space-y-1 border-t border-slate-100 pt-4">
          {product.features.slice(0, 2).map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-[11px] text-text-secondary">
              <Check className="h-3 w-3 text-crown-maroon shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex gap-3 text-xs text-text-muted">
            {product.specs.slice(0, 2).map((spec) => (
              <span key={spec.label}>
                <strong className="text-crown-navy font-display">{spec.value}</strong>{" "}
                <span className="text-[10px] text-text-muted uppercase">{spec.label}</span>
              </span>
            ))}
          </div>
          <ArrowUpRight className="h-5 w-5 text-crown-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-crown-maroon" />
        </div>
      </div>
    </Link>
  );
}
