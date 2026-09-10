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
import { BD_HABIBULLAH_STREET } from "../data/images";
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

export default function AboutPage() {
  const { language } = useLanguage();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <div className="relative bg-moss-dark overflow-hidden">
        <img src={BD_HABIBULLAH_STREET} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,17,.82)_0%,rgba(13,26,17,.9)_100%)]" />
        <div className="relative z-10">
          <Nav onEnquire={() => setEnquiryOpen(true)} />
          <Container className="pt-[125px] pb-[64px] md:pt-[164px] md:pb-[80px]">
            <Reveal>
              <Kicker className="text-[#dce5d6]">About Green Estate</Kicker>
              {language === "bn" ? (
                <h1 className="font-bengali-serif font-extrabold text-white text-[42px] md:text-[58px] leading-[1.35] max-w-[760px]">
                  আপনার জীবনের সেরা বিনিয়োগটি<br /><em className="not-italic text-gold">হোক আমাদের সাথে।</em>
                </h1>
              ) : (
                <h1 className="font-serif font-bold text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px]">
                  Rooted in trust,<br /><em className="italic text-gold">built around you.</em>
                </h1>
              )}
            </Reveal>
          </Container>
        </div>
      </div>

      <Section className="py-[84px] md:py-[130px]">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px] items-start">
          <Reveal>
            <Kicker>Who we are</Kicker>
            {language === "bn" ? (
              <h2 className="font-bengali-serif font-extrabold text-[34px] md:text-[44px] leading-[1.4] mb-6">
                ঢাকায় জন্ম,<br /><em className="not-italic text-gold-dark">ঢাকার সীমানা ছাড়িয়ে নির্মাণ।</em>
              </h2>
            ) : (
              <h2 className="font-serif font-bold text-[36px] md:text-[44px] leading-[1.05] tracking-[-.03em] mb-6">
                Dhaka-born,<br /><em className="italic text-gold-dark">building far beyond it.</em>
              </h2>
            )}
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

      <Milestones />
      <Stats />
      <Team />
      <Contact />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
