import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { ClientsSection } from "@/components/company/ClientsSection";
import { company, yearsInBusiness } from "@/data/company";
import { productImages } from "@/data/product-images";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Crown Accumulator | 40+ Years of Battery Manufacturing Heritage",
  description:
    `Established in ${company.foundedYear}, Crown Accumulator is an ISO 9001:2015 certified manufacturer of SOLO® automotive, motorcycle, and solar batteries, high-purity plates, and precision motorcycle parts.`,
  keywords: [
    "About Crown Accumulator",
    "Crown Accumulator history",
    "Shahid Mahmood Crown Accumulator",
    "battery manufacturer Pakistan",
    "SOLO battery brand history",
    "lead acid battery plant Lahore",
    "Ravi Automobile battery supplier",
    "Road Prince battery supplier",
    "ISO 9001 battery manufacturer",
  ],
  alternates: {
    canonical: "https://www.crownaccumulator.com/about",
  },
  openGraph: {
    title: "About Crown Accumulator | 40+ Years of Battery Manufacturing Heritage",
    description:
      "From battery plate casting in 1984 to supplying Pakistan's largest automotive and motorcycle manufacturers with SOLO® batteries.",
    url: "https://www.crownaccumulator.com/about",
    siteName: "Crown Accumulator",
    type: "website",
    images: [
      {
        url: "/images/products/solo-mb-200.webp",
        width: 1122,
        height: 1402,
        alt: "SOLO MB 200 battery manufactured by Crown Accumulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Crown Accumulator | 40+ Years of Stored Energy Expertise",
    description:
      "Vertical integration, in-house metallurgy lab, and trusted supplier to major automotive OEMs.",
    images: ["/images/products/solo-mb-200.webp"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.crownaccumulator.com/about#aboutpage",
      name: "About Crown Accumulator",
      url: "https://www.crownaccumulator.com/about",
      description:
        "Historical background, milestones, and core values of Crown Accumulator.",
      mainEntity: {
        "@type": "Organization",
        name: "Crown Accumulator",
        foundingDate: "1984",
        founder: {
          "@type": "Person",
          name: "Shahid Mahmood",
          jobTitle: "Founder & Managing Director",
        },
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 100,
          maxValue: 500,
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.crownaccumulator.com/about#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.crownaccumulator.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://www.crownaccumulator.com/about",
        },
      ],
    },
  ],
};

const milestones = [
  { year: "1984", title: "Foundation", event: "Crown Accumulator founded in Lahore, specializing in battery plate casting and motorcycle sprockets." },
  { year: "1998", title: "SOLO® Brand Launch", event: "Introduced the SOLO® motorcycle battery line directly to end-user markets." },
  { year: "2005", title: "Automotive Expansion", event: "Expanded production capacity into automotive DIN/JIS and agricultural tractor batteries." },
  { year: "2012", title: "Solar Deep-Cycle Line", event: "Commissioned dedicated tubular plate casting lines for off-grid solar energy storage." },
  { year: "2018", title: "OEM Private-Label", event: "Launched OEM supply program providing private-label production for major brands." },
  { year: "2024+", title: "Modern Supply Network", event: "Solidified supply partnerships with Road Prince, Ravi Automobile, and regional distributors." },
];

const values = [
  {

    title: "Quality Without Compromise",
    description:
      "Every battery leaves our line having passed formation testing, visual inspection, and sampled load verification under SAE standards.",
  },
  {

    title: "Vertical Integration",
    description:
      "We control plate production, chemical mixing, cell assembly, and formation — reducing external dependency and ensuring consistency.",
  },
  {

    title: "Partnership Mindset",
    description:
      "Our OEM clients and plate customers are long-term partners. We invest in their success with technical support and reliable supply.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="bg-surface">

      <section className="relative overflow-hidden bg-crown-navy py-20 sm:py-28 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={productImages.mb200}
            alt="SOLO MB 200 battery manufactured by Crown Accumulator"
            fill
            className="object-contain product-photograph"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
              About Crown Accumulator
            </span>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold text-white sm:text-6xl leading-tight">
              Over Four Decades of Stored Energy Expertise
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              Since {company.foundedYear}, Crown Accumulator has grown into a leading industrial manufacturer — producing SOLO® batteries, battery plates, and precision sprockets for major OEMs across Pakistan.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-800 pt-8">
            <div>
              <p className="font-display text-3xl font-bold text-white">
                <AnimatedCounter value={yearsInBusiness()} suffix="+" />
              </p>
              <p className="text-xs uppercase text-slate-400 mt-1">Years in Industry</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-solo-red-light">
                <AnimatedCounter value={500} suffix="K+" />
              </p>
              <p className="text-xs uppercase text-slate-400 mt-1">Plates Monthly</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-white">
                <AnimatedCounter value={8} suffix="+" />
              </p>
              <p className="text-xs uppercase text-slate-400 mt-1">OEM Clients</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-solo-red-light">
                <AnimatedCounter value={200} suffix="+" />
              </p>
              <p className="text-xs uppercase text-slate-400 mt-1">Dealers Nationwide</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
                <Image
                  src={productImages.mb200}
                  alt="SOLO MB 200 battery manufactured by Crown Accumulator"
                  fill
                  className="object-contain product-photograph"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="Our History"
                title="From plates to complete energy solutions"
              />
              <div className="mt-6 space-y-4 text-text-secondary leading-relaxed text-sm sm:text-base">
                <p>
                  Crown Accumulator was established in {company.foundedYear} with a focused commitment to engineering excellence. Operating out of our industrial estate facility, we established lead grid casting and motorcycle sprocket manufacturing.
                </p>
                <p>
                  In 1998, we launched the <strong>SOLO®</strong> brand to offer high-durability motorcycle and automotive batteries directly to regional distributors and riders.
                </p>
                <p>
                  Today, Crown Accumulator supplies positive and negative battery plates to assemblers, manufactures SOLO batteries, produces OEM sprockets for brands like Road Prince and Ravi Automobile, and manages private label programs across the country.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-surface-subtle py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Company Principles"
            title="What drives our manufacturing line"
            align="center"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((val, idx) => {
              return (
                <ScrollReveal key={val.title} delay={idx * 0.1}>
                  <div className="surface-card rounded-sm border border-border bg-white p-8 transition-shadow">

                    <h3 className="font-display text-xl font-bold text-text-primary">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-text-muted">
                      {val.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Growth Timeline"
            title="Key milestones over 40+ years"
            align="center"
          />

          <div className="timeline-list mt-12">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="timeline-item">
                <span>{milestone.year}</span>
                <div><h3>{milestone.title}</h3><p>{milestone.event}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection light />

      <section className="bg-crown-navy py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Partner With Crown Accumulator
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact our engineering and sales department for product specifications, plate distribution quotes, or private label programs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="font-display inline-flex items-center gap-2 rounded-sm bg-crown-maroon px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-crown-maroon-dark"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
