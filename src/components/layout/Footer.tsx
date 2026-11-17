import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-invitation"><div><p className="eyebrow">Let’s talk manufacturing</p><h2>Your next requirement.<br />Our next conversation.</h2></div><Link href="/contact" className="button button-light">Discuss your requirements <span aria-hidden="true">↗</span></Link></div>
        <div className="footer-columns">
          <div className="footer-brand"><Link href="/" aria-label="Crown Accumulator home"><Image src="/logos/crown-accumulator.png" alt="Crown Accumulator" width={200} height={56} className="brightness-0 invert" /></Link><p>Batteries, battery plates, and motorcycle sprockets.<br />Manufacturing since {company.foundedYear}.</p></div>
          <div><h3>Company</h3><Link href="/about">About Crown</Link><Link href="/manufacturing">Manufacturing</Link><Link href="/research">Research & technical</Link><Link href="/blog">Journal</Link></div>
          <div><h3>Products</h3><Link href="/solo">SOLO batteries</Link><Link href="/battery-plates">Battery plates</Link><Link href="/products">Product catalog</Link><Link href="/manufacturing">Private label & OEM</Link></div>
          <div><h3>Get in touch</h3><a href={"mailto:" + company.contact.email}>{company.contact.email}</a><Link href="/contact">Contact the team</Link><span>Pakistan</span></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Crown Accumulator.</p><p>SOLO — a Crown Accumulator brand.</p></div>
      </div>
    </footer>
  );
}
