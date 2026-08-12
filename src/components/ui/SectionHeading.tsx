import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "font-display mb-3 text-xs font-bold uppercase tracking-[0.25em]",
            light ? "text-solo-red-light" : "text-crown-maroon"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-slate-300" : "text-text-secondary"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-crown-maroon via-solo-red to-crown-navy",
          align === "center" && "mx-auto"
        )}
      />
    </ScrollReveal>
  );
}
