import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Crown Accumulator | SOLO® Batteries & Plates",
    short_name: "Crown Accumulator",
    description:
      "Premier manufacturer of SOLO® automotive, motorcycle, and solar batteries, battery plates, and precision motorcycle parts.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logos/crown-accumulator.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

