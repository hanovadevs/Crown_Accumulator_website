"use client";

import type { FormEvent } from "react";
import { company } from "@/data/company";

export function HomeQuotation() {
  function prepareQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const channel = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const brief = [
      "Quotation enquiry — Crown Accumulator",
      "Name: " + form.get("name"),
      "Email: " + form.get("email"),
      "Company: " + (form.get("company") || "—"),
      "Product / model: " + form.get("product"),
      "Quantity: " + form.get("quantity"),
      "Delivery location: " + form.get("location"),
      "Requirements: " + (form.get("requirements") || "Please advise specifications, MOQ, lead time, and quotation."),
    ].join("\n");
    const destination = channel?.value === "email"
      ? "mailto:" + company.contact.salesEmail + "?subject=" + encodeURIComponent("Product quotation enquiry") + "&body=" + encodeURIComponent(brief)
      : "https://wa.me/" + company.contact.whatsapp + "?text=" + encodeURIComponent(brief);
    window.location.assign(destination);
  }

  return (
    <section className="buyer-section quote-section" id="quotation" aria-labelledby="quotation-title">
      <div className="section-shell quote-layout">
        <div>
          <p className="eyebrow">Request a quotation</p>
          <h2 id="quotation-title">Tell us what<br />you need.</h2>
          <p className="buyer-copy">Send a clear brief to our sales team for product availability, specifications, and commercial terms.</p>
          <a className="quote-email" href={"mailto:" + company.contact.salesEmail}>{company.contact.salesEmail}</a>
          <p className="quote-delivery-note">Choose WhatsApp or email to open your enquiry. Review and send it in the selected app.</p>
        </div>
        <form className="quote-form" onSubmit={prepareQuote}>
          <div className="quote-field-row">
            <div><label htmlFor="quote-name">Your name *</label><input id="quote-name" name="name" autoComplete="name" required maxLength={100} /></div>
            <div><label htmlFor="quote-email">Email *</label><input id="quote-email" name="email" type="email" autoComplete="email" required maxLength={200} /></div>
          </div>
          <div className="quote-field-row">
            <div><label htmlFor="quote-company">Company</label><input id="quote-company" name="company" autoComplete="organization" maxLength={160} /></div>
            <div><label htmlFor="quote-product">Product or model *</label><select id="quote-product" name="product" required defaultValue=""><option value="" disabled>Select a product</option><option>SOLO Super 4</option><option>SOLO MB 200</option><option>SOLO ZB 230</option><option>AS Battery Plate</option><option>Shalimar Battery Plate</option><option>Other battery plate profile</option><option>Motorcycle sprocket</option><option>OEM / private label</option></select></div>
          </div>
          <div className="quote-field-row">
            <div><label htmlFor="quote-quantity">Quantity required *</label><input id="quote-quantity" name="quantity" type="number" min="1" step="1" required /></div>
            <div><label htmlFor="quote-location">Delivery city / country *</label><input id="quote-location" name="location" required autoComplete="address-level2" maxLength={160} /></div>
          </div>
          <div><label htmlFor="quote-requirements">Specification or delivery requirements</label><textarea id="quote-requirements" name="requirements" rows={3} maxLength={2000} placeholder="Plate dimensions, terminal layout, branding, or required delivery date." /></div>
          <div className="quote-actions">
            <button type="submit" name="channel" value="whatsapp" className="button button-red">Continue in WhatsApp <span aria-hidden="true">↗</span></button>
            <button type="submit" name="channel" value="email" className="text-link">Open email enquiry</button>
          </div>
        </form>
      </div>
    </section>
  );
}
