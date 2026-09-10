"use client";

import { ArrowUpRight, Building2, Compass, HardHat, LineChart, PencilRuler } from "lucide-react";
import { useState } from "react";
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
import { useLanguage } from "../context/LanguageContext";

const services: ServiceDetail[] = [
  {
    icon: Building2,
    step: "01",
    title: "Real estate development",
    titleBn: "রিয়েল এস্টেট উন্নয়ন",
    description:
      "End-to-end development of residential, commercial, and mixed-use property — from land acquisition and feasibility through design, permitting, construction, and handover. It's the same model we've run since our first four-unit building in Matuail in 2013, now scaled across 24 projects and three countries.",
    includes: [
      "Site acquisition & feasibility studies",
      "Permitting & regulatory approval",
      "In-house delivery from design to handover",
      "Post-handover facilities support",
    ],
    image: BD_DHANMONDI_VIEW,
    lead: {
      name: "Md. Aminul Haque",
      nameBn: "মোঃ আমিনুল হক",
      role: "Founder & Managing Director",
      roleBn: "প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=85",
    },
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Architecture & design",
    titleBn: "স্থাপত্য ও নকশা",
    description:
      "Considered architecture that balances light, material, and neighborhood context with livability — from cross-ventilated floor plans to the terraced roof gardens on Uttara Skyline. Our in-house architecture team draws every floor plan we later build, so nothing gets lost in translation between design and site.",
    includes: [
      "Cross-ventilation & daylight-first floor plans",
      "Terraced & shared rooftop garden design",
      "Material selection suited to Dhaka's climate",
      "Visualization and finishing selections before handover",
    ],
    image: BD_GREEN_NEST,
    lead: {
      name: "Sabrina Karim",
      nameBn: "সাবরিনা করিম",
      role: "Head of Architecture",
      roleBn: "স্থাপত্য বিভাগের প্রধান",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=85",
    },
  },
  {
    icon: HardHat,
    step: "03",
    title: "Construction",
    titleBn: "নির্মাণ",
    description:
      "In-house construction teams delivering to code with quality control at every stage — including a shift to fly-ash brick, which cuts embodied carbon by roughly a third and cures stronger than traditional fired clay brick. Every new residential project also ships with rooftop conduit pre-run for solar, even where a homeowner doesn't install panels at handover.",
    includes: [
      "Fly-ash brick & lower-carbon materials",
      "Solar-ready rooftop conduit on every unit",
      "Independent quality inspections at each milestone",
      "Structural completion typically ahead of schedule",
    ],
    image: BD_CONCORD_AJIMPUR,
    lead: {
      name: "Tanvir Ahmed",
      nameBn: "তানভীর আহমেদ",
      role: "Head of Construction",
      roleBn: "নির্মাণ বিভাগের প্রধান",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=85",
    },
  },
  {
    icon: Compass,
    step: "04",
    title: "Project management",
    titleBn: "প্রকল্প ব্যবস্থাপনা",
    description:
      "Dedicated management across design, permitting, and construction to keep every project on schedule — Greenleaf-6 reached structural completion two weeks ahead of plan. Reservation holders get milestone-based payment schedules and site walkthroughs ahead of finishing selections, so there are no surprises between booking and keys.",
    includes: [
      "Milestone-based payment schedules",
      "Site walkthroughs for reservation holders",
      "Single point of contact from booking to handover",
      "One-year defect liability period after handover",
    ],
    image: BD_MUGDA_TERRACED,
    highlight: { value: "2 wks", label: "ahead of schedule on Greenleaf-6's structural completion" },
  },
  {
    icon: LineChart,
    step: "05",
    title: "Investment & capital",
    titleBn: "বিনিয়োগ ও পুঁজি",
    description:
      "Structured investment opportunities for partners looking for long-term returns in real assets — close to a fifth of last year's bookings came from non-resident Bangladeshis buying from the UK, US, and Middle East. We handle NFCD remittance documentation and power-of-attorney registration, plus optional property management for owners who won't be in Dhaka to manage a rental themselves.",
    includes: [
      "NRB remittance & documentation support",
      "Power-of-attorney registration for overseas buyers",
      "Optional rental & property management",
      "Free EMI and return estimates on every listing",
    ],
    image: BD_DHAKA_DIAMOND,
    lead: {
      name: "Faria Rahman",
      nameBn: "ফারিয়া রহমান",
      role: "Director of Investment",
      roleBn: "বিনিয়োগ পরিচালক",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=85",
    },
  },
];

