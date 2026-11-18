import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { productImages } from "@/data/product-images";
import { company } from "@/data/company";
import { ClientsSection } from "@/components/company/ClientsSection";
import { HomeProductCatalog } from "@/components/home/HomeProductCatalog";
import { HomeQuotation } from "@/components/home/HomeQuotation";

const batteries = products.filter((product) => product.brand === "SOLO");
const featuredPlates = ["plate-burgundy", "plate-chocolate-brown", "plate-patterned-charcoal"]
  .map((slug) => products.find((product) => product.slug === slug)!);
const specificationRows = [
  { title: "Voltage", label: "Voltage" },
  { title: "Capacity", label: "Capacity" },
  { title: "Plate marking", label: "Plate marking" },
  { title: "Label designation", label: "Label designation" },
];
const orderTerms = [
  { title: "Minimum quantities", text: "MOQ is quoted by model, plate profile, and customization scope. Include your initial quantity and expected repeat demand." },
  { title: "Production & lead time", text: "Ask for the current availability and production schedule. Confirm the dispatch date and delivery arrangement with your quotation." },
  { title: "Packing & delivery", text: "State your delivery city or country and any carton, pallet, or identification requirements so these can be reviewed before confirmation." },
];
const orderSteps = [
  { title: "Define the requirement", text: "Send a model number, sample reference, or drawing, together with quantity and delivery location." },
  { title: "Review the specification", text: "Confirm dimensions, connections, plate details, and any branding or packaging requirements." },
  { title: "Agree the quotation", text: "Review price, minimum quantity, payment terms, lead time, and delivery scope in writing." },
  { title: "Confirm the order", text: "Approve the agreed details and retain the quotation and order reference for follow-up." },
];
const faqs = [
  { question: "Which products does Crown Accumulator manufacture?", answer: "Our range covers SOLO batteries, battery plates, and motorcycle sprockets. The website shows three SOLO battery models and 13 plate profiles. Contact us with a model or drawing for requirements beyond the displayed selection." },
  { question: "What are AS Battery Plate and Shalimar Battery Plate?", answer: "AS Battery Plate and Shalimar Battery Plate are Crown Accumulator brands alongside SOLO. Use the brand and plate reference when discussing a sample or supply requirement." },
  { question: "Can I choose a battery by its Ah rating alone?", answer: "Confirm voltage, dimensions, terminal arrangement, charging requirements, and application suitability as well as capacity. The MB 200 label shows 12V / 130 Ah and the ZB 230 label shows 12V / 150 Ah." },
  { question: "What should I send for a battery plate quotation?", answer: "Include the profile reference, overall dimensions, thickness, lug position, required polarity and formation state, quantity, and delivery location. A dimensioned drawing or physical sample helps establish the exact requirement." },
  { question: "Are private-label products available?", answer: "Send your required product, brand artwork, packaging brief, order quantity, and intended market. Our team can review the scope and confirm what can be offered, together with the applicable commercial terms." },
  { question: "Where can I get a datasheet or warranty terms?", answer: "Request the current document for the exact model and application from our sales team. Confirm the applicable warranty and any activation or commissioning requirements before placing an order." },
];

