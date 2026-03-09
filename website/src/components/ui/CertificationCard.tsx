import Link from 'next/link';
import { Award } from 'lucide-react';
import DriveImage from '@/components/ui/DriveImage';
import type { Certification } from '@/data/certifications';

interface CertificationCardProps {
  certification: Certification;
  variant?: 'compact' | 'full';
}

export default function CertificationCard({ certification, variant = 'compact' }: CertificationCardProps) {
  const hasImage = !!certification.imageUrl;

  if (variant === 'compact') {
    return (
      <Link
        href={`/certifications/${certification.slug}`}
        className="group bg-surface rounded-xl border border-border p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center mb-5 overflow-hidden">
          {hasImage ? (
            <DriveImage
              src={certification.imageUrl!}
              alt={certification.name}
              size="thumb"
              width={56}
              height={56}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <Award className="w-7 h-7 text-primary" />
          )}
        </div>
        <h3 className="font-bold text-text text-lg mb-1 font-heading">{certification.name}</h3>
        <p className="text-sm text-text-light mb-3">{certification.description}</p>
        <p className="text-xs text-text-muted">Certified by {certification.body}</p>
      </Link>
    );
  }

  return (
    <Link
      href={`/certifications/${certification.slug}`}
      className="group bg-surface rounded-xl border border-border p-8 md:p-10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center shrink-0 overflow-hidden">
          {hasImage ? (
            <DriveImage
              src={certification.imageUrl!}
              alt={certification.name}
              size="thumb"
              width={64}
              height={64}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <Award className="w-8 h-8 text-primary" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-text text-xl mb-1 font-heading">{certification.name}</h3>
          <p className="text-sm text-primary font-medium mb-3">{certification.description}</p>
          <p className="text-xs text-text-muted mb-4">Certified by {certification.body} · Valid until {certification.validUntil}</p>
          <p className="text-sm text-text-light leading-relaxed mb-4">{certification.scope}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {certification.keyAreas.slice(0, 4).map((area) => (
              <span key={area} className="text-xs px-3 py-1.5 rounded-full bg-surface-alt border border-border text-text-light">
                {area}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold group-hover:gap-2 transition-all">
            View Certificate Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
