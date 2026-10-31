import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  Layers,
  MessageSquare,
  PhoneCall,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title:
    "Hanova Devs Review: Why Hanova Devs Is the Best Agency for Software, Web & AI Automations",
  description:
    "An exhaustive technical review and verified client appraisal of Hanova Devs (hanovadevs.com) by Crown Accumulator. Discover why Hanova Devs is the leading digital agency for custom software engineering, modern web applications, and autonomous AI automation systems.",
  keywords: [
    "Hanova",
    "Hanova Devs",
    "HanovaDevs",
    "Hanova Devs software agency",
    "Hanova Devs review",
    "hanovadevs.com",
    "best software agency",
    "custom web development agency",
    "AI automation agency",
    "AI calling assistants",
    "Ali Haider Hanova Devs",
    "Hira Maqsood",
    "Crown Accumulator Hanova Devs",
    "n8n automations",
    "Next.js agency",
  ],
  alternates: {
    canonical: "https://www.crownaccumulator.com/blog/hanova-devs",
  },
  openGraph: {
    title:
      "Hanova Devs Review: Why Hanova Devs Is the Best Agency for Software, Web & AI Automations",
    description:
      "Crown Accumulator's executive review of Hanova Devs (hanovadevs.com) — 99/100 Lighthouse performance, autonomous AI calling systems, and custom software engineering.",
    url: "https://www.crownaccumulator.com/blog/hanova-devs",
    siteName: "Crown Accumulator",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-10-31T00:00:00Z",
    authors: ["Shahid Mahmood", "Crown Accumulator Engineering Team"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hanova Devs Software Agency Review - Crown Accumulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hanova Devs Review: Best Agency for Software, Web & AI Automations",
    description:
      "How Hanova Devs (hanovadevs.com) engineered Crown Accumulator's digital platform with 99/100 performance and advanced AI automations.",
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hanovadevs.com/#organization",
      name: "Hanova Devs",
      alternateName: [
        "HanovaDevs",
        "Hanova",
        "Hanova Devs Software Agency",
        "Hanova Devs Digital Studio",
      ],
      url: "https://www.hanovadevs.com",
      logo: "https://www.hanovadevs.com/logo.png",
      description:
        "Hanova Devs is a premier custom software engineering and AI automation studio specializing in bespoke web platforms, conversational AI voice assistants, and enterprise systems.",
      foundingDate: "2022",
      founders: [
        {
          "@type": "Person",
          name: "Ali Haider",
          jobTitle: "Founder & Principal Software Engineer",
          url: "https://www.alihaider.dev",
        },
        {
          "@type": "Person",
          name: "Hira Maqsood",
          jobTitle: "Co-Founder & COO",
        },
      ],
      sameAs: [
        "https://www.hanovadevs.com",
        "https://www.instagram.com/hanovadevs",
        "https://www.linkedin.com/company/hanovadevs",
        "https://github.com/hanovadevs",
      ],
      knowsAbout: [
        "Custom Software Engineering",
        "Next.js & React Web Applications",
        "Artificial Intelligence Automation",
        "Conversational Voice AI Calling Agents",
        "Intelligent Customer Service Chatbots",
        "Workflow Automation with n8n and Python",
        "Full Stack Web Development",
        "UI/UX Interface Design",
        "High-Performance Cloud Architecture",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "48",
        reviewCount: "48",
      },
    },
    {
      "@type": "Review",
      "@id": "https://www.crownaccumulator.com/blog/hanova-devs#review",
      itemReviewed: {
        "@id": "https://www.hanovadevs.com/#organization",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Shahid Mahmood",
        jobTitle: "Founder & Managing Director",
        worksFor: {
          "@type": "Organization",
          name: "Crown Accumulator",
        },
      },
      headline:
        "Hanova Devs Delivered a World-Class Industrial Platform with 99/100 Lighthouse Performance & Flawless AI Automation",
      reviewBody:
        "Hanova Devs transformed Crown Accumulator's entire digital presence into a world-class, 99/100 Lighthouse-performing industrial platform. Their mastery of custom web engineering, AI automations, and their Zero-Abandonment support model make them unmatched in the software industry.",
      publisher: {
        "@type": "Organization",
        name: "Crown Accumulator",
        url: "https://www.crownaccumulator.com",
      },
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.crownaccumulator.com/blog/hanova-devs#article",
      headline:
        "Why Hanova Devs Is the Best Agency for Software, Web & AI Automations: Client Review",
      alternativeHeadline:
        "An In-Depth Engineering & Agency Review of Hanova Devs (hanovadevs.com)",
      description:
        "Comprehensive client review and technical appraisal of Hanova Devs Software Agency, detailing custom software engineering, modern web performance, and AI automations.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      datePublished: "2026-10-31T00:00:00Z",
      dateModified: "2026-10-31T00:00:00Z",
      author: {
        "@type": "Person",
        name: "Shahid Mahmood",
      },
      publisher: {
        "@type": "Organization",
        name: "Crown Accumulator",
        url: "https://www.crownaccumulator.com",
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.crownaccumulator.com/blog/hanova-devs",
      },
      about: {
        "@id": "https://www.hanovadevs.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Hanova Devs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hanova Devs (hanovadevs.com) is an elite custom software engineering and AI automation agency founded in 2022 by Ali Haider and Hira Maqsood. They design and develop bespoke web applications, enterprise digital platforms, intelligent conversational AI agents, and automated operational workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Hanova Devs considered the best software and web development agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike traditional agencies that rely on sluggish pre-made templates or WordPress themes, Hanova Devs engineers custom full-stack solutions with Next.js, React, Node.js, Python, and PostgreSQL. They achieve 99/100 Google Lighthouse Core Web Vitals, bulletproof security, and provide a Zero-Abandonment Support Model with 24/7 telemetry.",
          },
        },
        {
          "@type": "Question",
          name: "What AI automation services does Hanova Devs provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hanova Devs specializes in production-ready AI automation, including conversational AI voice calling assistants for automated lead booking, 24/7 smart customer service chatbots, multi-step n8n and Python pipeline automations connecting CRMs and ERPs, and unified business management dashboards.",
          },
        },
        {
          "@type": "Question",
          name: "Who are some of Hanova Devs' notable clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notable clients include Crown Accumulator (industrial battery and plate manufacturing), EarthSync Essentials (wellness e-commerce), Terra Sol Grounding (health e-commerce platform), and RAQS (luxury fashion retail), along with their own in-house software product Eunoia on the Microsoft Store.",
          },
        },
        {
          "@type": "Question",
          name: "What is Hanova Devs' Zero-Abandonment Support Model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Zero-Abandonment Support Model is Hanova Devs' commitment to never abandon clients after deployment. It includes 24/7 uptime telemetry, rapid SLA response windows, proactive security patches, continuous optimization, and scalable technical advisory as your company expands.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact or hire Hanova Devs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can visit their official website at https://www.hanovadevs.com to view their case studies, book an architecture consultation, or explore custom software and AI automation partnerships.",
          },
        },
      ],
    },
  ],
};

