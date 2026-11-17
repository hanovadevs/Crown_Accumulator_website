"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About Crown" },
  { href: "/solo", label: "SOLO" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Journal" },
];
const productLinks = [
  { href: "/products", label: "All products" },
  { href: "/products?category=motorcycle", label: "SOLO Super 4" },
  { href: "/products?category=batteries", label: "SOLO MB 200 & ZB 230" },
  { href: "/battery-plates", label: "Battery plates" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeMenu(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    }
    function outsideClick(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setProductsOpen(false);
    }
    document.addEventListener("keydown", closeMenu);
    document.addEventListener("pointerdown", outsideClick);
    return () => {
      document.removeEventListener("keydown", closeMenu);
      document.removeEventListener("pointerdown", outsideClick);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [mobileOpen]);

  function close() { setMobileOpen(false); setProductsOpen(false); }

  return (
    <header className="site-header" ref={headerRef}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="header-inner">
        <Link href="/" onClick={close} className="header-logo"><Image src="/logos/crown-accumulator.png" alt="Crown Accumulator" width={180} height={48} preload /></Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About Crown</Link>
          <div className="nav-products">
            <button type="button" aria-expanded={productsOpen} aria-controls="product-navigation" onClick={() => setProductsOpen(!productsOpen)}>Products <span aria-hidden="true">{productsOpen ? "−" : "+"}</span></button>
            {productsOpen && <div className="product-navigation" id="product-navigation">{productLinks.map((link) => <Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>)}</div>}
          </div>
          {links.slice(1).map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" className="header-quote" onClick={close}>Get a quote <span aria-hidden="true">↗</span></Link>
        <button type="button" className="mobile-menu-button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {mobileOpen && <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation"><Link href="/" onClick={close}>Home</Link>{links.map((link) => <Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>)}<div className="mobile-product-links"><p>Products</p>{productLinks.map((link) => <Link key={link.href} href={link.href} onClick={close}>{link.label}</Link>)}</div><Link className="button button-red" href="/contact" onClick={close}>Get a quote</Link></nav>}
    </header>
  );
}
