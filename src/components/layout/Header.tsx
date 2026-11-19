"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About Crown" }, { href: "/solo", label: "SOLO" },
  { href: "/manufacturing", label: "Manufacturing" }, { href: "/research", label: "Research" }, { href: "/blog", label: "Journal" },
];
const ranges = [
  { href: "/products?category=motorcycle", label: "Motorcycle batteries", image: "/images/showroom/solo-super-4.webp", description: "SOLO Super 4" },
  { href: "/products?category=batteries", label: "Automotive batteries", image: "/images/showroom/solo-mb-200.webp", description: "SOLO MB 200 and ZB 230" },
  { href: "/battery-plates", label: "Battery plates", image: "/images/products/plate-burgundy.webp", description: "Crown, AS and Shalimar plate profiles" },
];

export function Header() {
  const [menu, setMenu] = useState<"products" | "mobile" | null>(null);
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const productsTrigger = useRef<HTMLButtonElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const close = () => setMenu(null);

  useEffect(() => {
    if (!menu) return;
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu(null);
        (menu === "products" ? productsTrigger : mobileTrigger).current?.focus();
      }
    }
    function onOutside(event: Event) {
      if (!header.current?.contains(event.target as Node)) setMenu(null);
    }
    const desktop = window.matchMedia("(min-width: 1021px)");
    function onBreakpoint() { setMenu(null); }
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menu]);

  const current = (href: string) => pathname === href || pathname.startsWith(`${href}/`) ? "page" as const : undefined;

  return (
    <header className="site-header" ref={header}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="header-inner">
        <Link href="/" onClick={close} className="header-logo"><Image src="/logos/crown-accumulator.png" alt="Crown Accumulator" width={270} height={65} loading="eager" /></Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="/about" aria-current={current("/about")} onClick={close}>About Crown</Link>
          <div className="nav-products">
            <button ref={productsTrigger} type="button" aria-expanded={menu === "products"} aria-controls={menu === "products" ? "product-navigation" : undefined} data-active={Boolean(current("/products") || current("/battery-plates"))} onClick={() => setMenu(menu === "products" ? null : "products")}>Products <span className="nav-chevron" aria-hidden="true" /></button>
            {menu === "products" && <div className="product-navigation" id="product-navigation"><div className="section-shell mega-layout">
              <div className="mega-copy"><p className="eyebrow">Crown Accumulator</p><h2>Explore the range.</h2><Link className="text-link" href="/products" onClick={close}>All products <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/manufacturing#sprockets" onClick={close}>Motorcycle sprockets <span aria-hidden="true">↗</span></Link></div>
              {ranges.map((range) => <Link key={range.href} href={range.href} className="mega-range" onClick={close}><div className="mega-image"><Image src={range.image} alt="" fill sizes="200px" /></div><strong>{range.label}</strong><span>{range.description}</span></Link>)}
            </div></div>}
          </div>
          {links.slice(1).map((link) => <Link key={link.href} href={link.href} aria-current={current(link.href)} onClick={close}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" className="header-quote" onClick={close}>Get a quote <span aria-hidden="true">↗</span></Link>
        <button ref={mobileTrigger} type="button" className="mobile-menu-button" aria-expanded={menu === "mobile"} aria-controls={menu === "mobile" ? "mobile-navigation" : undefined} aria-label={menu === "mobile" ? "Close navigation" : "Open navigation"} onClick={() => setMenu(menu === "mobile" ? null : "mobile")}>{menu === "mobile" ? "Close" : "Menu"}</button>
      </div>
      {menu === "mobile" && <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">
        <Link href="/products" aria-current={current("/products")} onClick={close}>All products</Link>
        <div className="mobile-product-links">{ranges.map((range) => <Link key={range.href} href={range.href} onClick={close}>{range.label}</Link>)}<Link href="/manufacturing#sprockets" onClick={close}>Motorcycle sprockets</Link></div>
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={current(link.href)} onClick={close}>{link.label}</Link>)}
        <Link href="/contact" className="button button-red" onClick={close}>Get a quote <span aria-hidden="true">↗</span></Link>
      </nav>}
    </header>
  );
}
