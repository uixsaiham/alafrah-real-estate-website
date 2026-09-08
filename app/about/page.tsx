"use client";

import { ArrowUpRight, Leaf, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";
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

const values = [
  {
    icon: Leaf,
    title: "Sustainable by design",
    copy: "Every project is built with material efficiency, natural light, and long-term environmental impact in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    copy: "Transparent pricing, honest timelines, and documentation homeowners can rely on from booking to handover.",
  },
  {
    icon: Users,
    title: "People first",
    copy: "From first enquiry to after-sales support, our team stays close to every family and investor we work with.",
  },
];

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <div className="bg-moss-dark">
        <Nav onEnquire={() => setEnquiryOpen(true)} />
        <Container className="pt-[125px] pb-[64px] md:pt-[164px] md:pb-[80px]">
          <Reveal>
            <Kicker className="text-[#dce5d6]">About Green Estate</Kicker>
            <h1 className="font-serif font-medium text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px]">
              Committed to fulfilling<br /><em className="italic">your dreams.</em>
            </h1>
          </Reveal>
        </Container>
      </div>

      <Section className="py-[84px] md:py-[130px]">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px] items-start">
          <Reveal>
            <Kicker>Who we are</Kicker>
            <h2 className="font-serif font-medium text-[36px] md:text-[44px] leading-[1.05] tracking-[-.03em] mb-6">
              A Dhaka-founded developer,<br />building beyond Dhaka.
            </h2>
            <p className="text-muted text-[16px] leading-[1.7] max-w-[460px] mb-5">
              Since 2013, Green Estate has delivered residential and commercial developments
              across Bangladesh and, more recently, internationally — combining modern
              architecture with construction our homeowners can trust for generations.
            </p>
            <p className="text-muted text-[16px] leading-[1.7] max-w-[460px] mb-8">
              We keep design, construction, and after-sales support in-house, so the same
              team that draws the floor plan is accountable for the finished handover. That
              accountability is the reason families come back to us for a second and third
              home.
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
