"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, MoveRight } from "lucide-react";
import BlueprintGrid from "./BlueprintGrid";
import Container from "./Container";
import CountUp from "./CountUp";
import HeroSlider from "./HeroSlider";
import Nav from "./Nav";
import Reveal from "./Reveal";

const stats = [
  { value: 24, suffix: "+", label: "Developments delivered" },
  { value: 350, suffix: "+", label: "Brands & tenants" },
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
  return (
    <section id="top" className="relative flex flex-col min-h-[88svh] md:min-h-[85svh] overflow-hidden text-white">
      <HeroSlider />
      <BlueprintGrid className="absolute inset-0 z-[1] text-white/[.07] pointer-events-none" />
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
              Commercial & shopping mall developers
            </div>
            <h1 className="my-[10px] mb-[14px] max-w-[760px] font-serif font-bold text-[36px] md:text-[clamp(36px,5vw,66px)] leading-[1.04] tracking-[-.03em] drop-shadow-[0_6px_28px_rgba(0,0,0,.28)]">
              <StaggerText text="Spaces built" />
              <br />
              <em className="italic text-gold">
                <StaggerText text="for commerce to thrive." delayStart={0.32} />
              </em>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="max-w-[440px] mb-[40px] text-[15px] leading-[1.6] text-white/86"
            >
              For over a decade we&apos;ve developed shopping malls, retail plazas, and
              Grade-A commercial towers across Bangladesh and abroad — each shaped around
              landscaped gardens, water features, and play areas, not just floor space.
            </motion.p>
            {/* Buy/Rent/Sell quick-filter removed for now — planned to come back as a redesigned feature */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
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
