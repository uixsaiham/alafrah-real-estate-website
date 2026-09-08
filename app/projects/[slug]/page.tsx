"use client";

import { ArrowUpRight, BedDouble, Building2, CheckCircle2, MapPin, Ruler, Tag } from "lucide-react";
import { use, useState } from "react";
import Container from "../../components/Container";
import Contact from "../../components/Contact";
import EmiCalculator from "../../components/EmiCalculator";
import EnquiryModal from "../../components/EnquiryModal";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import ProjectCard from "../../components/ProjectCard";
import Reveal from "../../components/Reveal";
import Section from "../../components/Section";
import { getProjectBySlug, projects } from "../../data/projects";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  const [activeImage, setActiveImage] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  if (!project) {
    return (
      <main>
        <div className="bg-moss-dark">
          <Nav onEnquire={() => setEnquiryOpen(true)} />
        </div>
        <Container className="py-[120px] text-center">
          <h1 className="font-serif text-[40px] mb-4">Project not found.</h1>
          <a href="/projects" className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px]">
            Back to all projects <ArrowUpRight size={15} />
          </a>
        </Container>
        <Footer />
        {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
      </main>
    );
  }

  const sameType = projects.filter((p) => p.slug !== project.slug && p.listingType === project.listingType);
  const similar = (sameType.length >= 3 ? sameType : projects.filter((p) => p.slug !== project.slug)).slice(0, 3);

  const specs = [
    { icon: Building2, label: "Type", value: project.type },
    { icon: Tag, label: "Status", value: project.status },
    ...(project.bedrooms ? [{ icon: BedDouble, label: "Bedrooms", value: `${project.bedrooms} bed` }] : []),
    { icon: Ruler, label: "Size", value: `${project.sizeSqft} (${project.sizeKatha})` },
  ];

  return (
    <main>
      <div className="bg-moss-dark">
        <Nav onEnquire={() => setEnquiryOpen(true)} />
      </div>

      <Container className="pt-[40px] pb-[36px] md:pt-[56px]">
        <Reveal>
          <p className="flex items-center gap-[5px] text-moss font-mono text-[10px] uppercase tracking-[.05em] mb-4">
            <MapPin size={13} strokeWidth={1.5} /> {project.location}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="font-serif font-medium text-[40px] md:text-[58px] leading-[1.02] tracking-[-.04em] max-w-[720px]">
              {project.name}
            </h1>
            <p className="font-mono text-[15px] whitespace-nowrap">
              {project.startingPrice}
              {project.priceUnit === "total" ? " onwards" : ""}
            </p>
          </div>
        </Reveal>
      </Container>

      <Container>
        <Reveal>
          <div className="aspect-[16/9] overflow-hidden bg-[#ddd]">
            <img src={project.gallery[activeImage]} alt={project.name} className="w-full h-full object-cover block" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {project.gallery.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImage(index)}
                className={`aspect-[16/9] overflow-hidden bg-[#ddd] transition-opacity duration-300 ${index === activeImage ? "ring-2 ring-moss" : "opacity-70 hover:opacity-100"}`}
              >
                <img src={image} alt="" className="w-full h-full object-cover block" />
              </button>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-[60px] py-[64px] md:py-[96px]">
        <Reveal>
          <h2 className="font-serif text-[26px] mb-4">Overview</h2>
          <p className="text-muted text-[16px] leading-[1.75] mb-10 max-w-[600px]">{project.description}</p>

          <h2 className="font-serif text-[26px] mb-5">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-2 text-[14px]">
                <CheckCircle2 size={15} className="text-moss shrink-0" /> {amenity}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bg-cream p-7 h-max">
          <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-5">Project specs</p>
          <div className="grid gap-4 mb-7">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-3 border-b border-line pb-4">
                <spec.icon size={16} className="text-moss shrink-0" strokeWidth={1.6} />
                <div className="flex justify-between w-full text-[14px]">
                  <span className="text-muted">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setEnquiryOpen(true)}
            className="flex items-center justify-between w-full px-[18px] py-4 border-0 bg-moss text-white text-[13px] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Enquire about this project <ArrowUpRight size={17} />
          </button>
          <a href="tel:+8801711030749" className="flex items-center justify-center gap-2 w-full mt-3 py-4 border border-ink text-[13px]">
            Call 01711-030749
          </a>
        </Reveal>
      </Container>

      {project.listingType !== "Rent" && (
        <Section className="bg-cream/40">
          <Container className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-[60px] py-[64px] md:py-[96px]">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-4">Plan your budget</p>
              <h2 className="font-serif font-medium text-[34px] leading-[1.05] tracking-[-.03em] mb-5">
                Know your numbers<br /><em className="italic">before you visit.</em>
              </h2>
              <p className="text-muted text-[15px] leading-[1.7] max-w-[380px]">
                Adjust the down payment, tenure, and interest rate to see an estimated monthly payment for{" "}
                {project.name}.{" "}
                {project.listingType === "Buy"
                  ? "Our sales team can help you compare financing options from partner banks during your site visit."
                  : "Our resale desk can help you compare financing options from partner banks before you make an offer."}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <EmiCalculator project={project} />
            </Reveal>
          </Container>
        </Section>
      )}

      {similar.length > 0 && (
        <Section>
          <Container className="pb-[84px] md:pb-[130px]">
            <Reveal>
              <h2 className="font-serif font-medium text-[32px] mb-8">More from Green Estate</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
              {similar.map((p, index) => (
                <Reveal key={p.slug} delay={index * 0.08}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Contact />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
