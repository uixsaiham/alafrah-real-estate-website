import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const milestones = [
  { year: "2013", title: "Green Estate founded", copy: "Started as a small residential contractor in Matuail, Dhaka, with a single four-unit building." },
  { year: "2016", title: "First multi-storey project", copy: "Delivered our first 6-storey apartment building, establishing our in-house construction team." },
  { year: "2019", title: "Commercial expansion", copy: "Broke ground on our first Grade-A commercial address in Gulshan." },
  { year: "2022", title: "International debut", copy: "Launched Huntsville Commons, our first development outside Bangladesh." },
  { year: "2025", title: "24 projects, 2,000+ homeowners", copy: "Crossed 2,000 homeowners served across Bangladesh and abroad." },
];

export default function Milestones() {
  return (
    <Section className="py-[84px] md:py-[130px] bg-cream">
      <Container>
        <Reveal className="max-w-[560px] mb-[52px] md:mb-[64px]">
          <Kicker>Our story</Kicker>
          <h2 className="font-serif font-medium text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
            Twelve years,<br /><em className="italic">one commitment.</em>
          </h2>
        </Reveal>
        <div className="grid gap-0">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 0.06}>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 py-7 border-t border-line last:border-b">
                <div className="font-serif text-[24px] md:text-[28px] text-moss">{milestone.year}</div>
                <div>
                  <h3 className="font-serif text-[20px] mb-2">{milestone.title}</h3>
                  <p className="text-muted text-[14px] leading-[1.6] max-w-[480px]">{milestone.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
