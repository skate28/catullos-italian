# Content schema — Catullo's Italian

For **Leads** (content). You own `src/content/site.ts` and `public/images/`. You can replace
`site.ts` wholesale; components never hard-code business copy, prices, hours or photos.

- Types: `src/content/types.ts`. The base `SiteContent` shape is **identical to Hana Yori's**
  (same field names), so a Hana-Yori-style `site.ts` type-checks here. Catullo's additions are all
  **optional** and listed at the bottom of `types.ts`.
- `site.ts` must stay **data only**: `export const site: SiteContent = { ... }`. Helpers like
  `textTarget` / `callTarget` live in `src/lib/phones.ts` (you may still export them from `site.ts`;
  nothing imports them from there).
- Empty strings / empty arrays / `null` hide the matching UI. Never invent a value to fill a gap.
- Mark anything you could not confirm with `// TODO(Leads): verify`.

## Rules

- **Never claim** reservations, texting, online ordering, delivery, or anything else not verified.
  The restaurant is walk-in only and call-first.
- No AI-generated or stock photos of the food or restaurant. No hotlinked/scraped Yelp/Google photos.
  Owner-approved images only, saved in `public/images/` and referenced as `/images/<file>`.
- No owner/staff personal names, personal emails, or photo-source URLs anywhere in `site.ts`
  (it ships in the client bundle). Photo `credit` is a key only; keep source URLs in
  `/workspace/catullos/` notes.
- Testimonials need a real `sourceUrl` and the owner's OK, or they are not shown.

## Base fields (same as Hana Yori)

| Field | Type | Renders as | Empty → |
| --- | --- | --- | --- |
| `name` | string | Wordmark (first word big italic, rest small caps), titles | — required |
| `tagline` | string | Hero subline, footer | hidden |
| `description` | string | Meta description fallback, JSON-LD | — |
| `opened` | string, e.g. `"2019"` | "Since 2019" eyebrow, footer "Est." | hidden |
| `address.*`, `address.full` | strings | Hero, Visit, footer, map embed, JSON-LD | — |
| `locationHint` | string | Line under the address in Visit | hidden |
| `geo.latitude/longitude` | number \| null | Map pin + JSON-LD. Null → map searches name + address | address embed |
| `mapUrl` | URL | All "Get directions" buttons | buttons hidden |
| `phone` | `{display, tel, e164}` | Every call button (primary CTA everywhere) | — required |
| `afterHoursPhone` | PhoneNumber \| null | Used only when `features.aiPhone = "live"` | preview only |
| `textNumber` | PhoneNumber \| null | Used only when `features.textPreorders = "live"` | no `sms:` links anywhere |
| `closedNotice` | string | Reserved for closed-state copy | — |
| `hours.byDay` | per-day `{openTime, closeTime, closed?}` 24h `"HH:MM"` | Open/closed pill, hero hours arch, hours table (today highlighted), "Doors open at…" line, JSON-LD | rows hidden |
| `hours.summary` | string | Pill fallback, footer | "Hours coming soon" |
| `priceRange`, `paymentNote` | string | Small line in Visit | hidden |
| `orderingLinks[]` | `{label, href, kind}` | Not rendered as an ordering flow. Keep **empty** unless the owner confirms a live link | — |
| `socials[]` | `{label, href}` | Footer links + JSON-LD `sameAs` | hidden |
| `rating` | `{value, count, source}` \| null | Small chip in the hero (not in JSON-LD) | hidden |
| `testimonials[]` | quote + `sourceUrl` | (not rendered in v1) | — |
| `faq[]` | `{question, answer}` | FAQ accordion | section hidden |
| `menuNote` | string | Under the menu heading | hidden |
| `menu[]` | categories → items | Menu card (two balanced columns), marquee ribbon, JSON-LD menu | section hidden |
| `menu[].items[].price` | number (dollars) | Gold price with dotted leader. **Leave unset unless verified** | price omitted |
| `…priceFrom` | boolean | Renders "from $18.90" | — |
| `…isNew` | boolean | Small "New" tag | — |
| `…placeholder` | boolean | Item hidden | — |
| `photos[]`, `heroImage` | `{src, alt, category, credit, width?, height?, hero?}` | Hero arch photo (replaces the hours arch), up to 2 interior/food photos in Our Story | typographic design, no photos |
| `palette` | 8 hex colors | CSS variables. Roles here: `ink` text, `brand` terracotta buttons, `brandDeep` hover, `accent` olive, `salmon` antique gold (prices), `nori` deep wine bands, `rice` cream page, `paper` cards | fallbacks in `globals.css` |
| `about.heading` / `about.paragraphs[]` | strings | Our Story. Paragraph 0 = lead with drop cap; later paragraphs become numbered cards, title = text before the first `:` | section hidden |
| `preorder.*` | heading/intro/textButtonLabel/textMessage/maxDaysAhead | Copy for the "Text-ahead pre-orders" coming-soon card | defaults |
| `customOrders` | optional | Not rendered in v1 | — |
| `seo.title/description` | strings | `<title>`, meta, Open Graph | falls back to name/description |
| `footerCredit` | string | **Last footer line**, always linked to https://nicklopacki.com | "Built by nicklopacki.com" |

## Catullo's extensions (all optional)

| Field | Type | Renders as | Absent → |
| --- | --- | --- | --- |
| `menu[].items[].signature` | boolean | "Favorite" tag in the menu, "The ones people line up for" cards in Our Story, marquee ribbon | first menu items used in ribbon; cards hidden |
| `whatToExpect` | `{heading, intro, typicalWait, items[{title, body}]}` | Dark "What to expect" band with big wait callout + cards. Also adds "Walk-in only, no reservations" under hero CTAs and `acceptsReservations: false` in JSON-LD | section hidden |
| `features.textPreorders` | `"off" \| "preview" \| "live"` | Coming-soon card. `live` only works if `textNumber` (or an `sms` ordering link) is set | `"preview"` |
| `features.waitlist` | same | Coming-soon card. `live` needs `features.waitlistUrl` | `"preview"` |
| `features.aiPhone` | same | Coming-soon card. `live` needs `afterHoursPhone` | `"preview"` |
| `features.waitlistUrl` | URL | Button on the live waitlist card | — |
| `extraLinks[]` | `{label, href}` | Footer links (e.g. eGift cards) | hidden |
| `heroKicker` | string | Small caps line above the hero title | hidden |

`"preview"` = clearly labeled **Coming soon** card with an "example only" bubble and a disabled
"Not available yet" button, plus a note that today there are no reservations, texting or online
ordering. Set a feature to `"live"` only after the restaurant really offers it.
If every feature is `"off"`, the whole Coming Soon section and its nav link disappear.
