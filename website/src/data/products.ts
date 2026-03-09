export interface Product {
  slug: string;
  name: string;
  formula: string;
  cas: string;
  category: 'industrial' | 'specialty';
  description: string;
  applications: string[];
  industries: string[];
  grades: string[];
  packaging: string[];
  specs: Record<string, string>;
  imageUrl?: string;
  images?: { url: string; caption: string }[];
}

export const products: Product[] = [
  {
    slug: 'sodium-sulphate',
    name: 'Sodium Sulphate',
    formula: 'Na₂SO₄',
    cas: '7757-82-6',
    category: 'industrial',
    description: 'Anhydrous grade widely used in detergent manufacturing, glass production, and textile dyeing processes. Available in technical and pure grades with consistent quality.',
    applications: ['Detergent manufacturing', 'Glass production', 'Textile dyeing', 'Paper pulping', 'Chemical synthesis'],
    industries: ['Detergents', 'Glass', 'Textiles'],
    grades: ['Technical', 'Pure', 'Anhydrous'],
    packaging: ['50 kg HDPE bags', '1000 kg jumbo bags', 'Bulk tanker'],
    specs: { 'Purity': '≥ 99.0%', 'Moisture': '≤ 0.5%', 'pH (5% solution)': '6.0 – 8.0', 'Appearance': 'White crystalline powder' }
  },
  {
    slug: 'zinc-oxide',
    name: 'Zinc Oxide',
    formula: 'ZnO',
    cas: '1314-13-2',
    category: 'specialty',
    description: 'High-purity zinc oxide for rubber, ceramics, pharmaceuticals, and cosmetic formulations. Available in multiple grades to suit diverse industrial requirements.',
    applications: ['Rubber vulcanization', 'Ceramic glazes', 'Pharmaceutical formulations', 'Cosmetics & sunscreen', 'Paint manufacturing'],
    industries: ['Rubber', 'Ceramics', 'Pharma'],
    grades: ['Rubber Grade', 'Pharmaceutical Grade', 'Cosmetic Grade'],
    packaging: ['25 kg HDPE bags', '50 kg drums', '500 kg jumbo bags'],
    specs: { 'ZnO Content': '≥ 99.5%', 'Loss on Ignition': '≤ 0.3%', 'Particle Size': '0.1 – 0.5 µm', 'Appearance': 'White powder' }
  },
  {
    slug: 'titanium-dioxide',
    name: 'Titanium Dioxide',
    formula: 'TiO₂',
    cas: '13463-67-7',
    category: 'specialty',
    description: 'Premium rutile and anatase grades for paints, coatings, plastics, and paper industries. Excellent opacity, brightness, and UV resistance for superior performance.',
    applications: ['Paint & coatings', 'Plastics coloring', 'Paper brightening', 'Ink manufacturing', 'Cosmetics'],
    industries: ['Paints', 'Coatings', 'Plastics'],
    grades: ['Rutile', 'Anatase', 'Coating Grade'],
    packaging: ['25 kg paper bags', '500 kg palletized bags', '1000 kg IBC'],
    specs: { 'TiO₂ Content': '≥ 93.0%', 'Brightness': '≥ 97%', 'Oil Absorption': '18 – 25 g/100g', 'Appearance': 'White powder' }
  },
  {
    slug: 'calcium-carbonate',
    name: 'Calcium Carbonate',
    formula: 'CaCO₃',
    cas: '471-34-1',
    category: 'industrial',
    description: 'Ground and precipitated grades for paper, paint, plastic, and construction applications. Consistent particle size distribution for optimal performance.',
    applications: ['Paper filler & coating', 'PVC & plastic filler', 'Paint extender', 'Construction materials', 'Rubber compounding'],
    industries: ['Paper', 'Paint', 'Construction'],
    grades: ['GCC (Ground)', 'PCC (Precipitated)', 'Coated'],
    packaging: ['50 kg HDPE bags', '1000 kg jumbo bags', 'Bulk'],
    specs: { 'CaCO₃ Content': '≥ 98.0%', 'Whiteness': '≥ 95%', 'Moisture': '≤ 0.3%', 'Particle Size (D97)': '10 – 45 µm' }
  },
  {
    slug: 'caustic-soda-flakes',
    name: 'Caustic Soda Flakes',
    formula: 'NaOH',
    cas: '1310-73-2',
    category: 'industrial',
    description: 'High purity sodium hydroxide flakes for chemical processing, water treatment, and soap manufacturing. Consistent quality with low impurity levels.',
    applications: ['Water treatment', 'Soap & detergent making', 'Chemical processing', 'Alumina refining', 'Pulp & paper'],
    industries: ['Water Treatment', 'Soap', 'Chemical Processing'],
    grades: ['Technical (96%)', 'Pure (98%)', 'Membrane Grade (99%)'],
    packaging: ['25 kg HDPE bags', '50 kg drums', '1000 kg IBC'],
    specs: { 'NaOH Content': '≥ 96.0%', 'Na₂CO₃': '≤ 1.5%', 'NaCl': '≤ 0.1%', 'Appearance': 'White flakes' }
  },
  {
    slug: 'soda-ash',
    name: 'Soda Ash',
    formula: 'Na₂CO₃',
    cas: '497-19-8',
    category: 'industrial',
    description: 'Dense and light soda ash for glass manufacturing, detergents, and water softening. A key industrial chemical used across multiple sectors.',
    applications: ['Glass manufacturing', 'Detergent production', 'Water softening', 'Chemical synthesis', 'Metallurgy'],
    industries: ['Glass', 'Detergents', 'Water Softening'],
    grades: ['Dense', 'Light'],
    packaging: ['50 kg PP bags', '1000 kg jumbo bags', 'Bulk tanker'],
    specs: { 'Na₂CO₃ Content': '≥ 99.2%', 'NaCl': '≤ 0.5%', 'Moisture': '≤ 0.5%', 'Bulk Density': '0.9 – 1.1 g/cm³' }
  },
  {
    slug: 'citric-acid',
    name: 'Citric Acid',
    formula: 'C₆H₈O₇',
    cas: '77-92-9',
    category: 'specialty',
    description: 'Food-grade and technical-grade citric acid for beverages, food preservation, and industrial cleaning. Natural organic acid with excellent chelating properties.',
    applications: ['Beverage acidulation', 'Food preservation', 'Industrial cleaning', 'Pharmaceutical formulations', 'Cosmetics'],
    industries: ['Food & Beverage', 'Cleaning', 'Pharma'],
    grades: ['Food Grade (Monohydrate)', 'Food Grade (Anhydrous)', 'Technical Grade'],
    packaging: ['25 kg paper bags', '1000 kg IBC', 'Custom packing'],
    specs: { 'Purity': '≥ 99.5%', 'Moisture': '≤ 0.5%', 'Sulphate Ash': '≤ 0.05%', 'Appearance': 'White crystalline' }
  },
  {
    slug: 'stearic-acid',
    name: 'Stearic Acid',
    formula: 'C₁₈H₃₆O₂',
    cas: '57-11-4',
    category: 'specialty',
    description: 'Triple-pressed and rubber-grade stearic acid for cosmetics, rubber, and candle manufacturing. Derived from sustainable vegetable sources.',
    applications: ['Rubber processing', 'Cosmetics & personal care', 'Candle manufacturing', 'PVC stabilizers', 'Textile processing'],
    industries: ['Cosmetics', 'Rubber', 'Candles'],
    grades: ['Triple Pressed (TP)', 'Rubber Grade', 'Cosmetic Grade'],
    packaging: ['25 kg bags', '50 kg drums', 'Flexi-tank bulk'],
    specs: { 'Acid Value': '196 – 211', 'Iodine Value': '≤ 2.0', 'Saponification Value': '196 – 211', 'Appearance': 'White flakes/beads' }
  },
  {
    slug: 'magnesium-oxide',
    name: 'Magnesium Oxide',
    formula: 'MgO',
    cas: '1309-48-4',
    category: 'industrial',
    description: 'Dead-burned and light grade MgO for refractory, agriculture, and environmental applications. High-temperature stability and chemical resistance.',
    applications: ['Refractory linings', 'Agricultural soil amendment', 'Environmental remediation', 'Rubber compounding', 'Animal feed'],
    industries: ['Refractory', 'Agriculture', 'Environmental'],
    grades: ['Dead-Burned', 'Light (Calcined)', 'Heavy'],
    packaging: ['25 kg bags', '1000 kg jumbo bags', 'Bulk'],
    specs: { 'MgO Content': '≥ 90.0%', 'CaO': '≤ 2.5%', 'SiO₂': '≤ 3.0%', 'Appearance': 'White powder' }
  },
  {
    slug: 'sodium-bicarbonate',
    name: 'Sodium Bicarbonate',
    formula: 'NaHCO₃',
    cas: '144-55-8',
    category: 'industrial',
    description: 'Technical and food-grade sodium bicarbonate for food processing, pharmaceuticals, and fire extinguishers. Safe, versatile, and cost-effective.',
    applications: ['Food processing', 'Pharmaceutical manufacturing', 'Fire extinguishers', 'Animal feed', 'Flue gas treatment'],
    industries: ['Food Processing', 'Pharma', 'Fire Safety'],
    grades: ['Food Grade', 'Pharma Grade', 'Technical Grade'],
    packaging: ['25 kg bags', '50 kg bags', '1000 kg IBC'],
    specs: { 'NaHCO₃ Content': '≥ 99.0%', 'Moisture': '≤ 0.2%', 'pH (1% solution)': '8.0 – 8.6', 'Appearance': 'White crystalline powder' }
  },
  {
    slug: 'labsa',
    name: 'LABSA',
    formula: 'C₁₈H₃₀O₃S',
    cas: '27176-87-0',
    category: 'industrial',
    description: 'Linear Alkyl Benzene Sulphonic Acid — key raw material for liquid and powder detergent formulations. Excellent surfactant with high active matter.',
    applications: ['Liquid detergents', 'Powder detergents', 'Industrial cleaners', 'Emulsifiers', 'Household cleaners'],
    industries: ['Detergents', 'Cleaning Agents', 'Surfactants'],
    grades: ['96% Active'],
    packaging: ['220 kg HDPE drums', 'ISO tank', 'Flexi-tank'],
    specs: { 'Active Matter': '≥ 96.0%', 'Free Oil': '≤ 2.0%', 'Colour (Klett)': '≤ 30', 'Appearance': 'Brown viscous liquid' }
  },
  {
    slug: 'sodium-tripolyphosphate',
    name: 'Sodium Tripolyphosphate',
    formula: 'Na₅P₃O₁₀',
    cas: '7758-29-4',
    category: 'specialty',
    description: 'Technical-grade STPP for detergent, ceramic, and water treatment applications. Excellent chelating and dispersing agent.',
    applications: ['Detergent builder', 'Ceramic processing', 'Water treatment', 'Food processing', 'Metal treatment'],
    industries: ['Detergents', 'Ceramics', 'Water Treatment'],
    grades: ['Technical Grade', 'Food Grade'],
    packaging: ['25 kg bags', '50 kg bags', '1000 kg IBC'],
    specs: { 'P₂O₅ Content': '≥ 56.0%', 'pH (1% solution)': '9.4 – 10.0', 'Moisture': '≤ 0.5%', 'Appearance': 'White powder/granular' }
  },
  {
    slug: 'barium-sulphate',
    name: 'Barium Sulphate',
    formula: 'BaSO₄',
    cas: '7727-43-7',
    category: 'specialty',
    description: 'Precipitated and natural barite grades for paints, coatings, plastics, and oil drilling. High specific gravity with excellent chemical inertness.',
    applications: ['Paint & coatings filler', 'Oil well drilling', 'Plastics filler', 'Rubber compounding', 'Brake pads'],
    industries: ['Paints', 'Oil Drilling', 'Plastics'],
    grades: ['Precipitated', 'Natural (Barite)', 'API Grade'],
    packaging: ['25 kg bags', '50 kg bags', '1000 kg jumbo bags'],
    specs: { 'BaSO₄ Content': '≥ 98.0%', 'Specific Gravity': '4.2 – 4.5', 'Oil Absorption': '10 – 18 g/100g', 'Whiteness': '≥ 95%' }
  },
  {
    slug: 'hydrated-lime',
    name: 'Hydrated Lime',
    formula: 'Ca(OH)₂',
    cas: '1305-62-0',
    category: 'industrial',
    description: 'Calcium hydroxide for water purification, construction, and chemical manufacturing. A versatile alkaline material with broad industrial usage.',
    applications: ['Water purification', 'Construction mortar', 'Soil stabilization', 'Flue gas treatment', 'Sugar refining'],
    industries: ['Water Treatment', 'Construction', 'Chemical Mfg'],
    grades: ['Technical Grade', 'Construction Grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Bulk tanker'],
    specs: { 'Ca(OH)₂ Content': '≥ 90.0%', 'Free Moisture': '≤ 2.0%', 'Fineness (200 mesh)': '≥ 90%', 'Appearance': 'White powder' }
  },
  {
    slug: 'potassium-carbonate',
    name: 'Potassium Carbonate',
    formula: 'K₂CO₃',
    cas: '584-08-7',
    category: 'specialty',
    description: 'High purity K₂CO₃ for glass, ceramics, fertilizers, and pharmaceutical applications. Highly soluble alkaline salt for specialized uses.',
    applications: ['Specialty glass', 'Ceramic glazes', 'Fertilizer production', 'Pharmaceutical synthesis', 'Food processing'],
    industries: ['Glass', 'Ceramics', 'Fertilizers'],
    grades: ['Technical Grade', 'Food Grade'],
    packaging: ['25 kg bags', '50 kg bags', '1000 kg IBC'],
    specs: { 'K₂CO₃ Content': '≥ 99.0%', 'Moisture': '≤ 0.5%', 'Chloride': '≤ 0.01%', 'Appearance': 'White granular powder' }
  },
  {
    slug: 'sodium-metabisulphite',
    name: 'Sodium Metabisulphite',
    formula: 'Na₂S₂O₅',
    cas: '7681-57-4',
    category: 'specialty',
    description: 'Food-grade and technical-grade for food preservation, water treatment, and textile processing. Strong reducing and antioxidant agent.',
    applications: ['Food preservation', 'Water dechlorination', 'Textile bleaching', 'Photography', 'Mining (gold extraction)'],
    industries: ['Food Preservation', 'Water Treatment', 'Textiles'],
    grades: ['Food Grade', 'Technical Grade'],
    packaging: ['25 kg bags', '50 kg drums', '1000 kg IBC'],
    specs: { 'Na₂S₂O₅ Content': '≥ 97.0%', 'SO₂': '≥ 65%', 'Fe': '≤ 10 ppm', 'Appearance': 'White crystalline powder' }
  }
];

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'industrial', label: 'Industrial Chemicals' },
  { value: 'specialty', label: 'Specialty Chemicals' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}
