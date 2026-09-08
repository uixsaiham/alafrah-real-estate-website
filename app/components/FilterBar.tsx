"use client";

import { Search } from "lucide-react";
import type { ListingType, ProjectStatus, ProjectType } from "../data/projects";

export type Filters = {
  listingType: ListingType;
  status: ProjectStatus | "All";
  type: ProjectType | "All";
  bedrooms: number | "All";
  query: string;
};

const listingTypes: ListingType[] = ["Buy", "Rent", "Sell"];
const statuses: (ProjectStatus | "All")[] = ["All", "Ready to move", "Under construction", "Sold out"];
const types: (ProjectType | "All")[] = ["All", "Residential", "Commercial", "Mixed-use"];
const bedroomOptions: (number | "All")[] = ["All", 2, 3, 4];

function Toggle<T extends string | number>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`px-[13px] py-[9px] border font-mono text-[11px] uppercase tracking-[.05em] transition-colors ${
            value === option
              ? "bg-moss text-white border-moss"
              : "bg-transparent text-ink border-line hover:border-moss"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function FilterBar({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (filters: Filters) => void;
}) {
  return (
    <div className="bg-cream border border-line">
      <div className="flex border-b border-line">
        {listingTypes.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange({ ...filters, listingType: option, status: "All" })}
            className={`flex-1 py-4 font-serif text-[17px] transition-colors ${
              filters.listingType === option ? "bg-moss text-white" : "bg-transparent text-ink hover:bg-paper"
            }`}
          >
            {option === "Buy" ? "Buy" : option === "Rent" ? "Rent" : "Sell"}
          </button>
        ))}
      </div>

      <div className="p-6 md:p-7 grid gap-6">
        <div className="flex items-center gap-3 border-b border-line pb-5">
          <Search size={16} className="text-moss shrink-0" />
          <input
            value={filters.query}
            onChange={(event) => onChange({ ...filters, query: event.target.value })}
            placeholder="Search by project name or location"
            className="w-full bg-transparent outline-none text-[15px] placeholder:text-muted"
          />
        </div>
        <div className={`grid gap-5 ${filters.listingType === "Buy" ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {filters.listingType === "Buy" && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-3">Status</p>
              <Toggle options={statuses} value={filters.status} onChange={(status) => onChange({ ...filters, status })} />
            </div>
          )}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-3">Type</p>
            <Toggle options={types} value={filters.type} onChange={(type) => onChange({ ...filters, type })} />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-3">Bedrooms</p>
            <Toggle
              options={bedroomOptions}
              value={filters.bedrooms}
              onChange={(bedrooms) => onChange({ ...filters, bedrooms })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
