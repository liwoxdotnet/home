// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // The site property should be your final deployed URL
  site: 'https://liwoxdotnet.github.io/home/',
  // Set the base path for GitHub Pages deployment
  base: '/home/',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});