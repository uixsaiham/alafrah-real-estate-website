"use client";

import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import Kicker from "./Kicker";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import Section from "./Section";
import { projects } from "../data/projects";

export default function Projects() {
  const ownDevelopments = projects.filter((project) => project.listingType === "Buy");

  return (
    <Section id="projects" className="py-[84px] md:py-[130px]">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-[35px] md:mb-[52px] gap-[25px]">
          <div>
            <Kicker>Our portfolio</Kicker>
            <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
              Places worth<br /><em className="italic text-gold-dark">a second look.</em>
            </h2>
          </div>
          <a
            href="/projects?type=Buy"
            className="group flex items-center gap-[10px] pb-[7px] border-b border-ink text-[13px] w-max transition-colors duration-200 hover:text-moss hover:border-moss"
          >
            View all projects{" "}
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {ownDevelopments.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
