import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'primary' | 'secondary';
}

export default function CTABanner({ title, description, buttonText, buttonHref, variant = 'primary' }: CTABannerProps) {
  const bg = variant === 'primary'
    ? 'bg-gradient-to-r from-primary to-secondary'
    : 'bg-gradient-to-r from-secondary to-primary';

  return (
    <section className={`${bg} text-white py-16 md:py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{title}</h2>
        <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">{description}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
