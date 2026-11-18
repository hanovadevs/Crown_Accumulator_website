export type ProductCategory = "motorcycle" | "batteries" | "plates";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  model: string;
  category: ProductCategory;
  brand: "SOLO" | "Crown Accumulator" | "AS Battery Plate" | "Shalimar Battery Plate";
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  specificationNote?: string;
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  accentColor: "navy" | "maroon" | "solo-red";
}

export const categoryLabels: Record<ProductCategory, string> = {
  motorcycle: "Motorcycle batteries",
  batteries: "MB 200 & ZB 230 batteries",
  plates: "Battery plates",
};

export const products: Product[] = [
  {
    "slug": "solo-super-4",
    "name": "SOLO Super 4 Battery",
    "model": "12V Super 4",
    "category": "motorcycle",
    "brand": "SOLO",
    "tagline": "Compact 12V power with cable connections.",
    "description": "A compact 12V SOLO battery with insulated cable leads, electrolyte-level guides, and an 18-plate label marking.",
    "specs": [
      {
        "label": "Voltage",
        "value": "12V"
      },
      {
        "label": "Plate marking",
        "value": "18 plates"
      },
      {
        "label": "Connections",
        "value": "Insulated cable leads"
      },
      {
        "label": "Level guides",
        "value": "Maximum / minimum"
      }
    ],
    "features": [
      "Compact upright case",
      "Blue top with separate cable leads",
      "Visible electrolyte-level markings"
    ],
    "applications": [
      "Motorcycle replacement inquiries",
      "Workshop and dealer supply"
    ],
    "heroImage": "/images/products/solo-super-4.webp",
    "gallery": [
      "/images/products/solo-super-4.webp"
    ],
    "specificationNote": "Ratings are taken from the supplied product label. Confirm dimensions, terminal layout, charging requirements, and application suitability with our team before ordering.",
    "accentColor": "solo-red"
  },
  {
    "slug": "solo-mb-200",
    "name": "SOLO MB 200 Battery",
    "model": "MB 200",
    "category": "batteries",
    "brand": "SOLO",
    "tagline": "130 Ah capacity in a clearly marked 12V format.",
    "description": "The SOLO MB 200 is labelled 12V, 130 Ah, and 21 plates. It has a red lid, twin carrying handles, and accessible service caps, with a dry-charged designation.",
    "specs": [
      {
        "label": "Voltage",
        "value": "12V"
      },
      {
        "label": "Capacity",
        "value": "130 Ah"
      },
      {
        "label": "Plate marking",
        "value": "21 plates"
      },
      {
        "label": "Label designation",
        "value": "Dry charged"
      }
    ],
    "features": [
      "Twin carrying handles",
      "Accessible yellow service caps",
      "Translucent ribbed case with red lid"
    ],
    "applications": [
      "12V battery supply inquiries",
      "Dealer and distributor orders"
    ],
    "heroImage": "/images/products/solo-mb-200.webp",
    "gallery": [
      "/images/products/solo-mb-200.webp"
    ],
    "specificationNote": "Ratings are taken from the supplied product label. Confirm dimensions, terminal layout, charging requirements, and application suitability with our team before ordering.",
    "accentColor": "solo-red"
  },
  {
    "slug": "solo-zb-230",
    "name": "SOLO ZB 230 Battery",
    "model": "ZB 230",
    "category": "batteries",
    "brand": "SOLO",
    "tagline": "150 Ah capacity with the SOLO blue-top identity.",
    "description": "The SOLO ZB 230 is labelled 12V, 150 Ah, and 23 plates. It features a blue lid, twin carrying handles, and accessible service caps, with a dry-charged designation.",
    "specs": [
      {
        "label": "Voltage",
        "value": "12V"
      },
      {
        "label": "Capacity",
        "value": "150 Ah"
      },
      {
        "label": "Plate marking",
        "value": "23 plates"
      },
      {
        "label": "Label designation",
        "value": "Dry charged"
      }
    ],
    "features": [
      "Blue lid and twin carrying handles",
      "Yellow service caps",
      "Clearly identified model and capacity"
    ],
    "applications": [
      "12V battery supply inquiries",
      "Dealer and distributor orders"
    ],
    "heroImage": "/images/products/solo-zb-230.webp",
    "gallery": [
      "/images/products/solo-zb-230.webp"
    ],
    "specificationNote": "Ratings are taken from the supplied product label. Confirm dimensions, terminal layout, charging requirements, and application suitability with our team before ordering.",
    "accentColor": "solo-red"
  },
  {
    "slug": "plate-chocolate-brown",
    "name": "Chocolate-Brown Battery Plate",
    "model": "Broad right-lug profile",
    "category": "plates",
    "brand": "Shalimar Battery Plate",
    "tagline": "Broad rectangular outline with an upper right lug.",
    "description": "A broad rectangular battery plate with a matte brown face, exposed upper-right lug, and two support feet.",
    "heroImage": "/images/products/plate-chocolate-brown.webp",
    "gallery": [
      "/images/products/plate-chocolate-brown.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Broad rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper right"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Broad rectangular outline",
      "Upper-right lug",
      "Two lower support feet"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-patterned-charcoal",
    "name": "Patterned Charcoal Battery Plate",
    "model": "Patterned right-lug profile",
    "category": "plates",
    "brand": "Shalimar Battery Plate",
    "tagline": "Contrasting patterned face with an upper right lug.",
    "description": "This broad plate has a contrasting patterned face and an exposed upper-right lug.",
    "heroImage": "/images/products/plate-patterned-charcoal.webp",
    "gallery": [
      "/images/products/plate-patterned-charcoal.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Broad rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper right"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Contrasting patterned face",
      "Exposed upper-right lug",
      "Lower support feet"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-wide-brown",
    "name": "Wide Brown Battery Plate",
    "model": "Wide right-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Wide rectangular face with an upper right lug.",
    "description": "A wide brown plate with a squared body and an upper-right lug.",
    "heroImage": "/images/products/plate-wide-brown.webp",
    "gallery": [
      "/images/products/plate-wide-brown.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Wide rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper right"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Wide rectangular face",
      "Squared body profile",
      "Upper-right lug"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-burgundy",
    "name": "Burgundy Battery Plate",
    "model": "AS-marked left-lug profile",
    "category": "plates",
    "brand": "AS Battery Plate",
    "tagline": "Visible AS Heavy Duty label with an upper left lug.",
    "description": "A burgundy-toned plate with an upper-left lug and a visible AS Heavy Duty Battery Plate label.",
    "heroImage": "/images/products/plate-burgundy.webp",
    "gallery": [
      "/images/products/plate-burgundy.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Broad rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper left"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Visible AS Heavy Duty label",
      "Upper-left lug",
      "Broad face with lower support feet"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-mottled",
    "name": "Mottled Battery Plate",
    "model": "Patterned left-lug profile",
    "category": "plates",
    "brand": "Shalimar Battery Plate",
    "tagline": "Mottled patterned face with an upper left lug.",
    "description": "This plate combines a mottled, vertically patterned face with an upper-left lug.",
    "heroImage": "/images/products/plate-mottled.webp",
    "gallery": [
      "/images/products/plate-mottled.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Broad rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper left"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Mottled patterned face",
      "Upper-left lug",
      "Broad rectangular outline"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-warm-gray",
    "name": "Warm Gray Battery Plate",
    "model": "Upright left-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Upright rectangular body with an upper left lug.",
    "description": "An upright plate with a warm-gray face, exposed perimeter, and upper-left lug.",
    "heroImage": "/images/products/plate-warm-gray.webp",
    "gallery": [
      "/images/products/plate-warm-gray.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Upright rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper left"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Upright rectangular body",
      "Upper-left lug",
      "Lower support feet"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-wide-taupe",
    "name": "Wide Taupe Battery Plate",
    "model": "Wide left-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Wide, textured plate with an upper-left lug.",
    "description": "A wide taupe-toned plate with an upper-left lug and a subtly textured face.",
    "heroImage": "/images/products/plate-wide-taupe.webp",
    "gallery": [
      "/images/products/plate-wide-taupe.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Wide rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper left"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Wide body with textured face",
      "Upper-left lug",
      "Two visible lower support feet"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-graphite",
    "name": "Graphite Battery Plate",
    "model": "Textured left-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Graphite-gray textured face with an upper left lug.",
    "description": "A graphite-gray plate with a textured face and upper-left lug.",
    "heroImage": "/images/products/plate-graphite.webp",
    "gallery": [
      "/images/products/plate-graphite.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Broad rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper left"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Graphite-gray textured face",
      "Upper-left lug",
      "Broad rectangular body"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-charcoal",
    "name": "Charcoal Battery Plate",
    "model": "Upright right-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Upright textured face with an upper right lug.",
    "description": "An upright charcoal plate with a textured face, upper-right lug, and two lower support feet.",
    "heroImage": "/images/products/plate-charcoal.webp",
    "gallery": [
      "/images/products/plate-charcoal.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Upright rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper right"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Upright textured face",
      "Upper-right lug",
      "Two lower support feet"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-ochre",
    "name": "Ochre Battery Plate",
    "model": "Tall right-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Tall rectangular outline with an upper right lug.",
    "description": "A tall, narrow plate with an ochre-coloured face and upper-right lug.",
    "heroImage": "/images/products/plate-ochre.webp",
    "gallery": [
      "/images/products/plate-ochre.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Tall rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper right"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Tall rectangular outline",
      "Ochre-coloured face",
      "Upper-right lug"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-sandy-beige",
    "name": "Sandy Beige Battery Plate",
    "model": "Upright right-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Sandy-beige face with an upper right lug.",
    "description": "This sandy-beige plate has an upright rectangular body, an exposed upper-right lug, and two lower support feet.",
    "heroImage": "/images/products/plate-sandy-beige.webp",
    "gallery": [
      "/images/products/plate-sandy-beige.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Upright rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper right"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Sandy-beige face",
      "Exposed upper-right lug",
      "Two lower support feet"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-olive-gray",
    "name": "Olive-Gray Battery Plate",
    "model": "Textured right-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Olive-gray textured face with an upper right lug.",
    "description": "An olive-gray plate with a lightly textured face, upper-right lug, and lower support feet.",
    "heroImage": "/images/products/plate-olive-gray.webp",
    "gallery": [
      "/images/products/plate-olive-gray.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Upright rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper right"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Olive-gray textured face",
      "Upper-right lug",
      "Upright body with support feet"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  },
  {
    "slug": "plate-tall-beige",
    "name": "Tall Beige Battery Plate",
    "model": "Tall right-lug profile",
    "category": "plates",
    "brand": "Crown Accumulator",
    "tagline": "Tall narrow body with an upper right lug.",
    "description": "A tall beige plate with a narrow rectangular body and an upper-right lug.",
    "heroImage": "/images/products/plate-tall-beige.webp",
    "gallery": [
      "/images/products/plate-tall-beige.webp"
    ],
    "specs": [
      {
        "label": "Profile",
        "value": "Tall rectangular"
      },
      {
        "label": "Lug position",
        "value": "Upper right"
      }
    ],
    "specificationNote": "Profile names describe the supplied images. Confirm dimensions, thickness, alloy, polarity, formation state, and order quantity with our team.",
    "features": [
      "Tall narrow body",
      "Beige face",
      "Upper-right lug"
    ],
    "applications": [
      "Battery assembly inquiries",
      "Plate sample matching",
      "Trade supply requirements"
    ],
    "accentColor": "navy"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}
