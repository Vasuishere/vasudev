'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import type { Product } from '@/data/products';

interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export default function ContactClient({ company, products }: { company: CompanyInfo; products: Product[] }) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get('website')) {
      setFormState('error');
      return;
    }

    if (!web3FormsKey) {
      setFormState('error');
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const body = await res.json();
      if (res.ok && body.success === true) {
        setFormState('success');
        form.reset();
      } else {
        console.error('Web3Forms error:', body.message || body);
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Get in Touch</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Request a quote, ask for product specifications, or schedule a consultation. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading text-text mb-6">Send Us an Inquiry</h2>

              {formState === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Inquiry Sent Successfully!</h3>
                  <p className="text-green-700 mb-6">Our team will review your request and respond within 24 hours.</p>
                  <button onClick={() => setFormState('idle')} className="text-primary font-medium hover:underline">
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot */}
                  <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                  {/* Web3Forms access key */}
                  {web3FormsKey && <input type="hidden" name="access_key" value={web3FormsKey} />}
                  <input type="hidden" name="subject" value="New Inquiry — Vasudev Chemo Pharma Website" />

                  {!web3FormsKey && (
                    <div className="flex items-center gap-2 text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Contact form is not configured. Please contact us via phone or WhatsApp.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company_name" className="block text-sm font-medium text-text mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-text mb-2">Product of Interest</label>
                      <select
                        id="product"
                        name="product"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      >
                        <option value="">Select a product</option>
                        {products.map((p) => (
                          <option key={p.slug} value={p.name}>{p.name} ({p.formula})</option>
                        ))}
                        <option value="Custom">Custom / Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-text mb-2">Required Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="e.g., 5 MT, 200 kg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message / Requirements *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-y"
                      placeholder="Describe your requirements — product grade, purity, packaging, delivery location, etc."
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again or contact us via WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting' || !web3FormsKey}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-light transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    {formState === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="font-bold text-text font-heading text-lg mb-5">Contact Details</h3>
                <div className="space-y-5">
                  <a href={`tel:${company.phone}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-light">Phone</p>
                      <p className="text-text font-medium group-hover:text-primary transition-colors">{company.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${company.email}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-light">Email</p>
                      <p className="text-text font-medium group-hover:text-primary transition-colors">{company.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-light">Address</p>
                      <p className="text-text font-medium">{company.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-light">Business Hours</p>
                      <p className="text-text font-medium">{company.hours || 'Hours unavailable'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#25D366]/5 border border-[#25D366]/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  <h3 className="font-bold text-text">Quick WhatsApp Chat</h3>
                </div>
                <p className="text-sm text-text-light mb-4">Get instant responses. Send us a message on WhatsApp for quick inquiries.</p>
                <a
                  href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi, I'd like to inquire about your chemical products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20bd5a] transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-text mb-1">24-Hour Response</h3>
                <p className="text-sm text-text-light">We guarantee a response to all inquiries within 24 business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
