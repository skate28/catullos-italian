import type { SiteContent } from "@/content/types";

/**
 * Catullo's Italian — TEMPORARY PLACEHOLDER SEED. Leads owns this file and will replace it wholesale.
 *
 * Rules (see CONTENT_SCHEMA.md):
 *  - Data only. No display logic lives here; components and src/lib/* read and format it.
 *  - Seeded ONLY with facts found on public sources (read 2026-10-20): Yelp (claimed listing),
 *    Restaurantji, Sirved, Zmenu, Visit Jacksonville, eniplaces (community page), the Florida
 *    Times-Union (June 2026) and Action News Jax / WOKV (Jan 2025). Anything not confirmed by
 *    those is marked `// TODO(Leads): verify` or left empty so the component hides it.
 *  - No owner/staff names, personal emails or photo-source URLs (this file ships in the client bundle).
 *  - Never claim reservations, texting, or online ordering. The restaurant is walk-in only.
 */
export const site: SiteContent = {
  name: "Catullo's Italian",
  // Built from verified themes (fresh handmade pasta, family recipes). TODO(Leads): owner approval of wording.
  tagline: "Handmade pasta and family recipes, worth every minute of the wait.",
  description:
    "Catullo's Italian is a family-owned Italian restaurant at 1650-2 San Pablo Rd S, Jacksonville, FL 32224, serving fresh-from-scratch pasta, house sauces and desserts made from family recipes. Walk-in only, no reservations. Dinner Monday–Thursday 5–9 PM, Friday 5–10 PM, Saturday 4–10 PM. Call (904) 240-1252.",
  // Times-Union (June 2026): "Catullo's original restaurant, which debuted in 2019".
  opened: "2019",

  address: {
    street: "1650-2 San Pablo Rd S",
    suite: "",
    // Times-Union: "in the Village Shoppes of San Pablo". Yelp neighborhood: "Greater Arlington".
    neighborhood: "Village Shoppes of San Pablo",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32224",
    country: "US",
    full: "1650-2 San Pablo Rd S, Jacksonville, FL 32224",
  },
  // Times-Union (Village Shoppes of San Pablo) + eniplaces ("next to a Food Lion").
  // TODO(Leads): verify the Food Lion landmark is still accurate.
  locationHint: "In the Village Shoppes of San Pablo, next to Food Lion.",

  // One aggregator lists 30.31872, -81.450223 (single source). TODO(Leads): verify pin, then set.
  geo: {
    latitude: null,
    longitude: null,
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Catullo%27s+Italian%2C+1650-2+San+Pablo+Rd+S%2C+Jacksonville%2C+FL+32224",

  // Yelp, Restaurantji, Sirved, Visit Jacksonville, Heartland ordering page all agree.
  phone: {
    display: "(904) 240-1252",
    tel: "tel:+19042401252",
    e164: "+19042401252",
  },

  // Pitch only: set once an AI answering line is live. Null = calls go to the restaurant line.
  afterHoursPhone: null,
  // Pitch only: the restaurant does NOT take texts today. Keep null until it really does.
  textNumber: null,

  closedNotice:
    "We're closed right now. Dinner is Monday–Thursday 5–9 PM, Friday 5–10 PM and Saturday 4–10 PM. Closed Sunday.",

  // Yelp (claimed), Restaurantji, Sirved, Zmenu (updated 2026-09-11), Visit Jacksonville all agree, and the
  // Times-Union (June 2026) says "open Monday through Friday at 5 p.m. and Saturday at 4 p.m. ... closed on Sundays".
  // Conflict: the eniplaces community page shows Monday closed. TODO(Leads): verify Monday with the owner.
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
  },

  // Yelp: "$$". (Visit Jacksonville: "$15 to $25"; eniplaces: "$30–50 per person".)
  priceRange: "$$",
  // Zmenu (Google attributes): credit and debit cards. TODO(Leads): verify before showing.
  paymentNote: "",

  // No live online FOOD ordering found. Their Heartland "Online Ordering by Genius" page (address/phone match)
  // currently offers only eGift cards, and in Jan 2025 the restaurant said online ordering was disabled and
  // asked guests to call (WOKV / Action News Jax). WARNING: catullos-italian.club is a known phishing site.
  // Yelp (owner answer): takeout is ordered at the bar. TODO(Leads): confirm call-ahead takeout with the owner.
  orderingLinks: [],

  // Candidates found but not confirmed: a Facebook page and an Instagram handle. TODO(Leads): verify, then add.
  socials: [],

  // Yelp: 4.6 from 669 reviews (Sept 2026). Others: Restaurantji 4.7 (399), Sirved 4.8.
  // TODO(Leads): verify / re-check the live count before launch, or switch to Google.
  rating: {
    value: 4.6,
    count: 669,
    source: "Yelp",
  },

  // Real quotes only, with a source URL and the owner's OK. TODO(Leads): add if wanted.
  testimonials: [],

  faq: [
    {
      question: "Do you take reservations?",
      // Restaurantji, eniplaces and many reviews. Some aggregators show a stale "accepts reservations" flag.
      answer: "No. We're walk-in only, and tables are first come, first served. Arriving before we open is the best way to get seated quickly.",
    },
    {
      question: "How long is the wait?",
      answer: "It depends on the night. A wait of about 30–60 minutes is typical at peak times, and a line often forms before we open.",
    },
    {
      question: "Do you serve liquor?",
      // Yelp owner answer.
      answer: "We serve beer and wine, plus wine-based cocktails. We don't serve liquor.",
    },
  ],

  // eniplaces: "a menu that's small by design and constantly rotating specials"; Zmenu reviews: "rotating specials".
  menuNote:
    "A small menu by design, with rotating specials. Menu and prices change, so call us for tonight's specials.",

  // Items: Yelp popular dishes (claimed listing), Times-Union quotes from the menu, eniplaces featured menu,
  // Restaurantji favorites. Prices ONLY where Yelp and eniplaces agree (shown as "from"). Other prices conflict
  // (e.g. Chicken Capricciosa: Yelp $17.90 vs eniplaces $21.90). TODO(Leads): verify all prices with the current menu.
  menu: [
    {
      id: "antipasti",
      name: "Antipasti",
      items: [
        // Yelp $9.90. TODO(Leads): verify price + description.
        { id: "arancini", name: "Arancini", signature: true },
        // Yelp popular dish. TODO(Leads): verify description.
        { id: "burrata", name: "Burrata" },
        // eniplaces ($10.90). TODO(Leads): verify price.
        { id: "fried-mozzarella", name: "Fried Mozzarella", description: "Hand-cut, breaded whole-milk mozzarella with marinara." },
        // eniplaces ($14). TODO(Leads): verify price.
        { id: "polpette", name: "Polpette", description: "House-made meatballs over Parmigiano fonduta." },
      ],
    },
    {
      id: "pasta",
      name: "Fresh Pasta",
      description: "Made by hand, in house.",
      items: [
        {
          id: "pear-fiocchi",
          name: "Pear Fiocchi",
          // Times-Union description; Yelp $18.90, eniplaces $18.90–25.90.
          description:
            "Egg pasta filled with fresh pear and three Italian cheeses, in a cream sauce with caramelized pear, Gorgonzola and goat cheese, topped with fried prosciutto.",
          price: 18.9,
          priceFrom: true,
          signature: true,
        },
        {
          id: "gnocchi-catullo",
          name: "Gnocchi Catullo",
          // Times-Union quoting the menu. TODO(Leads): verify price.
          description: "Fluffy little potato pasta pillows in a fresh sage and Calabrian chili alfredo sauce.",
          signature: true,
        },
        {
          id: "ravioli",
          name: "Ravioli",
          // eniplaces ($15.90–19.90). TODO(Leads): verify price.
          description:
            "Filled with ricotta, mascarpone and mozzarella. Choice of marinara, rosato, alfredo, Catullo or sun-dried tomato pesto.",
        },
        // Yelp $15.90. TODO(Leads): verify price + description.
        { id: "lasagna", name: "Lasagna" },
        // Yelp $17.90. TODO(Leads): verify price + description.
        { id: "creamy-chicken-pesto", name: "Creamy Chicken Pesto" },
        // Yelp $16.90. TODO(Leads): verify price + description.
        { id: "porcini-tortelloni", name: "Porcini Mushroom Tortelloni" },
        // eniplaces ($26). TODO(Leads): verify — may be a special.
        { id: "tortelloni-osso-buco", name: "Tortelloni di Osso Buco", description: "Filled with osso buco, in a red wine reduction." },
        // Yelp $15.90. TODO(Leads): verify price + description.
        { id: "sunday-suppa", name: "Sunday Suppa" },
      ],
    },
    {
      id: "secondi",
      name: "Secondi & Seafood",
      items: [
        {
          id: "chicken-capricciosa",
          name: "Chicken Capricciosa",
          // eniplaces description; Times-Union menu quote: "closest thing you're gonna get to anything 'Parm' here!"
          description: "Pan-fried chicken layered with eggplant, prosciutto and mozzarella, with pappardelle marinara.",
          signature: true,
        },
        {
          id: "sausage-peppers",
          name: "Sausage & Peppers",
          // eniplaces ($21.90). TODO(Leads): verify price.
          description: "Catullo's sausage with bell peppers, onions and marinara over garganelli.",
        },
        {
          id: "sea-scallop-risotto",
          name: "Sea Scallop Risotto",
          // eniplaces description; Yelp $26.90, eniplaces $26.90–39.90.
          description: "U10 sea scallops over Calabrian chili risotto.",
          price: 26.9,
          priceFrom: true,
        },
        // Yelp $19.90. TODO(Leads): verify price + description.
        { id: "shrimp-rosato", name: "Shrimp Rosato" },
        // Yelp $19.90. TODO(Leads): verify price + description.
        { id: "shrimp-fra-diavolo", name: "Shrimp Fra Diavolo" },
      ],
    },
    {
      id: "dolci",
      name: "Dolci",
      items: [
        // Yelp $8.90. TODO(Leads): verify price + description.
        { id: "limoncello-mascarpone-cake", name: "Limoncello Mascarpone Cake", signature: true },
        {
          id: "cannoli",
          name: "Cannoli",
          // eniplaces description; Yelp $8.90, eniplaces $8.90–9.90.
          description: "Ricotta-filled, topped with pistachio and chocolate.",
          price: 8.9,
          priceFrom: true,
        },
      ],
    },
    {
      id: "drinks",
      name: "To Drink",
      // Yelp owner answer: beer and wine, wine-based cocktails, no liquor. TODO(Leads): add the list if wanted.
      description: "Beer, wine and wine-based cocktails. No liquor.",
      items: [],
    },
  ],

  // No approved photos yet. Do NOT add AI, stock, or scraped Yelp/Google photos.
  // TODO(Leads): add owner-approved photos to public/images/ and list them here.
  photos: [],

  // Warm trattoria palette (key names kept from Hana Yori):
  // ink = espresso text, brand = terracotta, brandDeep = deep wine red, accent = olive,
  // salmon = antique gold (prices/badges), nori = deep wine band, rice = cream page, paper = card.
  palette: {
    ink: "#2A1A14",
    brand: "#B4492B",
    brandDeep: "#7A1F1A",
    accent: "#6B7240",
    salmon: "#B8863B",
    nori: "#3A1513",
    rice: "#F6EEDF",
    paper: "#FFFAF0",
  },

  about: {
    heading: "A food-truck favorite, now a neighborhood trattoria",
    paragraphs: [
      // Visit Jacksonville (food truck → brick and mortar), Times-Union (2019; scratch-made, family recipes).
      "Catullo's started as a Jacksonville food truck known for scratch-made pasta. In 2019 it opened this small, family-owned dining room on San Pablo Road, and the line has been forming ever since.",
      // Times-Union + eniplaces + Restaurantji.
      "Made from scratch: Pasta is made by hand, sauces simmer slowly, and recipes come from the family.",
      // eniplaces + Restaurantji ("intimate", "bar seating", "feel like family").
      "Small on purpose: An intimate, softly lit room with a handful of tables and a bar, where the team treats you like family.",
      // eniplaces + Zmenu reviews.
      "Always something new: A short menu by design, plus rotating specials. Ask what's on tonight.",
    ],
  },

  // Pitch-only copy for the "text your pre-order" preview panel. Not live. See `features`.
  preorder: {
    heading: "Text-ahead pre-orders",
    intro: "Text your takeout order before you leave the house, get a confirmation back, and pick it up hot.",
    textButtonLabel: "Text your order",
    textMessage: "Hi Catullo's, I'd like to place a pickup order for ___ at ___:",
    maxDaysAhead: 1,
  },

  whatToExpect: {
    heading: "Good things come to those who wait",
    intro:
      "We don't take reservations. Every table is first come, first served, so here's how a night at Catullo's usually goes.",
    // eniplaces: "typical wait time of 30 to 60 minutes". Sirved-listed review: 45-minute wait for two.
    typicalWait: "30–60 min",
    items: [
      {
        title: "Walk-in only",
        // Restaurantji, eniplaces.
        body: "No reservations. Everyone gets the same fair shot at a table.",
      },
      {
        title: "Come early",
        // eniplaces review ("the line starts an hour before they open"), Sirved review ("Every day there's a line").
        body: "A line often forms before the doors open. Arrive early if you want to be in the first seating.",
      },
      {
        title: "Plan on a wait",
        body: "At busy times a 30–60 minute wait is typical. Think of it as part of the experience.",
      },
      {
        title: "Try the bar",
        // eniplaces: "Bar seating is often a popular choice for those hoping to skip the line".
        body: "Bar seats are full service and often open up faster than a table.",
      },
    ],
  },

  // All OFF or PREVIEW. Nothing here is live; previews are labeled "coming soon" on the site.
  features: {
    textPreorders: "preview",
    waitlist: "preview",
    aiPhone: "preview",
  },

  // Their own Heartland page (address/phone match) sells eGift cards. TODO(Leads): verify with owner before keeping.
  extraLinks: [{ label: "Buy an eGift card", href: "https://catullos.hrpos.heartland.us/" }],

  heroKicker: "Handmade pasta · San Pablo Rd · Since 2019",

  seo: {
    title: "Catullo's Italian | Handmade Pasta in Jacksonville, FL",
    description:
      "Family-owned Italian restaurant with handmade pasta at 1650-2 San Pablo Rd S, Jacksonville, FL 32224. Walk-in only. Dinner Mon–Thu 5–9, Fri 5–10, Sat 4–10. Call (904) 240-1252.",
  },

  footerCredit: "Built by nicklopacki.com",
};
