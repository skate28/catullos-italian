# Catullo's Italian

Pitch site for Catullo's Italian, a family-owned handmade-pasta restaurant at 1650-2 San Pablo Rd S, Jacksonville, FL 32224 · (904) 240-1252.

Next.js (App Router), TypeScript, Tailwind CSS, framer-motion, lucide-react. See [ARCHITECTURE.md](./ARCHITECTURE.md) and [CONTENT_SCHEMA.md](./CONTENT_SCHEMA.md).

```bash
npm install
npm run dev
npm run lint
npm run build
```

- All business content: `src/content/site.ts` (owned by Leads). Images: `public/images/` (none yet).
- Search indexing is off (`noindex, nofollow`) until `ALLOW_INDEXING=true` is set on Vercel.
- Deployed on Vercel (team `skate28s-projects`, project `catullos-italian`), git-connected to `main`.
