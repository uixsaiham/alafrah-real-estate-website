"use client";

import { ArrowUpRight, Building2, Compass, HardHat, LineChart, PencilRuler } from "lucide-react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";
import { useLanguage } from "../context/LanguageContext";

const services = [
  {
    icon: Building2,
    title: "Real estate development",
    titleBn: "রিয়েল এস্টেট উন্নয়ন",
    copy: "End-to-end development of residential and commercial properties, from land acquisition to handover.",
  },
  {
    icon: Compass,
    title: "Project management",
    titleBn: "প্রকল্প ব্যবস্থাপনা",
    copy: "Dedicated management across design, permitting, and construction to keep every project on schedule.",
  },
  {
    icon: LineChart,
    title: "Investment & capital",
    titleBn: "বিনিয়োগ ও পুঁজি",
    copy: "Structured investment opportunities for partners looking for long-term returns in real assets.",
  },
  {
    icon: HardHat,
    title: "Construction",
    titleBn: "নির্মাণ",
    copy: "In-house construction teams delivering to code with quality control at every stage of the build.",
  },
  {
    icon: PencilRuler,
    title: "Architecture & design",
    titleBn: "স্থাপত্য ও নকশা",
    copy: "Considered architecture that balances light, material, and neighborhood context with livability.",
  },
];

export default function Services() {
  const { language } = useLanguage();
  return (
    <Section id="services" className="py-[84px] md:py-[130px] bg-cream">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-[52px] md:mb-[64px] gap-[25px]">
          <div className="max-w-[560px]">
            <Kicker>What we do</Kicker>
            {language === "bn" ? (
              <h2 className="font-bengali-serif font-extrabold text-[26px] sm:text-[34px] sm:whitespace-nowrap md:text-[48px] leading-[1.25]">
                পরিকল্পনা থেকে সমাপ্তি:<br /><em className="not-italic text-gold-dark">বিশ্বস্ত আবাসন সমাধান।</em>
              </h2>
            ) : (
              <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
                One partner,<br /><em className="italic text-gold-dark">every step of the way.</em>
              </h2>
            )}
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
                <h3
                  className={
                    language === "bn"
                      ? "font-bengali-serif font-semibold text-[21px] leading-[1.4]"
                      : "font-serif text-[19px] leading-[1.2]"
                  }
                >
                  {language === "bn" ? service.titleBn : service.title}
                </h3>
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
