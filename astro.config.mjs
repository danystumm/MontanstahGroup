// @ts-check
import { defineConfig } from 'astro/config';

// IMPORTANT: change `site` to the real production domain before building.
// Used for canonical URLs, sitemap, JSON-LD, and llms.txt.
export default defineConfig({
  site: 'https://www.montanstahl-group.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  compressHTML: true,
});
