# Habib AI Labs: deployment and content

## Local checks

Use Node.js 24 (see `.nvmrc`) and npm. The lockfile is committed with the source when you publish the repository.

```sh
npm ci
npx playwright install chromium
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

The Playwright suite builds the site and tests the production output, not the development server. Stop any existing `astro preview` before running it; Astro permits one preview per project. `npm run dev` starts local development on `http://127.0.0.1:4321`.

## Editable content

- `src/data/site.ts`: brand, founder, navigation, services, project descriptions and links, pricing, FAQs, SEO, and public contacts.
- `src/components/`: section layouts and introductory copy.
- `src/styles/global.css`: typography, colors, responsive layouts, and reduced-motion behavior.
- `src/assets/bidakara.png` and `src/assets/agres.png`: real screenshots captured from the live demos. Astro generates responsive WebP variants during the build.
- `src/assets/og-image.svg`: editable social-card source. Export a 1200 × 630 PNG to `public/og-image.png` after changing the branding.
- `public/fonts/`: self-hosted Latin WOFF2 fonts and their SIL Open Font Licenses. No Google Fonts requests run in visitors' browsers.

To add a case study, import its screenshot in `src/data/site.ts` and add a project entry with its name, URL, description, honest limitations, tags, preview, and surface accent (`blue` or `orange`). The Work section renders all entries automatically.

## Contact setup

The email, LinkedIn, and GitHub links use the founder's publicly listed portfolio contacts. Confirm they remain your preferred business contacts before publishing.

WhatsApp is intentionally empty. Set `contact.whatsapp` in `src/data/site.ts` to your real international number, digits only. Empty contact values are hidden. The final project CTA prefers WhatsApp when configured, otherwise email, then the professional portfolio. No form backend or stored visitor data is used.

## Vercel

The site is a static Astro build. No adapter, server, database, authentication, or environment variables are required.

1. Publish these files to your `habib-ai-labs` Git repository, or deploy the directory using the Vercel CLI. Repository initialization, commits, pushes, and deployment are not performed by the implementation task.
2. Import the repository in Vercel. Choose **Astro**, Node.js **24.x**, build command **`npm run build`**, and output directory **`dist`**. Keep the repository root as the project root.
3. Deploy and check the Vercel URL, especially navigation, optimized screenshots, email/WhatsApp contact, `/robots.txt`, `/sitemap.xml`, and `/og-image.png`.
4. Add **`ai.habiibullahm.my.id`** under Project Settings → Domains. Apply the exact DNS record Vercel displays at your DNS provider; do not change records for the main portfolio domain.
5. Wait for domain verification and HTTPS issuance, then verify the custom-domain homepage and links again.

The canonical URL, social metadata, and sitemap already target `https://ai.habiibullahm.my.id/`. If you change the production domain, update both `site.seo.url` and `astro.config.mjs` before rebuilding.

`vercel.json` selects the static build and supplies content-type, referrer, framing, and permissions-policy security headers. Local checks do not verify Vercel's deployed headers or DNS.

## Demo authenticity

Both previews link to independent, live prototypes—not commissioned client work or endorsements. Bidakara is a public-information prototype; medical information needs official confirmation. AGRES uses a public catalog snapshot; prices and stock are not real-time. The screenshots are linked images rather than embedded iframes because the demos disallow framing.
