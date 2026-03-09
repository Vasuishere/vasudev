'use client';

import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import type { Product } from '@/data/products';

const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'industrial', label: 'Industrial Chemicals' },
  { key: 'specialty', label: 'Specialty Chemicals' },
] as const;

export default function ProductsClient({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const countByCategory = (key: string) =>
    key === 'all' ? products.length : products.filter((p) => p.category === key).length;

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">Product Catalogue</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Industrial &amp; Specialty Chemicals</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Browse our complete range of {products.length} chemical products, manufactured under ISO 9001:2015 standards.
          </p>
        </div>
      </section>

      {/* Filter + Products */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                aria-pressed={activeCategory === key}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === key
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface border border-border text-text-light hover:border-primary/30 hover:text-primary'
                }`}
              >
                {label} ({countByCategory(key)})
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-text-light">
              <p className="text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading mb-4">Need a Custom Grade or Specification?</h2>
          <p className="text-white/80 mb-8">We provide custom formulations and purity grades tailored to your process requirements.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-sm">
            Request Custom Quote
          </a>
        </div>
      </section>
    </>
  );
}
