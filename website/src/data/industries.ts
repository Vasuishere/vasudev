export interface Industry {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  keywords: string[];
  challenges: string[];
  solutions: string[];
  chemicalsUsed: string[];
  whyChooseUs: string;
}

export const industries: Industry[] = [
  {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    description: 'Active ingredients, excipients, and reagents meeting pharma-grade specifications.',
    longDescription:
      'The pharmaceutical industry demands the highest purity chemicals with complete traceability and regulatory compliance. Vasudev Chemo Pharma supplies pharmaceutical-grade chemicals that meet USP, BP, and IP specifications — from API intermediates to excipients and analytical reagents. Our in-house laboratory validates every batch against stringent pharmacopeial standards before dispatch.',
    icon: 'Pill',
    image: '/images/company-logo.png',
    keywords: ['pharma chemicals', 'API intermediates', 'excipients', 'reagents', 'USP grade'],
    challenges: [
      'Stringent purity requirements (≥99.5%) with full COA documentation',
      'Regulatory compliance across multiple markets (FDA, EMA, CDSCO)',
      'Batch-to-batch consistency for validated manufacturing processes',
      'Cold chain and controlled storage requirements for sensitive materials',
    ],
    solutions: [
      'Dedicated pharma-grade production lines with GMP practices',
      'Full traceability from raw material to finished product with batch records',
      'In-house HPLC, AAS, and titration testing for pharmacopeial specifications',
      'COA, MSDS, and stability data provided with every shipment',
    ],
    chemicalsUsed: ['Zinc Oxide', 'Citric Acid', 'Sodium Bicarbonate', 'Magnesium Oxide', 'Sodium Metabisulphite'],
    whyChooseUs:
      'Our ISO 9001:2015 certified facility and GMP-compliant manufacturing ensure that every batch of pharma-grade chemicals meets your exact specifications. With 10+ years of supplying to pharmaceutical companies across 30+ countries, we understand the documentation and quality requirements that keep your production lines running smoothly.',
  },
  {
    slug: 'textiles-dyeing',
    name: 'Textiles & Dyeing',
    description: 'Dyeing auxiliaries, bleaching agents, and finishing chemicals for textile mills.',
    longDescription:
      'Textile manufacturing relies on consistent chemical quality for uniform dyeing, effective bleaching, and durable finishing. We supply a comprehensive range of textile chemicals — from caustic soda for mercerizing to sodium sulphate for dyebath exhaustion and sodium metabisulphite for discharge printing. Our chemicals are formulated for compatibility with major dye systems.',
    icon: 'Shirt',
    image: '/images/company-logo.png',
    keywords: ['textile chemicals', 'dyeing auxiliaries', 'bleaching agents', 'finishing chemicals'],
    challenges: [
      'Color consistency requires chemicals with precise purity and particle size',
      'Process water quality directly impacts dyeing outcomes',
      'Environmental regulations on effluent discharge are tightening globally',
      'Bulk consumption demands reliable supply with competitive pricing',
    ],
    solutions: [
      'Consistent particle size and purity for uniform dye exhaustion',
      'Technical support for optimizing chemical dosage and process parameters',
      'Eco-friendly grades that reduce effluent load and improve treatability',
      'Bulk supply from Gujarat with proximity to textile manufacturing hubs',
    ],
    chemicalsUsed: ['Sodium Sulphate', 'Caustic Soda Flakes', 'Soda Ash', 'Sodium Metabisulphite', 'Stearic Acid'],
    whyChooseUs:
      'Gujarat is India\'s textile heartland, and we\'re right at the center of it. Our direct-from-manufacturing pricing, consistent quality, and ability to handle bulk orders of 100+ MT make us the preferred chemical partner for textile mills across India and export markets.',
  },
  {
    slug: 'paints-coatings',
    name: 'Paints & Coatings',
    description: 'Pigments, fillers, and additives for industrial and decorative coatings.',
    longDescription:
      'The paints and coatings industry requires chemicals that deliver superior opacity, durability, and weather resistance. We supply premium titanium dioxide for brilliant whiteness, calcium carbonate and barium sulphate as extender pigments, and zinc oxide for corrosion protection. Our products undergo rigorous quality testing for color, particle size, and oil absorption.',
    icon: 'Paintbrush',
    image: '/images/company-logo.png',
    keywords: ['paint chemicals', 'pigments', 'fillers', 'coatings additives', 'TiO2'],
    challenges: [
      'Opacity and hiding power depend on pigment quality and particle size distribution',
      'Weather resistance and UV stability are critical for exterior coatings',
      'Cost optimization requires balancing prime pigments with extenders',
      'VOC regulations demand reformulation towards water-based systems',
    ],
    solutions: [
      'Premium rutile TiO₂ with optimized particle size for maximum hiding power',
      'Micronized calcium carbonate and barium sulphate for cost-effective extension',
      'Zinc oxide for anti-corrosive primer formulations',
      'Technical data and formulation support for water-based transitions',
    ],
    chemicalsUsed: ['Titanium Dioxide', 'Calcium Carbonate', 'Barium Sulphate', 'Zinc Oxide', 'Stearic Acid'],
    whyChooseUs:
      'Our paint-grade chemicals are tested for color consistency, oil absorption, and particle size distribution. We serve paint manufacturers across the Middle East, Africa, and Southeast Asia with reliable supply and competitive pricing backed by Gujarat\'s chemical manufacturing ecosystem.',
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    description: 'Food-grade chemicals for processing, preservation, and flavoring.',
    longDescription:
      'Food safety is non-negotiable. We supply food-grade chemicals that comply with FSSAI, FDA, and Codex Alimentarius standards. From citric acid for beverage acidulation to sodium bicarbonate for baking and sodium metabisulphite for preservation, every product comes with food-grade certification and full traceability documentation.',
    icon: 'UtensilsCrossed',
    image: '/images/company-logo.png',
    keywords: ['food grade chemicals', 'food processing', 'beverage chemicals', 'food preservation'],
    challenges: [
      'Zero tolerance for contaminants — heavy metals, microbial, and foreign matter',
      'Regulatory compliance across multiple food safety frameworks (FSSAI, FDA, EU)',
      'Shelf-life sensitive products require consistent preservative quality',
      'Traceability requirements demand batch-level documentation',
    ],
    solutions: [
      'Dedicated food-grade production and packaging lines',
      'Every batch tested for heavy metals, microbial count, and purity',
      'COA with food-grade certification included with every shipment',
      'FIFO inventory management ensuring freshest stock supply',
    ],
    chemicalsUsed: ['Citric Acid', 'Sodium Bicarbonate', 'Sodium Metabisulphite', 'Potassium Carbonate'],
    whyChooseUs:
      'Our food-grade chemicals are produced under GMP conditions with rigorous testing for contaminants. We understand the documentation requirements for food safety audits and supply chemicals that help you maintain your own HACCP and food safety certifications.',
  },
  {
    slug: 'water-treatment',
    name: 'Water Treatment',
    description: 'Coagulants, flocculants, and pH adjusters for municipal and industrial water systems.',
    longDescription:
      'Clean water is essential for communities and industries alike. We supply water treatment chemicals for municipal water purification, industrial effluent treatment, and cooling water systems. Our product range includes caustic soda for pH adjustment, hydrated lime for softening, and sodium metabisulphite for dechlorination — each meeting drinking water treatment standards.',
    icon: 'Droplets',
    image: '/images/company-logo.png',
    keywords: ['water treatment chemicals', 'coagulants', 'flocculants', 'pH adjustment', 'effluent treatment'],
    challenges: [
      'Drinking water chemicals must meet IS 10500 / WHO guidelines for impurities',
      'Industrial effluent treatment requires cost-effective chemical dosing',
      'Seasonal demand fluctuations need flexible supply agreements',
      'Bulk transportation and handling of corrosive chemicals require safety protocols',
    ],
    solutions: [
      'Drinking water grade chemicals with third-party test reports',
      'Technical dosage recommendations based on water analysis reports',
      'Flexible MOQ and scheduled delivery programs for municipal plants',
      'UN-rated packaging and MSDS documentation for safe handling',
    ],
    chemicalsUsed: ['Caustic Soda Flakes', 'Hydrated Lime', 'Sodium Metabisulphite', 'Sodium Tripolyphosphate', 'Soda Ash'],
    whyChooseUs:
      'We supply water treatment chemicals to municipal corporations and industrial plants across India and the Middle East. Our proximity to Gujarat\'s chemical corridors ensures competitive pricing, and our technical team can help optimize chemical dosage for your specific water quality parameters.',
  },
  {
    slug: 'agriculture',
    name: 'Agriculture',
    description: 'Soil amendments, micronutrients, and crop protection chemicals.',
    longDescription:
      'Modern agriculture depends on precise soil chemistry and plant nutrition. We supply agricultural-grade zinc oxide as a micronutrient, magnesium oxide for soil amendment, calcium carbonate for pH correction, and citric acid as a chelating agent. Our chemicals help farmers and agri-businesses improve crop yields while maintaining soil health.',
    icon: 'Sprout',
    image: '/images/company-logo.png',
    keywords: ['agricultural chemicals', 'soil amendments', 'micronutrients', 'crop protection'],
    challenges: [
      'Micronutrient deficiencies reduce crop yields and quality',
      'Soil pH imbalances affect nutrient availability to plants',
      'Bulk procurement for seasonal application windows',
      'Price sensitivity in agricultural inputs market',
    ],
    solutions: [
      'Agricultural-grade zinc oxide and magnesium oxide for micronutrient supplementation',
      'Calcium carbonate and hydrated lime for soil pH correction',
      'Seasonal bulk supply agreements with advance booking discounts',
      'Direct-from-manufacturer pricing without middleman markup',
    ],
    chemicalsUsed: ['Zinc Oxide', 'Magnesium Oxide', 'Calcium Carbonate', 'Hydrated Lime', 'Citric Acid'],
    whyChooseUs:
      'Our agricultural chemicals are priced competitively for the agri-input market, with bulk packaging options that reduce handling costs. We work with fertilizer blenders and agri-businesses across India and Africa to deliver the right micronutrient and soil amendment products at the right time.',
  },
  {
    slug: 'detergents-cleaning',
    name: 'Detergents & Cleaning',
    description: 'Surfactants, builders, and active ingredients for cleaning product formulations.',
    longDescription:
      'The detergent industry is our largest market segment. We supply LABSA as the primary surfactant, sodium sulphate as a filler and builder, soda ash as an alkali source, sodium tripolyphosphate as a builder, and caustic soda for liquid detergent neutralization. Our chemicals are formulated for both powder and liquid detergent production.',
    icon: 'SprayCan',
    image: '/images/company-logo.png',
    keywords: ['detergent chemicals', 'surfactants', 'LABSA', 'cleaning chemicals', 'builders'],
    challenges: [
      'Formulation balance between cleaning performance and cost',
      'Phosphate reduction regulations in many markets',
      'Surfactant quality directly impacts foaming and cleaning efficiency',
      'Price competition in commodity cleaning products',
    ],
    solutions: [
      'High active-matter LABSA (≥96%) for efficient surfactant formulations',
      'Sodium sulphate and soda ash at competitive Gujarat prices',
      'STPP and phosphate-free alternatives for different market regulations',
      'Technical formulation support for powder and liquid detergents',
    ],
    chemicalsUsed: ['LABSA', 'Sodium Sulphate', 'Soda Ash', 'Sodium Tripolyphosphate', 'Caustic Soda Flakes'],
    whyChooseUs:
      'Detergent manufacturing is our core expertise. We supply the complete raw material package — from surfactants to builders to fillers — enabling single-source procurement that simplifies your supply chain and reduces logistics costs.',
  },
  {
    slug: 'glass-ceramics',
    name: 'Glass & Ceramics',
    description: 'Raw materials and specialty additives for glass melting and ceramic processing.',
    longDescription:
      'Glass and ceramic manufacturing requires chemicals with precise chemical composition and low impurity levels. We supply soda ash as the primary flux for glass melting, calcium carbonate as a stabilizer, potassium carbonate for specialty glass, barium sulphate for optical glass, and zinc oxide for ceramic glazes. Consistent quality ensures uniform melting behavior.',
    icon: 'GlassWater',
    image: '/images/company-logo.png',
    keywords: ['glass chemicals', 'ceramic chemicals', 'soda ash', 'glass melting', 'ceramic glazes'],
    challenges: [
      'Iron content in raw materials creates unwanted color in clear glass',
      'Particle size consistency affects melting behavior and energy consumption',
      'Ceramic glaze chemistry requires precise oxide ratios',
      'High-temperature processing demands thermally stable materials',
    ],
    solutions: [
      'Low-iron grade soda ash and calcium carbonate for clear glass production',
      'Consistent particle size distribution batch after batch',
      'Zinc oxide and potassium carbonate for specialized ceramic glaze formulations',
      'Technical data sheets with full oxide analysis for ceramic applications',
    ],
    chemicalsUsed: ['Soda Ash', 'Calcium Carbonate', 'Potassium Carbonate', 'Barium Sulphate', 'Zinc Oxide'],
    whyChooseUs:
      'We understand the precision chemistry that glass and ceramic manufacturing demands. Our chemicals come with detailed composition certificates, and our technical team can help you optimize raw material ratios for energy-efficient melting and consistent product quality.',
  },
  {
    slug: 'rubber-plastics',
    name: 'Rubber & Plastics',
    description: 'Accelerators, fillers, and processing aids for rubber and plastic manufacturing.',
    longDescription:
      'Rubber and plastic processing depends on chemical additives for vulcanization, reinforcement, and processing efficiency. We supply zinc oxide as a vulcanization activator, stearic acid as a processing aid, calcium carbonate and barium sulphate as fillers, and titanium dioxide as a whitening agent. Our grades are optimized for rubber and plastic processing conditions.',
    icon: 'CircleDot',
    image: '/images/company-logo.png',
    keywords: ['rubber chemicals', 'plastic additives', 'vulcanization', 'fillers', 'processing aids'],
    challenges: [
      'Vulcanization speed and scorch safety depend on activator quality',
      'Filler dispersion affects mechanical properties and surface finish',
      'Processing aid quality impacts mix times and energy consumption',
      'Compliance with RoHS and REACH for plastic additives',
    ],
    solutions: [
      'Rubber-grade zinc oxide with optimized surface area for vulcanization',
      'Coated calcium carbonate for improved dispersion in rubber and PVC',
      'Stearic acid in multiple forms (beads, flakes) for process compatibility',
      'Full REACH documentation for EU-destined rubber and plastic products',
    ],
    chemicalsUsed: ['Zinc Oxide', 'Stearic Acid', 'Calcium Carbonate', 'Barium Sulphate', 'Titanium Dioxide'],
    whyChooseUs:
      'Our rubber and plastic grade chemicals are developed in close collaboration with compound manufacturers. We offer technical-grade zinc oxide, rubber-grade stearic acid, and coated fillers that deliver consistent performance in your compounding and extrusion processes.',
  },
  {
    slug: 'construction',
    name: 'Construction',
    description: 'Lime, calcium carbonate, and specialty chemicals for construction materials.',
    longDescription:
      'The construction sector uses chemicals in concrete admixtures, mortar, waterproofing compounds, and surface treatments. We supply hydrated lime for mortar and plaster, calcium carbonate as a filler for adhesives and sealants, and caustic soda for surface preparation. Our construction-grade chemicals meet BIS standards for building materials.',
    icon: 'Building2',
    image: '/images/company-logo.png',
    keywords: ['construction chemicals', 'lime', 'mortar', 'concrete admixtures', 'waterproofing'],
    challenges: [
      'Bulk consumption requires cost-effective supply chains',
      'Material quality directly impacts structural durability',
      'Seasonal demand peaks during construction season',
      'On-site storage and handling of bulk materials',
    ],
    solutions: [
      'Construction-grade hydrated lime meeting IS 712 specifications',
      'Micronized calcium carbonate for tile adhesives and sealants',
      'Scheduled bulk deliveries aligned with project timelines',
      'Technical data for concrete and mortar mix design optimization',
    ],
    chemicalsUsed: ['Hydrated Lime', 'Calcium Carbonate', 'Caustic Soda Flakes', 'Magnesium Oxide'],
    whyChooseUs:
      'We serve construction chemical companies and ready-mix concrete plants with reliable bulk supply. Our proximity to Gujarat\'s limestone belt and chemical corridors ensures competitive pricing for construction-grade materials.',
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    description: 'Drilling fluids, weighting agents, and production chemicals for energy sector.',
    longDescription:
      'The oil and gas industry requires specialty chemicals for drilling operations, production enhancement, and refinery processes. We supply barium sulphate (barite) as a drilling fluid weighting agent, caustic soda for pH control in drilling muds, calcium carbonate as a bridging agent, and soda ash for water-based mud systems.',
    icon: 'Fuel',
    image: '/images/company-logo.png',
    keywords: ['oilfield chemicals', 'drilling fluids', 'barite', 'weighting agents', 'production chemicals'],
    challenges: [
      'API specification compliance for drilling grade chemicals',
      'Logistics to remote drilling sites and offshore platforms',
      'High specific gravity requirements for weighting agents',
      'Environmental regulations for drilling fluid disposal',
    ],
    solutions: [
      'API 13A grade barite with SG ≥ 4.2 for drilling fluid weighting',
      'Fine-ground calcium carbonate for formation damage prevention',
      'Caustic soda and soda ash for mud chemistry pH and alkalinity control',
      'Export packaging suitable for offshore and remote site logistics',
    ],
    chemicalsUsed: ['Barium Sulphate', 'Caustic Soda Flakes', 'Calcium Carbonate', 'Soda Ash'],
    whyChooseUs:
      'We supply API-grade oilfield chemicals to drilling companies across the Middle East and Africa. Our proximity to Mundra and Kandla ports enables cost-effective shipping of bulk barite and drilling chemicals to major oil-producing regions.',
  },
  {
    slug: 'paper-pulp',
    name: 'Paper & Pulp',
    description: 'Fillers, coatings, and processing chemicals for paper manufacturing.',
    longDescription:
      'Paper manufacturing uses chemicals at every stage — from pulping to coating. We supply calcium carbonate as a filler and coating pigment, caustic soda for wood pulp digestion, sodium sulphate for kraft pulping, titanium dioxide for premium white papers, and sodium metabisulphite as a bleaching auxiliary. Our chemicals help paper mills optimize brightness, opacity, and printability.',
    icon: 'FileText',
    image: '/images/company-logo.png',
    keywords: ['paper chemicals', 'pulp chemicals', 'paper fillers', 'coating pigments', 'bleaching'],
    challenges: [
      'Filler quality affects paper brightness, opacity, and printability',
      'Pulping chemicals must balance delignification with fiber preservation',
      'Coating chemistry impacts print surface quality and ink absorption',
      'Environmental regulations on bleaching chemicals and effluent',
    ],
    solutions: [
      'GCC and PCC calcium carbonate grades for filler and coating applications',
      'High-purity caustic soda for efficient kraft pulping',
      'Sodium sulphate for Kraft process recovery cycle',
      'Chlorine-free bleaching alternatives with sodium metabisulphite',
    ],
    chemicalsUsed: ['Calcium Carbonate', 'Caustic Soda Flakes', 'Sodium Sulphate', 'Titanium Dioxide', 'Sodium Metabisulphite'],
    whyChooseUs:
      'We supply paper and pulp mills across India and Southeast Asia with the full range of processing chemicals. From bulk caustic soda for pulping to micronized calcium carbonate for coating, we offer single-source procurement with consistent quality and competitive pricing.',
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((ind) => ind.slug === slug);
}
