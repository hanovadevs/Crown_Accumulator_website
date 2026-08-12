export type ProductCategory =
  | "motorcycle"
  | "automotive"
  | "tractor"
  | "solar"
  | "ups"
  | "plates"
  | "oem";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  model: string;
  category: ProductCategory;
  brand: "SOLO" | "Crown Accumulator" | "OEM";
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  accentColor: "navy" | "maroon" | "solo-red";
}

export const categoryLabels: Record<ProductCategory, string> = {
  motorcycle: "Motorcycle Batteries",
  automotive: "Automotive Batteries",
  tractor: "Tractor & Heavy Duty",
  solar: "Solar & Deep Cycle",
  ups: "UPS & Stationary",
  plates: "Battery Plates",
  oem: "OEM & Private Label",
};

export const products: Product[] = [
  {
    slug: "solo-12n7-4b",
    name: "SOLO Motorcycle Battery",
    model: "12N7-4B",
    category: "motorcycle",
    brand: "SOLO",
    tagline: "Reliable cranking power for everyday riders",
    description:
      "The SOLO 12N7-4B is engineered for 70–125cc motorcycles and scooters. Built with high-purity lead oxide and reinforced separators, it delivers consistent cold cranking amps in stop-start city traffic and long highway runs alike.",
    heroImage:
      "/images/solo_motorcycle_battery.png",
    gallery: [
      "/images/solo_motorcycle_battery.png",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    ],
    specs: [
      { label: "Voltage", value: "12V" },
      { label: "Capacity", value: "7 Ah (10HR)" },
      { label: "CCA", value: "65 A" },
      { label: "Dimensions", value: "135 × 75 × 133 mm" },
      { label: "Terminal", value: "Left Positive (L+)" },
      { label: "Weight", value: "2.4 kg" },
    ],
    features: [
      "Low self-discharge calcium alloy plates",
      "Sealed maintenance-free design",
      "Vibration-resistant polypropylene casing",
      "Factory-charged and ready to install",
    ],
    applications: [
      "70–125cc motorcycles",
      "Scooters and mopeds",
      "Generator starting backup",
    ],
    accentColor: "solo-red",
  },
  {
    slug: "solo-12n9-4b",
    name: "SOLO Motorcycle Battery",
    model: "12N9-4B",
    category: "motorcycle",
    brand: "SOLO",
    tagline: "Extra reserve for larger displacement bikes",
    description:
      "Designed for 125–200cc motorcycles, the 12N9-4B offers higher reserve capacity for accessories, heated grips, and extended idling. SOLO's grid casting process ensures uniform active material distribution across every plate.",
    heroImage:
      "/images/solo_motorcycle_battery.png",
    gallery: [
      "/images/solo_motorcycle_battery.png",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19c?w=800&q=80",
    ],
    specs: [
      { label: "Voltage", value: "12V" },
      { label: "Capacity", value: "9 Ah (10HR)" },
      { label: "CCA", value: "85 A" },
      { label: "Dimensions", value: "150 × 87 × 130 mm" },
      { label: "Terminal", value: "Left Positive (L+)" },
      { label: "Weight", value: "2.8 kg" },
    ],
    features: [
      "Enhanced plate thickness for deep cycling",
      "Corrosion-resistant terminal posts",
      "Flame-arrestor vent caps",
      "ISO 9001 production line tested",
    ],
    applications: [
      "125–200cc motorcycles",
      "ATVs and light utility vehicles",
      "Small watercraft",
    ],
    accentColor: "solo-red",
  },
  {
    slug: "solo-din55",
    name: "SOLO Automotive Battery",
    model: "DIN 55",
    category: "automotive",
    brand: "SOLO",
    tagline: "European-fit performance for modern sedans",
    description:
      "The SOLO DIN 55 meets European dimensional standards for mid-size sedans and crossovers. Calcium-calcium plate technology minimizes water loss, making it ideal for vehicles with start-stop systems and high electrical loads.",
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    specs: [
      { label: "Voltage", value: "12V" },
      { label: "Capacity", value: "55 Ah (20HR)" },
      { label: "CCA", value: "460 A" },
      { label: "Dimensions", value: "242 × 175 × 190 mm" },
      { label: "Layout", value: "0 (Universal)" },
      { label: "Weight", value: "14.2 kg" },
    ],
    features: [
      "Start-stop compatible",
      "Magic-eye charge indicator",
      "Reinforced carry handle",
      "18-month warranty standard",
    ],
    applications: [
      "Mid-size sedans",
      "Compact SUVs",
      "Fleet vehicles",
    ],
    accentColor: "solo-red",
  },
  {
    slug: "solo-n100",
    name: "SOLO Automotive Battery",
    model: "N100",
    category: "automotive",
    brand: "SOLO",
    tagline: "Heavy-duty cranking for diesel pickups and SUVs",
    description:
      "The N100 is Crown Accumulator's answer to demanding diesel engines and commercial fleets. Thick positive plates and high-density active material deliver sustained cranking under load, even in extreme summer heat.",
    heroImage:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    ],
    specs: [
      { label: "Voltage", value: "12V" },
      { label: "Capacity", value: "100 Ah (20HR)" },
      { label: "CCA", value: "800 A" },
      { label: "Dimensions", value: "306 × 173 × 225 mm" },
      { label: "Layout", value: "1 (Left Positive)" },
      { label: "Weight", value: "24.5 kg" },
    ],
    features: [
      "Heavy-duty cast grid design",
      "High-vibration resistance",
      "Deep-pocket sediment traps",
      "Commercial fleet pricing available",
    ],
    applications: [
      "Diesel pickups and SUVs",
      "Commercial vans",
      "Mining and construction vehicles",
    ],
    accentColor: "solo-red",
  },
  {
    slug: "solo-tractor-88ah",
    name: "SOLO Tractor Battery",
    model: "88 Ah HD",
    category: "tractor",
    brand: "SOLO",
    tagline: "Built for the field, season after season",
    description:
      "Agricultural equipment demands batteries that survive dust, vibration, and irregular charging. The SOLO 88 Ah Heavy Duty uses expanded metal grids and thick glass-mat separators to withstand the rigors of tractor and harvester operation.",
    heroImage:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    ],
    specs: [
      { label: "Voltage", value: "12V" },
      { label: "Capacity", value: "88 Ah (20HR)" },
      { label: "CCA", value: "650 A" },
      { label: "Dimensions", value: "305 × 172 × 220 mm" },
      { label: "Technology", value: "Flooded Lead-Acid" },
      { label: "Weight", value: "22.0 kg" },
    ],
    features: [
      "Thick antimonial alloy plates",
      "Reinforced terminal bushings",
      "Easy-access vent caps for topping up",
      "Compatible with alternator charging systems",
    ],
    applications: [
      "Tractors and harvesters",
      "Irrigation pump sets",
      "Forklifts and material handlers",
    ],
    accentColor: "solo-red",
  },
  {
    slug: "solo-solar-150ah",
    name: "SOLO Solar Battery",
    model: "150 Ah Deep Cycle",
    category: "solar",
    brand: "SOLO",
    tagline: "Store sunlight. Power your nights.",
    description:
      "The SOLO 150 Ah deep-cycle battery is purpose-built for off-grid solar installations, telecom towers, and hybrid energy systems. Tubular positive plates provide exceptional cycle life — over 1,200 cycles at 50% depth of discharge.",
    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1466611653911-950815379e85?w=800&q=80",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    ],
    specs: [
      { label: "Voltage", value: "12V" },
      { label: "Capacity", value: "150 Ah (C10)" },
      { label: "Cycle Life", value: "1,200+ @ 50% DOD" },
      { label: "Dimensions", value: "485 × 170 × 240 mm" },
      { label: "Technology", value: "Tubular Plate" },
      { label: "Weight", value: "42.0 kg" },
    ],
    features: [
      "Low-antimony tubular positive plates",
      "High-density PE separators",
      "Low self-discharge for storage",
      "Compatible with MPPT charge controllers",
    ],
    applications: [
      "Residential solar systems",
      "Telecom tower backup",
      "Rural electrification projects",
    ],
    accentColor: "solo-red",
  },
  {
    slug: "solo-ups-42ah",
    name: "SOLO UPS Battery",
    model: "12V 42Ah",
    category: "ups",
    brand: "SOLO",
    tagline: "Uninterrupted power for homes and offices",
    description:
      "When the grid fails, the SOLO 42 Ah sealed battery keeps your UPS running. AGM construction eliminates spillage risk, making it safe for indoor installation in server rooms, clinics, and home offices.",
    heroImage:
      "https://images.unsplash.com/photo-1558449068-967376abfbf6?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558449068-967376abfbf6?w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    ],
    specs: [
      { label: "Voltage", value: "12V" },
      { label: "Capacity", value: "42 Ah (20HR)" },
      { label: "Technology", value: "AGM Sealed" },
      { label: "Dimensions", value: "197 × 132 × 172 mm" },
      { label: "Terminal", value: "F12 (M6)" },
      { label: "Weight", value: "12.5 kg" },
    ],
    features: [
      "Maintenance-free AGM design",
      "Low internal resistance",
      "Wide operating temperature range",
      "Matched for 1kVA–3kVA UPS units",
    ],
    applications: [
      "Home and office UPS",
      "CCTV backup systems",
      "Medical equipment standby",
    ],
    accentColor: "solo-red",
  },
  {
    slug: "positive-plates",
    name: "Positive Battery Plates",
    model: "Cast & Expanded Grid",
    category: "plates",
    brand: "Crown Accumulator",
    tagline: "The heart of every cell we build",
    description:
      "Crown Accumulator manufactures and distributes lead-acid battery plates for battery assemblers across the region. Our positive plates are produced on automated casting lines with strict weight and thickness tolerances, ensuring consistent capacity in every cell.",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    ],
    specs: [
      { label: "Grid Types", value: "Cast, Expanded, Punched" },
      { label: "Alloys", value: "Ca-Sn, Sb-Sn, Low-Sb" },
      { label: "Thickness Range", value: "1.4 – 4.5 mm" },
      { label: "Formation", value: "Tank-formed or unformed" },
      { label: "MOQ", value: "5,000 plates per type" },
      { label: "Lead Time", value: "10–14 business days" },
    ],
    features: [
      "Automated weight sorting",
      "Custom grid designs on request",
      "Formation services available",
      "Export-grade packaging",
    ],
    applications: [
      "Battery assembly plants",
      "OEM replacement programs",
      "Industrial cell manufacturing",
    ],
    accentColor: "maroon",
  },
  {
    slug: "negative-plates",
    name: "Negative Battery Plates",
    model: "Expanded Metal Grid",
    category: "plates",
    brand: "Crown Accumulator",
    tagline: "Precision grids for maximum conductivity",
    description:
      "Our negative plates use high-purity lead alloy expanded metal grids that maximize surface area and current collection. Each batch is tested for grid integrity, paste adhesion, and chemical composition before dispatch.",
    heroImage:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    ],
    specs: [
      { label: "Grid Types", value: "Expanded, Punched" },
      { label: "Alloys", value: "Ca-Sn, Pure Lead" },
      { label: "Thickness Range", value: "1.2 – 3.8 mm" },
      { label: "Formation", value: "Tank-formed or unformed" },
      { label: "MOQ", value: "5,000 plates per type" },
      { label: "Lead Time", value: "10–14 business days" },
    ],
    features: [
      "Uniform paste density",
      "Anti-oxidation treatment",
      "Compatible with all separator types",
      "Bulk and palletized shipping",
    ],
    applications: [
      "Automotive battery plants",
      "Motorcycle battery assemblers",
      "Solar battery manufacturers",
    ],
    accentColor: "navy",
  },
  {
    slug: "oem-private-label",
    name: "OEM Private Label Batteries",
    model: "Custom Brand Program",
    category: "oem",
    brand: "OEM",
    tagline: "Your brand. Our manufacturing expertise.",
    description:
      "Crown Accumulator produces batteries under private labels for distributors, automotive chains, and energy companies. From label design to carton printing, we handle the full production pipeline while you build your market presence.",
    heroImage:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1558449068-967376abfbf6?w=800&q=80",
    ],
    specs: [
      { label: "Categories", value: "All battery types" },
      { label: "Min. Order", value: "500 units per SKU" },
      { label: "Branding", value: "Label, carton, terminal cap" },
      { label: "Certifications", value: "ISO 9001, CE available" },
      { label: "Lead Time", value: "4–6 weeks first order" },
      { label: "Support", value: "Technical + marketing collateral" },
    ],
    features: [
      "Full private label customization",
      "Quality matching SOLO standards",
      "Flexible MOQ for repeat orders",
      "Dedicated account manager",
    ],
    applications: [
      "Regional distributors",
      "Automotive retail chains",
      "Solar EPC companies",
    ],
    accentColor: "navy",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
