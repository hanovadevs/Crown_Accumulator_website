"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    subject: "SOLO Product Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface">
      {/* ─── HERO HEADER ─── */}
      <section className="bg-crown-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-solo-red-light">
            Contact &amp; Inquiries
          </span>
          <h1 className="font-display mt-2 text-4xl font-bold text-white sm:text-5xl">
            Get In Touch With Our Team
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            Whether you have questions about SOLO batteries, plate wholesale, OEM private label programs, or distributor applications — we&apos;re here to assist.
          </p>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right">
                <div className="rounded-3xl border border-border bg-white p-8 shadow-xs sm:p-10">
                  <h2 className="font-display text-2xl font-bold text-text-primary">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 text-xs text-text-muted">
                    Fill out the form below and our engineering team will respond within 24 hours.
                  </p>

                  {submitted ? (
                    <div className="mt-8 rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200">
                      <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                      <h3 className="font-display mt-4 text-xl font-bold text-emerald-900">
                        Thank You!
                      </h3>
                      <p className="mt-2 text-xs text-emerald-700">
                        Your inquiry has been received. Our sales team will get back to you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 font-display text-xs font-bold uppercase tracking-wider text-emerald-800 underline"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-xl border border-border bg-slate-50 px-4 py-3 text-xs text-text-primary outline-none transition-colors focus:border-crown-navy focus:bg-white focus:ring-1 focus:ring-crown-navy"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                            Company Name
                          </label>
                          <input
                            id="companyName"
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full rounded-xl border border-border bg-slate-50 px-4 py-3 text-xs text-text-primary outline-none transition-colors focus:border-crown-navy focus:bg-white focus:ring-1 focus:ring-crown-navy"
                            placeholder="Your company or workshop"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                          Business Email *
                        </label>
                        <input
                          id="email"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border bg-slate-50 px-4 py-3 text-xs text-text-primary outline-none transition-colors focus:border-crown-navy focus:bg-white focus:ring-1 focus:ring-crown-navy"
                          placeholder="name@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                          Inquiry Type
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-xl border border-border bg-slate-50 px-4 py-3 text-xs text-text-primary outline-none transition-colors focus:border-crown-navy focus:bg-white focus:ring-1 focus:ring-crown-navy"
                        >
                          <option>SOLO Product Inquiry</option>
                          <option>Battery Plate Order</option>
                          <option>OEM / Private Label Program</option>
                          <option>Dealer Application</option>
                          <option>Technical Support</option>
                          <option>Other Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                          Message Details *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-xl border border-border bg-slate-50 px-4 py-3 text-xs text-text-primary outline-none transition-colors focus:border-crown-navy focus:bg-white focus:ring-1 focus:ring-crown-navy resize-none"
                          placeholder="Provide details about your requirements or product interest..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="font-display inline-flex items-center gap-2 rounded-xl bg-crown-maroon px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-crown-maroon-dark hover:shadow-lg"
                      >
                        Send Message
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="left">
                <div className="rounded-3xl border border-border bg-white p-8 shadow-xs">
                  <h3 className="font-display text-lg font-bold text-text-primary mb-6">
                    Head Office &amp; Factory
                  </h3>

                  <ul className="space-y-6 text-xs text-text-secondary">
                    <li className="flex items-start gap-4">
                      <div className="rounded-xl bg-crown-navy/10 p-2.5 text-crown-navy shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-text-primary font-display text-sm">Industrial Estate Facility</p>
                        <p className="mt-1 leading-relaxed text-text-muted">
                          Plot 42-B, Industrial Estate
                          <br />
                          Manufacturing Zone, Lahore, Pakistan
                        </p>
                      </div>
                    </li>

                    <li className="flex items-center gap-4">
                      <div className="rounded-xl bg-crown-navy/10 p-2.5 text-crown-navy shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-text-primary font-display text-sm">Phone Line</p>
                        <p className="mt-0.5 text-text-muted">+92 (42) 3755-8800</p>
                      </div>
                    </li>

                    <li className="flex items-center gap-4">
                      <div className="rounded-xl bg-crown-navy/10 p-2.5 text-crown-navy shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-text-primary font-display text-sm">Email Address</p>
                        <p className="mt-0.5 text-text-muted">{company.contact.email}</p>
                      </div>
                    </li>

                    <li className="flex items-center gap-4">
                      <div className="rounded-xl bg-crown-navy/10 p-2.5 text-crown-navy shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-text-primary font-display text-sm">Operating Hours</p>
                        <p className="mt-0.5 text-text-muted">Monday – Saturday: 8:00 AM – 6:00 PM PKT</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 rounded-3xl bg-crown-navy p-8 text-white shadow-md">
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    Department Direct Lines
                  </h3>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p><strong className="text-white">General &amp; Sales:</strong> {company.contact.email}</p>
                    <p><strong className="text-white">Plate Orders:</strong> {company.contact.email}</p>
                    <p><strong className="text-white">OEM Programs:</strong> {company.contact.email}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
