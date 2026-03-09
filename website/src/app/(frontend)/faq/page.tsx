import { getFaqs, getCompanyInfo } from '@/lib/data';
import FaqClient from './FaqClient';

export const metadata = {
  title: 'FAQ — Vasudev Chemo Pharma',
  description: 'Common questions about our products, ordering process, shipping, and quality standards.',
};

export default async function FAQPage() {
  const [faqs, company] = await Promise.all([getFaqs(), getCompanyInfo()]);
  return <FaqClient faqs={faqs} company={company} />;
}
