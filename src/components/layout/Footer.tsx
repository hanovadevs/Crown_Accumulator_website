"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp, Send, ShieldCheck, Award, Factory } from "lucide-react";
import { company, yearsInBusiness } from "@/data/company";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/solo", label: "SOLO Brand" },
    { href: "/manufacturing", label: "OEM Manufacturing" },
    { href: "/contact", label: "Contact Us" },
  ],
  products: [
    { href: "/products?category=motorcycle", label: "Motorcycle Batteries" },
    { href: "/products?category=automotive", label: "Automotive Batteries" },
    { href: "/products?category=solar", label: "Solar Batteries" },
    { href: "/products?category=tractor", label: "Tractor & Heavy Duty" },
    { href: "/battery-plates", label: "Battery Plates" },
  ],
  resources: [
    { href: "/research", label: "Research & Technical" },
    { href: "/blog", label: "Technical Blog" },
    { href: "/blog/hanova-devs", label: "Agency Review: Hanova Devs" },
    { href: "/products", label: "Full Product Catalog" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-slate-900 text-white">
      {/* Top Banner / Newsletter */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
                Engineering Newsletter
              </span>
              <h3 className="font-display mt-1 text-2xl font-bold text-white sm:text-3xl">
                Stay updated with OEM battery insights
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400 max-w-md">
                Get monthly technical updates on lead-acid plate technology, solar battery innovations, and OEM manufacturing standards.
              </p>
            </div>
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your business email..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-crown-maroon focus:ring-1 focus:ring-crown-maroon"
                />
                <button
                  type="submit"
                  className="font-display inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-crown-maroon px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-crown-maroon-dark"
                >
                  Subscribe
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/crown-accumulator.png"
                alt="Crown Accumulator"
                width={200}
                height={56}
                className="mb-4 h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-xs leading-relaxed text-slate-400">
              {company.tagline}. Premier manufacturers of SOLO batteries, high-purity battery plates, and motorcycle sprockets since {company.foundedYear}.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/logos/solo-batteries.png"
                alt="SOLO Batteries & Parts"
                width={120}
                height={48}
                className="h-9 w-auto"
              />
              <div className="h-8 w-px bg-slate-800" />
              <div className="text-[11px] text-slate-400">
                <strong className="block text-white font-display text-xs">{yearsInBusiness()}+ Years</strong>
                Manufacturing
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-display mb-4 text-xs font-bold uppercase tracking-widest text-solo-red-light">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display mb-4 text-xs font-bold uppercase tracking-widest text-solo-red-light">
              Products & Plates
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display mb-4 text-xs font-bold uppercase tracking-widest text-solo-red-light">
              Headquarters
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-xs text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crown-maroon" />
                <span>
                  Industrial Estate, Plot 42-B
                  <br />
                  Manufacturing Zone, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="h-4 w-4 shrink-0 text-crown-maroon" />
                <span>+92 (42) 3755-8800</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-300">
                <Mail className="h-4 w-4 shrink-0 text-crown-maroon" />
                <span>{company.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quality Badges */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8 sm:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-3">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
            <div>
              <p className="font-display text-xs font-bold text-white">ISO 9001:2015</p>
              <p className="text-[10px] text-slate-400">Certified Quality Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-3">
            <Award className="h-6 w-6 text-amber-400" />
            <div>
              <p className="font-display text-xs font-bold text-white">SAE & DIN Tested</p>
              <p className="text-[10px] text-slate-400">Tested to Global Specs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-3">
            <Factory className="h-6 w-6 text-sky-400" />
            <div>
              <p className="font-display text-xs font-bold text-white">500,000+ Plates/Mo</p>
              <p className="text-[10px] text-slate-400">In-house Foundry Capacity</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-3">
            <ShieldCheck className="h-6 w-6 text-rose-400" />
            <div>
              <p className="font-display text-xs font-bold text-white">OEM Preferred</p>
              <p className="text-[10px] text-slate-400">Trusted by 8+ Auto Brands</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Crown Accumulator. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>
              SOLO® is a registered trademark of Crown Accumulator.
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <Link
              href="/blog/hanova-devs"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Engineered by{" "}
              <span className="text-slate-200 font-semibold underline underline-offset-2">
                Hanova Devs
              </span>{" "}
              (Read Review)
            </Link>
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-crown-maroon hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
