import { ArrowUpRight, Leaf, ShieldCheck, Users } from "lucide-react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const values = [
  {
    icon: Leaf,
    title: "Sustainable by design",
    copy: "Every project is built with material efficiency, natural light, and long-term environmental impact in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    copy: "Transparent pricing, honest timelines, and documentation homeowners can rely on from booking to handover.",
  },
  {
    icon: Users,
    title: "People first",
    copy: "From first enquiry to after-sales support, our team stays close to every family and investor we work with.",
  },
];

export default function About() {
  return (
    <Section id="about" className="py-[84px] md:py-[130px]">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px] items-start">
        <Reveal>
          <Kicker>Why Green Estate</Kicker>
          <h2 className="font-serif font-medium text-[44px] md:text-[56px] leading-[1.02] tracking-[-.04em] mb-6">
            Committed to fulfilling<br /><em className="italic">your dreams.</em>
          </h2>
          <p className="text-muted text-[16px] leading-[1.7] max-w-[460px] mb-8">
            Since our founding, Green Estate has delivered residential and commercial
            developments across Bangladesh and internationally — combining modern
            architecture with construction our homeowners can trust for generations.
          </p>
          <a href="/projects" className="flex items-center gap-[10px] pb-[7px] border-b border-ink text-[13px] w-max">
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
                <h3 className="font-serif text-[20px] mb-2">{value.title}</h3>
                <p className="text-muted text-[14px] leading-[1.65] max-w-[380px]">{value.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
