import { Factory, FlaskConical, ClipboardCheck, Truck, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { getServices } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Vasudev Chemo Pharma offers manufacturing, custom formulation, quality assurance, and export logistics services for industrial & specialty chemicals.',
};

const serviceIcons: Record<string, typeof Factory> = {
  'Chemical Manufacturing': Factory,
  'Custom Formulation': FlaskConical,
  'Quality Assurance & Testing': ClipboardCheck,
  'Export & Logistics': Truck,
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">End-to-End Chemical Solutions</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            From raw material sourcing to final delivery — we offer comprehensive services across the chemical value chain.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      {services.length === 0 ? (
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Factory className="w-12 h-12 text-text-light mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-text font-heading mb-3">Services Coming Soon</h2>
            <p className="text-text-light mb-6">We&apos;re updating our services information. Please contact us for details.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      ) : (
        <>
      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.title] || Factory;
              return (
                <div key={service.title} className="bg-surface rounded-xl border border-border p-6 text-center hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-text mb-2">{service.title}</h3>
                  <p className="text-sm text-text-light">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const Icon = serviceIcons[service.title] || Factory;
        const isReversed = index % 2 !== 0;

        return (
          <section key={service.title} className={`py-20 md:py-28 ${index % 2 === 0 ? '' : 'bg-surface-alt'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-text mb-4">{service.title}</h2>
                  <p className="text-text-light leading-relaxed text-lg mb-8">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={`${feature}-${index}`} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-10 border border-border ${isReversed ? 'lg:order-1' : ''}`}>
                  <h3 className="font-bold text-text text-xl font-heading mb-5">Key Highlights</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <div key={`highlight-${feature}-${i}`} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                        <p className="text-text-light text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Flow */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How We Work"
            title="Our Process"
            description="From first inquiry to final delivery, we ensure a smooth and transparent experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Inquiry', desc: 'Submit your requirements via form, email, or WhatsApp.' },
              { step: '02', title: 'Quotation', desc: 'Receive detailed pricing within 24 hours.' },
              { step: '03', title: 'Production', desc: 'Manufacturing under ISO quality controls.' },
              { step: '04', title: 'Quality Check', desc: 'In-house lab testing with COA issued.' },
              { step: '05', title: 'Delivery', desc: 'Packaging, documentation, and dispatch.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-surface rounded-xl border border-border p-6 text-center relative">
                <div className="text-3xl font-extrabold text-primary/10 font-heading mb-2">{step}</div>
                <h3 className="font-bold text-text mb-2">{title}</h3>
                <p className="text-sm text-text-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom Solution?"
        description="Tell us your requirements — our team will design a solution tailored to your exact specifications."
        buttonText="Discuss Your Needs"
        buttonHref="/contact"
        variant="secondary"
      />
        </>
      )}
    </>
  );
}
