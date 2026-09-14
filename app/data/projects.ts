import {
  BD_ALIF_BREEZE,
  BD_BANANI_MODEL_TOWN,
  BD_CONCORD_AJIMPUR,
  BD_DHAKA_DIAMOND,
  BD_DHANMONDI_VIEW,
  BD_GREEN_NEST,
  BD_HABIBULLAH_STREET,
  BD_MUGDA_TERRACED,
  BD_SUSTAINABLE_AERIAL,
  INTERIOR_LIVING_ROOM,
} from "./images";

export type ProjectStatus = "Ready to move" | "Under construction" | "Sold out";
export type ProjectType = "Retail" | "Commercial" | "Mixed-use";
export type ListingType = "Buy" | "Rent" | "Sell";

export type Project = {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  type: ProjectType;
  listingType: ListingType;
  /** Total floors in the building this unit belongs to */
  floors: number;
  sizeSqft: string;
  sizeKatha: string;
  startingPrice: string;
  priceNumeric: number;
  priceUnit: "total" | "month";
  currency: "BDT" | "USD";
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
};

export const projects: Project[] = [
  {
    slug: "afrah-central-mall",
    name: "Afrah Central Mall",
    location: "Gulshan Avenue, Dhaka",
    status: "Under construction",
    type: "Retail",
    listingType: "Buy",
    floors: 8,
    sizeSqft: "220–1,450 sqft",
    sizeKatha: "0.3–2.0 katha",
    startingPrice: "৳1.4 crore",
    priceNumeric: 14_000_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_DHAKA_DIAMOND,
    gallery: [BD_DHAKA_DIAMOND, BD_SUSTAINABLE_AERIAL, BD_CONCORD_AJIMPUR],
    description:
      "Al Afrah's flagship shopping destination for Gulshan, Afrah Central Mall brings eight floors of anchor retail, a curated food court, and a four-screen multiplex to Dhaka's diplomatic zone. Individual shop and showroom units are available for outright ownership, with structural work on schedule for handover next year.",
    amenities: ["Anchor tenant floor", "Four-screen multiplex", "Food court", "Panoramic glass elevators", "Central AC", "Multi-level basement parking", "24/7 security", "Backup generator"],
  },
  {
    slug: "afrah-trade-tower",
    name: "Afrah Trade Tower",
    location: "Motijheel C/A, Dhaka",
    status: "Ready to move",
    type: "Commercial",
    listingType: "Buy",
    floors: 15,
    sizeSqft: "650–3,800 sqft",
    sizeKatha: "0.9–5.3 katha",
    startingPrice: "৳1.1 crore",
    priceNumeric: 11_000_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_CONCORD_AJIMPUR,
    gallery: [BD_CONCORD_AJIMPUR, BD_DHAKA_DIAMOND, BD_ALIF_BREEZE],
    description:
      "A Grade-A office address in Dhaka's traditional business district, Afrah Trade Tower pairs column-free floor plates with floor-to-ceiling glazing and dedicated service elevators. Fully handed over, with floors configurable as single-tenant offices or subdivided suites.",
    amenities: ["Column-free floor plates", "Passenger + service lifts", "Central AC", "Backup generator", "24/7 security", "Basement parking", "Conference facilities"],
  },
  {
    slug: "afrah-junction",
    name: "Afrah Junction",
    location: "Uttara, Dhaka",
    status: "Ready to move",
    type: "Mixed-use",
    listingType: "Buy",
    floors: 6,
    sizeSqft: "300–1,800 sqft",
    sizeKatha: "0.4–2.5 katha",
    startingPrice: "৳75 lakh",
    priceNumeric: 7_500_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_BANANI_MODEL_TOWN,
    gallery: [BD_BANANI_MODEL_TOWN, BD_MUGDA_TERRACED, INTERIOR_LIVING_ROOM],
    description:
      "A neighborhood retail-and-office hub for Uttara, Afrah Junction combines ground-floor retail frontage with office suites on the upper five floors. Fully handed over and already home to a mix of local brands and small business tenants.",
    amenities: ["Ground-floor retail frontage", "Passenger lift", "24/7 security", "Backup generator", "Reserved parking", "Signage rights"],
  },
  {
    slug: "afrah-lifestyle-mall",
    name: "Afrah Lifestyle Mall",
    location: "Agrabad, Chattogram",
    status: "Under construction",
    type: "Retail",
    listingType: "Buy",
    floors: 7,
    sizeSqft: "250–1,600 sqft",
    sizeKatha: "0.35–2.2 katha",
    startingPrice: "৳90 lakh",
    priceNumeric: 9_000_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_GREEN_NEST,
    gallery: [BD_GREEN_NEST, BD_DHANMONDI_VIEW, BD_SUSTAINABLE_AERIAL],
    description:
      "Chattogram's port-city answer to Dhaka's flagship malls, Afrah Lifestyle Mall brings seven floors of retail, dining, and entertainment to Agrabad. Structural work is progressing on schedule, with select ground and first-floor units already reserved.",
    amenities: ["Anchor tenant floor", "Food court", "Escalators & panoramic lifts", "Central AC", "24/7 security", "Backup generator", "Multi-level parking"],
  },
  {
    slug: "afrah-city-walk",
    name: "Afrah City Walk",
    location: "Bashundhara R/A, Dhaka",
    status: "Under construction",
    type: "Retail",
    listingType: "Buy",
    floors: 4,
    sizeSqft: "180–950 sqft",
    sizeKatha: "0.25–1.3 katha",
    startingPrice: "৳55 lakh",
    priceNumeric: 5_500_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_MUGDA_TERRACED,
    gallery: [BD_MUGDA_TERRACED, BD_BANANI_MODEL_TOWN, BD_HABIBULLAH_STREET],
    description:
      "An open-air, high-street-style retail concept for Bashundhara R/A, Afrah City Walk spreads boutique storefronts across four low-rise floors framing a landscaped courtyard. Designed for fashion, lifestyle, and F&B brands looking for street-level visibility.",
    amenities: ["Landscaped courtyard", "Street-level storefronts", "24/7 security", "Backup generator", "Dedicated parking", "Outdoor seating plaza"],
  },
  {
    slug: "afrah-riverside-commercial-park",
    name: "Afrah Riverside Commercial Park",
    location: "Narayanganj",
    status: "Under construction",
    type: "Mixed-use",
    listingType: "Buy",
    floors: 3,
    sizeSqft: "800–5,000 sqft",
    sizeKatha: "1.1–6.9 katha",
    startingPrice: "৳60 lakh",
    priceNumeric: 6_000_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_SUSTAINABLE_AERIAL,
    gallery: [BD_SUSTAINABLE_AERIAL, BD_CONCORD_AJIMPUR, BD_BANANI_MODEL_TOWN],
    description:
      "A low-rise commercial park for Narayanganj combining warehousing, showroom, and light-industrial units across three floors, built for businesses that need loading access alongside street-facing retail. Structural work is on schedule for next year.",
    amenities: ["Ground-level loading dock", "Showroom + warehouse configurations", "24/7 security", "Backup generator", "Ample vehicle parking"],
  },
  {
    slug: "afrah-international-plaza",
    name: "Afrah International Plaza",
    location: "Manchester, United Kingdom",
    status: "Under construction",
    type: "Mixed-use",
    listingType: "Buy",
    floors: 6,
    sizeSqft: "400–2,100 sqft",
    sizeKatha: "—",
    startingPrice: "$310,000",
    priceNumeric: 310_000,
    priceUnit: "total",
    currency: "USD",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85",
    ],
    description:
      "Al Afrah's first international development, Afrah International Plaza combines ground-floor retail with serviced office floors above — built to UK code with the same delivery discipline as our Dhaka developments.",
    amenities: ["Ground-floor retail", "Serviced office floors", "Covered parking", "Elevator access", "On-site management"],
  },

  // Resale — individually owned commercial units listed for sale
  {
    slug: "floor-9-afrah-corporate-heights",
    name: "Floor 9, Afrah Corporate Heights",
    location: "Karwan Bazar, Dhaka",
    status: "Ready to move",
    type: "Commercial",
    listingType: "Sell",
    floors: 18,
    sizeSqft: "2,400 sqft",
    sizeKatha: "3.3 katha",
    startingPrice: "৳2.6 crore",
    priceNumeric: 26_000_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_ALIF_BREEZE,
    gallery: [BD_ALIF_BREEZE, BD_DHAKA_DIAMOND, INTERIOR_LIVING_ROOM],
    description:
      "A full-floor commercial unit on the ninth floor of Afrah Corporate Heights, independently owned since handover and now offered for resale. Column-free layout with panoramic city views, sold with fit-out and partitioning included.",
    amenities: ["Column-free floor plate", "City views", "24/7 security", "Backup generator", "Passenger + service lifts", "Reserved parking"],
  },
  {
    slug: "shop-3a-afrah-junction",
    name: "Shop 3A, Afrah Junction",
    location: "Uttara, Dhaka",
    status: "Ready to move",
    type: "Retail",
    listingType: "Sell",
    floors: 6,
    sizeSqft: "380 sqft",
    sizeKatha: "0.5 katha",
    startingPrice: "৳48 lakh",
    priceNumeric: 4_800_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_BANANI_MODEL_TOWN,
    gallery: [BD_BANANI_MODEL_TOWN, BD_MUGDA_TERRACED, INTERIOR_LIVING_ROOM],
    description:
      "A ground-floor corner shop in Afrah Junction, previously operated as a mobile accessories retailer. Vacant possession at sale, with signage rights and a dedicated entrance included.",
    amenities: ["Dedicated entrance", "Signage rights", "24/7 security", "Backup generator"],
  },
  {
    slug: "showroom-12-afrah-shopping-arcade",
    name: "Showroom 12, Afrah Shopping Arcade",
    location: "Zindabazar, Sylhet",
    status: "Ready to move",
    type: "Retail",
    listingType: "Sell",
    floors: 5,
    sizeSqft: "520 sqft",
    sizeKatha: "0.7 katha",
    startingPrice: "৳62 lakh",
    priceNumeric: 6_200_000,
    priceUnit: "total",
    currency: "BDT",
    image: BD_HABIBULLAH_STREET,
    gallery: [BD_HABIBULLAH_STREET, BD_GREEN_NEST, BD_MUGDA_TERRACED],
    description:
      "An independently owned first-floor showroom in Afrah Shopping Arcade, previously operated as an electronics retailer. Sold with fixtures, shelving, and full documentation verified by our legal team.",
    amenities: ["Fixtures & shelving included", "24/7 security", "Backup generator", "Shared escalators"],
  },

  // Leasing — retail and office space available to rent
  {
    slug: "afrah-business-square",
    name: "Afrah Business Square",
    location: "Banani, Dhaka",
    status: "Ready to move",
    type: "Commercial",
    listingType: "Rent",
    floors: 10,
    sizeSqft: "500–2,200 sqft",
    sizeKatha: "0.7–3.1 katha",
    startingPrice: "৳85,000/month",
    priceNumeric: 85_000,
    priceUnit: "month",
    currency: "BDT",
    image: BD_DHAKA_DIAMOND,
    gallery: [BD_DHAKA_DIAMOND, BD_ALIF_BREEZE, BD_CONCORD_AJIMPUR],
    description:
      "Fitted-out office suites in a boutique Banani tower, available on flexible lease terms. Suites come with meeting rooms, pantry space, and dedicated fibre connectivity already installed — ready for immediate occupancy.",
    amenities: ["Fitted meeting rooms", "Fibre connectivity", "Central AC", "24/7 security", "Passenger + service lifts", "Reserved parking"],
  },
  {
    slug: "afrah-shopping-arcade-retail-units",
    name: "Afrah Shopping Arcade — Retail Units",
    location: "Zindabazar, Sylhet",
    status: "Ready to move",
    type: "Retail",
    listingType: "Rent",
    floors: 5,
    sizeSqft: "150–600 sqft",
    sizeKatha: "0.2–0.8 katha",
    startingPrice: "৳35,000/month",
    priceNumeric: 35_000,
    priceUnit: "month",
    currency: "BDT",
    image: BD_HABIBULLAH_STREET,
    gallery: [BD_HABIBULLAH_STREET, BD_GREEN_NEST, BD_MUGDA_TERRACED],
    description:
      "Ground and first-floor retail units available to lease in Sylhet's established Zindabazar shopping arcade. Fully handed over with footfall already established from neighboring anchor stores.",
    amenities: ["High-footfall location", "24/7 security", "Backup generator", "Shared escalators", "Signage rights"],
  },
  {
    slug: "food-court-kiosk-4b-afrah-lifestyle-mall",
    name: "Food Court Kiosk 4B, Afrah Lifestyle Mall",
    location: "Agrabad, Chattogram",
    status: "Under construction",
    type: "Retail",
    listingType: "Rent",
    floors: 7,
    sizeSqft: "120 sqft",
    sizeKatha: "0.15 katha",
    startingPrice: "৳28,000/month",
    priceNumeric: 28_000,
    priceUnit: "month",
    currency: "BDT",
    image: BD_GREEN_NEST,
    gallery: [BD_GREEN_NEST, BD_DHANMONDI_VIEW, BD_SUSTAINABLE_AERIAL],
    description:
      "A compact food court kiosk in the under-construction Afrah Lifestyle Mall, available for pre-leasing ahead of the mall's opening. Includes shared seating, utility hookups, and exhaust ducting provisioned for F&B tenants.",
    amenities: ["Shared food court seating", "Utility & exhaust hookups", "24/7 security", "Backup generator"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
