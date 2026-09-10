"use client";

import { ArrowUpRight, Leaf, ShieldCheck, Users } from "lucide-react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";
import { useLanguage } from "../context/LanguageContext";

const values = [
  {
    icon: Leaf,
    title: "Sustainable by design",
    titleBn: "টেকসই নকশায় তৈরি",
    copy: "Every project is built with material efficiency, natural light, and long-term environmental impact in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    titleBn: "বিশ্বাসের ভিত্তিতে গড়া",
    copy: "Transparent pricing, honest timelines, and documentation homeowners can rely on from booking to handover.",
  },
  {
    icon: Users,
    title: "People first",
    titleBn: "মানুষই প্রথম",
    copy: "From first enquiry to after-sales support, our team stays close to every family and investor we work with.",
  },
];

export default function About() {
  const { language } = useLanguage();
  return (
    <Section id="about" className="py-[84px] md:py-[130px]">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px] items-start">
        <Reveal>
          <Kicker>Why Green Estate</Kicker>
          {language === "bn" ? (
            <h2 className="font-bengali-serif font-extrabold text-[42px] md:text-[54px] leading-[1.35] mb-6">
              আপনার জীবনের সেরা বিনিয়োগটি<br /><em className="not-italic text-gold-dark">হোক আমাদের সাথে।</em>
            </h2>
          ) : (
            <h2 className="font-serif font-bold text-[44px] md:text-[56px] leading-[1.02] tracking-[-.04em] mb-6">
              Rooted in trust,<br /><em className="italic text-gold-dark">built around you.</em>
            </h2>
          )}
          <p className="text-muted text-[16px] leading-[1.7] max-w-[460px] mb-8">
            Since our founding, Green Estate has delivered residential and commercial
            developments across Bangladesh and internationally — combining modern
            architecture with construction our homeowners can trust for generations.
          </p>
          <a href="/projects" className="flex items-center gap-[10px] pb-[7px] border-b border-ink text-[13px] w-max">
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
                <h3
                  className={
                    language === "bn"
                      ? "font-bengali-serif font-semibold text-[22px] leading-[1.4] mb-2"
                      : "font-serif text-[20px] mb-2"
                  }
                >
                  {language === "bn" ? value.titleBn : value.title}
                </h3>
                <p className="text-muted text-[14px] leading-[1.65] max-w-[380px]">{value.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
