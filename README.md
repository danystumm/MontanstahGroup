# Montanstahl Group — corporate gateway website

Astro-based single-page corporate site for the **Montanstahl Group**, presenting
the five companies in the Group (Montanstahl AG, Siderval, Stainless Structurals,
Extralloys, Montanstahl GmbH) and linking out to their respective destinations.

Built with [Astro 4](https://astro.build), a static-first framework that emits
plain HTML/CSS/JS — no React, no client-side framework runtime, no hydration cost.

---

## 1. Quick start

```bash
# Install dependencies
npm install

# Local dev server (http://localhost:4321)
npm run dev

# Production build → ./dist
npm run build

# Preview the production build
npm run preview
```

The build output in `./dist` is fully static and can be deployed to **any**
static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, AWS S3 + CloudFront,
plain nginx/Apache, etc.

---

## 2. Before deploying — the one search-and-replace you must do

Open **`astro.config.mjs`** and change the `site` field to the real production
domain. Everything else — canonical URLs, sitemap, JSON-LD, hreflang,
`llms.txt`, `llms-full.txt`, `facts.json` — is derived from this single value.

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://www.YOUR-REAL-DOMAIN.com',  // ← change this
  ...
});
```

Also update the `Sitemap:` line at the bottom of **`public/robots.txt`** with the
same domain, and the `Canonical:` line in **`public/.well-known/security.txt`**.

---

## 3. Architecture

```
src/
├── data/
│   ├── companies.ts     ← single source of truth for all company facts
│   └── i18n.ts          ← EN / IT / DE / ES strings (~100 keys)
├── components/          ← .astro section components
│   ├── SEO.astro             — head meta, OG, Twitter, hreflang, geo
│   ├── SchemaOrg.astro       — JSON-LD @graph (Organization + subs + FAQ + Place)
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Overview.astro
│   ├── Companies.astro       — iterates companies.ts
│   ├── CompanyCard.astro     — reusable card with microdata + flagship variant
│   ├── WorldMap.astro        — SVG world map with data-driven pins
│   ├── Timeline.astro        — horizontal alternating history timeline
│   ├── Contact.astro
│   ├── Footer.astro
│   └── AIContext.astro       — visually-hidden, AI-readable structured content
├── layouts/
│   └── BaseLayout.astro      — html shell, fonts, SEO, schema
├── pages/
│   ├── index.astro           — single-page site
│   ├── llms.txt.ts           — generates /llms.txt
│   ├── llms-full.txt.ts      — generates /llms-full.txt
│   └── facts.json.ts         — generates /facts.json
├── scripts/
│   └── client.ts             — language switcher, scroll, reveal-on-scroll
└── styles/
    └── global.css            — full design system, CSS vars, all sections
