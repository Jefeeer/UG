# Underground Fitness — website

Landing page for Underground Fitness, an iron gym on Emilio Aguinaldo Highway, Dasmariñas, Cavite.
Live: https://undergroundfitness.vercel.app

Next.js 16 (App Router), Tailwind CSS v4, motion, a single font (Archivo, variable width).

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
node --experimental-strip-types src/lib/manila.test.ts   # opening-hours self-check
```

## Edit content

Everything the owner changes lives in **`src/content/site.ts`**: hours, phone, links, rates, zones, review themes.

- **Rates:** set `price` to a number (e.g. `price: 1500`) and the scoreboard shows `₱1,500`. Leave it `null` and it shows "ASK" plus a "Get today's rate" Messenger button.
- **Hours:** `hours.open` / `hours.close` are 24h Manila time. `hours.days` uses 0 = Sunday … 6 = Saturday. The "Open now" badge and the "Today" row update automatically.
- Anything still missing shows a dashed gold **TODO** badge in `pnpm dev` only. Production never shows it.

## Swap photos

Put new images in `public/photos/` and point to them from `site.ts` (zones) or the section files in `src/components/sections/`.
The supplied photos carry a "UG" watermark in the bottom ~20%. `components/ui/Photo.tsx` always crops it out by pinning images to the top.
Photos without a watermark work the same way.

## Deploy (Vercel)

Pushing to `main` deploys automatically once the GitHub repo is connected to the Vercel project.
For a manual deploy: `vercel --prod`. If you add a custom domain, update `url` in `site.ts`, which canonical URLs, the sitemap and JSON-LD all use.

## Still needed from the gym owner

- [ ] Rates: walk-in, monthly, student, coaching (`site.rates`)
- [ ] Confirm opening days. The poster says 6AM–11PM "normal hours", so the site currently says daily.
- [ ] Logo as SVG. The site currently uses a type-only wordmark (`components/ui/Wordmark.tsx`).
- [ ] Real member quotes, with permission (`site.testimonials`)
- [ ] OK to show the Google rating (4.6 / 46) and to add `aggregateRating` to the JSON-LD
- [ ] Coach names and photos (optional section, not built yet)
- [ ] Unwatermarked or higher-resolution photos, and any photos of people training
- [ ] Custom domain, if any
