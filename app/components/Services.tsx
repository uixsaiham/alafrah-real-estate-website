import { Building2, Compass, HardHat, LineChart, PencilRuler } from "lucide-react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const services = [
  {
    icon: Building2,
    title: "Real estate development",
    copy: "End-to-end development of residential and commercial properties, from land acquisition to handover.",
  },
  {
    icon: Compass,
    title: "Project management",
    copy: "Dedicated management across design, permitting, and construction to keep every project on schedule.",
  },
  {
    icon: LineChart,
    title: "Investment & capital",
    copy: "Structured investment opportunities for partners looking for long-term returns in real assets.",
  },
  {
    icon: HardHat,
    title: "Construction",
    copy: "In-house construction teams delivering to code with quality control at every stage of the build.",
  },
  {
    icon: PencilRuler,
    title: "Architecture & design",
    copy: "Considered architecture that balances light, material, and neighborhood context with livability.",
  },
];

export default function Services() {
  return (
    <Section id="services" className="py-[84px] md:py-[130px] bg-cream">
      <Container>
        <Reveal className="max-w-[560px] mb-[52px] md:mb-[64px]">
          <Kicker>What we do</Kicker>
          <h2 className="font-serif font-medium text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
            Every stage,<br /><em className="italic">one partner.</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06} y={16}>
              <div className="group bg-cream hover:bg-paper transition-colors duration-300 p-8 h-full flex flex-col gap-5">
                <service.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-moss transition-transform duration-300 group-hover:-translate-y-1"
                />
                <h3 className="font-serif text-[19px] leading-[1.2]">{service.title}</h3>
                <p className="text-muted text-[13px] leading-[1.6]">{service.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
