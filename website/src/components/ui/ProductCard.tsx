import Link from 'next/link';
import { FlaskConical, ArrowRight } from 'lucide-react';
import DriveImage from '@/components/ui/DriveImage';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const hasImage = !!product.imageUrl;

  return (
    <div className="group bg-surface rounded-xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 flex flex-col">
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center overflow-hidden">
        {hasImage ? (
          <DriveImage
            src={product.imageUrl!}
            alt={product.name}
            size="small"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <FlaskConical className="w-12 h-12 text-primary/20" />
        )}
        <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-primary backdrop-blur-sm">
          {product.category === 'industrial' ? 'Industrial' : product.category === 'pharmaceutical' ? 'Pharma API' : 'Specialty'}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-text mb-1 font-heading">{product.name}</h3>
        <p className="text-xs text-text-muted font-medium mb-3">
          {[product.cas && `CAS: ${product.cas}`, product.formula].filter(Boolean).join(' · ') || product.subcategory || ''}
        </p>
        <p className="text-sm text-text-light mb-4 leading-relaxed flex-grow line-clamp-2">{product.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.industries.map((app) => (
            <span key={app} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface-alt text-text-muted">
              {app}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/products/${product.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-white py-3 px-5 rounded-lg text-sm font-semibold hover:bg-secondary-light transition-all group-hover:shadow-md"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
