"use client";

import { ArrowUpRight, Building2, Compass, HardHat, LineChart, PencilRuler } from "lucide-react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const services = [
  {
    icon: Building2,
    title: "Commercial development",
    copy: "End-to-end development of shopping malls, retail plazas, and office towers, from land acquisition to handover.",
  },
  {
    icon: Compass,
    title: "Leasing & tenant management",
    copy: "Tenant mix planning, leasing, and day-to-day mall and building management to keep every floor performing.",
  },
  {
    icon: LineChart,
    title: "Investment & capital",
    copy: "Structured investment opportunities for partners looking for long-term returns in commercial real assets.",
  },
  {
    icon: HardHat,
    title: "Construction",
    copy: "In-house construction teams delivering to code with quality control at every stage of the build.",
  },
  {
    icon: PencilRuler,
    title: "Architecture & design",
    copy: "Considered architecture that balances footfall, visibility, and material with long-term commercial value.",
  },
];

export default function Services() {
  return (
    <Section id="services" className="py-[84px] md:py-[130px] bg-cream">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-[52px] md:mb-[64px] gap-[25px]">
          <div className="max-w-[560px]">
            <Kicker>What we do</Kicker>
            <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
              One partner,<br /><em className="italic text-gold-dark">every step of the way.</em>
            </h2>
          </div>
          <a href="/services" className="flex items-center gap-[10px] pb-[7px] border-b border-ink text-[13px] w-max">
            How we work <ArrowUpRight size={16} />
          </a>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06} y={16}>
              <a
                href="/services"
                className="group block bg-cream hover:bg-paper transition-colors duration-300 p-8 h-full flex flex-col gap-5"
              >
                <service.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-moss transition-transform duration-300 group-hover:-translate-y-1"
                />
                <h3 className="font-serif text-[19px] leading-[1.2]">{service.title}</h3>
                <p className="text-muted text-[13px] leading-[1.6]">{service.copy}</p>
                <span className="mt-auto flex items-center gap-[4px] text-ink font-mono text-[11px] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more <ArrowUpRight size={13} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
