// ---------------------------------------------------------------------------
// SEO / Structured-data module
//
// Produces a single JSON-LD @graph that surfaces:
//   - The parent Organization (Montanstahl Group / Montanstahl AG as HQ)
//   - Each subsidiary as its own Organization with subOrganization linkage
//   - Each physical site as a Place with geo coordinates
//   - The website itself (WebSite)
//   - BreadcrumbList for SERP breadcrumbs
//   - FAQPage from the FAQ data
//
// This graph is consumed by Google, Bing, and increasingly by LLM crawlers
// to ground entity facts. Keep IDs stable — they form the identity graph.
// ---------------------------------------------------------------------------

import { COMPANIES, GROUP_INFO, FAQS } from './companies';

export function buildOrganizationGraph(siteUrl: string) {
  const trimmedSite = siteUrl.replace(/\/$/, '');

  // ---------- Subsidiary Organizations + Places ----------
  const subsidiaries = COMPANIES.map((c) => {
    const orgId = `${trimmedSite}/#org-${c.id}`;
    const placeId = `${trimmedSite}/#place-${c.id}`;
    const orgType = c.id === 'montanstahl-ag' ? 'Corporation' : 'Organization';

    const sameAs: string[] = [];
    if (c.website) sameAs.push(c.website);
    if (c.linkedin) sameAs.push(c.linkedin);
    if (c.youtube) sameAs.push(c.youtube);

    const org: Record<string, unknown> = {
      '@type': orgType,
      '@id': orgId,
      name: c.legalName,
      alternateName: c.displayName,
      description: c.notableFact,
      url: c.website || `${trimmedSite}/#${c.slug}`,
      logo: `${trimmedSite}${c.logo}`,
      ...(sameAs.length ? { sameAs } : {}),
      parentOrganization: { '@id': `${trimmedSite}/#org` },
      location: { '@id': placeId },
      ...(c.specialties?.length
        ? { knowsAbout: c.specialties }
        : {}),
    };

    if (c.phone) {
      org.contactPoint = {
        '@type': 'ContactPoint',
        telephone: c.phone,
        contactType: 'sales',
        availableLanguage: ['en', 'it', 'de'],
      };
    }

    const place: Record<string, unknown> = {
      '@type': 'Place',
      '@id': placeId,
      name: `${c.displayName} — ${c.city}, ${c.country}`,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: c.geo.lat,
        longitude: c.geo.lon,
      },
    };
    if (c.address) {
      place.address = {
        '@type': 'PostalAddress',
        streetAddress: c.address.street,
        postalCode: c.address.postalCode,
        addressLocality: c.address.locality,
        addressCountry: c.countryCode,
      };
    } else {
      place.address = {
        '@type': 'PostalAddress',
        addressLocality: `${c.city}${c.region ? ', ' + c.region : ''}`,
        addressCountry: c.countryCode,
      };
    }

    return { org, place };
  });

  // ---------- Parent Organization (the Group) ----------
  const subOrgRefs = subsidiaries.map((s) => ({ '@id': s.org['@id'] }));
  const groupOrg = {
    '@type': 'Corporation',
    '@id': `${trimmedSite}/#org`,
    name: GROUP_INFO.legalName,
    alternateName: GROUP_INFO.displayName,
    description: GROUP_INFO.description,
    url: trimmedSite,
    logo: `${trimmedSite}/logos/montanstahl.svg`,
    foundingDate: GROUP_INFO.founded,
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: GROUP_INFO.employees,
      unitText: 'employees',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: GROUP_INFO.hqAddress.street,
      postalCode: GROUP_INFO.hqAddress.postalCode,
      addressLocality: GROUP_INFO.hqAddress.locality,
      addressRegion: GROUP_INFO.hqAddress.region,
      addressCountry: GROUP_INFO.hqAddress.countryCode,
    },
    location: {
      '@type': 'Place',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: GROUP_INFO.hqGeo.lat,
        longitude: GROUP_INFO.hqGeo.lon,
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: GROUP_INFO.hqPhone,
      contactType: 'customer service',
      availableLanguage: ['en', 'it', 'de', 'es'],
    },
    sameAs: [
      GROUP_INFO.hqWebsite,
      'https://www.linkedin.com/company/montanstahl-ag/',
      'https://www.youtube.com/@MontanstahlAG',
      'https://www.instagram.com/montanstahl/',
    ],
    knowsAbout: [
      ...GROUP_INFO.productionTechnologies,
      'Stainless steel structural profiles',
      'Custom steel profiles',
      'Special steel profiles',
      ...GROUP_INFO.industriesServed,
    ],
    subOrganization: subOrgRefs,
    award: GROUP_INFO.dbRatingNote,
  };

  // ---------- WebSite ----------
  const website = {
    '@type': 'WebSite',
    '@id': `${trimmedSite}/#website`,
    url: trimmedSite,
    name: GROUP_INFO.displayName,
    description: GROUP_INFO.description,
    inLanguage: ['en', 'it', 'de', 'es'],
    publisher: { '@id': `${trimmedSite}/#org` },
  };

  // ---------- BreadcrumbList ----------
  const breadcrumbs = {
    '@type': 'BreadcrumbList',
    '@id': `${trimmedSite}/#breadcrumbs`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: trimmedSite },
    ],
  };

  // ---------- FAQPage ----------
  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${trimmedSite}/#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  // ---------- Final @graph ----------
  return {
    '@context': 'https://schema.org',
    '@graph': [
      groupOrg,
      ...subsidiaries.flatMap((s) => [s.org, s.place]),
      website,
      breadcrumbs,
      faqPage,
    ],
  };
}
