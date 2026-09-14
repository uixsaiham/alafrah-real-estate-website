"use client";

import { Star } from "lucide-react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const testimonials = [
  {
    quote:
      "From the first site visit to handover, the team was transparent about timelines and cost. Our shop at Afrah Junction was delivered exactly as promised.",
    name: "Nusrat Jahan",
    role: "Shop owner, Afrah Junction",
  },
  {
    quote:
      "As an investor, what stood out was the documentation and construction quality control. Al Afrah treats every development like their own flagship.",
    name: "Rafiqul Islam",
    role: "Investor, Afrah Trade Tower",
  },
  {
    quote:
      "Our showroom fit-out at Afrah Central Mall came together faster than any commercial build we've done before, without cutting corners on materials — and the rooftop garden and play zone bring in families on weekends, not just weekday shoppers.",
    name: "Farhana Chowdhury",
    role: "Director, retail tenant",
  },
];

export default function Testimonials() {
  return (
    <Section className="py-[84px] md:py-[130px] bg-cream">
      <Container>
        <Reveal className="max-w-[560px] mb-[52px] md:mb-[64px]">
          <Kicker>Client stories</Kicker>
          <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
            Trusted by <em className="italic text-gold-dark">350+ brands.</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {testimonials.map((t, index) => (
            <Reveal key={t.name} delay={index * 0.1}>
              <figure className="bg-paper p-8 flex flex-col gap-6 h-full transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(36,49,43,.1)]">
                <div className="flex gap-1 text-moss">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="font-serif text-[19px] leading-[1.45] tracking-[-.01em]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-line">
                  <div className="text-[14px] font-medium">{t.name}</div>
                  <div className="text-muted text-[12px]">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
