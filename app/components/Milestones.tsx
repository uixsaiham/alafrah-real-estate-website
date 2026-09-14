"use client";

import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const milestones = [
  {
    year: "2013",
    title: "Al Afrah founded",
    copy: "Started as a small commercial fit-out contractor in Old Dhaka, with a single retail plaza.",
  },
  {
    year: "2016",
    title: "First standalone retail plaza",
    copy: "Delivered our first ground-up retail development, establishing our in-house construction team.",
  },
  {
    year: "2019",
    title: "Grade-A office expansion",
    copy: "Broke ground on Afrah Trade Tower, our first Grade-A commercial address in Motijheel.",
  },
  {
    year: "2020",
    title: "Gardens and water features become standard",
    copy: "Introduced landscaped courtyards and water features as a signature element of every new development, starting with Afrah City Walk.",
  },
  {
    year: "2022",
    title: "International debut",
    copy: "Launched Afrah International Plaza, our first development outside Bangladesh.",
  },
  {
    year: "2025",
    title: "24 developments, 350+ brands housed",
    copy: "Crossed 350 brands and tenants housed across our malls and commercial towers.",
  },
];

export default function Milestones() {
  return (
    <Section className="py-[84px] md:py-[130px] bg-cream">
      <Container>
        <Reveal className="max-w-[560px] mb-[52px] md:mb-[64px]">
          <Kicker>Our story</Kicker>
          <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
            Twelve years of<br /><em className="italic text-gold-dark">promises kept.</em>
          </h2>
        </Reveal>
        <div className="grid gap-0">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 0.06}>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 py-7 border-t border-line last:border-b">
                <div className="font-serif text-[24px] md:text-[28px] text-moss">{milestone.year}</div>
                <div>
                  <h3 className="font-serif text-[20px] mb-2">{milestone.title}</h3>
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
