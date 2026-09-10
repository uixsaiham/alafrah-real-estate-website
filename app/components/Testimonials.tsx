"use client";

import { Star } from "lucide-react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";
import { useLanguage } from "../context/LanguageContext";

const testimonials = [
  {
    quote:
      "From the first site visit to handover, the team was transparent about timelines and cost. Our Greenleaf-6 unit was delivered exactly as promised.",
    name: "Nusrat Jahan",
    nameBn: "নুসরাত জাহান",
    role: "Homeowner, Greenleaf-6",
    roleBn: "গৃহস্বামী, Greenleaf-6",
  },
  {
    quote:
      "As an investor, what stood out was the documentation and construction quality control. Green Estate treats every project like their own home.",
    name: "Rafiqul Islam",
    nameBn: "রফিকুল ইসলাম",
    role: "Investor, Newtown Residences",
    roleBn: "বিনিয়োগকারী, Newtown Residences",
  },
  {
    quote:
      "Our office space in Gulshan came together faster than any commercial build we've done before, without cutting corners on materials.",
    name: "Farhana Chowdhury",
    nameBn: "ফারহানা চৌধুরী",
    role: "Director, tenant business",
    roleBn: "পরিচালক, ভাড়াটে প্রতিষ্ঠান",
  },
];

export default function Testimonials() {
  const { language } = useLanguage();
  return (
    <Section className="py-[84px] md:py-[130px] bg-cream">
      <Container>
        <Reveal className="max-w-[560px] mb-[52px] md:mb-[64px]">
          <Kicker>Client stories</Kicker>
          {language === "bn" ? (
            <h2 className="font-bengali-serif font-extrabold text-[42px] md:text-[52px] leading-[1.35]">
ভালোবাসায় মোড়ানো<br /><em className="not-italic text-gold-dark">২,০০০+ সুখী পরিবারের অভিজ্ঞতা।</em>
            </h2>
          ) : (
            <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
              Loved by <em className="italic text-gold-dark">2,000+ families.</em>
            </h2>
          )}
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
                  {language === "bn" ? (
                    <>
                      <div className="font-bengali-serif font-semibold text-[17px] leading-[1.4]">{t.nameBn}</div>
                      <div className="font-bengali text-muted text-[13px] leading-[1.5] mt-1">{t.roleBn}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-[14px] font-medium">{t.name}</div>
                      <div className="text-muted text-[12px]">{t.role}</div>
                    </>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
