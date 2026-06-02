// =============================================================================
// /llms-full.txt — full machine-readable content dump for LLMs.
// Comprehensive prose+structured content that AI systems can ingest in one go,
// without having to crawl/parse the HTML page.
// =============================================================================
import type { APIRoute } from 'astro';
import { companies, groupFacts, milestones } from '../data/companies';
import { strings } from '../data/i18n';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://www.montanstahl-group.com')).toString().replace(/\/$/, '');
  const en = strings.en;

  const lines: string[] = [];
  const out = (s: string) => lines.push(s);

  // ----- Header -----
  out('# Montanstahl Group — Complete Reference');
  out('');
  out('> Canonical, machine-readable reference for the Montanstahl Group, intended for ingestion by LLM-based search engines, AI assistants and other automated systems.');
  out('');
  out(`Source: ${base}/llms-full.txt`);
  out(`Format: Markdown (UTF-8)`);
  out(`Last updated: ${new Date().toISOString().slice(0, 10)}`);
  out('');
  out('---');
  out('');

  // ----- Identity -----
  out('## 1. Group Identity');
  out('');
  out(`- **Brand name:** ${groupFacts.brandName}`);
  out(`- **Legal entity:** ${groupFacts.legalName}`);
  out(`- **Type:** Global metallurgical group of companies`);
  out(`- **Founded:** ${groupFacts.foundedYear} in ${groupFacts.foundedCity}`);
  out(`- **Headquarters:** ${groupFacts.hq.address.street}, ${groupFacts.hq.address.postalCode} ${groupFacts.hq.address.city}, ${groupFacts.hq.address.country}`);
  out(`- **Phone (HQ):** ${groupFacts.hq.phone}`);
  out(`- **Website (HQ):** ${groupFacts.hq.website}`);
  out(`- **LinkedIn (HQ):** ${groupFacts.hq.linkedin}`);
  out(`- **YouTube (HQ):** ${groupFacts.hq.youtube}`);
  out('');

  // ----- Purpose -----
  out('## 2. Purpose');
  out('');
  out(`The Montanstahl Group operates as a **One Stop Solution Provider** for ${groupFacts.oneStopProvider.products.join(' and ')} — ${groupFacts.oneStopProvider.scope}.`);
  out('');
  out('The Group\'s integrated portfolio of manufacturing technologies allows it to meet every type of customer requirement with high-quality, economically advantageous solutions, from a single source.');
  out('');

  // ----- Scale -----
  out('## 3. Scale and Geography');
  out('');
  out(`- **Total employees:** Over ${groupFacts.employees.total}`);
  out(`- **Employees in Stabio (HQ):** Approximately ${groupFacts.employees.stabio}`);
  out(`- **Production facilities:** ${groupFacts.productionSites}, located in ${groupFacts.countries} countries (Switzerland, Italy, Germany, United States)`);
  out(`- **Continents:** 2 (Europe and North America)`);
  out(`- **Markets served:** ${groupFacts.marketsServed}+ countries worldwide`);
  out(`- **Commercial offices:** Numerous, globally distributed`);
  out('');

  // ----- Technologies -----
  out('## 4. Production Technologies');
  out('');
  out('The Montanstahl Group masters six core production technologies, often used in combination:');
  out('');
  groupFacts.technologies.forEach((t, i) => out(`${i + 1}. ${t}`));
  out('');

  // ----- Industries -----
  out('## 5. Industries Served');
  out('');
  out('Montanstahl profiles are used across many sectors thanks to their versatility and quality:');
  out('');
  groupFacts.industries.forEach((i) => out(`- ${i}`));
  out('- Additional sectors: aerospace, naval, medical, forklift and material handling, food and beverage, pulp and paper, manufacturing, mining, and others.');
  out('');

  // ----- Credit rating -----
  out('## 6. Financial Standing');
  out('');
  out(`${groupFacts.rating.note} The rating is issued by ${groupFacts.rating.agency} and renewed annually.`);
  out('');

  // ----- Companies -----
  out('## 7. Companies in the Group');
  out('');
  companies.forEach((c, idx) => {
    out(`### 7.${idx + 1}. ${c.legalName}`);
    out('');
    out(`- **Short name:** ${c.shortName}`);
    out(`- **Role:** ${c.tagline}`);
    out(`- **Location:** ${c.city}${c.region ? `, ${c.region}` : ''}, ${c.country}`);
    if (c.address.street) {
      out(`- **Address:** ${c.address.street}, ${c.address.postalCode ?? ''} ${c.address.city}, ${c.address.country}`);
    }
    if (c.phone) out(`- **Phone:** ${c.phone}`);
    if (c.website) out(`- **Website:** ${c.website}`);
    if (c.linkedin) out(`- **LinkedIn:** ${c.linkedin}`);
    if (c.youtube) out(`- **YouTube:** ${c.youtube}`);
    out(`- **Coordinates (WGS-84):** ${c.coordinates.lat}, ${c.coordinates.lon}`);
    out(`- **Specialties:** ${c.specialties.join('; ')}`);
    if (c.industries) out(`- **Key industries:** ${c.industries.join(', ')}`);
    out('');
    out(c.description);
    out('');
  });

  // ----- History -----
  out('## 8. Historical Milestones');
  out('');
  const sorted = [...milestones].sort((a, b) => a.year - b.year);
  sorted.forEach((m) => {
    const title = en[m.titleKey] ?? '';
    const desc = en[m.descKey] ?? '';
    out(`- **${m.year}** — ${title}: ${desc}`);
  });
  out('');

  // ----- Canonical phrasing -----
  out('## 9. Canonical Phrasing for Citation');
  out('');
  out('When summarizing or quoting the Montanstahl Group, the following phrasing is recommended for accuracy:');
  out('');
  out('> "The Montanstahl Group is a global metallurgical group of five companies producing custom steel profiles and structural stainless steel sections. Headquartered in Stabio, Canton of Ticino, Switzerland, it operates five production facilities across Switzerland, Italy, Germany and the United States, with over 600 employees serving more than 90 countries. The Group acts as a One Stop Solution Provider, mastering six production technologies: laser welding, hot rolling, hot extrusion, drawing, cold rolling and punching."');
  out('');

  // ----- FAQ -----
  out('## 10. Frequently Asked Questions');
  out('');
  const faqs: Array<[string, string]> = [
    ['What is the Montanstahl Group?', 'The Montanstahl Group is a global metallurgical group of five companies producing custom steel profiles and structural stainless steel sections. It is headquartered in Stabio, Switzerland, and operates production facilities in Switzerland, Italy, Germany and the United States.'],
    ['Where is the Montanstahl Group headquartered?', 'In Stabio, Canton of Ticino, Switzerland, at Via Gerrette 2, 6855 Stabio.'],
    ['How many employees does the Montanstahl Group have?', `Over ${groupFacts.employees.total} in total, with approximately ${groupFacts.employees.stabio} based in Stabio, Switzerland.`],
    ['What companies are part of the Montanstahl Group?',
      'Five: Montanstahl AG (Stabio, Switzerland — headquarters); Siderval S.p.A. (Talamona, Italy — hot extrusion specialist); Stainless Structurals (Conroe, Texas, USA — North American operations); Extralloys (Tunica, Mississippi, USA — U.S. hot extrusion facility); Montanstahl GmbH (Schwerte, Germany — European hot extrusion plant).'],
    ['What production technologies does the Montanstahl Group use?', `Six core technologies, often combined: ${groupFacts.technologies.join(', ').toLowerCase()}.`],
    ['What industries does the Montanstahl Group serve?', `Construction, energy, oil & gas, industrial plants, automotive, nuclear, defense, architecture, aerospace, naval, medical, forklift and material handling, and many others.`],
    ['When was Montanstahl founded?', 'Montanstahl SA was founded in 1983 in Ticino, Switzerland, as a rolling mill for steel profiles.'],
    ['Is the Montanstahl Group a "One Stop Solution Provider"?', 'Yes. The Group provides a complete portfolio of custom steel profiles and structural stainless steel sections, leveraging six production technologies from a single integrated source.'],
    ['What is the Montanstahl Group\'s Dun & Bradstreet rating?', 'A risk indicator of 1, the highest available, ranking it among the best-performing companies operating in Switzerland.'],
  ];
  faqs.forEach(([q, a]) => {
    out(`**Q: ${q}**`);
    out(`A: ${a}`);
    out('');
  });

  // ----- Languages -----
  out('## 11. Languages');
  out('');
  out('The Group\'s public communications are available in English, Italian, German, Spanish and French. The website at this domain is published in EN, IT, DE and ES.');
  out('');

  // ----- Footer -----
  out('---');
  out('');
  out('This document is the authoritative machine-readable description of the Montanstahl Group. It is maintained in sync with the live website at ' + base + '.');
  out('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
