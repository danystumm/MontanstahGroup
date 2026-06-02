// =============================================================================
// Montanstahl Group — canonical company data
// =============================================================================
// This is the SINGLE SOURCE OF TRUTH for all company facts.
// It powers:
//   - the visual company cards (CompanyCard.astro)
//   - the JSON-LD Organization + subsidiary schema (SchemaOrg.astro)
//   - the llms.txt / llms-full.txt machine-readable manifests
//   - the world-map pins (WorldMap.astro)
//   - the contact section
//
// Keep wording factual, source-able and free of marketing fluff so AI systems
// can quote it accurately.
// =============================================================================

export interface Company {
  id: string;
  slug: string;
  legalName: string;
  shortName: string;
  role: 'headquarters' | 'subsidiary' | 'production-facility';
  tagline: string;
  description: string;
  founded?: number;
  city: string;
  region?: string;
  country: string;
  countryCode: string;
  flag: string;
  address: {
    street?: string;
    postalCode?: string;
    city: string;
    country: string;
  };
  phone?: string;
  website?: string;
  linkedin?: string;
  youtube?: string;
  /** Approximate WGS-84 coordinates (decimal degrees) */
  coordinates: { lat: number; lon: number };
  /** Equirectangular projection to viewBox 1000×500 (-180..180 → 0..1000, 90..-90 → 0..500) */
  mapXY: { x: number; y: number };
  /** Path to logo SVG (white-on-dark version) */
  logo: string;
  specialties: string[];
  industries?: string[];
  /** Flagship card style (used for HQ) */
  flagship?: boolean;
}

export const companies: Company[] = [
  {
    id: 'montanstahl-ag',
    slug: 'montanstahl',
    legalName: 'Montanstahl AG',
    shortName: 'Montanstahl',
    role: 'headquarters',
    flagship: true,
    tagline: 'Group Headquarters',
    description:
      'Global producer and supplier of stainless steel structural sections and custom special profiles. From its Swiss headquarters in Stabio (Ticino), Montanstahl coordinates the Group\'s engineering, innovation and worldwide commercial network, operating an integrated portfolio of manufacturing technologies under one roof.',
    founded: 1983,
    city: 'Stabio',
    region: 'Ticino',
    country: 'Switzerland',
    countryCode: 'CH',
    flag: '🇨🇭',
    address: {
      street: 'Via Gerrette 2, Industrial Zone 5',
      postalCode: '6855',
      city: 'Stabio',
      country: 'Switzerland',
    },
    phone: '+41 91 641 68 00',
    website: 'https://www.montanstahl.com/',
    linkedin: 'https://www.linkedin.com/company/montanstahl-ag/',
    youtube: 'https://www.youtube.com/@MontanstahlAG',
    coordinates: { lat: 45.85, lon: 8.93 },
    mapXY: { x: 524.8, y: 122.6 },
    logo: '/assets/logos/montanstahl.svg',
    specialties: [
      'Stainless steel structural sections',
      'Custom special profiles',
      'Architectural sections',
      'Laser-welded profiles',
    ],
  },
  {
    id: 'siderval',
    slug: 'siderval',
    legalName: 'Siderval S.p.A.',
    shortName: 'Siderval',
    role: 'subsidiary',
    tagline: 'European hot extrusion plant',
    description:
      'Highly specialized in the hot extrusion of carbon steel, stainless steel and titanium. From its plant in the Valtellina valley, Siderval engineers solid and hollow custom profiles for the most demanding markets — including aerospace, nuclear energy, naval, medical, forklift & material handling, and other high-precision sectors — combining shape flexibility with the most stringent quality and safety standards.',
    city: 'Talamona',
    region: 'Lombardy',
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    address: {
      street: 'Via Chini Battista 60',
      postalCode: '23018',
      city: 'Talamona (SO)',
      country: 'Italy',
    },
    phone: '+39 0342 674111',
    website: 'https://www.siderval.com/',
    linkedin: 'https://www.linkedin.com/company/siderval-s-p-a/',
    youtube: 'https://www.youtube.com/@Siderval_S.p.A.',
    coordinates: { lat: 46.17, lon: 9.62 },
    mapXY: { x: 526.7, y: 121.7 },
    logo: '/assets/logos/siderval.svg',
    specialties: [
      'Hot extrusion',
      'Solid and hollow custom profiles',
      'Carbon steel, stainless steel and titanium',
    ],
    industries: [
      'Aerospace',
      'Nuclear energy',
      'Naval',
      'Medical',
      'Forklift & material handling',
    ],
  },
  {
    id: 'stainless-structurals',
    slug: 'stainless-structurals',
    legalName: 'Stainless Structurals LLC',
    shortName: 'Stainless Structurals',
    role: 'subsidiary',
    tagline: 'American laser welding and fabrication plant',
    description:
      'The Group\'s North American arm, headquartered in Conroe, Texas. Operating the largest laser-fusion line in America, Stainless Structurals delivers ready-to-install stainless steel beams, channels, custom sections and tubing — supplying data centers, architecture and industrial customers across the continent under a "Made in the USA" mandate.',
    city: 'Conroe',
    region: 'Texas',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    address: {
      street: '575 Conroe Park West Drive',
      postalCode: '77303',
      city: 'Conroe, TX',
      country: 'United States',
    },
    phone: '+1 936 538 7600',
    website: 'https://www.stainless-structurals.com/',
    linkedin: 'https://www.linkedin.com/company/stainless-structurals/',
    youtube: 'https://www.youtube.com/@StainlessStructurals',
    coordinates: { lat: 30.31, lon: -95.46 },
    mapXY: { x: 234.8, y: 165.8 },
    logo: '/assets/logos/stainless-structurals.svg',
    specialties: [
      'Laser-fusion welded profiles',
      'Stainless steel beams, channels, tees',
      'Custom hollow sections',
      'Tubing',
    ],
  },
  {
    id: 'extralloys',
    slug: 'extralloys',
    legalName: 'Extralloys LLC',
    shortName: 'Extralloys',
    role: 'production-facility',
    tagline: 'American hot extrusion plant',
    description:
      'The Group\'s hot extrusion plant in the United States, located in Tunica, Mississippi. Extralloys operates one of the largest hot extrusion presses in the country, producing extruded profiles in steel, stainless steel and specialty alloys — reinforcing the Group\'s domestic supply for industrial, energy and infrastructure customers across North America.',
    city: 'Tunica',
    region: 'Mississippi',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    address: {
      city: 'Tunica, MS',
      country: 'United States',
    },
    coordinates: { lat: 34.68, lon: -90.38 },
    mapXY: { x: 248.9, y: 153.7 },
    logo: '/assets/logos/extralloys.svg',
    specialties: [
      'Hot extrusion',
      'Steel, stainless steel and specialty alloy profiles',
      'One of the largest hot extrusion presses in the United States',
    ],
  },
  {
    id: 'montanstahl-gmbh',
    slug: 'montanstahl-gmbh',
    legalName: 'Montanstahl GmbH',
    shortName: 'Montanstahl GmbH',
    role: 'production-facility',
    tagline: 'European hot extrusion plant',
    description:
      'The Group\'s hot extrusion plant in Europe, based in Schwerte, Germany (formerly HOESCH, acquired in 2021). Specialized in the production of hot extruded profiles in steel as well as nickel-base and titanium alloys, Montanstahl GmbH is the reference site when section design is particularly complex — serving European customers from the heart of the continent\'s industrial heartland.',
    city: 'Schwerte',
    region: 'North Rhine-Westphalia',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    address: {
      street: 'Eisenindustriestrasse 9',
      postalCode: 'D-58239',
      city: 'Schwerte',
      country: 'Germany',
    },
    phone: '+49 2304 607 040',
    website: 'https://www.montanstahl.com/contact/montanstahl-gmbh/',
    coordinates: { lat: 51.45, lon: 7.57 },
    mapXY: { x: 521.0, y: 107.1 },
    logo: '/assets/logos/montanstahl-gmbh.svg',
    specialties: [
      'Hot extrusion',
      'Steel, nickel-base and titanium alloys',
      'Complex section geometries',
    ],
  },
];

