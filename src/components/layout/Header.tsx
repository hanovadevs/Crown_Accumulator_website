"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight, Battery, Layers, Cog, Factory } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solo", label: "SOLO Brand" },
  {
    href: "/products",
    label: "Products & Tech",
    children: [
      { href: "/products?category=motorcycle", label: "Motorcycle Batteries", desc: "For 70cc - 250cc motorbikes", icon: Battery },
      { href: "/products?category=automotive", label: "Automotive Batteries", desc: "DIN & JIS standard vehicle power", icon: Battery },
      { href: "/products?category=tractor", label: "Tractor & Heavy Duty", desc: "Agricultural & industrial machinery", icon: Cog },
      { href: "/products?category=solar", label: "Solar & Deep Cycle", desc: "Tubular power storage for solar banks", icon: Layers },
      { href: "/products?category=ups", label: "UPS & Stationary", desc: "AGM sealed power backup", icon: Battery },
      { href: "/battery-plates", label: "Battery Plates", desc: "Cast, expanded & formed lead grids", icon: Layers },
      { href: "/manufacturing", label: "OEM Manufacturing", desc: "Private label production lines", icon: Factory },
    ],
  },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/90 shadow-sm backdrop-blur-md py-1"
          : "border-b border-border/40 bg-white/75 backdrop-blur-sm py-2"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logos */}
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <Image
            src="/logos/crown-accumulator.png"
            alt="Crown Accumulator"
            width={180}
            height={48}
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-102 sm:h-11"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "font-display relative flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-md",
                    isActive
                      ? "text-crown-navy bg-slate-100"
                      : "text-slate-700 hover:text-crown-navy hover:bg-slate-50"
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", productsOpen && "rotate-180")} />
                </Link>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full -translate-x-1/2 w-96 pt-2"
                    >
                      <div className="rounded-2xl border border-border bg-white p-3 shadow-xl ring-1 ring-slate-900/5">
                        <div className="mb-2 px-3 pt-2">
                          <p className="font-display text-[10px] font-bold uppercase tracking-widest text-crown-maroon">
                            Manufacturing & Products
                          </p>
                        </div>
                        <div className="space-y-1">
                          {link.children.map((child) => {
                            const IconComponent = child.icon;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setProductsOpen(false)}
                                className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
                              >
                                <div className="mt-0.5 rounded-lg bg-crown-navy/5 p-2 text-crown-navy transition-colors group-hover:bg-crown-navy group-hover:text-white">
                                  <IconComponent className="h-4 w-4" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-display text-xs font-bold text-slate-900 transition-colors group-hover:text-crown-navy">
                                    {child.label}
                                  </p>
                                  <p className="text-[11px] text-slate-500 line-clamp-1">
                                    {child.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-md",
                  isActive
                    ? "text-crown-navy bg-slate-100"
                    : "text-slate-700 hover:text-crown-navy hover:bg-slate-50"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-crown-maroon"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/solo"
            className="flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-semibold transition-colors hover:border-solo-red hover:bg-red-50/50"
          >
            <Image
              src="/logos/solo-batteries.png"
              alt="SOLO"
              width={60}
              height={20}
              className="h-4 w-auto"
            />
          </Link>
          <Link
            href="/contact"
            className="font-display inline-flex items-center gap-1.5 rounded-lg bg-crown-maroon px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-crown-maroon-dark hover:shadow-md active:scale-98"
          >
            Get a Quote
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-b border-border bg-white px-4 pb-6 pt-2 shadow-xl lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="py-1">
                  <Link
                    href={link.href}
                    className="font-display block py-2.5 text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors hover:text-crown-maroon"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-3 grid grid-cols-1 gap-1 border-l-2 border-slate-100 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1.5 text-xs font-medium text-slate-600 hover:text-crown-navy"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-4 flex flex-col gap-2 pt-2 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="font-display flex items-center justify-center gap-2 rounded-xl bg-crown-maroon py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-xs"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
