// =============================================================================
// /facts.json — machine-readable JSON dump.
// For AI agents and integrations that prefer structured data over Markdown.
// =============================================================================
import type { APIRoute } from 'astro';
import { companies, groupFacts, milestones } from '../data/companies';
import { strings } from '../data/i18n';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://www.montanstahl-group.com')).toString().replace(/\/$/, '');
  const en = strings.en;

  const data = {
    $schema: 'https://schema.org',
    generated: new Date().toISOString(),
    canonicalURL: base,
    group: {
      brandName: groupFacts.brandName,
      legalName: groupFacts.legalName,
      type: 'metallurgical group of companies',
      foundedYear: groupFacts.foundedYear,
      foundedLocation: groupFacts.foundedCity,
      employees: groupFacts.employees,
      productionSites: groupFacts.productionSites,
      countries: groupFacts.countries,
      marketsServed: groupFacts.marketsServed,
      purpose: 'One Stop Solution Provider for custom profiles in steel and structural profiles in stainless steel — worldwide.',
      productionTechnologies: groupFacts.technologies,
      industriesServed: groupFacts.industries,
      creditRating: groupFacts.rating,
      headquarters: {
        legalName: groupFacts.hq.legalName,
        address: groupFacts.hq.address,
        phone: groupFacts.hq.phone,
        website: groupFacts.hq.website,
        coordinates: groupFacts.hq.coordinates,
      },
    },
    companies: companies.map((c) => ({
      id: c.id,
      legalName: c.legalName,
      shortName: c.shortName,
      role: c.role,
      tagline: c.tagline,
      description: c.description,
      address: c.address,
      city: c.city,
      region: c.region,
      country: c.country,
      countryCode: c.countryCode,
      coordinates: c.coordinates,
      phone: c.phone,
      website: c.website,
      linkedin: c.linkedin,
      youtube: c.youtube,
      specialties: c.specialties,
      industries: c.industries,
      logo: `${base}${c.logo}`,
    })),
    history: [...milestones]
      .sort((a, b) => a.year - b.year)
      .map((m) => ({
        year: m.year,
        major: !!m.major,
        title: en[m.titleKey] ?? '',
        description: en[m.descKey] ?? '',
      })),
    faq: [
      { q: 'What is the Montanstahl Group?', a: 'A global metallurgical group of five companies producing custom steel profiles and structural stainless steel sections, headquartered in Stabio, Switzerland.' },
      { q: 'How many employees does the Montanstahl Group have?', a: `Over ${groupFacts.employees.total}, with approximately ${groupFacts.employees.stabio} in Stabio, Switzerland.` },
      { q: 'When was Montanstahl founded?', a: `In ${groupFacts.foundedYear}, in Ticino, Switzerland, as a rolling mill for steel profiles.` },
    ],
    languages: ['en', 'it', 'de', 'es'],
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
