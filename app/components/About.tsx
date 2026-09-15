"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Leaf, MapPin, ShieldCheck, Users } from "lucide-react";
import BlueprintGrid from "./BlueprintGrid";
import CornerBrackets from "./CornerBrackets";
import Container from "./Container";
import CountUp from "./CountUp";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";
import { MALL_PLAZA_EXTERIOR, TEAM_OFFICE_MEETING } from "../data/images";

const EASE = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    icon: Leaf,
    title: "Green by design",
    copy: "Landscaped gardens, water features, and play areas are designed into every development from day one — not added on afterward.",
  },
  {
    icon: MapPin,
    title: "Prime locations",
    copy: "Every site is chosen for footfall, access, and long-term commercial viability — not just today's land price.",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    copy: "Transparent pricing, honest timelines, and documentation owners and tenants can rely on from booking to handover.",
  },
  {
    icon: Users,
    title: "People first",
    copy: "From first enquiry to after-handover leasing support, our team stays close to every investor and tenant we work with.",
  },
];

const stats = [
  { value: 24, suffix: "+", label: "Developments" },
  { value: 12, suffix: "+", label: "Years" },
];

const SEAL_TEXT = "AL AFRAH LIMITED  •  TRUSTED BUILDER  •  EST. 2014  •  ";

