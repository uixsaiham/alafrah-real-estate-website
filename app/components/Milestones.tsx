"use client";

import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";
import { useLanguage } from "../context/LanguageContext";

const milestones = [
  {
    year: "2013",
    title: "Green Estate founded",
    titleBn: "গ্রিন এস্টেটের প্রতিষ্ঠা",
    copy: "Started as a small residential contractor in Matuail, Dhaka, with a single four-unit building.",
  },
  {
    year: "2016",
    title: "First multi-storey project",
    titleBn: "প্রথম বহুতল প্রকল্প",
    copy: "Delivered our first 6-storey apartment building, establishing our in-house construction team.",
  },
  {
    year: "2019",
    title: "Commercial expansion",
    titleBn: "বাণিজ্যিক সম্প্রসারণ",
    copy: "Broke ground on our first Grade-A commercial address in Gulshan.",
  },
  {
    year: "2022",
    title: "International debut",
    titleBn: "আন্তর্জাতিক যাত্রা শুরু",
    copy: "Launched Huntsville Commons, our first development outside Bangladesh.",
  },
  {
    year: "2025",
    title: "24 projects, 2,000+ homeowners",
    titleBn: "২৪টি প্রকল্প, ২,০০০+ গৃহস্বামী",
    copy: "Crossed 2,000 homeowners served across Bangladesh and abroad.",
  },
];

export default function Milestones() {
  const { language } = useLanguage();
  return (
    <Section className="py-[84px] md:py-[130px] bg-cream">
      <Container>
        <Reveal className="max-w-[560px] mb-[52px] md:mb-[64px]">
          <Kicker>Our story</Kicker>
          {language === "bn" ? (
            <h2 className="font-bengali-serif font-extrabold text-[42px] md:text-[52px] leading-[1.35]">
              বারো বছরের<br /><em className="not-italic text-gold-dark">রাখা প্রতিশ্রুতি।</em>
            </h2>
          ) : (
            <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
              Twelve years of<br /><em className="italic text-gold-dark">promises kept.</em>
            </h2>
          )}
        </Reveal>
        <div className="grid gap-0">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 0.06}>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 py-7 border-t border-line last:border-b">
                <div className="font-serif text-[24px] md:text-[28px] text-moss">{milestone.year}</div>
                <div>
                  <h3
                    className={
                      language === "bn"
                        ? "font-bengali-serif font-semibold text-[22px] leading-[1.4] mb-2"
                        : "font-serif text-[20px] mb-2"
                    }
                  >
                    {language === "bn" ? milestone.titleBn : milestone.title}
                  </h3>
                  <p className="text-muted text-[14px] leading-[1.6] max-w-[480px]">{milestone.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
