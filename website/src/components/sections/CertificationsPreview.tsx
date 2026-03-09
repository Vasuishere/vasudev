import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CertificationCard from '@/components/ui/CertificationCard';
import { getCertifications } from '@/lib/data';

export default async function CertificationsPreview() {
  const certifications = await getCertifications();
  return (
    <section className="py-20 md:py-28" aria-labelledby="cert-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="cert-preview-heading"
          label="Our Certifications"
          title="Internationally Recognized Standards"
          description="Every batch meets global quality benchmarks — certified by world-class accreditation bodies."
        />
        <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.slug} role="listitem">
              <CertificationCard certification={cert} variant="compact" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Certifications <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
