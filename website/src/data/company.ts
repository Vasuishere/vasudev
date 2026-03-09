export const company = {
  name: 'Vasudev Chemo Pharma',
  tagline: 'Industrial & Specialty Chemical Manufacturer',
  location: 'Gujarat, India',
  founded: '2016',
  experience: '10+',
  productsCount: '16+',
  countriesServed: '30+',
  monthlyCapacity: '5000+ MT',
  email: 'export@vasudevchemopharma.com',
  phone: '+91 98795 10350',
  whatsapp: '919879510350',
  address: 'GIDC Industrial Estate, Ahmedabad, Gujarat, India - 382445',
  hours: 'Mon–Sat: 9:00 AM – 6:00 PM IST (GMT+5:30)',
  website: 'https://www.vasudevchemopharma.com',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Export', href: '/export' },
  { label: 'Quality', href: '/quality' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
] as const;

export const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', body: 'Bureau Veritas' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System', body: 'Bureau Veritas' },
  { name: 'REACH Ready', description: 'EU Chemical Regulation Compliance', body: 'Documentation Available' },
] as const;

export const industries = [
  { name: 'Pharmaceuticals', icon: 'Pill', description: 'Active ingredients, excipients, and reagents meeting pharma-grade specifications.' },
  { name: 'Textiles & Dyeing', icon: 'Shirt', description: 'Dyeing auxiliaries, bleaching agents, and finishing chemicals for textile mills.' },
  { name: 'Paints & Coatings', icon: 'Paintbrush', description: 'Pigments, fillers, and additives for industrial and decorative coatings.' },
  { name: 'Food & Beverage', icon: 'UtensilsCrossed', description: 'Food-grade chemicals for processing, preservation, and flavoring.' },
  { name: 'Water Treatment', icon: 'Droplets', description: 'Coagulants, flocculants, and pH adjusters for municipal and industrial water systems.' },
  { name: 'Agriculture', icon: 'Sprout', description: 'Soil amendments, micronutrients, and crop protection chemicals.' },
  { name: 'Detergents & Cleaning', icon: 'SprayCan', description: 'Surfactants, builders, and active ingredients for cleaning product formulations.' },
  { name: 'Glass & Ceramics', icon: 'GlassWater', description: 'Raw materials and specialty additives for glass melting and ceramic processing.' },
  { name: 'Rubber & Plastics', icon: 'CircleDot', description: 'Accelerators, fillers, and processing aids for rubber and plastic manufacturing.' },
  { name: 'Construction', icon: 'Building2', description: 'Lime, calcium carbonate, and specialty chemicals for construction materials.' },
  { name: 'Oil & Gas', icon: 'Fuel', description: 'Drilling fluids, weighting agents, and production chemicals for energy sector.' },
  { name: 'Paper & Pulp', icon: 'FileText', description: 'Fillers, coatings, and processing chemicals for paper manufacturing.' },
] as const;

export const services = [
  {
    title: 'Chemical Manufacturing',
    description: 'State-of-the-art manufacturing facility producing 16+ industrial and specialty chemicals under ISO-certified quality controls.',
    features: ['ISO 9001:2015 certified processes', 'Batch and continuous production', 'In-house quality lab', '5000+ MT monthly capacity'],
  },
  {
    title: 'Custom Blending & Formulation',
    description: 'Tailored chemical blends and formulations to meet your exact specifications and application requirements.',
    features: ['Custom concentration levels', 'Application-specific formulations', 'Small batch to bulk scale', 'R&D collaboration'],
  },
  {
    title: 'Quality Testing & Analysis',
    description: 'Comprehensive in-house testing laboratory ensuring every batch meets international quality standards.',
    features: ['Purity analysis', 'Heavy metal testing', 'pH & density measurement', 'Particle size analysis'],
  },
  {
    title: 'Export Packaging & Logistics',
    description: 'Export-ready packaging with complete documentation support for seamless international shipping.',
    features: ['UN-rated HDPE drums', 'IBC tanks & jumbo bags', 'Hazmat-compliant packaging', 'Full logistics coordination'],
  },
] as const;

export const faqs = [
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQ varies by product. For most chemicals, we accept orders starting from 1 MT (metric ton). For specialty products, the MOQ may be lower. Contact us for specific product MOQs.',
  },
  {
    question: 'What packaging options are available?',
    answer: 'We offer HDPE bags (25–50 kg), HDPE drums (50–250 kg), IBC tanks (1000 L), jumbo bags (1000 kg), and bulk tanker loading. Custom packaging is available on request.',
  },
  {
    question: 'Do you provide Certificate of Analysis (COA)?',
    answer: 'Yes, a Certificate of Analysis (COA) is included with every shipment. MSDS/SDS documents are also available on request for all products.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We typically work with T/T (Telegraphic Transfer), L/C (Letter of Credit) at sight, and D/P (Documents against Payment). Payment terms are negotiable based on order volume and relationship.',
  },
  {
    question: 'Which Incoterms do you support?',
    answer: 'We support FOB, CIF, CFR, EXW, DDP, and DAP. Our team will recommend the best Incoterm based on your location and requirements.',
  },
  {
    question: 'What is the typical lead time for orders?',
    answer: 'Standard lead time is 7–15 days from order confirmation for stock products. Custom formulations or large orders may require 15–30 days. We provide exact timelines at quotation.',
  },
  {
    question: 'Which countries do you export to?',
    answer: 'We export to 30+ countries across USA & Canada, Middle East & Africa, Southeast Asia, Europe, Far East, and Latin America. Gujarat\'s proximity to major ports ensures competitive shipping rates.',
  },
  {
    question: 'Can you provide product samples?',
    answer: 'Yes, we provide product samples for evaluation. Samples are typically 500g to 5 kg depending on the product. Samples are free; shipping costs may apply for international destinations.',
  },
  {
    question: 'Are your products REACH compliant?',
    answer: 'We support REACH compliance inquiries and can provide necessary documentation for European markets. Our team helps with pre-registration and compliance documentation.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'You can request a quote through our Contact page, send an email to export@vasudevchemopharma.com, or message us on WhatsApp. We respond to all inquiries within 24 hours.',
  },
] as const;
