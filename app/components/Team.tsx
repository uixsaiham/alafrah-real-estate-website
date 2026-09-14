"use client";

import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const team = [
  {
    name: "Md. Aminul Haque",
    role: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Sabrina Karim",
    role: "Head of Architecture & Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Tanvir Ahmed",
    role: "Head of Construction",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Faria Rahman",
    role: "Director of Leasing & Investment",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=85",
  },
];

export default function Team() {
  return (
    <Section id="team" className="py-[84px] md:py-[130px]">
      <Container>
        <Reveal className="max-w-[560px] mb-[52px] md:mb-[64px]">
          <Kicker>Leadership</Kicker>
          <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
            The hands <em className="italic text-gold-dark">behind every address.</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[22px]">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden bg-[#ddd] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover block grayscale-[35%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="font-serif text-[18px] leading-[1.2]">{member.name}</h3>
                <p className="text-muted text-[12px] mt-1">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
