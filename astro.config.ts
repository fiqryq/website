import { defineConfig, fontProviders } from 'astro/config'

import { figureCaption, plainCodeBlock } from './src/lib/shiki-transformers'

export default defineConfig({
  site: 'https://fiqry.dev',
  trailingSlash: 'never',
  build: {
    format: 'file',
    // Inline all CSS: no render-blocking stylesheet request before first paint.
    inlineStylesheets: 'always',
  },
  // Keep in sync with public/_redirects (used by Cloudflare for real 301s).
  redirects: {
    '/writing/how-i-setup-my-terminal': '/log/ai-coding-agents-from-the-terminal',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      transformers: [plainCodeBlock, figureCaption],
    },
  },
  // Fetched from Google Fonts at build time and served from this site.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-sans',
      weights: ['100 900'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: ['100 900'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Pixel',
      cssVariable: '--font-pixel',
      weights: [400],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
})
