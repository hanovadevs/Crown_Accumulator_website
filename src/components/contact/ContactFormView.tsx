"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/data/company";

export function ContactFormView({ productName, initialSubject }: { productName?: string; initialSubject?: string }) {
  const [prepared, setPrepared] = useState(false);

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = [String(data.get("subject")), productName].filter(Boolean).join(" — ");
    const body = [
      "Name: " + data.get("name"),
      "Company: " + (data.get("companyName") || "—"),
      "Email: " + data.get("email"),
      ...(productName ? [`Product: ${productName}`] : []),
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = "mailto:" + company.contact.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    setPrepared(true);
  }

  return (
    <div className="contact-page">
      <section className="page-intro editorial-intro"><div className="section-shell"><p className="eyebrow">Contact Crown</p><h1>Discuss your next order.</h1><p>Product inquiries, battery plate supply, or OEM production. Tell us what you need.</p></div></section>
      <section className="section-shell contact-layout">
        <div className="contact-form-panel">
          <h2>{productName ? `Enquire about ${productName}` : "Tell us what you need."}</h2>
          <form onSubmit={prepareInquiry}>
            <div className="contact-field-row"><div><label htmlFor="name">Full name *</label><input id="name" name="name" autoComplete="name" required /></div><div><label htmlFor="companyName">Company</label><input id="companyName" name="companyName" autoComplete="organization" /></div></div>
            <div><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
            <div><label htmlFor="subject">What can we help with?</label><select id="subject" name="subject" defaultValue={initialSubject}><option>SOLO product inquiry</option><option>Battery plate order</option><option>Motorcycle sprocket inquiry</option><option>OEM / private label program</option><option>Dealer application</option><option>Technical support</option><option>Other inquiry</option></select></div>
            <div><label htmlFor="message">Your message *</label><textarea id="message" name="message" rows={6} required placeholder="Tell us about your product or supply requirements." /></div>
            <div className="contact-submit"><button type="submit" className="button button-red">Prepare email inquiry <span aria-hidden="true">↗</span></button><p>Opens your email app. Review and send your message there.</p></div>
            {prepared && <p role="status" className="contact-status">Your email app was requested. If it did not open, email us directly at <a href={"mailto:" + company.contact.email}>{company.contact.email}</a>. Your inquiry is sent only when you send the email.</p>}
          </form>
        </div>
        <aside className="contact-details"><p className="eyebrow">Direct contact</p><h2>Speak with our team.</h2><dl><div><dt>Email</dt><dd><a href={"mailto:" + company.contact.email}>{company.contact.email}</a></dd></div><div><dt>Phone</dt><dd><a href="tel:+924237558800">+92 (42) 3755-8800</a></dd></div><div><dt>Head office & factory</dt><dd>Plot 42-B, Industrial Estate<br />Manufacturing Zone, Lahore, Pakistan</dd></div><div><dt>Operating hours</dt><dd>Monday – Saturday<br />8:00 AM – 6:00 PM PKT</dd></div></dl></aside>
      </section>
    </div>
  );
}
