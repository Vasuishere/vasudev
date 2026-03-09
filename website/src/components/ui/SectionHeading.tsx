import { ReactNode } from 'react';

interface SectionHeadingProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({ id, label, title, description, centered = true, children }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-[2px] uppercase text-secondary mb-3">
          {label}
        </span>
      )}
      <h2 id={id} className="text-3xl md:text-4xl font-bold text-text mb-4 font-heading">{title}</h2>
      {description && (
        <p className={`max-w-2xl text-text-light text-lg leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
