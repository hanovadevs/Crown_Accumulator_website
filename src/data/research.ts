export interface ResearchArticle {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  references: string[];
}

export const researchArticles: ResearchArticle[] = [
  {
    slug: "lead-acid-chemistry-fundamentals",
    title: "Lead-Acid Electrochemistry: Fundamentals",
    subtitle: "The Pb–H₂SO₄–PbO₂ reversible cell reaction explained",
    excerpt:
      "A technical primer on how lead-acid batteries store and release energy at the molecular level.",
    date: "2026-02-01",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80",
    category: "Electrochemistry",
    references: [
      "Linden's Handbook of Batteries, 4th Edition",
      "IEEE 450-2010: Recommended Practice for Maintenance",
      "ILA (International Lead Association) Technical Papers",
    ],
    content: `The lead-acid battery is a secondary (rechargeable) electrochemical cell based on the reversible reaction between lead, lead dioxide, and sulfuric acid.

**Discharge reaction (simplified):**
At the negative plate: Pb + SO₄²⁻ → PbSO₄ + 2e⁻
At the positive plate: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O
Overall: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O

**Charge reaction** reverses this process, converting lead sulfate back to active material and restoring sulfuric acid concentration.

**Voltage characteristics.** A fully charged 12V battery rests at approximately 12.6–12.8V. During discharge, voltage gradually declines. The end-of-discharge voltage for a 12V system is typically 10.5V (1.75V per cell × 6 cells).

**Specific gravity** of the electrolyte serves as a state-of-charge indicator. Fully charged: 1.265–1.285 g/cm³. Fully discharged: approximately 1.120 g/cm³.

**Efficiency.** Lead-acid coulombic efficiency is typically 85–95% depending on charge rate and temperature. Energy efficiency (watt-hour basis) is lower due to the voltage difference between charge and discharge.`,
  },
  {
    slug: "tubular-vs-flat-plate-solar",
    title: "Tubular vs. Flat Plate: Solar Battery Architecture",
    subtitle: "Comparative cycle life and cost analysis for off-grid applications",
    excerpt:
      "When to specify tubular positive plates over flat pasted plates in deep-cycle applications.",
    date: "2025-11-18",
    image:
      "https://images.unsplash.com/photo-1466611653911-950815379e85?w=1200&q=80",
    category: "Solar Technology",
    references: [
      "IEA-PVPS Task 3: Stand-alone PV Systems",
      "BCI (Battery Council International) Test Manual",
      "Crown Accumulator Internal Cycle Test Data, 2024",
    ],
    content: `In off-grid solar applications, the positive plate is the limiting factor in battery life. Two dominant architectures exist: flat pasted plates and tubular plates.

**Flat pasted plates** use a flat grid with active material pasted on both sides. They are cheaper to manufacture and work well for shallow cycling (automotive starting). In deep-cycle service with regular 50%+ depth of discharge, active material sheds from the grid and accumulates at the bottom of the case — a phenomenon called "mud cracking."

**Tubular plates** enclose the active material in porous tubes (gauntlets) wrapped around a central spine. This containment dramatically reduces shedding. Cycle life at 80% DOD can exceed 1,500 cycles vs. 400–600 for flat plates.

**Cost trade-off.** Tubular batteries cost 30–50% more per Ah than flat-plate equivalents. For systems cycling daily (off-grid homes, telecom), the total cost of ownership favors tubular over a 10-year horizon.

**SOLO specification.** Our 150 Ah and 200 Ah solar range uses low-antimony tubular positive plates with high-density PE separators, rated for 1,200+ cycles at 50% DOD per BCI 23 test protocol.`,
  },
  {
    slug: "battery-grid-alloy-selection",
    title: "Grid Alloy Selection for Modern Lead-Acid Batteries",
    subtitle: "Calcium, antimony, and tin — matching alloy to application",
    excerpt:
      "How grid metallurgy affects water loss, cycle life, and manufacturing cost across battery categories.",
    date: "2025-09-22",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    category: "Materials Science",
    references: [
      "Journal of Power Sources, Vol. 195 (2010)",
      "ILA Grid Alloy Guidelines",
      "Crown Accumulator Metallurgy Lab Reports",
    ],
    content: `The lead alloy used in battery grids determines maintenance requirements, cycle life, and overcharge tolerance. Three alloy families dominate modern production.

**Antimonial alloys (Sb 2.5–4.5%).** Traditional choice for deep-cycle and industrial batteries. Antimony strengthens the grid and improves cycle life but increases gassing during charge — requiring periodic water topping. Still preferred for forklift and solar tubular plates.

**Low-antimony alloys (Sb 1.5–2.0%).** A compromise for semi-traction applications. Reduced water loss while maintaining reasonable cycle performance.

**Calcium alloys (Ca 0.06–0.12%, Sn 0.5–1.5%).** Standard for maintenance-free automotive batteries. Calcium reduces gassing dramatically, enabling sealed designs. Trade-off: lower tolerance for over-discharge and deep cycling.

**Tin addition.** Small tin content (0.5–1.5%) in calcium alloys improves castability and reduces positive grid corrosion — critical for start-stop and high-temperature applications.

**Crown Accumulator practice.** We maintain separate alloy recipes for each product line: Ca-Sn for SOLO automotive and motorcycle, low-Sb for tractor flooded, and tubular antimonial for solar deep-cycle. Plate customers can specify alloy per their assembly requirements.`,
  },
  {
    slug: "cca-testing-standards",
    title: "Understanding CCA Testing Standards",
    subtitle: "SAE J537, EN 50342, and what the numbers actually mean",
    excerpt:
      "A breakdown of international cold cranking amp test methods and how to compare ratings across standards.",
    date: "2025-08-14",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80",
    category: "Testing & Standards",
    references: [
      "SAE J537: Storage Batteries",
      "EN 50342-1: Lead-Acid Starter Batteries",
      "ISO 8858: Test Methods for Starter Batteries",
    ],
    content: `Cold Cranking Amps (CCA) is the most quoted specification on automotive batteries — and one of the most misunderstood.

**SAE J537 (North American standard).** The battery is cooled to -18°C (-0.4°F). It must deliver the rated current for 30 seconds while maintaining at least 7.2V (1.2V per cell for a 6-cell 12V battery).

**EN 500 (European standard).** Similar temperature (-18°C) but different pass criteria and often yields slightly different numerical ratings for the same physical battery.

**Cranking Amps (CA) vs. CCA.** CA is measured at 0°C (32°F) and produces higher numbers. Marketing departments sometimes quote CA to appear more competitive — always verify which standard applies.

**Reserve Capacity (RC).** Measures how many minutes the battery can deliver 25A before reaching 10.5V at 27°C. Useful for estimating runtime with engine off and accessories running.

**Practical guidance.** For a 2.0L petrol engine in a temperate climate, 400–500 CCA is typical. Diesel engines and large V8s may require 700–900 CCA. Oversizing by 15–20% provides margin for battery aging.

**SOLO testing.** Every production batch is sampled per SAE J537. Rated CCA values are printed on labels only after passing sample tests at 100% of rated value.`,
  },
];

export function getResearchArticle(slug: string): ResearchArticle | undefined {
  return researchArticles.find((a) => a.slug === slug);
}
