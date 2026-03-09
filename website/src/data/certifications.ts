export interface Certification {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  body: string;
  scope: string;
  scopeType: string;
  keyAreas: string[];
  validUntil: string;
  importance: string;
  imageUrl?: string;
}

export const certifications: Certification[] = [
  {
    slug: 'iso-9001-2015',
    name: 'ISO 9001:2015',
    shortName: 'ISO 9001',
    description: 'Quality Management System',
    body: 'Bureau Veritas',
    scope: 'Manufacturing, testing, quality control, packaging, and supply of industrial and specialty chemicals for domestic and international markets.',
    scopeType: 'Manufacturing & Supply',
    keyAreas: [
      'Production process control and batch consistency',
      'Raw material testing and supplier approval',
      'In-process quality monitoring at every stage',
      'Final product testing and COA generation',
      'Customer complaint resolution and continuous improvement',
      'Document control and traceability systems',
    ],
    validUntil: '2027',
    importance:
      'ISO 9001:2015 certification assures our global customers that every chemical product leaving our facility meets consistent quality standards. It demonstrates our commitment to systematic process control, customer satisfaction, and continuous improvement — critical factors for international importers who rely on supply chain reliability.',
  },
  {
    slug: 'iso-14001-2015',
    name: 'ISO 14001:2015',
    shortName: 'ISO 14001',
    description: 'Environmental Management System',
    body: 'Bureau Veritas',
    scope: 'Environmental management of chemical manufacturing processes, waste disposal, emissions control, and resource optimization at our Gujarat facility.',
    scopeType: 'Environmental Management',
    keyAreas: [
      'Waste minimization and responsible disposal',
      'Emissions monitoring and control systems',
      'Water usage optimization and effluent treatment',
      'Energy efficiency improvement programs',
      'Regulatory compliance with CPCB and GPCB norms',
      'Environmental incident prevention and response',
    ],
    validUntil: '2027',
    importance:
      'Environmental stewardship is no longer optional — it is a global purchasing criterion. Our ISO 14001:2015 certification proves that our manufacturing processes meet international environmental standards, enabling our customers to meet their own ESG and sustainability commitments with confidence.',
  },
  {
    slug: 'reach-ready',
    name: 'REACH Ready',
    shortName: 'REACH',
    description: 'EU Chemical Regulation Compliance',
    body: 'Documentation Available',
    scope: 'Pre-registration and compliance documentation for export of chemical substances to EU member states under REACH Regulation (EC) No 1907/2006.',
    scopeType: 'EU Export Compliance',
    keyAreas: [
      'Substance identification and characterization',
      'Safety Data Sheet (SDS) preparation per EU format',
      'Pre-registration documentation for ECHA',
      'Hazard communication and classification (CLP)',
      'Supply chain communication protocols',
      'Only Representative (OR) coordination for EU import',
    ],
    validUntil: 'Ongoing',
    importance:
      'REACH compliance is mandatory for exporting chemicals to the European Union. Our REACH-ready status means we maintain all necessary documentation — SDS, substance dossiers, and pre-registration data — enabling seamless customs clearance and regulatory approval for EU-bound shipments.',
  },
  {
    slug: 'gmp-compliance',
    name: 'GMP Compliance',
    shortName: 'GMP',
    description: 'Good Manufacturing Practice',
    body: 'Internal Audit & Third-Party Verification',
    scope: 'Adherence to Good Manufacturing Practices for pharmaceutical-grade and food-grade chemical production, ensuring product purity and consistency.',
    scopeType: 'Pharma & Food Grade Manufacturing',
    keyAreas: [
      'Cleanroom and controlled environment manufacturing',
      'Personnel hygiene and training protocols',
      'Equipment calibration and maintenance schedules',
      'Batch record documentation and review',
      'Cross-contamination prevention measures',
      'Stability testing and shelf-life determination',
    ],
    validUntil: '2027',
    importance:
      'For customers in pharmaceutical and food processing industries, GMP compliance is a non-negotiable requirement. Our adherence to GMP standards ensures that our pharma-grade and food-grade chemicals meet the purity and safety levels required for sensitive applications.',
  },
];

export function getCertificationBySlug(slug: string): Certification | undefined {
  return certifications.find((cert) => cert.slug === slug);
}
