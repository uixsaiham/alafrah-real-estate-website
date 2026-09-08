import CountUp from "./CountUp";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const stats = [
  { value: 24, suffix: "+", label: "Projects delivered" },
  { value: 2000, suffix: "+", label: "Happy homeowners" },
  { value: 120, suffix: "+", label: "Team members" },
  { value: 12, suffix: "", label: "Years of experience" },
];

export default function Stats() {
  return (
    <Section className="relative py-[85px] md:py-[120px] px-5 md:px-[max(48px,calc((100vw-1220px)/2))] text-[#f5f3eb] bg-moss overflow-hidden">
      <div className="absolute w-[560px] h-[560px] rounded-full border border-[#f5f3eb]/22 right-[-80px] top-[-120px]" />
      <div className="absolute w-[390px] h-[390px] rounded-full border border-[#f5f3eb]/16 right-[45px] top-[-35px]" />
      <div className="relative z-10">
        <Reveal>
          <Kicker className="text-[#dce5d6]">By the numbers</Kicker>
          <h2 className="font-serif font-medium text-[40px] md:text-[56px] leading-[1.02] tracking-[-.04em] max-w-[640px] mb-[52px]">
            Not just a house.<br /><em className="italic">A way of living.</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 max-w-[820px]">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} y={16}>
              <div className="border-t border-white/30 pt-5">
                <div className="font-serif text-[40px] md:text-[48px] leading-none mb-3">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[.08em] text-white/72">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
