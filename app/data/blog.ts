import {
  BD_ALIF_BREEZE,
  BD_BANANI_MODEL_TOWN,
  BD_CONCORD_AJIMPUR,
  BD_DHAKA_DIAMOND,
  BD_HABIBULLAH_STREET,
  BD_MUGDA_TERRACED,
  BD_SUSTAINABLE_AERIAL,
} from "./images";

export type BlogPost = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  titleBn: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sustainable-materials-dhaka",
    category: "Sustainability",
    readTime: "8 min read",
    title: "How sustainable materials are changing residential builds in Dhaka",
    titleBn: "ঢাকার আবাসন নির্মাণে টেকসই উপকরণের ব্যবহার যেভাবে বদলে দিচ্ছে",
    excerpt:
      "From fly-ash bricks to solar-ready rooftops, a look at the material choices driving down the environmental cost of new apartments.",
    image: BD_SUSTAINABLE_AERIAL,
    date: "2026-06-12",
    author: "Sabrina Karim, Head of Architecture",
    content: [
      "Dhaka's residential construction boom has, for decades, run almost entirely on fired clay brick and reinforced concrete — durable, but heavy on both embodied carbon and kiln-fired brick fields that consume agricultural topsoil.",
      "Over the last three years, Green Estate has shifted a growing share of our structural and partition work to fly-ash brick, a byproduct of coal power generation that would otherwise go to landfill. It cures stronger than traditional brick, cuts embodied carbon by roughly a third, and — because it's more dimensionally consistent — reduces the plaster needed to finish a wall.",
      "Every new residential project now ships with rooftop conduit pre-run for solar panels, even where a homeowner doesn't install them at handover. It costs a fraction to include during construction and makes retrofitting trivial later.",
      "None of this is dramatic on its own. But stacked across twenty-plus projects, the difference in long-term maintenance cost and environmental footprint is significant — and it's the direction the whole industry in Bangladesh is heading.",
    ],
  },
  {
    slug: "greenleaf-6-structural-completion",
    category: "Milestone",
    readTime: "5 min read",
    title: "Greenleaf-6 reaches structural completion",
    titleBn: "Greenleaf-6-এর কাঠামোগত নির্মাণ সম্পন্ন",
    excerpt:
      "The Matuail development has topped out ahead of schedule, with finishing work now underway across all six floors.",
    image: BD_CONCORD_AJIMPUR,
    date: "2026-05-28",
    author: "Tanvir Ahmed, Head of Construction",
    content: [
      "Greenleaf-6 has reached structural completion two weeks ahead of its original schedule, with the roof slab poured on May 22nd. This marks the point where the building's frame, floors, and roof are fully in place — the milestone most buyers ask about, since it's when a project moves from \"under construction\" to visibly a building.",
      "Finishing work — plastering, electrical first-fix, plumbing rough-in, and the shared rooftop garden — begins immediately and is expected to run through the third quarter.",
      "Reservation holders on floors two through five have been invited for a site walkthrough this month, ahead of finishing selections for flooring and fittings.",
    ],
  },
  {
    slug: "investing-from-abroad",
    category: "Investment",
    readTime: "4 min read",
    title: "A guide to investing in Bangladeshi real estate from abroad",
    titleBn: "প্রবাস থেকে বাংলাদেশের রিয়েল এস্টেটে বিনিয়োগের নির্দেশিকা",
    excerpt:
      "What non-resident Bangladeshis need to know about remittance channels, documentation, and property management before buying from overseas.",
    image: BD_ALIF_BREEZE,
    date: "2026-05-10",
    author: "Faria Rahman, Director of Investment",
    content: [
      "A growing share of our buyers — close to a fifth of last year's bookings — are non-resident Bangladeshis purchasing from the UK, US, Middle East, or elsewhere. The process is straightforward once you know the sequence, but the paperwork trips up a lot of first-time overseas buyers.",
      "Payments should route through a Non-Resident Foreign Currency (NFCD) account or via wage-earner remittance to keep the funds clearly documented for Bangladesh Bank purposes — this matters later if you ever want to repatriate proceeds from a resale.",
      "Power of attorney is the other piece people underestimate. If you can't attend in person for registration, a notarized and attested power of attorney (through the Bangladesh embassy in your country of residence) lets a trusted representative — or our team — complete registration on your behalf.",
      "We handle the local end of this for every non-resident buyer: document preparation, registration attendance, and — once handed over — optional property management if the unit will sit vacant or be rented out.",
    ],
  },
  {
    slug: "newtown-residences-one-year-later",
    category: "Homeowner story",
    readTime: "6 min read",
    title: "Newtown Residences, one year after handover",
    titleBn: "Newtown Residences: হস্তান্তরের এক বছর পর",
    excerpt:
      "We checked back in with three families who moved in during the first wave of handovers to see what's held up — and what they'd tell a new buyer.",
    image: BD_MUGDA_TERRACED,
    date: "2026-04-22",
    author: "Green Estate Editorial",
    content: [
      "A year on from the first Newtown Residences handovers, we sat down with three homeowner families to ask what daily life in the building actually looks like — beyond the marketing renders.",
      "The consistent theme was ventilation: every unit we visited still relies mostly on natural cross-breeze rather than air conditioning for eight or nine months of the year, something the wide-balcony floor plan was specifically designed for.",
      "The one recurring piece of feedback was storage — several families added custom wardrobe units beyond what shipped standard, which is now informing the finishing package on our newer projects.",
    ],
  },
  {
    slug: "gulshan-commercial-demand",
    category: "Market insight",
    readTime: "5 min read",
    title: "Why Grade-A commercial demand in Gulshan keeps climbing",
    titleBn: "গুলশানে গ্রেড-এ বাণিজ্যিক চাহিদা কেন ক্রমাগত বাড়ছে",
    excerpt:
      "A look at the office vacancy data behind our decision to build the Green Estate Business Center, and what it means for tenants weighing a move.",
    image: BD_DHAKA_DIAMOND,
    date: "2026-03-30",
    author: "Faria Rahman, Director of Investment",
    content: [
      "Grade-A office vacancy in Gulshan has stayed under 8% for six consecutive quarters, even as overall commercial construction in Dhaka has slowed. That gap between supply and demand for genuinely column-free, floor-to-ceiling-glazed office space is what led us to break ground on the Green Estate Business Center in 2019.",
      "Multinational tenants in particular are consolidating into fewer, higher-quality buildings rather than spreading across older stock — a trend that shows no sign of reversing.",
      "For businesses weighing a move, the arithmetic increasingly favors newer buildings even at a premium rent, once you account for the electricity and generator costs of retrofitting an older floor plate.",
    ],
  },
  {
    slug: "choosing-between-buy-and-rent",
    category: "Buyer's guide",
    readTime: "6 min read",
    title: "Buy, rent, or wait? A framework for first-time Dhaka buyers",
    titleBn: "কিনবেন, ভাড়া নেবেন, নাকি অপেক্ষা করবেন? ঢাকায় প্রথমবার ফ্ল্যাট কেনার নির্দেশিকা",
    excerpt:
      "A practical way to think through the buy-versus-rent decision in Dhaka's market, beyond just comparing a monthly EMI to a monthly rent.",
    image: BD_HABIBULLAH_STREET,
    date: "2026-02-18",
    author: "Green Estate Editorial",
    content: [
      "The most common question we get from first-time buyers isn't about a specific project — it's whether to buy at all right now, versus renting a bit longer. Here's the framework we walk people through.",
      "Start with time horizon, not price. If you're confident you'll stay in the same part of Dhaka for five years or more, ownership costs — registration, EMI, maintenance — are very likely to come out ahead of five years of rent, especially once you factor in that rent in most neighborhoods has risen 8-10% annually.",
      "Then look at your down payment relative to savings. A down payment that empties your emergency fund is a bad trade even if the monthly EMI comfortably fits your income — you want at least three months of expenses left untouched after registration and moving costs.",
      "Finally, don't ignore the resale test: would this specific unit, in this specific building, be easy to sell or rent out again in five years if your plans changed? Ground-floor retail buildings, corner units, and buildings with functioning generators and lifts consistently resell faster than the alternative.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