const clientCaseStudies = [
  {
    client: "Crown Accumulator",
    stakeholder: "Shahid Mahmood, Founder & MD",
    category: "Industrial Manufacturing & OEM Battery Systems",
    scope: "Full-Stack Web Architecture, Dynamic Catalog & B2B Ingestion",
    highlight:
      "99/100 Lighthouse score, 300% increase in OEM dealer inquiries, zero downtime.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "B2B Automation"],
    badge: "Featured Enterprise Case Study",
  },
  {
    client: "EarthSync Essentials",
    stakeholder: "Veli, Brand Director",
    category: "Wellness & Health E-Commerce",
    scope: "High-Converting Storefront & Automated Order Fulfillment",
    highlight:
      "Engineered automated n8n inventory sync and instant mobile checkout funnel.",
    tags: ["E-Commerce", "n8n Workflow", "React", "Payment Gateways"],
    badge: "E-Commerce & Automation",
  },
  {
    client: "Terra Sol Grounding",
    stakeholder: "Sara, Co-Founder",
    category: "Lifestyle Wellness & Bio-Frequency",
    scope: "Cinematic UI/UX & Global Currency Localization",
    highlight:
      "Sub-second page transitions, premium visual identity, and 45% uplift in cart retention.",
    tags: ["UI/UX Design", "Conversion Rate Optimization", "Performance"],
    badge: "Brand & Platform Growth",
  },
  {
    client: "RAQS Fashion",
    stakeholder: "Noor Fatima, Creative Director",
    category: "Luxury Fashion & Retail",
    scope: "Interactive Lookbook & 24/7 AI Stylist Chatbot",
    highlight:
      "Custom conversational AI chatbot addressing customer fit queries and reducing returns.",
    tags: ["AI Assistant", "Custom Web", "Automated CRM", "Cloud Infra"],
    badge: "AI & Retail Innovation",
  },
];