export function CinematicLanding() {
  return (
    <div className="home-page">
      <section className="home-hero section-shell" aria-labelledby="hero-title">
        <div className="home-hero-copy">
          <p className="eyebrow">Crown Accumulator · Pakistan</p>
          <h1 id="hero-title">Battery, Battery Plate &amp; Motorcycle Sprocket Manufacturing</h1>
          <p className="home-hero-description">Crown Accumulator manufactures SOLO batteries, battery plates, and motorcycle sprockets for trade and industrial customers.</p>
          <div className="home-hero-actions">
            <Link className="button button-red" href="#product-range">Explore products <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="#quotation">Request a quotation</Link>
          </div>
        </div>
        <Link href="/products/solo-mb-200" className="home-hero-product" aria-label="View SOLO MB 200 battery">
          <div className="home-hero-image">
            <Image src={productImages.mb200} alt="SOLO MB 200 battery with red lid" fill preload sizes="(max-width: 760px) 100vw, 48vw" className="product-photograph" />
          </div>
          <div className="home-hero-caption"><div><span>SOLO MB 200</span><p>12V · 130 Ah</p></div><span aria-hidden="true">↗</span></div>
        </Link>
      </section>

      <section className="buyer-section brand-section" aria-labelledby="brands-title">
        <div className="section-shell">
          <div className="section-topline"><div><p className="eyebrow">Our brands</p><h2 id="brands-title">One manufacturer. Three brands.</h2></div></div>
          <div className="brand-family">
            <Link href="/solo"><strong>SOLO</strong><span>Finished batteries</span></Link>
            <Link href="/products?brand=AS%20Battery%20Plate"><strong>AS Battery Plate</strong><span>Battery plates</span></Link>
            <Link href="/products?brand=Shalimar%20Battery%20Plate"><strong>Shalimar Battery Plate</strong><span>Battery plates</span></Link>
          </div>
        </div>
      </section>

      <div id="product-range"><HomeProductCatalog batteries={batteries} plates={featuredPlates} /></div>
      <ClientsSection />

      <section className="buyer-section factory-section" aria-labelledby="factory-title">
        <div className="section-shell">
          <div className="buyer-split-heading">
            <div><p className="eyebrow">Inside the workshop</p><h2 id="factory-title">A closer look at the work.</h2></div>
            <p>Tooling and component photographs from our workshop archive. Discuss the production and inspection requirements for your own specification with our team.</p>
          </div>
          <div className="factory-photo-grid">
            <figure><div><Image src="/images/factory/workshop-tooling.webp" alt="Workshop tooling with a metal mould and clamping mechanism" fill sizes="(max-width:760px) 100vw, 60vw" className="factory-photo" /></div><figcaption>Workshop tooling and mould detail</figcaption></figure>
            <figure><div><Image src="/images/factory/cast-component-sample.webp" alt="Hand-held cast component sample beside workshop tooling" fill sizes="(max-width:760px) 100vw, 40vw" className="factory-photo" /></div><figcaption>Cast component sample from the workshop archive</figcaption></figure>
          </div>
          <Link className="text-link" href="/manufacturing">Discuss a manufacturing requirement <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="buyer-section comparison-section" aria-labelledby="comparison-title">
        <div className="section-shell">
          <div className="buyer-split-heading"><div><p className="eyebrow">Product specifications</p><h2 id="comparison-title">Compare the SOLO models.</h2></div><p>Use the visible label ratings as a starting point. Confirm fit, connection layout, and application suitability before ordering.</p></div>
          <div className="buyer-table-scroll" role="region" aria-label="SOLO battery specification comparison" tabIndex={0}>
            <table className="buyer-comparison">
              <caption>Specifications shown on the supplied product labels</caption>
              <thead><tr><th scope="col">Specification</th>{batteries.map((product) => <th scope="col" key={product.slug}><Link href={"/products/" + product.slug}>{product.model} <span aria-hidden="true">↗</span></Link></th>)}</tr></thead>
              <tbody>{specificationRows.map((row) => <tr key={row.label}><th scope="row">{row.title}</th>{batteries.map((product) => <td key={product.slug}>{product.specs.find((spec) => spec.label === row.label)?.value || "Confirm with sales"}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="buyer-footnote">Plate markings are reproduced as labelled. Capacity test rate, dimensions, terminal orientation, and activation requirements should be confirmed for the exact model.</p>
        </div>
      </section>

      <section className="buyer-section plate-match-section" aria-labelledby="plate-match-title">
        <div className="section-shell buyer-image-split">
          <div className="buyer-plate-image"><Image src={productImages.patternedPlate} alt="Patterned Shalimar battery plate with upper-right lug" fill sizes="(max-width:760px) 100vw, 40vw" className="product-photograph" /></div>
          <div>
            <p className="eyebrow">Plate selection</p><h2 id="plate-match-title">Match the profile.<br />Confirm the details.</h2>
            <p className="buyer-copy">A similar-looking plate may have a different thickness, lug geometry, or specification. Start with a reference image and supply the measurements that affect assembly.</p>
            <dl className="buyer-definition-list"><div><dt>Body &amp; overall dimensions</dt><dd>Width, body height, overall height, and thickness.</dd></div><div><dt>Lug &amp; assembly fit</dt><dd>Position, dimensions, support feet, and the intended plate group.</dd></div><div><dt>Plate specification</dt><dd>Required polarity, alloy, and formation state.</dd></div></dl>
            <Link href="/battery-plates" className="text-link">Browse the plate profiles <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="buyer-section document-section" aria-labelledby="documents-title">
        <div className="section-shell">
          <div className="section-topline"><div><p className="eyebrow">Technical documents</p><h2 id="documents-title">Get the information you need.</h2></div></div>
          <div className="buyer-document-grid">
            <a href="/documents/crown-accumulator-business-profile.pdf" download><span className="document-type">PDF</span><h3>Company profile</h3><p>Manufacturing background, product scope, and business contact information.</p><span className="document-action">Download profile <span aria-hidden="true">↓</span></span></a>
            <a href={"mailto:" + company.contact.salesEmail + "?subject=Product%20datasheet%20request"}><span className="document-type">By model</span><h3>Product datasheets</h3><p>Request the current specification sheet for the model and application you are considering.</p><span className="document-action">Request a datasheet <span aria-hidden="true">↗</span></span></a>
            <Link href="/research"><span className="document-type">Technical library</span><h3>Battery &amp; plate fundamentals</h3><p>Read about lead-acid chemistry, plate construction, and battery terminology.</p><span className="document-action">Explore technical articles <span aria-hidden="true">↗</span></span></Link>
          </div>
        </div>
      </section>

      <section className="buyer-section ordering-section" aria-labelledby="ordering-title">
        <div className="section-shell">
          <div className="buyer-split-heading"><div><p className="eyebrow">Ordering information</p><h2 id="ordering-title">Agree the terms before you order.</h2></div><p>Each requirement starts with the product, specification, quantity, and delivery location. Ask for the current terms in your written quotation.</p></div>
          <div className="buyer-terms-grid">{orderTerms.map((term) => <div key={term.title}><h3>{term.title}</h3><p>{term.text}</p></div>)}</div>
          <Link href="#quotation" className="text-link">Send your order requirements <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="buyer-section oem-section" aria-labelledby="oem-title">
        <div className="section-shell oem-layout">
          <div><p className="eyebrow">OEM &amp; private label</p><h2 id="oem-title">Bring us a<br />clear product brief.</h2><p className="buyer-copy">Custom requirements are reviewed against the product specification and order scope. Share the details that will shape the manufacturing discussion.</p><Link className="button button-light" href="#quotation">Discuss an OEM requirement <span aria-hidden="true">↗</span></Link></div>
          <dl className="oem-brief-list"><div><dt>Product</dt><dd>Battery model, plate drawing, or sprocket sample and required tolerances.</dd></div><div><dt>Branding</dt><dd>Brand name, artwork, label information, and packaging brief.</dd></div><div><dt>Commercial scope</dt><dd>Initial quantity, expected repeat orders, destination, and target date.</dd></div><div><dt>Acceptance requirements</dt><dd>Inspection criteria, documentation, sample approval, and any applicable standards.</dd></div></dl>
        </div>
      </section>

      <section className="buyer-section process-section" aria-labelledby="process-title">
        <div className="section-shell">
          <div className="section-topline"><div><p className="eyebrow">From enquiry to order</p><h2 id="process-title">A clearer purchasing process.</h2></div></div>
          <ol className="buyer-process">{orderSteps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        </div>
      </section>

      <section className="buyer-section home-faq-section" aria-labelledby="faq-title">
        <div className="section-shell home-faq-layout">
          <div><p className="eyebrow">Buyer questions</p><h2 id="faq-title">Before you enquire.</h2><p className="buyer-copy">Practical answers to help you prepare the right requirement.</p></div>
          <div className="home-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>
      <HomeQuotation />
    </div>
  );
}
