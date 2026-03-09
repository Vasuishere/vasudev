import { getProducts, getCompanyInfo } from '@/lib/data';
import ContactClient from './ContactClient';

export const revalidate = 60;

export const metadata = {
  title: 'Contact Us — Vasudev Chemo Pharma',
  description: 'Request a quote, ask for product specifications, or schedule a consultation.',
};

export default async function ContactPage() {
  const [products, company] = await Promise.all([getProducts(), getCompanyInfo()]);
  return <ContactClient company={company} products={products} />;
}
