"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Home, KeyRound, MoveRight, Tag } from "lucide-react";
import Container from "./Container";
import CountUp from "./CountUp";
import HeroSlider from "./HeroSlider";
import Nav from "./Nav";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const stats = [
  { value: 24, suffix: "+", label: "Projects delivered" },
  { value: 2000, suffix: "+", label: "Homeowners" },
  { value: 3, suffix: "", label: "Countries" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function StaggerText({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.26em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay: delayStart + i * 0.045, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export default function Hero({ onEnquire }: { onEnquire: () => void }) {
  const { language } = useLanguage();
  return (
    <section id="top" className="relative flex flex-col min-h-[88svh] md:min-h-[85svh] overflow-hidden text-white">
      <HeroSlider />
      <Nav onEnquire={onEnquire} transparentAtTop />

      <div className="shrink-0 h-[75px] md:h-[94px]" aria-hidden />

      <div className="relative z-10 flex-1 flex flex-col justify-center py-4">
        <Container>
          <Reveal immediate>
            <div className="inline-flex items-center gap-[9px] mb-3 px-[13px] py-[7px] bg-white/10 backdrop-blur-md border border-white/25 rounded-full font-mono text-[10px] uppercase tracking-[.09em]">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-sage" />
              </span>
              Sustainable design, modern living
            </div>
            {language === "bn" ? (
              <h1 className="my-[12px] mb-[14px] max-w-[920px] font-bengali-serif font-extrabold text-[24px] sm:text-[30px] sm:whitespace-nowrap md:text-[clamp(30px,4.2vw,54px)] leading-[1.25] tracking-[0] drop-shadow-[0_6px_28px_rgba(0,0,0,.28)]">
                <StaggerText text="শুধু ইট-পাথর নয়," />
                <br />
                <em className="not-italic text-gold">
                  <StaggerText text="আমরা গড়ে তুলি আপনার পরিবারের ভবিষ্যৎ।" delayStart={0.32} />
                </em>
              </h1>
            ) : (
              <h1 className="my-[10px] mb-[14px] max-w-[760px] font-serif font-bold text-[36px] md:text-[clamp(36px,5vw,66px)] leading-[1.04] tracking-[-.03em] drop-shadow-[0_6px_28px_rgba(0,0,0,.28)]">
                <StaggerText text="Spaces designed" />
                <br />
                <em className="italic text-gold">
                  <StaggerText text="to outlast generations." delayStart={0.32} />
                </em>
              </h1>
            )}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="max-w-[440px] mb-[18px] text-[15px] leading-[1.6] text-white/86"
            >
              For over a decade we&apos;ve shaped homes and workspaces across
              Bangladesh and abroad — where sustainable design meets uncompromising craft.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
              className="flex w-full max-w-[420px] bg-white/95 backdrop-blur-md text-moss-dark shadow-[0_18px_50px_rgba(18,32,23,.25)] mb-3 border border-white/40"
            >
              <a
                href="/projects?type=Buy"
                className="flex-1 flex items-center justify-center gap-[7px] py-[11px] text-[13px] font-medium bg-moss text-white transition-colors"
              >
                <Home size={14} strokeWidth={1.8} /> Buy
              </a>
              <a
                href="/projects?type=Rent"
                className="flex-1 flex items-center justify-center gap-[7px] py-[11px] text-[13px] font-medium border-l border-line/50 transition-colors hover:bg-cream"
              >
                <KeyRound size={14} strokeWidth={1.8} /> Rent
              </a>
              <a
                href="/projects?type=Sell"
                className="flex-1 flex items-center justify-center gap-[7px] py-[11px] text-[13px] font-medium border-l border-line/50 transition-colors hover:bg-cream"
              >
                <Tag size={14} strokeWidth={1.8} /> Sell
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
              className="flex flex-col sm:flex-row gap-3 sm:items-center"
            >
              <a
                href="/projects"
                className="group flex items-center justify-center gap-[10px] px-6 py-[12px] bg-white text-moss-dark text-[13px] font-medium transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore all properties
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                onClick={onEnquire}
                className="group flex items-center justify-center gap-[10px] px-6 py-[12px] border border-white/55 text-[13px] transition-colors duration-200 hover:bg-white/10"
              >
                Book a site visit
                <MoveRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#about"
                className="hidden sm:inline-flex items-center gap-[7px] ml-1 text-white/55 hover:text-white transition-colors duration-300 text-[11px] font-mono uppercase tracking-[.09em]"
              >
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown size={14} />
                </motion.span>
                Discover more
              </a>
            </motion.div>
          </Reveal>
        </Container>
      </div>

      <div className="relative z-10 shrink-0">
        <Container>
          <Reveal immediate delay={0.15}>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-4 pb-5 md:pb-6 max-w-[560px]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.85 + i * 0.08, ease: EASE }}
                  className="group px-3.5 py-3.5 sm:px-4 sm:py-4 bg-white/8 backdrop-blur-md border border-white/15 transition-all duration-300 hover:bg-white/12 hover:border-white/30 hover:-translate-y-1"
                >
                  <div className="font-serif text-[20px] sm:text-[22px] leading-none mb-1.5">
                    <CountUp immediate value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[.07em] text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
