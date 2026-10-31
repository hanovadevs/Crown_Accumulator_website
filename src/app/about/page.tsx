import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ShieldCheck, Factory, Award, ArrowRight, Layers, History, Users } from "lucide-react";
import { ClientsSection } from "@/components/company/ClientsSection";
import { company, yearsInBusiness } from "@/data/company";
import { cinematicImages } from "@/data/cinematic-images";
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
        url: "/images/crown_factory_facility.png",
        width: 1200,
        height: 630,
        alt: "Crown Accumulator Factory History and Plant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Crown Accumulator | 40+ Years of Stored Energy Expertise",
    description:
      "Vertical integration, in-house metallurgy lab, and trusted supplier to major automotive OEMs.",
    images: ["/images/crown_factory_facility.png"],
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
    icon: ShieldCheck,
    title: "Quality Without Compromise",
    description:
      "Every battery leaves our line having passed formation testing, visual inspection, and sampled load verification under SAE standards.",
  },
  {
    icon: Factory,
    title: "Vertical Integration",
    description:
      "We control plate production, chemical mixing, cell assembly, and formation — reducing external dependency and ensuring consistency.",
  },
  {
    icon: Users,
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
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-crown-navy py-20 sm:py-28 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={cinematicImages.factory}
            alt="Crown Accumulator manufacturing"
            fill
            className="object-cover"
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

          {/* Stats bar */}
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

      {/* ─── STORY & FACILITY ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
                <Image
                  src={cinematicImages.factory}
                  alt="Crown Accumulator manufacturing facility"
                  fill
                  className="object-cover"
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

      {/* ─── VALUES SECTION ─── */}
      <section className="bg-surface-subtle py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Company Principles"
            title="What drives our manufacturing line"
            align="center"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <ScrollReveal key={val.title} delay={idx * 0.1}>
                  <div className="rounded-2xl border border-border bg-white p-8 shadow-xs hover:shadow-md transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-crown-navy/10 text-crown-navy">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-display mt-6 text-xl font-bold text-text-primary">
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

      {/* ─── INTERACTIVE TIMELINE ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Growth Timeline"
            title="Key milestones over 40+ years"
            align="center"
          />

          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Center connecting line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-slate-200" />

            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <ScrollReveal key={m.year} delay={idx * 0.08}>
                  <div className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                    {/* Circle Dot */}
                    <div className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-crown-maroon text-white shadow-md z-10">
                      <History className="h-3.5 w-3.5" />
                    </div>

                    {/* Content Box */}
                    <div className={`ml-12 sm:ml-0 sm:w-1/2 ${idx % 2 === 0 ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                      <div className="rounded-2xl border border-border bg-white p-6 shadow-xs">
                        <span className="font-display text-sm font-bold uppercase tracking-wider text-crown-maroon">
                          {m.year}
                        </span>
                        <h3 className="font-display mt-1 text-lg font-bold text-text-primary">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-text-muted">
                          {m.event}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS SECTION ─── */}
      <ClientsSection light />

      {/* ─── BOTTOM CTA ─── */}
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
              className="font-display inline-flex items-center gap-2 rounded-xl bg-crown-maroon px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-crown-maroon-dark"
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
