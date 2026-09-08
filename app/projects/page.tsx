"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import Container from "../components/Container";
import Contact from "../components/Contact";
import EnquiryModal from "../components/EnquiryModal";
import FilterBar, { type Filters } from "../components/FilterBar";
import Footer from "../components/Footer";
import Kicker from "../components/Kicker";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import type { ListingType } from "../data/projects";
import { projects } from "../data/projects";

const headings: Record<ListingType, { kicker: string; title: React.ReactNode }> = {
  Buy: {
    kicker: "Our portfolio",
    title: (
      <>
        Every project,<br /><em className="italic">one place to browse.</em>
      </>
    ),
  },
  Rent: {
    kicker: "Rentals",
    title: (
      <>
        Flats ready<br /><em className="italic">to move into.</em>
      </>
    ),
  },
  Sell: {
    kicker: "Resale",
    title: (
      <>
        Verified flats,<br /><em className="italic">independently owned.</em>
      </>
    ),
  },
};

function ProjectsPageContent() {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get("type") as ListingType | null) ?? "Buy";
  const defaultFilters: Filters = {
    listingType: ["Buy", "Rent", "Sell"].includes(initialType) ? initialType : "Buy",
    status: "All",
    type: "All",
    bedrooms: "All",
    query: "",
  };

  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      if (project.listingType !== filters.listingType) return false;
      if (filters.status !== "All" && project.status !== filters.status) return false;
      if (filters.type !== "All" && project.type !== filters.type) return false;
      if (filters.bedrooms !== "All" && project.bedrooms !== filters.bedrooms) return false;
      if (filters.query) {
        const q = filters.query.toLowerCase();
        if (!project.name.toLowerCase().includes(q) && !project.location.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  const heading = headings[filters.listingType];

  return (
    <main>
      <div className="bg-moss-dark">
        <Nav onEnquire={() => setEnquiryOpen(true)} />
        <Container className="pt-[50px] pb-[64px] md:pt-[70px] md:pb-[80px]">
          <Reveal>
            <Kicker className="text-[#dce5d6]">{heading.kicker}</Kicker>
            <h1 className="font-serif font-medium text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px]">
              {heading.title}
            </h1>
          </Reveal>
        </Container>
      </div>

      <Container className="py-[48px] md:py-[64px]">
        <Reveal>
          <FilterBar filters={filters} onChange={setFilters} />
        </Reveal>

        <p className="mt-8 mb-6 text-muted font-mono text-[11px] uppercase tracking-[.06em]">
          {filtered.length} {filtered.length === 1 ? "property" : "properties"}
        </p>

        {filtered.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center border border-line">
            <p className="font-serif text-[24px] mb-2">No properties match those filters.</p>
            <button
              onClick={() => setFilters(defaultFilters)}
              className="mt-4 px-5 py-3 border border-ink text-[13px] transition-colors duration-200 hover:bg-ink hover:text-white"
            >
              Reset filters
            </button>
          </div>
        )}
      </Container>

      <Contact />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsPageContent />
    </Suspense>
  );
}
