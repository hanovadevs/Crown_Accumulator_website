"use client";

import { motion } from "framer-motion";

interface MarqueeItem {
  name: string;
  alias?: string;
  shortName?: string;
}

interface MarqueeStripProps {
  items: readonly MarqueeItem[];
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  // Duplicate array to create seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks for smooth edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-surface to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
        className="flex shrink-0 items-center gap-6 whitespace-nowrap"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated px-6 py-3 shadow-xs hover:border-crown-navy/30 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-crown-maroon" />
            <span className="font-display text-base font-bold text-text-primary">
              {item.name}
            </span>
            {item.alias && (
              <span className="rounded bg-crown-navy/5 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-crown-maroon">
                {item.alias}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
