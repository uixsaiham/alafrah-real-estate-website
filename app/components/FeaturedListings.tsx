"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import Container from "./Container";
import Kicker from "./Kicker";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import Section from "./Section";
import { projects, type ListingType } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function FeaturedListings({
  listingType,
  kicker,
  heading,
  bg = "",
}: {
  listingType: ListingType;
  kicker: string;
  heading: ReactNode;
  bg?: string;
}) {
  const { language } = useLanguage();
  const listings = projects.filter((project) => project.listingType === listingType).slice(0, 6);

  if (listings.length === 0) return null;

  return (
    <Section className={`py-[84px] md:py-[130px] ${bg}`}>
      <Container>
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-[35px] md:mb-[52px] gap-[25px]">
          <div>
            <Kicker>{kicker}</Kicker>
            <h2
              className={
                language === "bn"
                  ? "font-bengali-serif font-extrabold text-[38px] md:text-[48px] leading-[1.35]"
                  : "font-serif font-bold text-[40px] md:text-[48px] leading-[1.02] tracking-[-.04em]"
              }
            >
              {heading}
            </h2>
          </div>
          <a
            href={`/projects?type=${listingType}`}
            className="flex items-center gap-[10px] pb-[7px] border-b border-ink text-[13px] w-max"
          >
            View all {listingType.toLowerCase()} listings <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {listings.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
