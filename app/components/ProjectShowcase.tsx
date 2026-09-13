"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, BedDouble, Check, MapPin, Ruler } from "lucide-react";
import Link from "next/link";
import { useRef, type RefObject } from "react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";
import SkylineArt from "./SkylineArt";
import type { Project, ProjectStatus } from "../data/projects";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

const EASE = [0.22, 1, 0.36, 1] as const;

const statusDot: Record<ProjectStatus, string> = {
  "Ready to move": "bg-sage",
  "Under construction": "bg-rust",
  "Sold out": "bg-white/50",
};

const featured = projects.filter((project) => project.listingType === "Buy").slice(0, 6);

export default function ProjectShowcase() {
  const { language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 420) + 24;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <Section className="relative py-[84px] md:py-[130px] bg-moss-dark text-white overflow-hidden">
      <SkylineArt className="absolute inset-x-0 top-0 -z-10 h-[64%] w-full text-gold opacity-20 pointer-events-none" />
      <Container className="flex flex-col md:flex-row md:justify-between md:items-end mb-[42px] md:mb-[56px] gap-[25px]">
        <Reveal className="max-w-[620px]">
          <Kicker className="text-sage">Flagship developments</Kicker>
          {language === "bn" ? (
            <h2 className="font-bengali-serif font-extrabold text-[42px] md:text-[54px] leading-[1.35] mb-4">
              একে ঘর বলার<br /><em className="not-italic text-gold">ছয়টি কারণ।</em>
            </h2>
          ) : (
            <h2 className="font-serif font-bold text-[44px] md:text-[54px] leading-[1.02] tracking-[-.04em] mb-4">
              Six reasons<br /><em className="italic text-gold">to call it home.</em>
            </h2>
          )}
          <p className="text-white/65 text-[15px] leading-[1.7] max-w-[460px]">
            A closer look at the developments currently open for booking — drag or scroll through
            specs, amenities, and availability for each one.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex items-center gap-3 shrink-0">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByCard(-1)}
            className="grid place-items-center w-11 h-11 border border-white/25 transition-colors duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:bg-white/10 hover:border-white/45"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByCard(1)}
            className="grid place-items-center w-11 h-11 border border-white/25 transition-colors duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:bg-white/10 hover:border-white/45"
          >
            <ArrowRight size={16} />
          </button>
        </Reveal>
      </Container>

      <Container className="mb-8">
        <div className="h-[2px] bg-white/15 relative overflow-hidden">
          <motion.div className="absolute inset-y-0 left-0 w-full bg-sage origin-left" style={{ scaleX: scrollXProgress }} />
        </div>
      </Container>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pl-5 md:pl-12 2xl:pl-[calc((100vw-1220px)/2+48px)] pr-5 md:pr-12"
      >
        {featured.map((project, index) => (
          <ShowcaseCard key={project.slug} project={project} scrollRef={scrollRef} index={index} />
        ))}
      </div>
    </Section>
  );
}

function ShowcaseCard({
  project,
  scrollRef,
  index,
}: {
  project: Project;
  scrollRef: RefObject<HTMLDivElement | null>;
  index: number;
}) {
  const { language } = useLanguage();
  const snippet = project.description.split(". ")[0].trim().replace(/\.$/, "") + ".";

  return (
    <motion.div
      data-card
      className="relative shrink-0 w-[300px] sm:w-[380px] md:w-[440px] snap-start"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef, once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: EASE }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#333]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover block transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/0" />

          <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
            <span className="px-[10px] py-[6px] bg-white/95 text-ink font-mono text-[10px] uppercase tracking-[.06em]">
              {project.type}
            </span>
            <span className="inline-flex items-center gap-[6px] px-[10px] py-[6px] bg-black/35 backdrop-blur-sm font-mono text-[10px] uppercase tracking-[.06em]">
              <span className={`w-[6px] h-[6px] rounded-full ${statusDot[project.status]}`} />
              {project.status}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="flex items-center gap-[5px] text-sage font-mono text-[10px] uppercase tracking-[.05em] mb-2">
              <MapPin size={12} strokeWidth={1.5} /> {project.location}
            </p>
            <h3
              className={
                language === "bn"
                  ? "font-bengali-serif font-semibold text-[24px] leading-[1.45] mb-2"
                  : "font-serif font-bold text-[22px] leading-[1.15] tracking-[-.02em] mb-2"
              }
            >
              {language === "bn" ? project.nameBn : project.name}
            </h3>
            <p className="text-white/70 text-[12px] leading-[1.5] mb-4 line-clamp-2 max-w-[320px]">{snippet}</p>

            <div className="flex items-center gap-x-3 gap-y-2 flex-wrap mb-4 font-mono text-[11px] text-white/85">
              <span className="flex items-center gap-[5px]">
                <Ruler size={12} strokeWidth={1.6} /> {project.sizeSqft}
              </span>
              {project.bedrooms && (
                <span className="flex items-center gap-[5px]">
                  <BedDouble size={12} strokeWidth={1.6} /> {project.bedrooms} bed
                </span>
              )}
            </div>

            <div className="grid gap-[6px] mb-5">
              {project.amenities.slice(0, 2).map((amenity) => (
                <span key={amenity} className="flex items-center gap-[6px] text-white/70 text-[12px]">
                  <Check size={12} className="text-sage shrink-0" /> {amenity}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/20 pt-4">
              <span className="font-mono text-[13px] font-medium">{project.startingPrice}</span>
              <span className="flex items-center gap-[4px] text-[12px] transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1">
                View <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
