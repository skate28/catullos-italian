import type { PhoneNumber, SiteContent } from "@/content/types";

/**
 * Catullo's Italian (San Pablo Rd only) — the only editable content file. Data only.
 *
 * Shapes: src/content/types.ts in skate28/catullos-italian (copied verbatim to
 * handoff/types.reference.ts). See CONTENT_SCHEMA.md for what each field renders.
 * Mark anything unconfirmed `// TODO(Leads): verify`. No owner/staff names, emails or photo-source URLs.
 *
 * Location: ONLY 1650-2 San Pablo Rd S, Jacksonville, FL 32224. The Nocatee location closed June 2026
 * (Florida Times-Union); the downtown pizzeria closed 2021; "Catullo" restaurants in Italy are unrelated.
 * NEVER link catullos-italian[.]club (phishing copycat, Jan 2025) or any aggregator / mirror page.
 *
 * Prices: OMITTED everywhere. The restaurant's own Heartland online menu (read 2026-10-20) shows
 * prices well above Yelp / eniplaces (e.g. Pear Fiocchi $29.90 vs $18.90 on Yelp); Yelp and eniplaces
 * agree only because both repeat an old menu. Each item carries the Heartland price as a comment so the
 * owner can confirm in one pass. TODO(Leads): owner confirms prices, then set `price`.
 * Item names and descriptions come from that same Heartland menu (lightly edited, nothing added).
 *
 * Ordering: online ordering has been disabled since Jan 2025 (Heartland page: "Online ordering is
 * currently disabled. Please contact the restaurant to place an order."). Call-first, walk-in only,
 * no reservations, no texting. `features` are pitch previews only.
 *
 * Photos: real customer photos from the restaurant's own Google Maps listing (downloaded, not
 * hotlinked) + its logo. Pitch use only until the owner approves; sources in photo-sources.md.
 */