const process = [
  {
    step: "01",
    title: "Enquiry & site visit",
    titleBn: "অনুসন্ধান ও পরিদর্শন",
    copy: "Tell us what you're looking for — budget, location, timeline — and book a site visit. Most buyers shortlist a project on the first visit.",
  },
  {
    step: "02",
    title: "Booking & paperwork",
    titleBn: "বুকিং ও কাগজপত্র",
    copy: "Reserve with a 10–20% booking payment. Our legal team prepares and verifies every registration document, including power of attorney for buyers abroad.",
  },
  {
    step: "03",
    title: "Construction & milestones",
    titleBn: "নির্মাণ ও মাইলফলক",
    copy: "For under-construction projects, remaining payments are structured across construction milestones, with walkthroughs ahead of finishing selections.",
  },
  {
    step: "04",
    title: "Handover & defect protection",
    titleBn: "হস্তান্তর ও ত্রুটি সুরক্ষা",
    copy: "Every handover includes a one-year defect liability period, with our facilities team available for common-area maintenance for the life of the building.",
  },
  {
    step: "05",
    title: "After-sales & rentals",
    titleBn: "বিক্রয়োত্তর সেবা ও ভাড়া",
    copy: "Ready to move on? Our resale and rental desk can help you value, list, or find tenants for the unit whenever you're ready.",
  },
];

export default function ServicesPage() {
  const { language } = useLanguage();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <div className="relative bg-moss-dark overflow-hidden">
        <img src={BD_SUSTAINABLE_AERIAL} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,17,.82)_0%,rgba(13,26,17,.9)_100%)]" />
        <div className="relative z-10">
          <Nav onEnquire={() => setEnquiryOpen(true)} />
          <Container className="pt-[125px] pb-[64px] md:pt-[164px] md:pb-[80px]">
            <Reveal>
              <Kicker className="text-[#dce5d6]">What we do</Kicker>
              {language === "bn" ? (
                <h1 className="font-bengali-serif font-extrabold text-white text-[28px] sm:text-[38px] sm:whitespace-nowrap md:text-[54px] leading-[1.25] max-w-[760px] mb-6">
                  পরিকল্পনা থেকে সমাপ্তি:<br /><em className="not-italic text-gold">বিশ্বস্ত আবাসন সমাধান।</em>
                </h1>
              ) : (
                <h1 className="font-serif font-bold text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px] mb-6">
                  One partner,<br /><em className="italic text-gold">every step of the way.</em>
                </h1>
              )}
              <p className="text-white/70 text-[15px] md:text-[16px] leading-[1.7] max-w-[540px]">
                We keep design, construction, project management, and investment support in-house — the
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
            {language === "bn" ? (
              <h2 className="font-bengali-serif font-extrabold text-[40px] md:text-[50px] leading-[1.35]">
                অনুসন্ধান থেকে<br /><em className="not-italic text-gold-dark">চাবি হাতে পাওয়া পর্যন্ত।</em>
              </h2>
            ) : (
              <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
                From enquiry<br /><em className="italic text-gold-dark">to the keys in hand.</em>
              </h2>
            )}
          </Reveal>
          <div className="grid gap-0">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <div className="grid grid-cols-[64px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 py-7 border-t border-line last:border-b">
                  <div className="font-serif text-[24px] md:text-[28px] text-moss">{item.step}</div>
                  <div>
                    <h3
                      className={
                        language === "bn"
                          ? "font-bengali-serif font-semibold text-[21px] leading-[1.4] mb-2"
                          : "font-serif text-[19px] leading-[1.2] mb-2"
                      }
                    >
                      {language === "bn" ? item.titleBn : item.title}
                    </h3>
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
            {language === "bn" ? (
              <h2 className="font-bengali-serif font-extrabold text-[28px] md:text-[36px] leading-[1.4] max-w-[440px]">
                কিছু দীর্ঘস্থায়ী গড়তে প্রস্তুত?
              </h2>
            ) : (
              <h2 className="font-serif font-bold text-[26px] md:text-[34px] leading-[1.15] tracking-[-.02em] max-w-[440px]">
                Ready to build something lasting?
              </h2>
            )}
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