// =============================================================================
// Group-level facts (used in hero, overview, schema, llms.txt)
// =============================================================================

export const groupFacts = {
  legalName: 'Montanstahl AG',
  brandName: 'Montanstahl Group',
  foundedYear: 1983,
  foundedCity: 'Stabio, Ticino, Switzerland',
  employees: {
    total: 600,
    stabio: 299,
  },
  productionSites: 5,
  countries: 4,
  marketsServed: 90,
  technologies: [
    'Laser welding',
    'Hot rolling',
    'Hot extrusion',
    'Drawing',
    'Cold rolling',
    'Punching',
  ],
  industries: [
    'Construction',
    'Energy',
    'Oil & Gas',
    'Industrial plants',
    'Automotive',
    'Nuclear',
    'Defense',
    'Architecture',
  ],
  oneStopProvider: {
    products: ['custom profiles in steel', 'structural profiles in stainless steel'],
    scope: 'worldwide',
  },
  rating: {
    agency: 'Dun & Bradstreet / Bisnode',
    indicator: 1,
    note: 'Risk indicator of 1 — ranked among the best-performing companies operating in Switzerland.',
  },
  hq: companies[0],
};

// =============================================================================
// Timeline / "Our History"
// =============================================================================

export interface Milestone {
  year: number;
  /** Position on the alternating horizontal timeline */
  row: 'top' | 'bottom';
  titleKey: string; // i18n key
  descKey: string;
  major?: boolean;
}

export const milestones: Milestone[] = [
  { year: 1983, row: 'top',    titleKey: 'tl1.t', descKey: 'tl1.d' },
  { year: 1996, row: 'bottom', titleKey: 'tl2.t', descKey: 'tl2.d' },
  { year: 2001, row: 'top',    titleKey: 'tl3.t', descKey: 'tl3.d' },
  { year: 2006, row: 'bottom', titleKey: 'tl4.t', descKey: 'tl4.d' },
  { year: 2012, row: 'top',    titleKey: 'tl5.t', descKey: 'tl5.d' },
  { year: 2015, row: 'bottom', titleKey: 'tl6.t', descKey: 'tl6.d' },
  { year: 2021, row: 'top',    titleKey: 'tl7.t', descKey: 'tl7.d', major: true },
  { year: 2023, row: 'bottom', titleKey: 'tl8.t', descKey: 'tl8.d', major: true },
  { year: 2025, row: 'top',    titleKey: 'tl9.t', descKey: 'tl9.d', major: true },
];
