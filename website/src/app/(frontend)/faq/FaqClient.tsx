'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface CompanyInfo {
  phone: string;
}

export default function FaqClient({ faqs, company }: { faqs: FAQ[]; company: CompanyInfo }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Common questions about our products, ordering process, shipping, and quality standards.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-alt/50 transition-colors"
                >
                  <span className="font-semibold text-text pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-text-light transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} className="px-6 pb-5">
                    <p className="text-text-light leading-relaxed">{faq.answer}</p>
                  </div>
                )}
                {openIndex !== index && (
                  <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} className="px-6 pb-5" aria-hidden="true" style={{ display: 'none' }} />
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border p-8 text-center">
            <h2 className="text-2xl font-bold text-text font-heading mb-3">Still Have Questions?</h2>
            <p className="text-text-light mb-6">Our team is ready to help. Contact us via email, phone, or WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all">
                Contact Us
              </a>
              {(() => {
                const sanitized = company.phone?.replace(/[^0-9]/g, '') || '';
                const isValid = sanitized.length >= 10 && sanitized.length <= 15;
                return isValid ? (
                  <a
                    href={`https://wa.me/${sanitized}?text=${encodeURIComponent('Hi, I have a question about your products.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20bd5a] transition-all"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                ) : null;
              })()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
