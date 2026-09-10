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
import { BD_ALIF_BREEZE, BD_DHANMONDI_VIEW, BD_MUGDA_TERRACED } from "../data/images";
import { useLanguage } from "../context/LanguageContext";

const headings: Record<ListingType, { kicker: string; titleBn: React.ReactNode; titleEn: React.ReactNode; image: string }> = {
  Buy: {
    kicker: "Our portfolio",
    titleBn: (
      <>
        সব প্রকল্প,<br /><em className="not-italic text-gold">এক জায়গায়।</em>
      </>
    ),
    titleEn: (
      <>
        Every project,<br /><em className="italic text-gold">one place to browse.</em>
      </>
    ),
    image: BD_DHANMONDI_VIEW,
  },
  Rent: {
    kicker: "Rentals",
    titleBn: (
      <>
        উঠে যাওয়ার জন্য প্রস্তুত,<br /><em className="not-italic text-gold">আপনার অপেক্ষায়।</em>
      </>
    ),
    titleEn: (
      <>
        Move-in ready,<br /><em className="italic text-gold">waiting for you.</em>
      </>
    ),
    image: BD_MUGDA_TERRACED,
  },
  Sell: {
    kicker: "Resale",
    titleBn: (
      <>
        যাচাইকৃত ফ্ল্যাট,<br /><em className="not-italic text-gold">ব্যক্তিমালিকানাধীন।</em>
      </>
    ),
    titleEn: (
      <>
        Verified flats,<br /><em className="italic text-gold">independently owned.</em>
      </>
    ),
    image: BD_ALIF_BREEZE,
  },
};

function ProjectsPageContent() {
  const { language } = useLanguage();
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
      <div className="relative bg-moss-dark overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={filters.listingType}
            src={heading.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,17,.82)_0%,rgba(13,26,17,.9)_100%)]" />
        <div className="relative z-10">
          <Nav onEnquire={() => setEnquiryOpen(true)} />
          <Container className="pt-[125px] pb-[64px] md:pt-[164px] md:pb-[80px]">
            <Reveal>
              <Kicker className="text-[#dce5d6]">{heading.kicker}</Kicker>
              <h1
                className={
                  language === "bn"
                    ? "font-bengali-serif font-extrabold text-white text-[42px] md:text-[58px] leading-[1.35] max-w-[760px]"
                    : "font-serif font-bold text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px]"
                }
              >
                {language === "bn" ? heading.titleBn : heading.titleEn}
              </h1>
            </Reveal>
          </Container>
        </div>
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
