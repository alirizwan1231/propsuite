export type Property = {
  id: string;
  title: string;
  area: string;
  type: "Villa" | "Penthouse" | "Apartment" | "Townhouse";
  price: number; // AED
  beds: number;
  baths: number;
  sqft: number;
  status: "For Sale" | "New" | "Off-Plan" | "Exclusive";
  featured?: boolean;
  hue: number; // visual seed for the SVG panel
  tagline: string;
  description: string;
  amenities: string[];
  agent: string;
  yearBuilt: number;
  tenure: "Freehold" | "Leasehold";
};

export const AREAS = [
  "Palm Jumeirah",
  "Downtown Dubai",
  "Dubai Marina",
  "Business Bay",
  "Jumeirah Bay Island",
  "Emirates Hills",
  "DIFC",
  "JBR",
] as const;

export const properties: Property[] = [
  {
    id: "frond-n-villa",
    title: "Frond N Signature Villa",
    area: "Palm Jumeirah",
    type: "Villa",
    price: 88000000,
    beds: 6,
    baths: 7,
    sqft: 13200,
    status: "Exclusive",
    featured: true,
    hue: 168,
    tagline: "Private beach, infinity edge, skyline on the horizon.",
    description:
      "A signature frond villa reimagined with double-height living spaces, a sculptural staircase and a 25-metre infinity pool that dissolves into the Gulf. Floor-to-ceiling glazing frames the Marina skyline, while the lower ground level hosts a cinema, spa and staff quarters.",
    amenities: ["Private beach access", "Infinity pool", "Home cinema", "Spa & hammam", "Smart home system", "4-car showroom garage", "Rooftop terrace", "Staff quarters"],
    agent: "Layla Haddad",
    yearBuilt: 2023,
    tenure: "Freehold",
  },
  {
    id: "burj-crown-penthouse",
    title: "The Crown Penthouse",
    area: "Downtown Dubai",
    type: "Penthouse",
    price: 42500000,
    beds: 4,
    baths: 5,
    sqft: 6900,
    status: "For Sale",
    featured: true,
    hue: 42,
    tagline: "Full Burj Khalifa view from every principal room.",
    description:
      "Perched above the Boulevard, this full-floor penthouse wraps the Burj Khalifa in glass. Italian marble, book-matched onyx and a private elevator lobby set the tone; the terrace runs the length of the residence for sunset entertaining above the fountains.",
    amenities: ["Private elevator lobby", "Burj & fountain view", "Wrap-around terrace", "Italian marble throughout", "Valet parking x3", "Residents' spa access", "24h concierge", "Wine cellar"],
    agent: "Omar Al Farsi",
    yearBuilt: 2021,
    tenure: "Freehold",
  },
  {
    id: "marina-gate-residence",
    title: "Marina Gate Sky Residence",
    area: "Dubai Marina",
    type: "Apartment",
    price: 3650000,
    beds: 2,
    baths: 3,
    sqft: 1480,
    status: "For Sale",
    featured: true,
    hue: 205,
    tagline: "Yachts below, the whole marina as your balcony view.",
    description:
      "A high-floor residence in Marina Gate with uninterrupted water views, an open chef's kitchen and a primary suite that wakes up to the marina promenade. Sold with designer furniture package included.",
    amenities: ["Full marina view", "Furniture included", "Infinity pool deck", "State gym", "2 parking spaces", "24h security", "Kids' play room", "Retail podium"],
    agent: "Sara Iqbal",
    yearBuilt: 2019,
    tenure: "Freehold",
  },
  {
    id: "bayz-tower-loft",
    title: "Canal Loft at Bayz Tower",
    area: "Business Bay",
    type: "Apartment",
    price: 1980000,
    beds: 1,
    baths: 2,
    sqft: 940,
    status: "New",
    hue: 265,
    tagline: "Double-height loft living on the Dubai Canal.",
    description:
      "A rare loft-format apartment with 5.4-metre ceilings, mezzanine sleeping gallery and direct canal walk access. Ideal first Dubai acquisition with strong rental history in the building.",
    amenities: ["Canal view", "Double-height ceiling", "Mezzanine gallery", "Rooftop pool", "Co-working lounge", "1 parking space", "Smart lock entry", "Pet friendly"],
    agent: "Omar Al Farsi",
    yearBuilt: 2022,
    tenure: "Freehold",
  },
  {
    id: "bulgari-style-bay-villa",
    title: "Bay Island Mansion",
    area: "Jumeirah Bay Island",
    type: "Villa",
    price: 145000000,
    beds: 7,
    baths: 9,
    sqft: 19800,
    status: "Exclusive",
    featured: true,
    hue: 190,
    tagline: "One of only 128 plots on Dubai's seahorse island.",
    description:
      "A contemporary mansion on the Bulgari island with private berthing, a basement leisure level and resort-grade landscaping. Offered by private treaty — viewings strictly by appointment with proof of funds.",
    amenities: ["Private yacht berth", "Basement leisure level", "Resort landscaping", "Infinity pool & spa", "Guest pavilion", "6-car garage", "Full smart automation", "Private beach"],
    agent: "Layla Haddad",
    yearBuilt: 2024,
    tenure: "Freehold",
  },
  {
    id: "emirates-hills-court",
    title: "Fairways Court Villa",
    area: "Emirates Hills",
    type: "Villa",
    price: 39750000,
    beds: 5,
    baths: 6,
    sqft: 9800,
    status: "For Sale",
    hue: 130,
    tagline: "On the fairway, behind the gates of the Montgomerie.",
    description:
      "A classic Emirates Hills residence overlooking the 7th fairway. Renovated in 2023 with a new show kitchen, resort pool and mature garden. The community's golf, lakes and schools are moments away.",
    amenities: ["Golf course view", "Renovated 2023", "Resort pool", "Mature garden", "Home office wing", "Maid's + driver's rooms", "Outdoor majlis", "3-car garage"],
    agent: "Karim Nasser",
    yearBuilt: 2016,
    tenure: "Freehold",
  },
  {
    id: "difc-atelier-flat",
    title: "Limestone Atelier Residence",
    area: "DIFC",
    type: "Apartment",
    price: 5900000,
    beds: 2,
    baths: 3,
    sqft: 1710,
    status: "For Sale",
    hue: 28,
    tagline: "Gallery-grade calm in the financial district.",
    description:
      "Within the limestone-clad Limestone House, this residence pairs Ritz-Carlton services with museum-quiet interiors. Lime-washed walls, wide-plank oak and a loggia overlooking the DIFC skyline.",
    amenities: ["Hotel services", "Loggia terrace", "Oak & limestone finishes", "Valet parking", "Residents' club", "Fine-art storage", "Housekeeping on call", "Pet spa"],
    agent: "Sara Iqbal",
    yearBuilt: 2018,
    tenure: "Leasehold",
  },
  {
    id: "jbr-shoreline-duplex",
    title: "Shoreline Duplex",
    area: "JBR",
    type: "Apartment",
    price: 7400000,
    beds: 3,
    baths: 4,
    sqft: 2350,
    status: "New",
    hue: 215,
    tagline: "Wake up on The Walk, sleep above the sea.",
    description:
      "A two-level shoreline apartment with direct beach access and Ain Dubai views. Double-volume living room, wraparound balcony and a kitchen built for entertaining.",
    amenities: ["Direct beach access", "Ain Dubai view", "Wraparound balcony", "Double-volume living", "Beach club membership", "2 parking spaces", "Smart climate", "Storage room"],
    agent: "Karim Nasser",
    yearBuilt: 2020,
    tenure: "Freehold",
  },
  {
    id: "palm-county-villa",
    title: "County Garden Villa",
    area: "Palm Jumeirah",
    type: "Villa",
    price: 33500000,
    beds: 5,
    baths: 6,
    sqft: 7200,
    status: "For Sale",
    hue: 150,
    tagline: "Garden Homes charm, Atlantis on your skyline.",
    description:
      "A County-series Garden Home with lush private garden, shaded majlis terrace and sunset-facing pool. Interior refreshed with warm timber and stone, moments from the Golden Mile.",
    amenities: ["Sunset pool", "Private garden", "Majlis terrace", "Refreshed interior", "Golden Mile access", "Maid's room", "Outdoor kitchen", "2-car garage"],
    agent: "Layla Haddad",
    yearBuilt: 2014,
    tenure: "Freehold",
  },
  {
    id: "opera-grand-duplex",
    title: "Opera District Duplex",
    area: "Downtown Dubai",
    type: "Apartment",
    price: 11200000,
    beds: 3,
    baths: 4,
    sqft: 2680,
    status: "Off-Plan",
    hue: 320,
    tagline: "Culture-district living, handover Q4 2027.",
    description:
      "A duplex in the Opera District offered off-plan with a 60/40 payment plan. Double-height glazing frames the Burj Lake; completion fit-out by an award-winning Milan studio.",
    amenities: ["60/40 payment plan", "Burj Lake view", "Milan-designed interiors", "Residents' theatre lounge", "Infinity pool", "Handover Q4 2027", "2 parking spaces", "Smart home ready"],
    agent: "Omar Al Farsi",
    yearBuilt: 2027,
    tenure: "Freehold",
  },
  {
    id: "marina-quays-townhouse",
    title: "Quayside Townhouse",
    area: "Dubai Marina",
    type: "Townhouse",
    price: 8900000,
    beds: 4,
    baths: 5,
    sqft: 3400,
    status: "For Sale",
    hue: 175,
    tagline: "A house, not a high-rise — on the marina water's edge.",
    description:
      "One of the Marina's rare quayside townhouses with a private plunge pool, water-level terrace and direct promenade gate. Three floors of family living in the heart of the marina community.",
    amenities: ["Private plunge pool", "Water-level terrace", "Promenade gate", "Family room", "Study", "Maid's room", "2-car garage", "Community pools"],
    agent: "Sara Iqbal",
    yearBuilt: 2012,
    tenure: "Freehold",
  },
  {
    id: "bay-central-penthouse",
    title: "Bay Central Penthouse",
    area: "Business Bay",
    type: "Penthouse",
    price: 15900000,
    beds: 4,
    baths: 5,
    sqft: 4600,
    status: "New",
    featured: true,
    hue: 45,
    tagline: "Canal to Burj — a 270-degree downtown panorama.",
    description:
      "A half-floor penthouse crowning Bay Central with 270-degree views from the canal to the Burj Khalifa. Private plunge pool on the terrace, show kitchen plus wet kitchen, and a palatial primary suite.",
    amenities: ["270° panorama", "Terrace plunge pool", "Show + wet kitchens", "Private lift access", "Cigar & library room", "3 parking spaces", "Spa bathroom", "Full automation"],
    agent: "Karim Nasser",
    yearBuilt: 2024,
    tenure: "Freehold",
  },
];

export const formatAED = (n: number) =>
  "AED " + n.toLocaleString("en-US");

export const formatShort = (n: number) =>
  n >= 1_000_000 ? `AED ${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M` : `AED ${Math.round(n / 1000)}K`;
