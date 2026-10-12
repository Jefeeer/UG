// ALL editable content lives here. Values set to `null` render as a dev-only TODO badge
// and a safe fallback ("Message us") in production — never an invented number.

export const site = {
  name: "Underground Fitness",
  short: "UG",
  // From their Instagram bio.
  tagline: "The first world-class iron gym in the Philippines",
  years: 17, // from the #UG17Years story highlight
  url: "https://undergroundfitness.vercel.app", // swap for a custom domain later
  address: {
    line1: "Volet's Building, Emilio Aguinaldo Hwy",
    line2: "Dasmariñas, Cavite 4115",
    full: "Volet's Building, Emilio Aguinaldo Highway, Dasmariñas, Cavite 4115, Philippines",
  },
  geo: { lat: 14.3257048, lng: 120.9405268 },
  phone: { display: "+63 46 450 9197", href: "tel:+63464509197" }, // from their schedule poster
  messengerUrl: "https://m.me/voletsundergroundgym",
  facebookUrl: "https://www.facebook.com/voletsundergroundgym",
  instagramUrl: "https://www.instagram.com/under.ground.fitness/",
  instagramHandle: "@under.ground.fitness",
  wazeUrl: "https://waze.com/ul/hwdw12pfjr",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=14.3257048,120.9405268",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Underground+Fitness+Dasmari%C3%B1as",
  // 24h "HH:MM", Manila time. Poster says 6:00AM–11:00PM "normal hours"; days to be confirmed by owner.
  hours: { open: "06:00", close: "23:00", days: [0, 1, 2, 3, 4, 5, 6] },
  rating: { value: 4.6, count: 46 },

  // Prices in PHP. null = not published yet → "Message us".
  rates: [
    { name: "Walk-in", unit: "per session", price: null as number | null, note: "Drop in, train, go." },
    { name: "Monthly", unit: "per month", price: null as number | null, note: "Unlimited floor access." },
    { name: "Student", unit: "per month", price: null as number | null, note: "Bring a valid school ID." },
    { name: "Coaching", unit: "per session", price: null as number | null, note: "1-on-1 with a coach." },
  ],

  // Plate colours follow the IWF convention: 25 red, 20 blue, 15 yellow, 10 green.
  zones: [
    {
      plate: 25,
      name: "Racks & Platforms",
      body: "Power racks, half racks and wood-and-diamond-plate deadlift platforms. Landmines, squat stands, competition benches.",
      tags: ["Power racks", "Deadlift platforms", "Landmine", "Comp bench"],
      photo: "/photos/platforms.jpg",
      alt: "Two wooden deadlift platforms with barbells, power racks in the background under LED lights",
    },
    {
      plate: 20,
      name: "Free Weights",
      body: "A dumbbell run that keeps going, fixed barbells, EZ bars and rows of adjustable and flat benches facing the mirrors.",
      tags: ["Dumbbell wall", "Fixed barbells", "Adjustable benches"],
      photo: "/photos/dumbbells.jpg",
      alt: "Rows of adjustable benches beside a long dumbbell rack under rectangular LED ceiling lights",
    },
    {
      plate: 15,
      name: "Plate-Loaded & Machines",
      body: "Hammer-style plate-loaded presses, rows and leg machines, plus cable stacks and selectorised stations.",
      tags: ["Plate-loaded", "Cable stacks", "Leg machines"],
      photo: "/photos/machines.jpg",
      alt: "A floor full of black plate-loaded machines with stacked plates",
    },
    {
      plate: 10,
      name: "Turf & Conditioning",
      body: "Treadmills, back-extension benches, a turf lane, heavy bags, kettlebells and plyo boxes.",
      tags: ["Turf lane", "Treadmills", "Heavy bags", "Kettlebells"],
      photo: "/photos/cardio-turf.jpg",
      alt: "A row of treadmills beside back-extension benches and an artificial turf lane",
    },
  ],

  // Paraphrased themes from public Google reviews — not quotes.
  reviewThemes: [
    "One of the largest equipment selections in the Dasma area.",
    "Very affordable for what you get.",
    "Often called the best gym in Dasma.",
  ],
  // TODO: real member quotes, with permission.
  testimonials: [] as { quote: string; name: string }[],

  // From their Instagram story highlights.
  culture: ["#UG17Years", "Powerlifting", "Squat Comp", "DL Comp", "Boxing", "UG Champs"],

  credit: "Powered by Aurevixa",
};

export type Zone = (typeof site.zones)[number];
