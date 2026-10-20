# Catullo's Italian — architecture

Pitch site for Catullo's Italian (family-owned, handmade pasta), 1650-2 San Pablo Rd S, Jacksonville, FL 32224.
Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react · zod.
Same structure as `skate28/hana-yori` and `skate28/madame-brioche`.

## Files

| Owner | Files |
| --- | --- |
| **Leads** | `src/content/site.ts` (data only), `public/images/` |
| **Code** | `src/app/`, `src/components/`, `src/lib/`, `src/content/types.ts`, config |

Content contract: see [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md). Base types are Hana Yori's verbatim;
Catullo's additions (`signature`, `whatToExpect`, `features`, `extraLinks`, `heroKicker`) are optional.

Page order: Hero (call + directions, open/closed pill, hours arch) → signature-dish marquee → Our Story →
Menu → What to Expect → Coming Soon (feature-flagged previews) → Hours & Location (keyless Google Maps embed) → FAQ → Footer.
Phones get a sticky Call / Menu / Directions bar.

## Feature flags

`src/lib/features.ts`. Each of `textPreorders`, `waitlist`, `aiPhone` is `off | preview | live`, default
`preview`. `live` is downgraded to `preview` unless the data it needs is set (`textNumber`,
`features.waitlistUrl`, `afterHoursPhone`). No `sms:` link renders anywhere while texting is not live.

## Indexing

Off until the owner approves. Only `ALLOW_INDEXING=true` enables it. Otherwise `robots.txt` disallows `/`,
metadata robots is `noindex, nofollow`, and every response sends `X-Robots-Tag: noindex, nofollow`.

## Deploy

Vercel project `catullos-italian` in team `skate28s-projects`, git-connected to `skate28/catullos-italian`
(pushes to `main` deploy to production). Next.js preset, repo root, no env vars required.