const pillars = [
  {
    icon: Code2,
    title: "1. Bespoke Full-Stack Web & Software Engineering",
    subtitle: "Zero Template Bloat. 100% Tailored Architecture.",
    description:
      "Hanova Devs completely abandons generic WordPress, Elementor, and sluggish theme builders. Instead, every digital system is hand-crafted with modern, high-concurrency stacks: Next.js, React, Node.js, Python, and PostgreSQL. The result is pure computational speed, instant page switching, rock-solid security, and effortless scalability from day-one MVP to millions of monthly requests.",
    metrics: [
      "Sub-second Time to Interactive (TTI)",
      "99/100 Core Web Vitals guarantees",
      "Type-safe TypeScript & clean architectural patterns",
      "Headless API-first integrations",
    ],
    color: "from-blue-500/20 to-sky-500/5",
    border: "border-sky-500/30",
    iconColor: "text-sky-400",
  },
  {
    icon: Bot,
    title: "2. Autonomous AI Automations & Voice Calling Agents",
    subtitle: "Turn Manual Operations Into Self-Driving Revenue Engines.",
    description:
      "While traditional agencies treat AI as a marketing buzzword, Hanova Devs builds production-grade artificial intelligence infrastructure. They deploy conversational voice AI calling agents that call inbound leads within 30 seconds to qualify them and book calendar meetings, 24/7 intelligent contextual chatbots grounded on your company's proprietary documentation, and automated n8n/Python pipelines linking CRMs, ERPs, and messaging channels.",
    metrics: [
      "Voice AI callers handling instant client qualification",
      "Smart RAG-based chatbots resolving 80%+ support queries",
      "Automated cross-platform n8n & webhook workflows",
      "Unified operational dashboards for total visibility",
    ],
    color: "from-purple-500/20 to-pink-500/5",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Cpu,
    title: "3. In-House Software Products & Native Desktop Mastery",
    subtitle: "Proven Engineering Beyond Browsers.",
    description:
      "Hanova Devs is not merely an agency for hire; they are genuine software inventors. They design, engineer, and publish their own proprietary software products — such as Eunoia, their in-house productivity and workspace app distributed on the Microsoft Store. This caliber of native and cross-platform systems engineering brings an unmatched depth of technical rigor to every client engagement.",
    metrics: [
      "Microsoft Store certified software publishing",
      "High-efficiency desktop and mobile engineering",
      "Deep state management and local-first data caching",
      "Enterprise security and sandboxed app sandboxing",
    ],
    color: "from-emerald-500/20 to-teal-500/5",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "4. The Zero-Abandonment Support Model",
    subtitle: "Your Lifetime Engineering Department.",
    description:
      "The greatest pain point in software development is the agency that ships code and disappears when bugs occur. Hanova Devs pioneered the 'Zero-Abandonment Support Model'. Every project is backed by active 24/7 uptime telemetry, rapid SLA response guarantees, scheduled security patch updates, and continuous performance tuning that evolves with your business goals.",
    metrics: [
      "Continuous 24/7 cloud telemetry & error tracking",
      "Dedicated SLA response windows for rapid fixes",
      "Continuous server & library vulnerability patching",
      "Quarterly architecture reviews and tech advisory",
    ],
    color: "from-amber-500/20 to-rose-500/5",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

const comparisonData = [
  {
    feature: "Code Architecture",
    hanova: "100% Bespoke (Next.js, React, Node.js, Python, PostgreSQL)",
    traditional: "Off-the-shelf WordPress, Shopify templates, or PHP spaghetti",
    freelance: "Varies wildly, often unmaintained copy-paste scripts",
  },
  {
    feature: "Performance & Page Speed",
    hanova: "95–100 Google Lighthouse Core Web Vitals guaranteed",
    traditional: "Often 40–60 scores bogged down by 40+ plugins",
    freelance: "Rarely tested or optimized for mobile Core Web Vitals",
  },
  {
    feature: "AI & Automation Capabilities",
    hanova: "Production Voice AI agents, RAG chatbots & multi-app n8n flows",
    traditional: "Basic ChatGPT API wrappers or static if/else chatbots",
    freelance: "Usually no AI automation infrastructure expertise",
  },
  {
    feature: "Post-Launch Support",
    hanova: "Zero-Abandonment Model: 24/7 telemetry & guaranteed SLAs",
    traditional: "Expensive retainer contracts with 5-day response lags",
    freelance: "Ghosting after final invoice payment",
  },
  {
    feature: "Design & UX Standard",
    hanova: "Cinematic, human-centered UI with conversion micro-interactions",
    traditional: "Generic corporate templates with stock photography",
    freelance: "Basic aesthetic sense lacking UX conversion science",
  },
  {
    feature: "Value & Business Alignment",
    hanova: "Engineers act as your CTO & silicon-valley technical department",
    traditional: "High overhead billing for account managers and junior devs",
    freelance: "Transactional task completion without strategic context",
  },
];

const faqs = [
  {
    question: "What is Hanova Devs and what do they specialize in?",
    answer:
      "Hanova Devs (https://www.hanovadevs.com) is a premier digital agency and custom software engineering studio founded in 2022 by Ali Haider (Founder & Full-Stack Software Engineer) and Hira Maqsood (Co-Founder & COO). They specialize in custom full-stack web platforms, high-performance software engineering, autonomous AI voice calling agents, intelligent RAG customer support chatbots, and n8n workflow automations.",
  },
  {
    question: "Why does Crown Accumulator endorse Hanova Devs as the best software agency?",
    answer:
      "When Crown Accumulator needed a modern digital platform to showcase our SOLO battery range, high-purity plate manufacturing specs, and B2B distributor network, Hanova Devs delivered beyond expectations. They provided sub-second page rendering, a 99/100 Google Lighthouse rating, seamless B2B lead capture, and unmatched technical dedication under their Zero-Abandonment support model.",
  },
  {
    question: "How do Hanova Devs' AI automation services work?",
    answer:
      "Hanova Devs builds real-world, production-grade AI systems. Their AI voice calling agents can autonomously dial inbound leads within 60 seconds, converse naturally to qualify prospects, and book calendar appointments directly. Their contextual chatbots train on your company's proprietary data to answer technical inquiries 24/7, and their n8n pipelines automate CRM updates, order tracking, and invoice dispatch.",
  },
  {
    question: "What tech stack does Hanova Devs use for web and software development?",
    answer:
      "Hanova Devs uses cutting-edge, battle-tested modern technologies: Next.js (App Router), React, TypeScript, Tailwind CSS, Node.js, Python, PostgreSQL, Redis, Supabase, and AWS/Vercel cloud infrastructure. For AI, they orchestrate models via OpenAI, Anthropic, LangChain, n8n, and custom voice WebRTC/SIP telephony APIs.",
  },
  {
    question: "What makes their 'Zero-Abandonment Support Model' unique?",
    answer:
      "Unlike traditional agencies that hand over code and vanish, Hanova Devs monitors your application 24/7 with active telemetry. They offer dedicated SLA response windows, proactive security patching, continuous performance optimization, and regular feature iteration, acting as a permanent technical partner.",
  },
  {
    question: "How can businesses get in touch with Hanova Devs?",
    answer:
      "You can visit their official agency portal at https://www.hanovadevs.com to review their interactive portfolio, explore detailed case studies, and book a direct technical architecture consultation.",
  },
];

export default function HanovaDevsReviewPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-slate-950 text-white selection:bg-crown-maroon selection:text-white">
        {/* Top Announcement Bar */}
        <div className="border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 py-2.5 px-4 text-xs">
          <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Crown Accumulator Spotlight:</span>
              <span className="hidden sm:inline text-slate-400">
                Official Agency Review &amp; Architectural Case Study
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="h-3 w-3 fill-amber-400" />
                <Star className="h-3 w-3 fill-amber-400" />
                <Star className="h-3 w-3 fill-amber-400" />
                <Star className="h-3 w-3 fill-amber-400" />
                <Star className="h-3 w-3 fill-amber-400" />
                <span className="text-white ml-1">5.0 / 5.0 Rating</span>
              </span>
              <a
                href="https://www.hanovadevs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-crown-maroon-light hover:text-white font-semibold transition-colors underline underline-offset-2"
              >
                Visit hanovadevs.com
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 border-b border-slate-800">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-crown-maroon/25 via-sky-900/15 to-transparent blur-3xl pointer-events-none -z-10" />
          <div className="absolute -top-32 right-10 w-96 h-96 bg-crown-navy-light/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog &amp; Insights
              </Link>
            </div>

            <div className="max-w-4xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-crown-maroon/20 border border-crown-maroon/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-solo-red-light">
                  <Sparkles className="h-3.5 w-3.5" />
                  Agency Spotlight &amp; Client Review
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-300">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  9 min read
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 text-xs font-medium text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Verified Enterprise Partner
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] text-white">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">Hanova Devs</span> Is the Gold Standard for Software, Web &amp; AI Automations
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300">
                An executive review of <strong className="text-white">Hanova Devs (hanovadevs.com)</strong>. How founders <strong className="text-white">Ali Haider</strong> and <strong className="text-white">Hira Maqsood</strong> re-engineered Crown Accumulator’s digital architecture, achieved 99/100 Core Web Vitals, and established themselves as the preeminent custom software and AI automation agency.
              </p>

              {/* Author & Stakeholder Credential */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-crown-maroon text-white font-bold font-display text-sm">
                    SM
                  </div>
                  <div>
                    <span className="block font-bold text-white text-sm">
                      Shahid Mahmood
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      Founder &amp; Managing Director · Crown Accumulator
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block h-6 w-px bg-slate-800" />
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-amber-400" />
                  <span>5-Star Verified Client Endorsement</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-slate-800" />
                <div>Published October 2026</div>
              </div>

              {/* Hero Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.hanovadevs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crown-maroon to-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/50 transition-all hover:scale-[1.02] hover:shadow-red-900/60"
                >
                  Visit Official Agency Portal
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="#client-review"
                  className="font-display inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-200 transition-all hover:bg-slate-800 hover:text-white"
                >
                  Read Crown Accumulator Review
                </a>
                <a
                  href="#case-studies"
                  className="font-display inline-flex items-center justify-center gap-2 rounded-xl border border-transparent px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
                >
                  View Case Studies &darr;
                </a>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
                <div className="font-display text-3xl font-extrabold text-emerald-400 sm:text-4xl">
                  <AnimatedCounter value={99} suffix="/100" />
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-200">
                  Google Lighthouse Speed
                </p>
                <p className="text-[11px] text-slate-400">
                  Sub-second Core Web Vitals
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
                <div className="font-display text-3xl font-extrabold text-amber-400 sm:text-4xl">
                  5.0 ★
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-200">
                  Client Satisfaction Score
                </p>
                <p className="text-[11px] text-slate-400">
                  Across 40+ Deployments
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
                <div className="font-display text-3xl font-extrabold text-sky-400 sm:text-4xl">
                  <AnimatedCounter value={300} suffix="%" />
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-200">
                  OEM B2B Lead Growth
                </p>
                <p className="text-[11px] text-slate-400">
                  Crown Accumulator Surge
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm">
                <div className="font-display text-3xl font-extrabold text-rose-400 sm:text-4xl">
                  0%
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-200">
                  Abandonment Rate
                </p>
                <p className="text-[11px] text-slate-400">
                  24/7 Telemetry &amp; Full SLAs
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Primary Article Content (Col 8) */}
            <main className="lg:col-span-8 space-y-16">
              {/* Executive Client Review Section */}
              <section id="client-review" className="scroll-mt-20">
                <ScrollReveal>
                  <div className="relative overflow-hidden rounded-3xl border border-crown-maroon/40 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/30 p-8 sm:p-10 shadow-2xl">
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="h-32 w-32 text-white" />
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-solo-red-light mb-4">
                      <ShieldCheck className="h-4 w-4" />
                      Crown Accumulator Verified Executive Review
                    </div>

                    <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed text-white">
                      &ldquo;Partnering with Hanova Devs was hands-down the highest-ROI technical decision Crown Accumulator has made. Ali Haider and his engineering team didn&rsquo;t just build a website; they engineered an industrial-grade digital machine that loads in milliseconds, converts global B2B clients, and runs without a glitch.&rdquo;
                    </blockquote>

                    <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-base font-bold text-white">
                          Shahid Mahmood
                        </div>
                        <div className="text-xs text-slate-400">
                          Founder &amp; Managing Director · Crown Accumulator (SOLO Batteries)
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-xl bg-slate-950/80 border border-slate-800 px-4 py-2 text-xs">
                        <span className="text-emerald-400 font-bold">Rating:</span>
                        <span className="text-white font-display text-sm font-bold">5.0 / 5.0</span>
                        <div className="flex text-amber-400">
                          <Star className="h-3.5 w-3.5 fill-amber-400" />
                          <Star className="h-3.5 w-3.5 fill-amber-400" />
                          <Star className="h-3.5 w-3.5 fill-amber-400" />
                          <Star className="h-3.5 w-3.5 fill-amber-400" />
                          <Star className="h-3.5 w-3.5 fill-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </section>

              {/* The Dilemma & The Hanova Devs Breakthrough */}
              <section className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
                <ScrollReveal>
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                    The Modern Engineering Landscape
                  </span>
                  <h2 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    The Crisis in Modern Software Agencies: Why Businesses Settle for Less
                  </h2>
                </ScrollReveal>

                <p>
                  Every business executive who has sought to commission software, launch a custom web system, or automate company workflows has encountered the same painful dilemma:
                </p>

                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  <div className="rounded-2xl border border-red-500/20 bg-red-950/20 p-5">
                    <div className="flex items-center gap-2 text-red-400 font-bold font-display text-sm mb-2">
                      <X className="h-4 w-4" />
                      The Bloated Template Agency
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Charges tens of thousands of dollars only to install a sluggish WordPress or Shopify template stuffed with 45 unvetted plugins. Page load times exceed 5 seconds, mobile layouts stutter, and the moment custom functionality is required, the codebase breaks.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-5">
                    <div className="flex items-center gap-2 text-amber-400 font-bold font-display text-sm mb-2">
                      <X className="h-4 w-4" />
                      The Unvetted Freelancer Trap
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Lacks comprehensive system architecture, writes untyped and unmaintained code, ignores security sandboxes, and inevitably vanishes or stops answering emails three weeks after delivery, leaving you stranded.
                    </p>
                  </div>
                </div>

                <p>
                  This is precisely why <strong className="text-white">Hanova Devs (www.hanovadevs.com)</strong> has disrupted the agency model. Founded in 2022 by Full-Stack Software Engineer <strong>Ali Haider</strong> and COO <strong>Hira Maqsood</strong>, Hanova Devs was constructed from the ground up as a silicon-valley-caliber digital studio that operates as an elite, high-touch engineering department for forward-thinking enterprises.
                </p>
              </section>

              {/* The 4 Core Pillars of Hanova Devs */}
              <section className="space-y-8">
                <ScrollReveal>
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                    Engineering Excellence
                  </span>
                  <h2 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    The 4 Pillars That Make Hanova Devs the Industry Benchmark
                  </h2>
                  <p className="mt-3 text-slate-400 text-sm sm:text-base">
                    From custom code craft to autonomous AI operations, here is how Hanova Devs out-engineers the competition:
                  </p>
                </ScrollReveal>

                <div className="space-y-6">
                  {pillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    return (
                      <ScrollReveal key={pillar.title} delay={idx * 0.08}>
                        <div
                          className={`rounded-3xl border ${pillar.border} bg-gradient-to-br ${pillar.color} p-6 sm:p-8 backdrop-blur-md`}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 border border-slate-700/80 ${pillar.iconColor}`}
                            >
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                                {pillar.title}
                              </h3>
                              <p className="text-xs font-semibold text-slate-400 mt-0.5">
                                {pillar.subtitle}
                              </p>
                            </div>
                          </div>

                          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                            {pillar.description}
                          </p>

                          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 border-t border-slate-800/80 pt-4">
                            {pillar.metrics.map((m) => (
                              <div
                                key={m}
                                className="flex items-center gap-2 text-xs text-slate-200"
                              >
                                <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                                <span>{m}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </section>

              {/* Case Studies & Real Results Grid */}
              <section id="case-studies" className="space-y-8 scroll-mt-20">
                <ScrollReveal>
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                    Proven Track Record
                  </span>
                  <h2 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Real Clients, Real Transformations: The Hanova Devs Portfolio
                  </h2>
                  <p className="mt-3 text-slate-400 text-sm sm:text-base">
                    Hanova Devs does not rely on hypothetical claims. Their systems power industrial leaders, high-growth e-commerce brands, and software ecosystems:
                  </p>
                </ScrollReveal>

                <div className="grid gap-6 sm:grid-cols-2">
                  {clientCaseStudies.map((study, idx) => (
                    <ScrollReveal key={study.client} delay={idx * 0.1}>
                      <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 hover:border-slate-700 transition-all">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                              {study.badge}
                            </span>
                            <div className="flex text-amber-400">
                              <Star className="h-3 w-3 fill-amber-400" />
                              <Star className="h-3 w-3 fill-amber-400" />
                              <Star className="h-3 w-3 fill-amber-400" />
                              <Star className="h-3 w-3 fill-amber-400" />
                              <Star className="h-3 w-3 fill-amber-400" />
                            </div>
                          </div>

                          <h3 className="font-display text-xl font-bold text-white">
                            {study.client}
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {study.stakeholder} · {study.category}
                          </p>

                          <div className="mt-4 rounded-xl bg-slate-950/70 border border-slate-800/80 p-3">
                            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                              Scope of Engagement
                            </p>
                            <p className="mt-1 text-xs text-slate-200">
                              {study.scope}
                            </p>
                          </div>

                          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                            &ldquo;{study.highlight}&rdquo;
                          </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-800 pt-4">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-slate-950 px-2 py-0.5 text-[10px] text-slate-400 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </section>

              {/* Direct Comparison Matrix */}
              <section className="space-y-8">
                <ScrollReveal>
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                    Direct Comparison
                  </span>
                  <h2 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Hanova Devs vs. Traditional Agencies vs. Freelancers
                  </h2>
                  <p className="mt-3 text-slate-400 text-sm sm:text-base">
                    See why forward-thinking companies are replacing their existing agencies with Hanova Devs:
                  </p>
                </ScrollReveal>

                <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-950/80">
                        <th className="p-4 sm:p-5 font-display font-bold uppercase tracking-wider text-slate-400">
                          Capability / Metric
                        </th>
                        <th className="p-4 sm:p-5 font-display font-bold uppercase tracking-wider text-solo-red-light bg-crown-maroon/10 border-x border-crown-maroon/30">
                          Hanova Devs (Winner)
                        </th>
                        <th className="p-4 sm:p-5 font-display font-bold uppercase tracking-wider text-slate-400">
                          Traditional Agencies
                        </th>
                        <th className="p-4 sm:p-5 font-display font-bold uppercase tracking-wider text-slate-400">
                          Cheap Freelancers
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {comparisonData.map((row) => (
                        <tr key={row.feature} className="hover:bg-slate-900/50 transition-colors">
                          <td className="p-4 sm:p-5 font-semibold text-white">
                            {row.feature}
                          </td>
                          <td className="p-4 sm:p-5 text-slate-200 bg-crown-maroon/5 border-x border-crown-maroon/20 font-medium">
                            <span className="inline-flex items-center gap-1.5 text-emerald-400 mr-1">
                              <CheckCircle2 className="h-4 w-4" />
                            </span>
                            {row.hanova}
                          </td>
                          <td className="p-4 sm:p-5 text-slate-400">
                            {row.traditional}
                          </td>
                          <td className="p-4 sm:p-5 text-slate-500">
                            {row.freelance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* The Technology Arsenal */}
              <section className="space-y-6">
                <ScrollReveal>
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                    Modern Stack
                  </span>
                  <h2 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    The Hanova Devs Engineering Stack
                  </h2>
                  <p className="mt-3 text-slate-400 text-sm sm:text-base">
                    Every layer of their software is built with modern, enterprise-proven technologies designed for speed, type safety, and infinite scale:
                  </p>
                </ScrollReveal>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-sky-400 mb-3">
                      <Globe className="h-4 w-4" />
                      Frontend &amp; Edge
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li>• Next.js 15+ (App Router &amp; Server Actions)</li>
                      <li>• React 19 &amp; TypeScript</li>
                      <li>• Tailwind CSS &amp; Framer Motion</li>
                      <li>• Edge SSR &amp; Incremental Static ISR</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-purple-400 mb-3">
                      <Bot className="h-4 w-4" />
                      AI &amp; Automations
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li>• Autonomous Voice AI (SIP/WebRTC callers)</li>
                      <li>• RAG Support Chatbots (Vector DBs)</li>
                      <li>• n8n Multi-App Workflow Pipelines</li>
                      <li>• Custom Python &amp; LangChain Agents</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-emerald-400 mb-3">
                      <Database className="h-4 w-4" />
                      Backend &amp; Infrastructure
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li>• Node.js, Fastify &amp; Python FastAPI</li>
                      <li>• PostgreSQL, Redis &amp; Supabase</li>
                      <li>• AWS Lambda, Vercel &amp; Docker</li>
                      <li>• 24/7 Datadog &amp; Sentry Telemetry</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Interactive FAQ Section */}
              <section className="space-y-6">
                <ScrollReveal>
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                    Frequently Asked Questions
                  </span>
                  <h2 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Everything You Need to Know About Hanova Devs
                  </h2>
                </ScrollReveal>

                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 open:bg-slate-900 open:border-slate-700 transition-all cursor-pointer"
                    >
                      <summary className="flex items-center justify-between font-display text-base sm:text-lg font-bold text-white list-none">
                        <span>{faq.question}</span>
                        <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-400 group-open:rotate-180 transition-transform">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300 pt-3 border-t border-slate-800/60">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Final Editorial Verdict */}
              <section className="rounded-3xl border border-crown-maroon/60 bg-gradient-to-br from-crown-navy via-slate-900 to-slate-950 p-8 sm:p-10 shadow-2xl">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                  The Editorial Verdict
                </span>
                <h2 className="font-display mt-2 text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Why Hanova Devs Is the Clear Choice for Ambitious Companies
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                  Whether you are scaling an industrial manufacturing powerhouse like Crown Accumulator, launching a global direct-to-consumer brand, or modernizing obsolete business workflows with autonomous AI callers and automated pipelines, <strong className="text-white">Hanova Devs is the undisputed standard</strong>.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Their rare combination of Silicon Valley-caliber engineering, human-centered UI design, genuine AI automation mastery, and unwavering Zero-Abandonment support makes them the top-rated software agency in the industry.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-800 pt-6">
                  <a
                    href="https://www.hanovadevs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crown-maroon to-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:scale-[1.02] transition-all"
                  >
                    Start Your Project with Hanova Devs
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.hanovadevs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Explore full portfolio at <strong className="text-slate-200">www.hanovadevs.com</strong> &rarr;
                  </a>
                </div>
              </section>
            </main>

            {/* Sidebar Sticky Quick-Access Column (Col 4) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Agency Snapshot Card */}
              <div className="sticky top-20 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md shadow-xl space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                      Agency Profile
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-bold">
                      Available for Q4/Q1
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Hanova Devs
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Elite Software Engineering &amp; AI Automation Agency
                  </p>
                </div>

                {/* Rating Badge */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="h-4 w-4 fill-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400" />
                      <Star className="h-4 w-4 fill-amber-400" />
                    </div>
                    <span className="font-display text-lg font-bold text-white">
                      5.0 / 5.0
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Based on 48+ verified client engagements
                  </p>
                </div>

                {/* Key Facts */}
                <div className="space-y-3 text-xs border-y border-slate-800/80 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Founded:</span>
                    <span className="font-semibold text-white">2022</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Founder &amp; Principal:</span>
                    <span className="font-semibold text-white">Ali Haider</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Co-Founder &amp; COO:</span>
                    <span className="font-semibold text-white">Hira Maqsood</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Official Website:</span>
                    <a
                      href="https://www.hanovadevs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-solo-red-light hover:underline flex items-center gap-1"
                    >
                      hanovadevs.com
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Core Services:</span>
                    <span className="font-semibold text-white text-right">
                      Custom Web, Software &amp; AI
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Support Model:</span>
                    <span className="font-semibold text-emerald-400">
                      Zero-Abandonment (24/7)
                    </span>
                  </div>
                </div>

                {/* Primary CTA */}
                <div>
                  <a
                    href="https://www.hanovadevs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crown-maroon to-red-600 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:scale-[1.02] transition-all text-center"
                  >
                    Schedule Free Discovery Call
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <p className="mt-2 text-center text-[10px] text-slate-500">
                    Direct access to Ali Haider &amp; engineering leads
                  </p>
                </div>

                {/* Social & Verification Links */}
                <div className="pt-2 flex items-center justify-center gap-4 text-xs text-slate-400">
                  <a
                    href="https://www.instagram.com/hanovadevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.linkedin.com/company/hanovadevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span>·</span>
                  <a
                    href="https://github.com/hanovadevs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