function RotatingSeal() {
  return (
    <div className="relative w-[104px] h-[104px] md:w-[124px] md:h-[124px]">
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-gold"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="sealPath" fill="none" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fill="currentColor" fontSize="6.4" letterSpacing="0.04em" className="font-mono uppercase">
          <textPath href="#sealPath">{SEAL_TEXT}</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="grid place-items-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-ink border border-gold/50 text-gold shadow-[0_10px_24px_rgba(0,0,0,.5)]">
          <Building2 size={18} strokeWidth={1.6} />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" className="relative bg-ink text-paper py-[90px] md:py-[140px] overflow-hidden">
      <BlueprintGrid className="absolute inset-0 text-white/[.05] pointer-events-none" />
      <div className="absolute -top-40 -right-24 w-[560px] h-[560px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-160px] left-[-120px] w-[420px] h-[420px] rounded-full bg-moss/25 blur-[110px] pointer-events-none" />
      <div className="absolute w-[560px] h-[560px] rounded-full border border-white/10 right-[-120px] top-[-150px] pointer-events-none" />
      <div className="absolute w-[390px] h-[390px] rounded-full border border-white/[.07] right-[10px] top-[-45px] pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[80px] items-center mb-[90px] md:mb-[130px]">
          <Reveal>
            <Kicker className="text-gold">Why Al Afrah</Kicker>
            <h2 className="font-serif font-bold text-[44px] md:text-[62px] leading-[1.0] tracking-[-.04em] mb-7 text-paper">
              Rooted in trust,<br /><em className="italic text-gold">built for business.</em>
            </h2>
            <p className="text-white/65 text-[16px] md:text-[17px] leading-[1.75] max-w-[460px] mb-8">
              Since our founding, Al Afrah has delivered shopping malls, retail plazas, and
              Grade-A commercial towers across Bangladesh and internationally — pairing modern
              architecture with landscaped gardens, water features, and family play areas that
              owners and tenants can trust for generations.
            </p>

            <div className="flex flex-wrap items-center gap-[14px] mb-9">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="inline-flex items-center gap-[8px] rounded-full border border-white/18 px-[16px] py-[9px] font-mono text-[11px] uppercase tracking-[.08em] text-white/65"
                >
                  <span className="w-[6px] h-[6px] rounded-full bg-gold shrink-0" />
                  <span className="font-semibold text-paper">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </span>
                  {stat.label}
                </div>
              ))}
            </div>

            <a
              href="/projects"
              className="group inline-flex items-center gap-[10px] bg-gold text-moss-dark pl-[22px] pr-[18px] py-[13px] rounded-full text-[13px] font-bold tracking-[.01em] shadow-[0_10px_24px_rgba(240,180,41,.35)] transition-all duration-300 hover:brightness-[1.08] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(240,180,41,.5)]"
            >
              See our work
              <ArrowUpRight
                size={16}
                strokeWidth={2.4}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>

          <div className="relative pb-24 pl-2 pr-2 pt-2 lg:pb-14 lg:pl-0 lg:pr-10">
            {/* Elevation ruler — a builder's dimension line, decorative */}
            <div className="hidden lg:block absolute -left-9 top-2 bottom-16">
              <div className="relative h-full border-l border-dashed border-gold/25">
                {[
                  { top: "0%", label: "8F" },
                  { top: "33%", label: "6F" },
                  { top: "66%", label: "3F" },
                  { top: "100%", label: "GF" },
                ].map((tick) => (
                  <div key={tick.label} className="absolute left-0 flex items-center" style={{ top: tick.top }}>
                    <span className="w-2 h-px bg-gold/40" />
                    <span className="absolute right-full mr-2 font-mono text-[9px] tracking-[.06em] text-gold/45 whitespace-nowrap">
                      {tick.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1.2 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative overflow-hidden aspect-[4/5] lg:aspect-[4/4.6] border border-white/10 shadow-[0_40px_90px_rgba(0,0,0,.55)]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0 100%)" }}
            >
              <img
                src={TEAM_OFFICE_MEETING}
                alt="The Al Afrah team reviewing a project together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-transparent" />
              <CornerBrackets variant="top" className="absolute inset-0 w-full h-full text-gold/70 pointer-events-none" />
              <div className="absolute left-6 top-6 text-paper">
                <p className="font-mono text-[10px] uppercase tracking-[.08em] text-gold/90 mb-1">Our team</p>
                <p className="font-serif text-[19px] leading-tight">Planning every detail, together.</p>
              </div>
            </motion.div>

            {/* Rotating trust seal, stamped into the chamfered corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="absolute bottom-[3%] right-[1%] lg:-bottom-4 lg:-right-8 z-20"
            >
              <RotatingSeal />
            </motion.div>

            {/* Crew spec tag — drafting title-block style */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="absolute top-3 right-3"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-ink/85 backdrop-blur-md border border-dashed border-gold/40 pl-4 pr-3 py-2.5"
              >
                <CornerBrackets className="absolute inset-0 w-full h-full text-gold/50 pointer-events-none" />
                <div className="flex items-center gap-2">
                  <Users size={13} strokeWidth={1.8} className="text-gold shrink-0" />
                  <span className="font-serif text-[16px] text-paper leading-none">
                    <CountUp value={120} suffix="+" />
                  </span>
                </div>
                <div className="font-mono text-[8px] uppercase tracking-[.08em] text-white/50 mt-1">Crew &amp; specialists</div>
              </motion.div>
            </motion.div>

            {/* Best-work photo, tossed in like a site-progress print, tagged with a leader line */}
            <motion.div
              initial={{ opacity: 0, x: -18, y: 18, rotate: 7 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 3.5 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              whileHover={{ rotate: 0, y: -4 }}
              className="absolute -bottom-16 lg:-bottom-10 -left-2 lg:-left-14 w-[62%] lg:w-[58%]"
            >
              <div className="relative overflow-hidden border-[5px] border-ink shadow-[0_24px_50px_rgba(0,0,0,.5)] aspect-[4/3]">
                <img
                  src={MALL_PLAZA_EXTERIOR}
                  alt="Afrah Central Mall, our flagship development in Gulshan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 left-4 flex items-center gap-[6px]">
                <span className="w-[7px] h-[7px] rounded-full bg-gold ring-[3px] ring-ink" />
                <span className="h-px w-6 border-t border-dashed border-gold/60" />
                <span className="bg-ink/90 border border-gold/30 px-2 py-[4px] font-mono text-[8px] uppercase tracking-[.07em] text-gold whitespace-nowrap">
                  Best work — Afrah Central Mall
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[.03] backdrop-blur-sm p-7 transition-colors duration-300 hover:border-gold/40 hover:bg-white/[.07]"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 right-4 font-serif text-[72px] leading-none text-white/[0.06] select-none transition-colors duration-300 group-hover:text-gold/[0.18]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="relative grid place-items-center w-12 h-12 rounded-full bg-white/10 text-gold mb-5 transition-all duration-300 group-hover:bg-gold group-hover:text-moss-dark group-hover:scale-110">
                  <value.icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-[20px] mb-2 text-paper">{value.title}</h3>
                <p className="text-white/60 text-[14px] leading-[1.65]">{value.copy}</p>
              </div>

              <span className="absolute left-7 right-7 bottom-6 h-px bg-gold origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
