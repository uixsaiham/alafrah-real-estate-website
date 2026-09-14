"use client";

import { ArrowUpRight, Building2, Compass, HardHat, LineChart, PencilRuler } from "lucide-react";
import { useState } from "react";
import BlueprintGrid from "../components/BlueprintGrid";
import Container from "../components/Container";
import Contact from "../components/Contact";
import EnquiryModal from "../components/EnquiryModal";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Kicker from "../components/Kicker";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import ServiceDetailRow, { type ServiceDetail } from "../components/ServiceDetailRow";
import Stats from "../components/Stats";
import {
  BD_CONCORD_AJIMPUR,
  BD_DHAKA_DIAMOND,
  BD_DHANMONDI_VIEW,
  BD_GREEN_NEST,
  BD_MUGDA_TERRACED,
  BD_SUSTAINABLE_AERIAL,
} from "../data/images";

const services: ServiceDetail[] = [
  {
    icon: Building2,
    step: "01",
    title: "Commercial development",
    description:
      "End-to-end development of shopping malls, retail plazas, and Grade-A commercial towers — from land acquisition and feasibility through design, permitting, construction, and handover. It's the same model we've run since our first retail plaza in Old Dhaka in 2013, now scaled across 24 developments and three countries.",
    includes: [
      "Site acquisition & feasibility studies",
      "Permitting & regulatory approval",
      "In-house delivery from design to handover",
      "Post-handover facilities support",
    ],
    image: BD_DHANMONDI_VIEW,
    lead: {
      name: "Md. Aminul Haque",
      role: "Founder & Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=85",
    },
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Architecture & design",
    description:
      "Considered architecture that balances footfall, visibility, and material with long-term commercial value — from anchor-tenant floor plates to the landscaped courtyard at Afrah City Walk. Our in-house architecture team draws every floor plan we later build, so nothing gets lost in translation between design and site.",
    includes: [
      "Footfall-first layout & tenant-mix planning",
      "Anchor-tenant and multiplex floor design",
      "Material selection suited to Dhaka's climate",
      "Visualization and shopfront selections before handover",
    ],
    image: BD_GREEN_NEST,
    lead: {
      name: "Sabrina Karim",
      role: "Head of Architecture & Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=85",
    },
  },
  {
    icon: HardHat,
    step: "03",
    title: "Construction",
    description:
      "In-house construction teams delivering to code with quality control at every stage — including a shift to fly-ash brick, which cuts embodied carbon by roughly a third and cures stronger than traditional fired clay brick. Every new development also ships with rooftop conduit pre-run for solar, sized to offset common-area and escalator load.",
    includes: [
      "Fly-ash brick & lower-carbon materials",
      "Solar-ready rooftop conduit on every development",
      "Independent quality inspections at each milestone",
      "Structural completion typically ahead of schedule",
    ],
    image: BD_CONCORD_AJIMPUR,
    lead: {
      name: "Tanvir Ahmed",
      role: "Head of Construction",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=85",
    },
  },
  {
    icon: Compass,
    step: "04",
    title: "Leasing & tenant management",
    description:
      "Dedicated management across design, permitting, and construction to keep every project on schedule — Afrah Central Mall reached structural completion two weeks ahead of plan. Reservation holders get milestone-based payment schedules and site walkthroughs ahead of shopfront selections, so there are no surprises between booking and opening day.",
    includes: [
      "Milestone-based payment schedules",
      "Site walkthroughs for reservation holders",
      "Tenant mix planning & anchor tenant sourcing",
      "One-year defect liability period after handover",
    ],
    image: BD_MUGDA_TERRACED,
    highlight: { value: "2 wks", label: "ahead of schedule on Afrah Central Mall's structural completion" },
  },
  {
    icon: LineChart,
    step: "05",
    title: "Investment & capital",
    description:
      "Structured investment opportunities for partners looking for long-term returns in commercial real assets — close to a fifth of last year's bookings came from non-resident Bangladeshis buying from the UK, US, and Middle East. We handle NFCD remittance documentation and power-of-attorney registration, plus optional leasing management for owners who won't be in Dhaka to manage tenants themselves.",
    includes: [
      "NRB remittance & documentation support",
      "Power-of-attorney registration for overseas buyers",
      "Optional leasing & unit management",
      "Free EMI and return estimates on every listing",
    ],
    image: BD_DHAKA_DIAMOND,
    lead: {
      name: "Faria Rahman",
      role: "Director of Leasing & Investment",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=85",
    },
  },
];

