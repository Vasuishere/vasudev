import type { Metadata } from 'next';
import CertificationCard from '@/components/ui/CertificationCard';
import CTABanner from '@/components/sections/CTABanner';
import { getCertifications } from '@/lib/data';
import { Shield, CheckCircle, Globe, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certifications & Compliance | Vasudev Chemo Pharma',
  description:
    'ISO 9001:2015, ISO 14001:2015, REACH Ready, and GMP compliant — explore our internationally recognized certifications and quality standards.',
};

export default async function CertificationsPage() {
  const certifications = await getCertifications();
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center text-white">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">Quality & Compliance</p>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading mb-6">
            Our Certifications & Standards
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We maintain the highest quality, environmental, and regulatory standards — verified by world-class accreditation bodies.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: 'ISO Certified', value: '2 Standards' },
              { icon: Globe, label: 'REACH Compliant', value: 'EU Export Ready' },
              { icon: CheckCircle, label: 'GMP Practices', value: 'Pharma Grade' },
              { icon: FileCheck, label: 'Documentation', value: 'COA · MSDS · TDS' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-6 h-6 text-primary" />
                <div className="text-sm font-bold text-text">{value}</div>
                <div className="text-xs text-text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-20 md:py-28" aria-labelledby="certifications-list-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="certifications-list-heading" className="sr-only">All Certifications</h2>
          <div className="space-y-6" role="list">
            {certifications.map((cert) => (
              <div key={cert.slug} role="listitem">
                <CertificationCard certification={cert} variant="full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-text mb-4">
            Our Commitment to Quality
          </h2>
          <p className="text-text-light leading-relaxed max-w-2xl mx-auto">
            Quality is not a department — it is an attitude that permeates every aspect of our operations.
            From raw material procurement to final dispatch, every step follows documented procedures
            that meet international standards. Our in-house laboratory conducts over 15 quality parameters
            per batch, ensuring that every shipment matches your exact specifications.
          </p>
        </div>
      </section>

      <CTABanner
        title="Need Certified Chemical Supply?"
        description="All our products come with COA, MSDS, and full traceability documentation. Request your quote today."
        buttonText="Request a Quote"
        buttonHref="/contact"
        variant="secondary"
      />
    </>
  );
}
