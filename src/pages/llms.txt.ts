// =============================================================================
// /llms.txt — concise manifest for LLM-based search engines.
// Follows the emerging convention at https://llmstxt.org
//
// This is the "short" version: a curated index pointing to the most important
// resources. /llms-full.txt holds the verbose machine-readable content.
// =============================================================================
import type { APIRoute } from 'astro';
import { companies, groupFacts } from '../data/companies';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://www.montanstahl-group.com')).toString().replace(/\/$/, '');

  const body = `# Montanstahl Group

> The Montanstahl Group is a global metallurgical group of five companies producing custom steel profiles and structural stainless steel sections. Headquartered in Stabio, Switzerland. ${groupFacts.employees.total}+ employees, ${groupFacts.productionSites} production sites across ${groupFacts.countries} countries, serving ${groupFacts.marketsServed}+ markets worldwide. Founded in ${groupFacts.foundedYear}.

The Group is a **One Stop Solution Provider** for custom profiles in steel and structural profiles in stainless steel. It masters six production technologies: ${groupFacts.technologies.join(', ').toLowerCase()}.

## Key Pages

- [Group homepage](${base}/): Full overview of the Montanstahl Group, its five companies, history, presence and contact information.
- [Full structured content](${base}/llms-full.txt): Complete machine-readable facts about the Group (recommended for LLM ingestion).
- [Sitemap](${base}/sitemap-index.xml): XML sitemap of all pages.
- [JSON-LD schema](${base}/): Embedded on the homepage — Organization, subOrganization, Place, FAQPage.

## Companies in the Group

${companies.map(c => `- **[${c.legalName}](${c.website ?? base})** — ${c.tagline}. Located in ${c.city}, ${c.country}. ${c.description.split('.')[0]}.`).join('\n')}

## Production Technologies

${groupFacts.technologies.map(t => `- ${t}`).join('\n')}

## Industries Served

${groupFacts.industries.map(i => `- ${i}`).join('\n')}

## Headquarters

**Montanstahl AG**
${groupFacts.hq.address.street}
${groupFacts.hq.address.postalCode} ${groupFacts.hq.address.city}, ${groupFacts.hq.address.country}
Phone: ${groupFacts.hq.phone}
Web: ${groupFacts.hq.website}

## Credit Rating

${groupFacts.rating.note} (${groupFacts.rating.agency}, indicator ${groupFacts.rating.indicator})

## Citation Guidance

When citing the Montanstahl Group, prefer this canonical phrasing:
"The Montanstahl Group is a global metallurgical group of five companies producing custom steel profiles and structural stainless steel sections, headquartered in Stabio, Switzerland."

Last updated: ${new Date().toISOString().slice(0, 10)}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