const process = [
  {
    step: "01",
    title: "Enquiry & site visit",
    copy: "Tell us what you're looking for — budget, location, timeline — and book a site visit. Most buyers shortlist a project on the first visit.",
  },
  {
    step: "02",
    title: "Booking & paperwork",
    copy: "Reserve with a 10–20% booking payment. Our legal team prepares and verifies every registration document, including power of attorney for buyers abroad.",
  },
  {
    step: "03",
    title: "Construction & milestones",
    copy: "For under-construction projects, remaining payments are structured across construction milestones, with walkthroughs ahead of finishing selections.",
  },
  {
    step: "04",
    title: "Handover & defect protection",
    copy: "Every handover includes a one-year defect liability period, with our facilities team available for common-area maintenance for the life of the building.",
  },
  {
    step: "05",
    title: "After-sales & leasing",
    copy: "Ready to move on? Our resale and leasing desk can help you value, list, or find tenants for the unit whenever you're ready.",
  },
];

export default function ServicesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <div className="relative bg-moss-dark overflow-hidden">
        <img src={BD_SUSTAINABLE_AERIAL} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,17,.82)_0%,rgba(13,26,17,.9)_100%)]" />
        <BlueprintGrid className="absolute inset-0 z-[1] text-white/[.06] pointer-events-none" />
        <div className="relative z-10">
          <Nav onEnquire={() => setEnquiryOpen(true)} />
          <Container className="pt-[125px] pb-[64px] md:pt-[164px] md:pb-[80px]">
            <Reveal>
              <Kicker className="text-[#f3e6c2]">What we do</Kicker>
              <h1 className="font-serif font-bold text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px] mb-6">
                One partner,<br /><em className="italic text-gold">every step of the way.</em>
              </h1>
              <p className="text-white/70 text-[15px] md:text-[16px] leading-[1.7] max-w-[540px]">
                We keep design, construction, leasing, and investment support in-house — the
                same team that draws the floor plan is accountable for the finished handover.
              </p>
            </Reveal>
          </Container>
        </div>
      </div>

      <Section className="py-[64px] md:py-[80px]">
        <Container>
          {services.map((service, index) => (
            <ServiceDetailRow key={service.title} service={service} reverse={index % 2 === 1} />
          ))}
        </Container>
      </Section>

      <Section className="py-[84px] md:py-[130px] bg-cream">
        <Container>
          <Reveal className="max-w-[560px] mb-[52px] md:mb-[64px]">
            <Kicker>How we work</Kicker>
            <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
              From enquiry<br /><em className="italic text-gold-dark">to the keys in hand.</em>
            </h2>
          </Reveal>
          <div className="grid gap-0">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <div className="grid grid-cols-[64px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 py-7 border-t border-line last:border-b">
                  <div className="font-serif text-[24px] md:text-[28px] text-moss">{item.step}</div>
                  <div>
                    <h3 className="font-serif text-[19px] leading-[1.2] mb-2">{item.title}</h3>
                    <p className="text-muted text-[14px] leading-[1.6] max-w-[520px]">{item.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Stats />

      <Section className="py-[84px] md:py-[110px]">
        <Container className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-moss text-white px-8 py-10 md:px-[64px] md:py-[56px]">
          <Reveal>
            <h2 className="font-serif font-bold text-[26px] md:text-[34px] leading-[1.15] tracking-[-.02em] max-w-[440px]">
              Ready to build something lasting?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              onClick={() => setEnquiryOpen(true)}
              className="flex items-center gap-[10px] bg-white text-moss-dark px-[22px] py-[15px] text-[13px] transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5"
            >
              Book a visit <ArrowUpRight size={16} />
            </button>
          </Reveal>
        </Container>
      </Section>

      <Faq />
      <Contact />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
