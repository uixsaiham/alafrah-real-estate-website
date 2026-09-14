"use client";

import { ArrowUpRight, Layers, MapPin, Ruler } from "lucide-react";
import Link from "next/link";
import CornerBrackets from "./CornerBrackets";
import type { Project, ProjectStatus } from "../data/projects";

const EASE = "ease-[cubic-bezier(.22,1,.36,1)]";

const listingBadgeStyle: Record<Project["listingType"], string> = {
  Buy: "bg-moss/90 text-white",
  Rent: "bg-paper/90 text-moss",
  Sell: "bg-ink/90 text-white",
};

const listingBadgeLabel: Record<Project["listingType"], string> = {
  Buy: "New project",
  Rent: "For rent",
  Sell: "For sale",
};

const statusDot: Record<ProjectStatus, string> = {
  "Ready to move": "bg-sage",
  "Under construction": "bg-rust",
  "Sold out": "bg-[#e9e8df]/60",
};

export default function ProjectCard({ project }: { project: Project }) {
  const snippet = project.description.split(". ")[0].trim().replace(/\.$/, "") + ".";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block h-full flex flex-col bg-paper border border-line/70 transition-[transform,box-shadow,border-color] duration-500 ${EASE} hover:-translate-y-[6px] hover:border-line hover:shadow-[0_28px_60px_rgba(36,49,43,.16)]`}
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[#ddd]">
        <img
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover block transition-transform duration-[900ms] ${EASE} group-hover:scale-[1.08]`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-80 group-hover:opacity-95 transition-opacity duration-500 ${EASE}`}
        />
        <span
          className={`absolute left-[15px] top-[15px] px-[10px] py-[7px] backdrop-blur-sm font-mono text-[10px] uppercase tracking-[.06em] transition-transform duration-500 ${EASE} group-hover:-translate-y-0.5 ${listingBadgeStyle[project.listingType]}`}
        >
          {listingBadgeLabel[project.listingType]}
        </span>
        <span
          className={`absolute right-[15px] top-[15px] px-[10px] py-[7px] bg-paper/90 backdrop-blur-sm text-ink font-mono text-[10px] uppercase tracking-[.06em] transition-transform duration-500 ${EASE} group-hover:-translate-y-0.5`}
        >
          {project.type}
        </span>

        <span
          className={`absolute left-[15px] bottom-[15px] inline-flex items-center gap-[7px] px-[10px] py-[6px] bg-black/35 backdrop-blur-sm text-white font-mono text-[10px] uppercase tracking-[.06em] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ${EASE}`}
        >
          <span className={`w-[6px] h-[6px] rounded-full ${statusDot[project.status]}`} />
          {project.status}
        </span>
        <CornerBrackets
          className={`absolute inset-3 text-white/0 group-hover:text-white/80 transition-colors duration-500 ${EASE} pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,.6)]`}
        />
      </div>

      <div className="flex flex-col flex-1 p-[22px]">
        <p className="flex items-center gap-[5px] text-moss font-mono text-[10px] uppercase tracking-[.05em] mb-[10px]">
          <MapPin size={13} strokeWidth={1.5} /> {project.location}
        </p>
        <div className="flex items-start justify-between gap-[12px] mb-[10px]">
          <h3 className="font-serif font-bold text-[22px] leading-[1.15] tracking-[-.02em]">{project.name}</h3>
          <span className="whitespace-nowrap px-[10px] py-[5px] bg-cream font-mono font-medium text-[12px] text-ink">
            {project.startingPrice}
          </span>
        </div>
        <p className="text-muted text-[13px] leading-[1.55] mb-4 line-clamp-2">{snippet}</p>

        <div className="flex items-center gap-x-[12px] gap-y-2 flex-wrap mt-auto pt-[14px] border-t border-line">
          <span className="flex items-center gap-[6px] px-[9px] py-[5px] bg-cream text-ink font-mono text-[11px]">
            <Ruler size={13} strokeWidth={1.6} /> {project.sizeSqft}
          </span>
          <span className="text-muted font-mono text-[11px]">{project.sizeKatha}</span>
          <span className="flex items-center gap-[6px] px-[9px] py-[5px] bg-cream text-ink font-mono text-[11px]">
            <Layers size={13} strokeWidth={1.6} /> {project.floors} floors
          </span>
          <span
            className={`ml-auto flex items-center gap-[4px] text-ink font-mono text-[11px] transition-transform duration-300 ${EASE} group-hover:translate-x-[2px]`}
          >
            View{" "}
            <ArrowUpRight
              size={14}
              className={`transition-transform duration-300 ${EASE} group-hover:translate-x-1 group-hover:-translate-y-1`}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
