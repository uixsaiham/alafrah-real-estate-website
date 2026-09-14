import {
  BD_ALIF_BREEZE,
  BD_BANANI_MODEL_TOWN,
  BD_CONCORD_AJIMPUR,
  BD_DHAKA_DIAMOND,
  BD_HABIBULLAH_STREET,
  BD_SUSTAINABLE_AERIAL,
} from "./images";

export type BlogPost = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sustainable-materials-commercial-construction",
    category: "Sustainability",
    readTime: "8 min read",
    title: "How sustainable materials are changing commercial builds in Dhaka",
    excerpt:
      "From fly-ash bricks to solar-ready rooftops, a look at the material choices driving down the environmental cost of new malls and office towers.",
    image: BD_SUSTAINABLE_AERIAL,
    date: "2026-06-12",
    author: "Sabrina Karim, Head of Architecture & Design",
    content: [
      "Dhaka's commercial construction boom has, for decades, run almost entirely on fired clay brick and reinforced concrete — durable, but heavy on both embodied carbon and kiln-fired brick fields that consume agricultural topsoil.",
      "Over the last three years, Al Afrah has shifted a growing share of our structural and partition work to fly-ash brick, a byproduct of coal power generation that would otherwise go to landfill. It cures stronger than traditional brick, cuts embodied carbon by roughly a third, and — because it's more dimensionally consistent — reduces the plaster needed to finish a wall.",
      "Every new mall and office tower now ships with rooftop conduit pre-run for solar, sized to offset a meaningful share of common-area and escalator load. It costs a fraction to include during construction and makes retrofitting trivial later.",
      "None of this is dramatic on its own. But stacked across a dozen-plus developments, the difference in long-term maintenance cost and environmental footprint is significant — and it's the direction the whole commercial construction industry in Bangladesh is heading.",
    ],
  },
  {
    slug: "afrah-central-mall-structural-completion",
    category: "Milestone",
    readTime: "5 min read",
    title: "Afrah Central Mall reaches structural completion",
    excerpt:
      "The Gulshan flagship has topped out ahead of schedule, with finishing work now underway across all eight floors.",
    image: BD_CONCORD_AJIMPUR,
    date: "2026-05-28",
    author: "Tanvir Ahmed, Head of Construction",
    content: [
      "Afrah Central Mall has reached structural completion two weeks ahead of its original schedule, with the roof slab poured on May 22nd. This marks the point where the building's frame, floors, and roof are fully in place — the milestone most buyers and prospective tenants ask about, since it's when a project moves from \"under construction\" to visibly a building.",
      "Finishing work — plastering, electrical first-fix, escalator installation, and the multiplex shell — begins immediately and is expected to run through the third quarter.",
      "Reservation holders on the ground and first retail floors have been invited for a site walkthrough this month, ahead of finishing selections for shopfront glazing and signage zones.",
    ],
  },
  {
    slug: "investing-in-commercial-real-estate-from-abroad",
    category: "Investment",
    readTime: "4 min read",
    title: "A guide to investing in Bangladeshi commercial real estate from abroad",
    excerpt:
      "What non-resident Bangladeshis need to know about remittance channels, documentation, and leasing management before buying a shop or office unit from overseas.",
    image: BD_ALIF_BREEZE,
    date: "2026-05-10",
    author: "Faria Rahman, Director of Leasing & Investment",
    content: [
      "A growing share of our buyers — close to a fifth of last year's bookings — are non-resident Bangladeshis purchasing shop, showroom, or office units from the UK, US, Middle East, or elsewhere. The process is straightforward once you know the sequence, but the paperwork trips up a lot of first-time overseas buyers.",
      "Payments should route through a Non-Resident Foreign Currency (NFCD) account or via wage-earner remittance to keep the funds clearly documented for Bangladesh Bank purposes — this matters later if you ever want to repatriate proceeds from a resale.",
      "Power of attorney is the other piece people underestimate. If you can't attend in person for registration, a notarized and attested power of attorney (through the Bangladesh embassy in your country of residence) lets a trusted representative — or our team — complete registration on your behalf.",
      "We handle the local end of this for every non-resident buyer: document preparation, registration attendance, and — once handed over — optional leasing management for owners who won't be in Dhaka to find and manage tenants themselves.",
    ],
  },
  {
    slug: "afrah-junction-one-year-later",
    category: "Tenant story",
    readTime: "6 min read",
    title: "Afrah Junction, one year after opening",
    excerpt:
      "We checked back in with three retail tenants who opened during the first wave of handovers to see what's held up — and what they'd tell a brand considering a move in.",
    image: BD_BANANI_MODEL_TOWN,
    date: "2026-04-22",
    author: "Al Afrah Editorial",
    content: [
      "A year on from the first Afrah Junction handovers, we sat down with three tenant businesses to ask what daily trading in the building actually looks like — beyond the leasing brochure.",
      "The consistent theme was footfall consistency: ground-floor tenants reported steady weekday traffic from surrounding offices, with weekend footfall driven mostly by the food and lifestyle tenants on the upper floors — validating the mixed-use tenant mix from the outset.",
      "The one recurring piece of feedback was signage visibility from the main road, which is now informing the shopfront and monument-signage package on our newer developments.",
    ],
  },
  {
    slug: "grade-a-office-demand-motijheel",
    category: "Market insight",
    readTime: "5 min read",
    title: "Why Grade-A office demand near Motijheel keeps climbing",
    excerpt:
      "A look at the office vacancy data behind our decision to build Afrah Trade Tower, and what it means for businesses weighing a move.",
    image: BD_DHAKA_DIAMOND,
    date: "2026-03-30",
    author: "Faria Rahman, Director of Leasing & Investment",
    content: [
      "Grade-A office vacancy in Dhaka's traditional business district has stayed under 8% for six consecutive quarters, even as overall commercial construction in the city has slowed. That gap between supply and demand for genuinely column-free, floor-to-ceiling-glazed office space is what led us to build Afrah Trade Tower in Motijheel.",
      "Established local businesses in particular are consolidating into fewer, higher-quality floors rather than spreading across older stock — a trend that shows no sign of reversing.",
      "For businesses weighing a move, the arithmetic increasingly favors newer buildings even at a premium, once you account for the electricity and generator costs of retrofitting an older floor plate.",
    ],
  },
  {
    slug: "buy-or-lease-retail-guide",
    category: "Buyer's guide",
    readTime: "6 min read",
    title: "Buy or lease? A framework for retail brands entering a new mall",
    excerpt:
      "A practical way to think through the buy-versus-lease decision for a new shop or showroom, beyond just comparing an EMI to a monthly rent.",
    image: BD_HABIBULLAH_STREET,
    date: "2026-02-18",
    author: "Al Afrah Editorial",
    content: [
      "The most common question we get from prospective tenants isn't about a specific development — it's whether to buy the unit outright or lease it. Here's the framework we walk brands through.",
      "Start with time horizon, not price. If you're confident the location will suit your business for five years or more, ownership costs — registration, EMI, service charge — are very likely to come out ahead of five years of rent, especially in developments where footfall and rents are still climbing.",
      "Then look at your capital relative to working capital needs. A down payment that starves your inventory or fit-out budget is a bad trade even if the monthly EMI comfortably fits your revenue projections — most retailers are better served leasing until at least one location has proven itself.",
      "Finally, don't ignore the exit test: would this specific unit, in this specific development, be easy to sublease or sell again in five years if your plans changed? Ground-floor units, corner positions, and buildings with strong anchor tenants consistently hold value better than the alternative.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