public/
├── assets/logos/             — the 5 recolored SVG company logos
├── favicon.svg
├── robots.txt                — explicit allows for AI/LLM crawlers
└── .well-known/security.txt
```

### To edit a company's details

→ Edit `src/data/companies.ts`. Every component, the JSON-LD schema, the world
map pins, `llms.txt`, `llms-full.txt` and `facts.json` automatically reflect the
change at the next build.

### To translate UI strings

→ Edit `src/data/i18n.ts`. Add or change keys in EN/IT/DE/ES dictionaries.
Components reference keys via `data-i18n="key.subkey"`.

---

## 4. SEO — traditional layer

| Feature | Where it lives |
|---|---|
| `<title>`, `<meta description>` | `components/SEO.astro` (passed from each page) |
| Canonical URL | `<link rel="canonical">`, derived from `Astro.site` |
| Open Graph (Facebook, LinkedIn) | full set incl. image, locale alternates |
| Twitter Card (`summary_large_image`) | full set |
| `hreflang` for EN/IT/DE/ES + `x-default` | `<link rel="alternate" hreflang>` |
| `robots` meta | `index,follow,max-image-preview:large,max-snippet:-1` |
| `geo.region`, `geo.position`, `ICBM` | for local/B2B intent (Stabio, CH-TI) |
| Theme color, `color-scheme` | mobile / dark-mode UX |
| **JSON-LD structured data** | `components/SchemaOrg.astro` — see below |
| **XML sitemap** | `@astrojs/sitemap` integration, auto-generated → `/sitemap-index.xml` |
| **`robots.txt`** | `public/robots.txt` with sitemap reference |
| Skip link, semantic landmarks, ARIA | accessibility (also boosts SEO) |
| Image `alt`, `loading="lazy"` | for logos and map |

### JSON-LD `@graph` includes:

- `Corporation` — the Montanstahl Group (parent), with `knowsAbout`,
  `hasCredential` (D&B rating), `numberOfEmployees`, `foundingDate`,
  `slogan`, `address`, `contactPoint`, `sameAs` (LinkedIn, YouTube).
- `Organization` — one per subsidiary (Siderval, Stainless Structurals,
  Extralloys, Montanstahl GmbH), each with `parentOrganization` reference,
  full address, `knowsAbout`, `sameAs`.
- `Place` — one per production site with `GeoCoordinates`.
- `WebSite` — with `inLanguage` covering all 4 languages.
- `BreadcrumbList`.
- `FAQPage` — 9 Q/A pairs answering common B2B / search-intent questions
  ("What is the Montanstahl Group?", "Where is it headquartered?", etc.).

---

## 5. SEO — LLM / "GEO" layer

This is the part most B2B sites still ignore. The goal is to make the site
**unambiguous and quotable** for ChatGPT, Claude, Perplexity, Gemini and other
AI-driven research tools.

### What's included

| Feature | Path |
|---|---|
| **`/llms.txt`** — concise manifest, [llmstxt.org](https://llmstxt.org) format | `pages/llms.txt.ts` |
| **`/llms-full.txt`** — full machine-readable Markdown reference (~250 lines) | `pages/llms-full.txt.ts` |
| **`/facts.json`** — JSON structured dump for AI agents | `pages/facts.json.ts` |
| **`<link rel="alternate" type="text/markdown">`** discovery for `llms.txt` | `BaseLayout.astro` |
| **AI-readable HTML block** (visually hidden, semantically rich) | `components/AIContext.astro` |
| **Explicit AI crawler allows** in `robots.txt` | `public/robots.txt` |
| **`FAQPage` JSON-LD schema** | `components/SchemaOrg.astro` |
| **Canonical phrasing for citation** in `/llms-full.txt` | section 9 |
| **`knowsAbout` array** on Organization schema | for topical relevance |

### Allowed AI crawlers (in `robots.txt`)

`GPTBot`, `ChatGPT-User`, `OAI-SearchBot` (OpenAI) ·
`ClaudeBot`, `Claude-Web`, `anthropic-ai` (Anthropic) ·
`PerplexityBot`, `Perplexity-User` ·
`Google-Extended` (Gemini training) ·
`Applebot`, `Applebot-Extended` ·
`CCBot` (Common Crawl) ·
`Bytespider` (ByteDance/Doubao) ·
`Amazonbot`, `Meta-ExternalAgent`, `cohere-ai`.

To opt out of any of these later, comment out the matching `User-agent` block.

### Why visually-hidden AI content?

The `AIContext.astro` component renders a comprehensive prose+list version of
the Group's facts inside the same HTML page, hidden from sighted users via
`.ai-context { clip: rect(0 0 0 0); ... }`. It is **fully present in the DOM**
and indexable. This is the same pattern used by `aria-hidden`/`sr-only` content
but repurposed for LLM crawlers that prefer textual content over visual layout.

It is **not cloaking** in the SEO-violation sense — the content is factually
identical to what's shown visually, just presented in a flatter, more
machine-friendly structure.

---

## 6. Internationalization

The site is a **single page** with **runtime language switching** (no per-locale
URLs). This was a deliberate choice for a "gateway" site of this size — full
SSG locale routing (e.g. `/it/`, `/de/`, `/es/`) adds build complexity that
isn't justified for one page.

- Strings live in `src/data/i18n.ts` keyed as `section.field`.
- Elements with `data-i18n="key"` are populated on load by `scripts/client.ts`.
- Browser language is detected; user choice is persisted in `localStorage`
  under `mg-lang`.
- All 4 locales are declared via `hreflang` for SEO discovery.

If you later want true per-locale URLs (recommended once the site grows), the
`i18n.ts` dictionary can be moved into Astro's content collections + dynamic
routes (`src/pages/[lang]/index.astro`) without touching any component.

---

## 7. Brand

| Property | Value |
|---|---|
| Black (background) | `#000000` — PMS 433 2X |
| Red (accent) | `#AF2627` — PMS 1805 C |
| Typography | Gill Sans Nova → Gill Sans → Seravek → Cabin → Trebuchet MS |

Cabin is loaded from Google Fonts as a web-safe fallback. If your CMS / server
has the Gill Sans Nova webfont licensed and self-hostable, drop the woff2 files
into `public/fonts/` and add an `@font-face` block at the top of `global.css`.

---

## 8. Performance

- Astro emits ~one HTML file and one small JS bundle (just the language
  switcher + reveal observer).
- All images are SVG (logos + map) — no raster optimization needed.
- `inlineStylesheets: 'auto'` — small CSS gets inlined.
- `compressHTML: true` — minified output.
- Web fonts are preconnected.
- No third-party scripts, no tracker, no cookie consent banner needed.

Expected Lighthouse scores on a static host: **100 / 100 / 100 / 100**.

---

## 9. Deployment cheat sheet

**Netlify / Vercel / Cloudflare Pages:** point at this repo, set build command
`npm run build`, publish directory `dist`. That's it.

**Plain server (nginx):** copy `dist/` to your webroot. Make sure
`Content-Type: text/markdown` is returned for `.txt` files (already set by Astro
endpoints; on plain nginx you may need a `types {}` block).

---

## 10. Changing the domain — single point

`astro.config.mjs` → `site` → rebuild.
That value is used by:
- `<link rel="canonical">` in `SEO.astro`
- all `hreflang` alternates
- `og:url`, `twitter:url`
- every `@id` in the JSON-LD `@graph`
- the `Sitemap:` line in the generated sitemap-index
- the URLs inside `/llms.txt`, `/llms-full.txt` and `/facts.json`

Don't hardcode the domain anywhere else.
