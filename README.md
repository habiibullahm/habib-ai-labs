# Habib AI Labs

Astro site for Habib AI Labs, Muhammad Habiibullah's independent AI product studio. The homepage covers AI assistants, RAG, automation, and custom integrations, and lists live project demos (Bidakara, AGRES, Nibie).

Live: https://ai.habiibullahm.my.id

## Stack

- Astro (static output)
- Tailwind CSS 4 (`@tailwindcss/vite`)
- TypeScript
- Lucide (`@lucide/astro`)

npm is the package manager (`package-lock.json`). Node.js 24 is required (`.nvmrc`, `package.json` `engines`).

## Run locally

```sh
npm ci
npm run dev
```

`npm run dev` is `astro dev --host 127.0.0.1`.

```sh
npm run build
```

`npm run build` is `astro build`.

## Tests

There is no unit-test script. Playwright is the test suite:

```sh
npx playwright install chromium
npm test
```

`npm test` runs `playwright test`. The Playwright config builds the site and serves it with `npm run preview` on port 4321.