export const site: SiteContent = {
  name: "Catullo's Italian",
  // Built from verified facts (fresh egg pasta made in-house, family business that started as a
  // food truck). TODO(Leads): owner approval.
  tagline: "Handmade pasta from a Jacksonville family kitchen.",
  description:
    "Catullo's Italian is a family-run Italian restaurant at 1650-2 San Pablo Rd S, Jacksonville, FL 32224, serving fresh egg pasta made in-house, nightly specials, Italian wines and house desserts. Dinner Monday–Thursday 5–9 PM, Friday 5–10 PM, Saturday 4–10 PM; closed Sunday. First come, first served. Call (904) 240-1252 for takeout.",
  // Food truck first, then this restaurant opened February 2019 (Florida Times-Union 2019-03-28,
  // First Coast News). Owner names are in press coverage; keep them off the site.
  opened: "2019",

  address: {
    street: "1650-2 San Pablo Rd S",
    // Google Maps lists "Floor 1 · Village Shoppes At San Pablo"; the unit number is the "-2".
    suite: "",
    // Florida Times-Union: "Intracoastal West". Yelp: "Greater Arlington".
    neighborhood: "Intracoastal West",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32224",
    country: "US",
    full: "1650-2 San Pablo Rd S, Jacksonville, FL 32224",
  },
  // Google Maps ("Village Shoppes At San Pablo"); Times-Union 2019 ("near Atlantic Boulevard and San
  // Pablo Road in the Walmart Neighborhood Market-anchored Village Shoppes of San Pablo") and 2026.
  // Free parking lot: Google attributes (via listings). TODO(Leads): owner confirms wording.
  locationHint: "In the Village Shoppes of San Pablo, near Atlantic Blvd and San Pablo Rd. Free parking lot.",

  // Google pin (feature 0x88e44b805abce621:0xa057f545bc67161e); Heartland POS lists 30.318712, -81.450210.
  geo: {
    latitude: 30.3187119,
    longitude: -81.4502102,
  },
  // Google place_id ChIJIea8WoBL5IgRHhZnvEX1V6A (decodes to the feature id above; CID 11553973048904717854).
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Catullo%27s+Italian+1650-2+San+Pablo+Rd+S+Jacksonville+FL+32224&query_place_id=ChIJIea8WoBL5IgRHhZnvEX1V6A",

  phone: {
    display: "(904) 240-1252",
    tel: "tel:+19042401252",
    e164: "+19042401252",
  },

  // TODO(Leads): set once an AI answering line is live (pitch: answer calls before 5 PM, Sundays and
  // after close; a 2019 review said the line "goes straight to a recording").
  afterHoursPhone: null,
  // TODO(Leads): confirm the restaurant line can receive texts before showing any "Text us" button.
  textNumber: null,

  closedNotice:
    "We're closed right now. Dinner is Monday–Thursday 5–9 PM, Friday 5–10 PM and Saturday 4–10 PM. Closed Sundays.",

  // Monday OPEN 5–9 PM. Evidence (2026): Florida Times-Union June 2026 ("open Monday through Friday at
  // 5 p.m. and Saturday at 4 p.m. ... closed on Sundays"); Yelp claimed listing (owner-managed) Mon 5–9;
  // Google-derived hours (Wanderlog, Google Maps today-view consistent); Apple Maps; Zmenu (updated
  // 2026-09-11); Eater; Visit Jacksonville; restaurant's own Heartland page (Mon–Fri hours).
  // Only eniplaces (third-party mirror) and a May 2024 aggregator say Monday closed: stale.
  // Facebook posts need login: TODO(Leads): glance at recent FB posts / ask owner to confirm.
  hours: {
    timezone: "America/New_York",
    summary: "Mon–Thu 5–9 PM · Fri 5–10 PM · Sat 4–10 PM · Closed Sunday",
    openTime: null,
    closeTime: null,
    byDay: {
      mon: { openTime: "17:00", closeTime: "21:00" },
      tue: { openTime: "17:00", closeTime: "21:00" },
      wed: { openTime: "17:00", closeTime: "21:00" },
      thu: { openTime: "17:00", closeTime: "21:00" },
      fri: { openTime: "17:00", closeTime: "22:00" },
      sat: { openTime: "16:00", closeTime: "22:00" },
      sun: { openTime: null, closeTime: null, closed: true },
    },
    // TODO(Leads): holiday closures (a 2024 listing showed Labor Day closed) and last-seating time.
  },

  // Yelp "$$". Current entrées run $22.90–49.90, so the owner may prefer "$$–$$$". TODO(Leads): confirm.
  priceRange: "$$",
  // Heartland order confirmation text: "we provide a discount when you pay with cash", so menu prices
  // are likely card prices. TODO(Leads): confirm before showing a payment / cash-discount note.
  paymentNote: "",

  // EMPTY on purpose. Online ordering disabled since Jan 2025 (still disabled 2026-10-20). Takeout is by
  // phone or at the bar (owner Yelp answer; Jan 2025 notice). No DoorDash / Uber Eats / Grubhub store found.
  // TODO(Leads): add a link only if the owner re-enables online ordering.
  orderingLinks: [],

  // Facebook: the website on the restaurant's Google listing, Apple Maps and Eater; page title
  // "Catullo's Italian | Jacksonville FL", food-truck-to-restaurant bio (read 2026-10-20). Verified.
  // Instagram @catullos_italian ("Catullo's Italian", 18K followers) is linked only by aggregator pages,
  // not by a first-party source. TODO(Leads): verify (needs browser check / owner), then add.
  socials: [{ label: "Facebook", href: "https://www.facebook.com/catullositalian/" }],

  // Google 4.7 from 1,121 reviews (Google Maps, read 2026-10-20).
  // Others: Yelp 4.6 (669, claimed), Tripadvisor 4.6 (68). TODO(Leads): re-check before launch.
  rating: {
    value: 4.7,
    count: 1121,
    source: "Google",
  },

  // Not rendered in v1. Real quotes only, verbatim ("…" marks a trim), names exactly as the platform shows them.
  // Google texts/names: Google reviews republished on third-party mirror pages (see research_brief.md §3).
  // Staff names in reviews were trimmed out. TODO(Leads): get the owner's OK before publishing.
  // Emptied until the owner approves quoting reviews (reviewer names/URLs were reaching the bundle).
  testimonials: [],

  // Verified answers only.
  // TODO(Leads): owner-only FAQs: catering / large orders (owner says case-by-case; listings conflict),
  // whole party present before seating (one 2026 Google review says so), corkage / BYOB (one unverified "$15 corkage" mention), split-plate fee ($3 per an older owner Q&A
  // answer), whether the host texts you when your table is ready, gift cards, gluten-free pasta.
  faq: [
    {
      question: "Do you take reservations?",
      answer:
        "No. Seating is first come, first served, at the tables and at the bar.",
    },
    {
      question: "When should I get there?",
      answer:
        "We open at 5 PM Monday through Friday and 4 PM on Saturday. We're a small dining room, so guests often line up before we open, especially on weekends. If there's a wait, the bar is a good place to start.",
    },
    {
      question: "What are your hours?",
      answer:
        "Monday–Thursday 5–9 PM, Friday 5–10 PM and Saturday 4–10 PM. We're closed on Sundays.",
    },
    {
      question: "Can I order takeout?",
      answer: "Yes. Call (904) 240-1252 or place your order at the bar.",
    },
    {
      question: "Do you serve alcohol?",
      answer:
        "We serve beer and wine, including Italian wines by the glass and bottle and our wine-based house cocktails. We don't serve liquor.",
    },
    {
      question: "Do you have a kids' menu?",
      answer: "Yes. Kids can have fresh pappardelle with butter, marinara, Alfredo or rosato, or a kids' ravioli.",
    },
    {
      question: "Do you have vegetarian dishes?",
      answer:
        "Yes. Try the Fried Mozzarella, Arancini, Burrata, Bruschetta, Ravioli, Gnocchi Catullo, Pasta Del Ponente or the Garganelli with cauliflower, saffron and raisins. Pear Fiocchi can be made without the prosciutto.",
    },
    {
      question: "Is there parking?",
      answer: "Yes. There's a free parking lot at the Village Shoppes of San Pablo.",
    },
  ],

  menuNote:
    "Ask about tonight's specials: they rotate and often sell out. Most entrées can be made fra diavolo (spicy). Call (904) 240-1252 for current prices and takeout.",

  // Restaurant's own Heartland online menu (section names, item names, descriptions and prices verbatim
  // except light punctuation fixes), read 2026-10-20. Add-on prices are the menu's modifier prices.
  // Older prices elsewhere: see research_brief.md §2. TODO(Leads): owner confirms every price.
  menu: [
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        { id: "fried-mozzarella", name: "Fried Mozzarella", description: "Hand-cut, breaded and fried whole-milk mozzarella, served with our marinara on the side." }, // price omitted (unconfirmed). Own Heartland menu: $13.90
        { id: "meatballs-garlic-sauce", name: "Meatballs with Garlic Sauce", description: "Our take on a more “exotic” meatball, using spices from around the world, served over a roasted garlic cream sauce." }, // price omitted (unconfirmed). Own Heartland menu: $13.90
        { id: "arancini", signature: true, name: "Arancini", description: "Calabrian chili and Parmigiano risotto stuffed with tangy fresh goat cheese, hand-rolled into “little oranges,” breaded and fried, served over our marinara." }, // price omitted (unconfirmed). Own Heartland menu: $14.90
        { id: "burrata", name: "Burrata", description: "Fresh mozzarella stuffed with stracciatella on a bed of basil pesto greens, with Mike’s Hot Honey on the side." }, // price omitted (unconfirmed). Own Heartland menu: $16.90
        { id: "bruschetta", name: "Ma’s Bruschetta", description: "Tomatoes, kalamata olives, basil and capers, served with sliced baguette." }, // price omitted (unconfirmed). Own Heartland menu: $12.90
        { id: "cozze-speck", name: "Cozze alla Marinara con Speck", description: "Blue mussels in our house marinara with Speck from Alto Adige, white wine, garlic and flat-leaf parsley, finished with Pecorino Romano and Parmesan, served with sliced ciabatta." }, // price omitted (unconfirmed). Own Heartland menu: $19.90
        { id: "side-salad", name: "Side Salad", description: "With our house-made white balsamic vinaigrette." }, // price omitted (unconfirmed). Own Heartland menu: $6.90
      ],
    },
    {
      id: "entrees",
      name: "Entrées",
      description: "Our pasta is fresh egg pasta made in-house.",
      items: [
        { id: "pear-fiocchi", signature: true, name: "Pear Fiocchi", description: "“Little purses” of fresh egg pasta stuffed with fresh pear, taleggio, robiola and grana padano, in a caramelized pear, gorgonzola and goat cheese cream sauce, finished with fried Prosciutto di Parma." }, // price omitted (unconfirmed). Own Heartland menu: $29.90
        { id: "creamy-chicken-pesto", signature: true, name: "Creamy Chicken Pesto", description: "A food truck favorite! Sautéed chicken breast in our creamy basil pesto sauce with crumbled bacon, tossed with fresh egg garganelli." }, // price omitted (unconfirmed). Own Heartland menu: $27.90
        { id: "sunday-suppa", name: "Sunday Suppa", description: "Our spin on spaghetti and meatballs: fresh egg pappardelle tossed with our marinara, with two meatballs on the side. We can make it with butter, aglio e olio, or spicy." }, // price omitted (unconfirmed). Own Heartland menu: $23.90
        { id: "lasagna", signature: true, name: "Lasagna", description: "Layers of fresh egg pasta with marinara, ground beef, pork, mozzarella, Parmigiano, Romano and our house ricotta mix, baked to perfection." }, // price omitted (unconfirmed). Own Heartland menu: $22.90
        { id: "ravioli", name: "Ravioli", description: "Fresh egg pasta stuffed with ricotta, mascarpone, Parmesan and mozzarella. Choose marinara, butter or aglio e olio, or Alfredo, rosato, Catullo, creamy pesto, sun-dried tomato pesto or arrabbiata." }, // price omitted (unconfirmed). Own Heartland menu: $21.90
        { id: "shrimp-rosato", name: "Shrimp Rosato", description: "Sautéed jumbo Mayport shrimp in our silky rosato sauce, tossed with fresh egg pappardelle." }, // price omitted (unconfirmed). Own Heartland menu: $29.90
        { id: "shrimp-fra-diavolo", name: "Shrimp Fra Diavolo", description: "Sautéed jumbo Mayport shrimp in a spicy marinara, tossed with fresh egg pappardelle." }, // price omitted (unconfirmed). Own Heartland menu: $29.90
        { id: "sausage-peppers", name: "Sausage & Peppers", description: "Sliced Catullo's Italian sausage sautéed with green bell peppers, onions and marinara, with fresh egg garganelli." }, // price omitted (unconfirmed). Own Heartland menu: $27.90
        { id: "gnocchi-catullo", name: "Gnocchi Catullo", description: "Fluffy potato gnocchi in our fresh sage and Calabrian chili Alfredo sauce." }, // price omitted (unconfirmed). Own Heartland menu: $22.90
        { id: "pasta-del-ponente", name: "Pasta Del Ponente", description: "A hearty sauce of marinated artichoke hearts, porcini mushrooms, Italian parsley, tomatoes, garlic and white wine." }, // price omitted (unconfirmed). Own Heartland menu: $24.90
        { id: "garganelli-cavolfiori", name: "Garganelli con Cavolfiori, Zafferano e Uvetta", description: "Caramelized cauliflower, sautéed onions, golden raisins, saffron, tomato purée and ricotta, finished with toasted pine nuts and breadcrumbs." }, // price omitted (unconfirmed). Own Heartland menu: $25.90
        { id: "porcini-tortelloni", name: "Porcini Mushroom Tortelloni", description: "Porcini-filled tortelloni with a beef broth and red wine reduction." }, // price omitted (unconfirmed). Own Heartland menu: $26.90
        { id: "peposo", name: "Peposo", description: "A Tuscan classic from the hills of Impruneta: peppered stewed beef, tomatoes and garlic with hints of rosemary and basil, over a thick slice of toasted Italian bread." }, // price omitted (unconfirmed). Own Heartland menu: $25.90
        { id: "pollo-guazzetto", name: "Pollo al Guazzetto", description: "Pan-fried chicken thighs baked in marinara, then sautéed with balsamic, white wine, chicken stock, cherry peppers, bacon, clove, rosemary and onion, with fresh egg garganelli tossed in the pan sauce." }, // price omitted (unconfirmed). Own Heartland menu: $27.90
        { id: "vongole-nero", name: "Pappardelle con Vongole Nero", description: "Local fresh clams with white wine and black garlic, tossed with fresh egg pappardelle." }, // price omitted (unconfirmed). Own Heartland menu: $32.90
        { id: "lasagna-genovese", name: "Lasagna dell’Impostore Genovese", description: "Fresh egg pasta layered with besciamella, Genovese ragù (beef and onion cooked down in white wine), fresh mozzarella, smoked blue cheese, ricotta and semi-dried tomatoes, finished with besciamella, Pecorino Romano and Parmesan and a balsamic glaze. Truffle-infused Sicilian EVOO can be added." }, // price omitted (unconfirmed). Own Heartland menu: $33.90
        { id: "vitello-risotto", name: "Vitello e Risotto al Pomodoro", description: "Hand-breaded veal top round cutlet over our Calabrian chili risotto with marinara and taleggio folded in, with lemon and a Pecorino Romano/Parmesan blend." }, // price omitted (unconfirmed). Own Heartland menu: $34.90
        { id: "sea-scallop-risotto", name: "Sea Scallop Risotto", description: "Pan-seared U10 sea scallops over our Calabrian chili risotto." }, // price omitted (unconfirmed). Own Heartland menu: $47.90
        { id: "pappardelle-limone-tartufo", name: "Pappardelle al Limone e Tartufo", description: "Fresh egg pappardelle in a creamy black truffle sauce, topped with four pan-seared U10 sea scallops and finished with lemon-infused EVOO." }, // price omitted (unconfirmed). Own Heartland menu: $49.90
      ],
    },
    {
      id: "add-ons",
      name: "Add-Ons",
      description: "Add a protein to most entrées. Ask us for prices.",
      items: [
        { id: "add-meatball", name: "Meatball" }, // price omitted (unconfirmed). Own Heartland menu: $4.00
        { id: "add-bacon", name: "Bacon" }, // price omitted (unconfirmed). Own Heartland menu: $5.00
        { id: "add-prosciutto", name: "Prosciutto" }, // price omitted (unconfirmed). Own Heartland menu: $6.00
        { id: "add-chicken", name: "Chicken" }, // price omitted (unconfirmed). Own Heartland menu: $7.00
        { id: "add-pancetta", name: "Pancetta" }, // price omitted (unconfirmed). Own Heartland menu: $7.00
        { id: "add-sausage", name: "Sausage" }, // price omitted (unconfirmed). Own Heartland menu: $8.00
        { id: "add-shrimp-4", name: "Shrimp (4)" }, // price omitted (unconfirmed). Own Heartland menu: $8.00
        { id: "add-shrimp-8", name: "Shrimp (8)" }, // price omitted (unconfirmed). Own Heartland menu: $15.00
        { id: "add-peposo", name: "Peposo Beef" }, // price omitted (unconfirmed). Own Heartland menu: $12.00
        { id: "add-scallops-2", name: "Sea Scallops (2)" }, // price omitted (unconfirmed). Own Heartland menu: $19.00
        { id: "add-scallops-4", name: "Sea Scallops (4)" }, // price omitted (unconfirmed). Own Heartland menu: $37.00
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        { id: "cannoli", name: "Cannoli", description: "Crisp pastry filled with vanilla ricotta, topped with pistachios and chocolate." }, // price omitted (unconfirmed). Own Heartland menu: $11.90
        { id: "limoncello-mascarpone-cake", name: "Limoncello Mascarpone Cake", description: "Limoncello-soaked cake layered with mascarpone and topped with shaved white chocolate." }, // price omitted (unconfirmed). Own Heartland menu: $11.90
        { id: "tiramisu", name: "Tiramisu", description: "Espresso-drenched ladyfingers layered with mascarpone cream and dusted with cocoa." }, // price omitted (unconfirmed). Own Heartland menu: $12.90
        { id: "chocolate-temptation", name: "Chocolate Temptation", description: "Layers of chocolate cake made with Ecuadorian cocoa, chocolate-hazelnut creams and hazelnut crunch under a chocolate glaze." }, // price omitted (unconfirmed). Own Heartland menu: $12.90
        { id: "italian-rum-cake", name: "Italian Rum Cake", description: "Three layers of rum-infused vanilla cake with chocolate and vanilla custard, rum frosting and toasted almonds." }, // price omitted (unconfirmed). Own Heartland menu: $12.90
      ],
    },
    {
      id: "kids",
      name: "Kids",
      items: [
        { id: "kids-pasta-butter", name: "Kids Pasta with Butter", description: "Fresh pappardelle tossed in butter." }, // price omitted (unconfirmed). Own Heartland menu: $6.90
        { id: "kids-pasta-marinara", name: "Kids Pasta with Marinara", description: "Fresh pappardelle tossed in marinara." }, // price omitted (unconfirmed). Own Heartland menu: $6.90
        { id: "kids-pasta-alfredo", name: "Kids Pasta with Alfredo", description: "Fresh pappardelle tossed in Alfredo." }, // price omitted (unconfirmed). Own Heartland menu: $6.90
        { id: "kids-pasta-rosato", name: "Kids Pasta with Rosato", description: "Fresh pappardelle tossed in rosato sauce." }, // price omitted (unconfirmed). Own Heartland menu: $6.90
        { id: "kids-ravioli", name: "Kids Ravioli", description: "Our cheese ravioli with your pick of sauce." }, // price omitted (unconfirmed). Own Heartland menu: $8.90
      ],
    },
    {
      id: "drinks",
      name: "Wine, Beer & Wine Cocktails",
      description: "Beer and wine only (no liquor). Italian wines by the glass and bottle, draft and bottled beer, and wine-based house cocktails. Must be 21+.",
      // Names from the restaurant's POS item list; prices there are not shown publicly and some look
      // stale, so prices are left UNSET. TODO(Leads): owner supplies the current wine/beer/cocktail list.
      items: [
        { id: "red-sangria", name: "Red Sangria" },
        { id: "white-sangria", name: "White Sangria" },
        { id: "espresso-winetini", name: "Espresso Winetini" },
        { id: "cocktail-1905", name: "1905" },
        { id: "bolle-amarena", name: "Bolle Amarena" },
        { id: "fancy-on-ol-delancey", name: "Fancy on Ol’ Delancey" },
        { id: "paesano-from-jalisco", name: "Paesano from Jalisco" },
      ],
    },
    {
      id: "coffee",
      name: "Coffee & Soft Drinks",
      // POS item list only; prices unset. TODO(Leads): confirm.
      items: [
        { id: "coffee", name: "Coffee" },
        { id: "espresso", name: "Espresso (single or double)" },
        { id: "cappuccino", name: "Cappuccino" },
        { id: "hot-tea", name: "Hot Tea" },
        { id: "soft-drinks", name: "Soft Drinks, Lemonade & Iced Tea" },
        { id: "sparkling-water", name: "Sparkling Water" },
      ],
    },
  ],

  // Real photos only (see images/MANIFEST.md). Customer photos on the restaurant's own Google Maps
  // listing; credit keys only, no URLs. Two interior shots were cropped to remove staff and diners.
  // TODO(Leads): get the owner's OK, and ask for Instagram originals / a short shoot.
  photos: [
    { src: "/images/pear-fiocchi.jpg", alt: "Pear fiocchi: little pasta purses in a cream sauce topped with crispy prosciutto", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600, hero: true },
    { src: "/images/pear-fiocchi-plate.jpg", alt: "A plate of pear fiocchi with crispy prosciutto and microgreens", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/garganelli-braised-beef-ragu.jpg", alt: "Fresh garganelli pasta with slow-braised beef, grated cheese and microgreens", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/truffle-pappardelle-scallops.jpg", alt: "Pappardelle in black truffle cream sauce topped with four seared sea scallops", category: "food", credit: "google-maps-ugc", width: 1201, height: 1600 },
    { src: "/images/creamy-chicken-pesto.jpg", alt: "Creamy chicken pesto with garganelli pasta and bacon", category: "food", credit: "google-maps-ugc", width: 1600, height: 900 },
    { src: "/images/sea-scallop-risotto.jpg", alt: "Seared sea scallops over Calabrian chili risotto", category: "food", credit: "google-maps-ugc", width: 1600, height: 778 },
    { src: "/images/shrimp-pappardelle-red-sauce.jpg", alt: "Jumbo shrimp with fresh pappardelle in a red sauce", category: "food", credit: "google-maps-ugc", width: 1600, height: 778 },
    { src: "/images/pappardelle-shrimp-pancetta.jpg", alt: "Fresh pappardelle with shrimp and diced pancetta in a creamy sauce", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/meatballs-marinara.jpg", alt: "House-made meatballs in marinara with microgreens", category: "food", credit: "google-maps-ugc", width: 1289, height: 1474 },
    { src: "/images/fried-mozzarella.jpg", alt: "Hand-cut fried mozzarella with a cup of marinara", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/burrata-crostini.jpg", alt: "Burrata on pesto greens surrounded by toasted bread", category: "food", credit: "google-maps-ugc", width: 1600, height: 1190 },
    { src: "/images/limoncello-mascarpone-cake.jpg", alt: "Slice of limoncello mascarpone cake with white chocolate shavings and an orchid", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/storefront-sign.jpg", alt: "Catullo's Italian Restaurant sign above the storefront at unit 2", category: "storefront", credit: "google-maps-ugc", width: 1600, height: 1150 },
    { src: "/images/bar-portrait-wall.jpg", alt: "Large black-and-white portraits above the bar between two patterned pendant lamps", category: "interior", credit: "google-maps-ugc", width: 1480, height: 555 },
    { src: "/images/dining-room-family-portraits.jpg", alt: "Dining room with Edison-bulb lights and framed black-and-white portraits", category: "interior", credit: "google-maps-ugc", width: 1600, height: 640 },
    { src: "/images/logo.jpg", alt: "Catullo's Italian logo", category: "logo", credit: "owner", width: 300, height: 300 }, // logo the restaurant uploaded to its own Heartland ordering page; still needs the owner's OK
  ],
  heroImage: "/images/pear-fiocchi.jpg",

  // Red and green are the colors the restaurant set on its own Heartland ordering page (#ab3137 / #3B8145)
  // and match the Italian-flag logo; ink from the black ceiling/accents; cream from the logo parchment.
  palette: {
    ink: "#1C1A17",
    brand: "#AB3137",
    brandDeep: "#7E2228",
    accent: "#3B8145",
    salmon: "#C9A15B",
    nori: "#24452B",
    rice: "#FBF7F0",
    paper: "#FFFFFF",
  },

  about: {
    // Verified: started as a Jacksonville food truck, became this restaurant in Feb 2019 (Times-Union,
    // First Coast News); B&W portraits on the walls (visible in customer photos; TODO(Leads): ask who they are); fresh egg pasta and rotating
    // specials (own menu + POS). TODO(Leads): owner's own story; keep owner names off the site.
    heading: "From food truck to San Pablo Road",
    paragraphs: [
      "Catullo's Italian started as a food truck rolling around Jacksonville. In 2019 the family opened this small dining room in the Village Shoppes of San Pablo and hung large black-and-white portraits on the walls.",
      "Made in-house: Our pasta is fresh egg pasta made right here, including pappardelle, garganelli, ravioli and the Pear Fiocchi everyone asks about. Specials change often and tend to sell out, so ask what's on tonight.",
      "Small on purpose: We're first come, first served, with a cozy dining room and a bar. Come early, grab a glass of Italian wine, and stay a while.",
      // Florida Times-Union June 2026 + Jacksonville Business Journal: Yelp Top 100 U.S. Restaurants 2023 (No. 63);
      // Yelp Top 100 Florida 2022 (No. 10).
      "Recognition: Yelp named Catullo's to its Top 100 U.S. Restaurants list for 2023, a year after ranking us No. 10 in its first Top 100 Florida guide.",
    ],
  },

  preorder: {
    heading: "Text-ahead pre-orders",
    intro:
      "Coming soon: text your takeout order ahead and get a confirmation back. For now, call (904) 240-1252 to order.",
    // Copy for the "Text-ahead pre-orders" coming-soon card (features.textPreorders = "preview").
    textButtonLabel: "Text us your order",
    textMessage: "Hi Catullo's, I'd like to place a takeout order for pickup at ___:",
    // Heartland config allows same-day orders only (future ordering disabled). TODO(Leads): confirm.
    maxDaysAhead: 0,
  },

  // customOrders intentionally absent (hidden): catering / large orders are unconfirmed.
  // Owner (Yelp Q&A): no catering menu, small space, considers specific requests individually.
  // TODO(Leads): add a "Large orders & catering" section only if the owner wants one.

  whatToExpect: {
    heading: "Worth the wait",
    intro: "We don't take reservations. Every table and bar seat is first come, first served.",
    // Reviews on Google, Yelp and Tripadvisor (2023–2026) describe 30–60 minute waits at peak times.
    typicalWait: "30–60 min",
    items: [
      // Owner Yelp answer ("first come, first served"); Times-Union June 2026.
      { title: "Walk-in only", body: "No reservations. Seating is first come, first served." },
      // Several reviews: a line forms before opening, especially on weekends.
      { title: "Come early", body: "Doors open at 5 PM on weekdays and 4 PM on Saturday. Guests often line up before we open." },
      // Google review topics ("bar seating"), Tripadvisor.
      { title: "Try the bar", body: "Our small dining room has a bar too. If there's a wait, ask about bar seats." },
      // Owner Yelp answer; Jan 2025 notice.
      { title: "Takeout", body: "Call (904) 240-1252 or order at the bar." },
    ],
  },

  // Pitch previews only ("Coming soon" cards). Nothing here is live today.
  features: {
    textPreorders: "preview",
    waitlist: "preview",
    aiPhone: "preview",
  },

  // The restaurant's OWN Heartland eGift page: shows its name, address and phone, its own copy ("the
  // perfect gift for your favorite Catullo's fan!"), $500 max, email delivery; setup data AllowEGift = 1
  // (separate from food ordering, which is off). Page loads (200) 2026-10-20; checkout not test-purchased.
  // TODO(Leads): owner confirms eGift cards are active before launch.
  extraLinks: [{ label: "Buy an eGift card", href: "https://catullos.hrpos.heartland.us/gift" }],

  heroKicker: "Handmade pasta · San Pablo Rd · Since 2019",

  seo: {
    title: "Catullo's Italian | Handmade Pasta on San Pablo Rd, Jacksonville FL",
    description:
      "Fresh egg pasta made in-house, nightly specials and Italian wine at 1650-2 San Pablo Rd S, Jacksonville, FL 32224. Mon–Thu 5–9, Fri 5–10, Sat 4–10, closed Sun. First come, first served. Call (904) 240-1252 for takeout.",
  },

  footerCredit: "Built by nicklopacki.com",
};

/** Text-us number. Falls back to the restaurant line while `textNumber` is unset. */
export function textTarget(content: SiteContent = site): PhoneNumber {
  if (content.textNumber?.e164 || content.textNumber?.tel) {
    return content.textNumber;
  }
  return content.phone;
}

/**
 * Call number. Open hours always use the restaurant line.
 * After close, `afterHoursPhone` wins when it is set; otherwise the restaurant line.
 */
export function callTarget(content: SiteContent, isClosed: boolean): PhoneNumber {
  if (
    isClosed &&
    (content.afterHoursPhone?.e164 || content.afterHoursPhone?.tel)
  ) {
    return content.afterHoursPhone;
  }
  return content.phone;
}
