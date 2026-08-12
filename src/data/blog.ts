export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-right-motorcycle-battery",
    title: "How to Choose the Right Motorcycle Battery for Your Bike",
    excerpt:
      "CCA ratings, dimensions, and maintenance types explained — a practical guide for riders and workshop mechanics.",
    author: "Engineering Team",
    date: "2026-03-15",
    readTime: "6 min read",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200&q=80",
    tags: ["motorcycle", "maintenance", "SOLO"],
    content: `When a rider walks into a shop asking for "any 12V battery," the result is often a mismatch — wrong terminal layout, insufficient cranking amps, or a case that doesn't fit the battery tray.

**Start with your owner's manual.** Every motorcycle manufacturer specifies a battery code (like 12N7-4B or YTX9-BS). Match this code first; capacity and CCA second.

**Understand CCA (Cold Cranking Amps).** This measures how many amps the battery can deliver for 30 seconds at 0°C. For most 125–150cc bikes in warm climates, 65–85A is sufficient. Larger engines and diesel-adjacent compression ratios need more headroom.

**Flooded vs. AGM vs. Gel.** Flooded (wet) batteries are economical and forgiving. AGM (Absorbed Glass Mat) batteries handle vibration better and won't spill — ideal for adventure bikes. Gel batteries excel in deep-cycle scenarios but are less common in motorcycles.

**Terminal orientation matters.** A Left Positive (L+) battery cannot be installed in a Right Positive tray without dangerous cable routing. Check before you buy.

**SOLO's recommendation:** For everyday commuters on 70–125cc bikes, the SOLO 12N7-4B offers the best balance of cranking power, weight, and value. For 150cc+ or bikes with accessories, step up to the 12N9-4B.`,
  },
  {
    slug: "lead-acid-battery-lifecycle",
    title: "The Complete Lifecycle of a Lead-Acid Battery",
    excerpt:
      "From lead ore to recycling — understanding how a battery is born, lives, and returns to raw material.",
    author: "Production Department",
    date: "2026-02-28",
    readTime: "8 min read",
    category: "Industry",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    tags: ["manufacturing", "sustainability", "lead-acid"],
    content: `A lead-acid battery is one of the most recycled consumer products on earth — over 99% of lead in spent batteries is recovered and reused. Here's how the cycle works at Crown Accumulator.

**1. Raw Materials.** Lead ingots (often from recycled sources), sulfuric acid, and polypropylene for cases arrive at our facility. Separator paper and grid alloy additives are sourced from certified suppliers.

**2. Grid Casting & Plate Making.** Lead alloy is melted and cast into positive grids on automated machines. Negative grids are expanded from lead strip. Active material (lead oxide paste) is applied, cured in controlled humidity chambers, and assembled into cells.

**3. Assembly.** Plates are stacked with separators, inserted into cases, and heat-sealed. Cells are connected in series to achieve 6V or 12V configurations.

**4. Formation.** New batteries are filled with electrolyte and charged for the first time — a process called formation that converts lead oxide to active sponge lead and lead dioxide.

**5. Life in Service.** A well-maintained automotive battery lasts 2–4 years. Solar deep-cycle batteries can exceed 5 years with proper charging.

**6. Recycling.** At end of life, batteries are collected, crushed, and separated. Lead is smelted and returned to ingot form. Acid is neutralized. Plastic cases are pelletized for new battery production.`,
  },
  {
    slug: "solar-battery-sizing-guide",
    title: "Sizing Your Solar Battery Bank: A Practical Worksheet",
    excerpt:
      "Calculate the right amp-hour capacity for off-grid homes, farm installations, and telecom backup.",
    author: "Solar Division",
    date: "2026-01-20",
    readTime: "10 min read",
    category: "Solar",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    tags: ["solar", "deep-cycle", "sizing"],
    content: `The most common mistake in solar installations is undersizing the battery bank. Here's a straightforward method our engineers use in the field.

**Step 1: List your loads.** Write down every device, its wattage, and daily hours of use. Example: 5 LED bulbs × 10W × 5 hours = 250 Wh/day.

**Step 2: Add them up.** A typical rural home might total 1,500–2,500 Wh/day.

**Step 3: Account for system losses.** Multiply by 1.3 to cover inverter efficiency, cable losses, and battery round-trip efficiency.

**Step 4: Factor in autonomy days.** How many days without sun? In most South Asian climates, 2 days of autonomy is standard. Multiply daily Wh by autonomy days.

**Step 5: Convert to Ah.** Divide total Wh by system voltage (usually 12V, 24V, or 48V). For a 3,000 Wh requirement at 12V: 3,000 ÷ 12 = 250 Ah.

**Step 6: Apply depth of discharge.** Lead-acid batteries should not be discharged below 50% regularly. Double the Ah: 250 × 2 = 500 Ah bank. Two SOLO 150 Ah batteries in parallel (300 Ah) would need a third for headroom — or step up to a 48V configuration.

**Pro tip:** Tubular plate batteries like the SOLO 150 Ah Deep Cycle handle partial state-of-charge cycling better than flat-plate designs.`,
  },
  {
    slug: "battery-plate-quality-control",
    title: "What Separates Good Battery Plates from Great Ones",
    excerpt:
      "Inside Crown Accumulator's plate production line — grid casting tolerances, paste density, and formation chemistry.",
    author: "QC Laboratory",
    date: "2025-12-10",
    readTime: "7 min read",
    category: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80",
    tags: ["plates", "quality", "OEM"],
    content: `Battery assemblers who buy plates from Crown Accumulator often ask: what exactly are we paying for? The answer lies in three layers of control.

**Grid Metallurgy.** The alloy composition — calcium, tin, antimony ratios — determines how the grid behaves during cycling. Too much antimony increases water loss; too little reduces cycle life. Our alloys are tuned per application: low-antimony for automotive, higher antimony for deep-cycle tubular plates.

**Paste Application.** Active material must be applied at consistent density across the grid. Variations of even 5% in paste weight between plates in the same cell create uneven current distribution and early failure. Our paste mixing and coating lines operate within ±2% weight tolerance.

**Curing Protocol.** After pasting, plates enter curing chambers where temperature and humidity are controlled over 48–72 hours. This crystallizes the lead sulfate structure and bonds paste to grid. Skipping or rushing curing is the most common cause of "premature capacity loss" in cheap batteries.

**Testing before dispatch.** Every batch is sampled for grid thickness, paste adhesion (bend test), and chemical composition. Formation services include end-of-formation capacity testing per cell.`,
  },
  {
    slug: "winter-battery-care",
    title: "5 Things Killing Your Car Battery This Winter",
    excerpt:
      "Cold weather, short trips, and parasitic drain — preventable causes of roadside breakdowns.",
    author: "Technical Support",
    date: "2025-11-05",
    readTime: "5 min read",
    category: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
    tags: ["automotive", "winter", "tips"],
    content: `Battery failures spike in winter — not because batteries die from cold alone, but because cold exposes weaknesses that warm weather masked.

**1. Short trips.** Your alternator needs 20+ minutes of driving to fully recharge a partially depleted battery. Five-minute commutes slowly drain capacity week over week.

**2. Parasitic drain.** Alarm systems, dash cams, and phone chargers draw milliamps 24/7. Over a weekend, this can pull a borderline battery below starting voltage.

**3. Corroded terminals.** Green or white buildup on terminals adds resistance. Clean with baking soda solution and apply terminal grease.

**4. Age.** Most flooded batteries show declining capacity after 3 years. If yours is older, prophylactic replacement beats an emergency jump-start.

**5. Wrong battery type.** Start-stop vehicles need AGM or EFB batteries. Installing a conventional flooded battery will fail within months.

**SOLO tip:** Before winter, have your battery load-tested at any authorized dealer. Replace if resting voltage is below 12.4V or load test shows less than 70% rated capacity.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
