import { ArrowUpRight, MoveRight, Sparkles } from "lucide-react";
import Container from "./Container";
import CountUp from "./CountUp";
import HeroSlider from "./HeroSlider";
import Nav from "./Nav";
import Reveal from "./Reveal";

const stats = [
  { value: 24, suffix: "+", label: "Projects delivered" },
  { value: 2000, suffix: "+", label: "Homeowners" },
  { value: 3, suffix: "", label: "Countries" },
];

export default function Hero({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section id="top" className="relative flex flex-col min-h-[100svh] overflow-hidden text-white">
      <HeroSlider />
      <Nav onEnquire={onEnquire} transparentAtTop />

      <div className="shrink-0 h-[75px] md:h-[94px]" aria-hidden />

      <div className="relative z-10 flex-1 flex flex-col justify-center py-8">
        <Container>
          <Reveal immediate>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.09em]">
              <Sparkles size={14} /> Modern architecture, sustainable development
            </div>
            <h1 className="my-[16px] mb-[14px] max-w-[720px] font-serif font-medium text-[42px] md:text-[clamp(42px,6vw,84px)] leading-[.98] tracking-[-.05em]">
              Building places<br /><em className="italic">that last generations.</em>
            </h1>
            <p className="max-w-[420px] mb-[26px] text-[16px] leading-[1.5] text-white/86">
              For over a decade we&apos;ve shaped residential and commercial spaces across
              Bangladesh and abroad — built on sustainability, precision, and trust.
            </p>
            <div className="flex w-full max-w-[420px] bg-white text-moss-dark shadow-[0_18px_50px_rgba(18,32,23,.18)] mb-4">
              <a href="/projects?type=Buy" className="flex-1 text-center py-3 text-[13px] font-medium bg-moss text-white">
                Buy
              </a>
              <a href="/projects?type=Rent" className="flex-1 text-center py-3 text-[13px] font-medium border-l border-line/60 transition-colors hover:bg-cream">
                Rent
              </a>
              <a href="/projects?type=Sell" className="flex-1 text-center py-3 text-[13px] font-medium border-l border-line/60 transition-colors hover:bg-cream">
                Sell
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="/projects"
                className="flex items-center justify-center gap-[10px] px-6 py-[14px] bg-white text-moss-dark text-[13px] font-medium transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore all properties <ArrowUpRight size={16} />
              </a>
              <button
                onClick={onEnquire}
                className="flex items-center justify-center gap-[10px] px-6 py-[14px] border border-white/55 text-[13px] transition-colors duration-200 hover:bg-white/10"
              >
                Book a site visit <MoveRight size={16} />
              </button>
            </div>
          </Reveal>
        </Container>
      </div>

      <div className="relative z-10 shrink-0">
        <Container>
          <Reveal immediate delay={0.15}>
            <div className="flex flex-wrap gap-x-12 gap-y-3 pt-5 pb-6 md:pb-8 border-t border-white/22 max-w-[560px]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-[26px] leading-none mb-1.5">
                    <CountUp immediate value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[.08em] text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
