import type { NextConfig } from "next";

const retiredBatterySlugs = [
  "solo-12n7-4b",
  "solo-12n9-4b",
  "solo-din55",
  "solo-n100",
  "solo-tractor-88ah",
  "solo-solar-150ah",
  "solo-ups-42ah",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...retiredBatterySlugs.map((slug) => ({
        source: "/products/" + slug,
        destination: "/products",
        permanent: false,
      })),
      {
        source: "/products/positive-plates",
        destination: "/battery-plates",
        permanent: false,
      },
      {
        source: "/products/negative-plates",
        destination: "/battery-plates",
        permanent: false,
      },
      {
        source: "/products/oem-private-label",
        destination: "/manufacturing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
