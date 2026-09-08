import { ArrowUpRight, BedDouble, MapPin, Ruler } from "lucide-react";
import Link from "next/link";
import type { Project } from "../data/projects";

const listingBadgeStyle: Record<Project["listingType"], string> = {
  Buy: "bg-moss text-white",
  Rent: "bg-paper text-moss",
  Sell: "bg-ink text-white",
};

const listingBadgeLabel: Record<Project["listingType"], string> = {
  Buy: "New project",
  Rent: "For rent",
  Sell: "For sale",
};

export default function ProjectCard({ project }: { project: Project }) {
  const snippet = project.description.split(". ")[0].trim().replace(/\.$/, "") + ".";

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full flex flex-col">
      <div className="relative aspect-[16/11] overflow-hidden bg-[#ddd]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <span className={`absolute left-[15px] top-[15px] px-[9px] py-[7px] font-mono text-[10px] uppercase tracking-[.06em] ${listingBadgeStyle[project.listingType]}`}>
          {listingBadgeLabel[project.listingType]}
        </span>
        <span className="absolute right-[15px] top-[15px] px-[9px] py-[7px] bg-paper/90 text-ink font-mono text-[10px] uppercase tracking-[.06em]">
          {project.type}
        </span>
      </div>
      <div className="flex flex-col flex-1 pt-[17px]">
        <p className="flex items-center gap-[5px] text-moss font-mono text-[10px] uppercase tracking-[.05em] mb-[10px]">
          <MapPin size={13} strokeWidth={1.5} /> {project.location}
        </p>
        <div className="flex justify-between gap-[12px] mb-[10px]">
          <h3 className="font-serif font-medium text-[22px] leading-[1.15] tracking-[-.02em]">{project.name}</h3>
          <p className="whitespace-nowrap font-mono font-medium text-[13px] pt-1">{project.startingPrice}</p>
        </div>
        <p className="text-muted text-[13px] leading-[1.55] mb-4 line-clamp-2">{snippet}</p>
        <div className="flex items-center gap-[14px] border-t border-line mt-auto pt-[11px] text-muted font-mono text-[11px] flex-wrap">
          {project.bedrooms && (
            <span className="flex items-center gap-[6px]">
              <BedDouble size={15} /> {project.bedrooms} bed
            </span>
          )}
          <span className="flex items-center gap-[6px]">
            <Ruler size={15} /> {project.sizeKatha}
          </span>
          {project.listingType === "Buy" && <span>{project.status}</span>}
          <span className="ml-auto flex items-center gap-[4px] text-ink">
            View <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
