"use client";

import { ArrowUpRight, Leaf, MapPin, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";
import BlueprintGrid from "../components/BlueprintGrid";
import Container from "../components/Container";
import Contact from "../components/Contact";
import EnquiryModal from "../components/EnquiryModal";
import Footer from "../components/Footer";
import Kicker from "../components/Kicker";
import Milestones from "../components/Milestones";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import Stats from "../components/Stats";
import Team from "../components/Team";
import { BD_HABIBULLAH_STREET } from "../data/images";

const values = [
  {
    icon: Leaf,
    title: "Green by design",
    copy: "Landscaped gardens, water features, and play areas are designed into every development from day one — not added on afterward.",
  },
  {
    icon: MapPin,
    title: "Prime locations",
    copy: "Every site is chosen for footfall, access, and long-term commercial viability — not just today's land price.",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    copy: "Transparent pricing, honest timelines, and documentation owners and tenants can rely on from booking to handover.",
  },
  {
    icon: Users,
    title: "People first",
    copy: "From first enquiry to after-handover leasing support, our team stays close to every investor and tenant we work with.",
  },
];

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <div className="relative bg-moss-dark overflow-hidden">
        <img src={BD_HABIBULLAH_STREET} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,17,.82)_0%,rgba(13,26,17,.9)_100%)]" />
        <BlueprintGrid className="absolute inset-0 z-[1] text-white/[.06] pointer-events-none" />
        <div className="relative z-10">
          <Nav onEnquire={() => setEnquiryOpen(true)} />
          <Container className="pt-[125px] pb-[64px] md:pt-[164px] md:pb-[80px]">
            <Reveal>
              <Kicker className="text-[#f3e6c2]">About Al Afrah</Kicker>
              <h1 className="font-serif font-bold text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px]">
                Rooted in trust,<br /><em className="italic text-gold">built for business.</em>
              </h1>
            </Reveal>
          </Container>
        </div>
      </div>

      <Section className="py-[84px] md:py-[130px]">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px] items-start">
          <Reveal>
            <Kicker>Who we are</Kicker>
            <h2 className="font-serif font-bold text-[36px] md:text-[44px] leading-[1.05] tracking-[-.03em] mb-6">
              Dhaka-born,<br /><em className="italic text-gold-dark">building far beyond it.</em>
            </h2>
            <p className="text-muted text-[16px] leading-[1.7] max-w-[460px] mb-5">
              Since 2013, Al Afrah has delivered shopping malls, retail plazas, and Grade-A
              commercial towers across Bangladesh and, more recently, internationally —
              pairing modern architecture with landscaped gardens, water features, and family
              play areas that owners and tenants can trust for generations.
            </p>
            <p className="text-muted text-[16px] leading-[1.7] max-w-[460px] mb-8">
              We keep design, construction, and leasing support in-house, so the same
              team that draws the floor plan is accountable for the finished handover. That
              accountability is the reason brands and investors come back to us for their
              second and third location.
            </p>
            <a href="/projects?type=Buy" className="flex items-center gap-[10px] pb-[7px] border-b border-ink text-[13px] w-max">
              See our work <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <div className="grid gap-8">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1} className="flex gap-5">
                <div className="shrink-0 grid place-items-center w-12 h-12 rounded-full bg-cream text-moss">
                  <value.icon size={20} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-serif text-[20px] mb-2">{value.title}</h3>
                  <p className="text-muted text-[14px] leading-[1.65] max-w-[380px]">{value.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Milestones />
      <Stats />
      <Team />
      <Contact />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
