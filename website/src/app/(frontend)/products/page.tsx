import { getProducts } from '@/lib/data';
import ProductsClient from './ProductsClient';

export const metadata = {
  title: 'Products — Vasudev Chemo Pharma',
  description: 'Browse our complete range of industrial and specialty chemical products.',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductsClient products={products} />;
}
