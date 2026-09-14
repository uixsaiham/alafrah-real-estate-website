"use client";

import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import EnquiryModal from "./components/EnquiryModal";
import FeaturedListings from "./components/FeaturedListings";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journal from "./components/Journal";
import Projects from "./components/Projects";
import ProjectShowcase from "./components/ProjectShowcase";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <Hero onEnquire={() => setEnquiryOpen(true)} />
      <About />
      <Services />
      <Projects />
      <ProjectShowcase />
      <FeaturedListings
        listingType="Rent"
        kicker="On the market · Rentals"
        heading={
          <>
            Move-in ready,<br /><em className="italic text-gold-dark">waiting for you.</em>
          </>
        }
        bg="bg-cream"
      />
      <FeaturedListings
        listingType="Sell"
        kicker="On the market · Resale"
        heading={
          <>
            Verified units,<br /><em className="italic text-gold-dark">independently owned.</em>
          </>
        }
      />
      <Stats />
      <Testimonials />
      <Team />
      <Journal />
      <Contact />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
