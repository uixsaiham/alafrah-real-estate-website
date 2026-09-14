"use client";

import { useState } from "react";
import BlueprintGrid from "../components/BlueprintGrid";
import Container from "../components/Container";
import Contact from "../components/Contact";
import EnquiryModal from "../components/EnquiryModal";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Kicker from "../components/Kicker";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { BD_BANANI_MODEL_TOWN } from "../data/images";

export default function ContactPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <div className="relative bg-moss-dark overflow-hidden">
        <img src={BD_BANANI_MODEL_TOWN} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,26,17,.82)_0%,rgba(13,26,17,.9)_100%)]" />
        <BlueprintGrid className="absolute inset-0 z-[1] text-white/[.06] pointer-events-none" />
        <div className="relative z-10">
          <Nav onEnquire={() => setEnquiryOpen(true)} />
          <Container className="pt-[125px] pb-[64px] md:pt-[164px] md:pb-[80px]">
            <Reveal>
              <Kicker className="text-[#f3e6c2]">Get in touch</Kicker>
              <h1 className="font-serif font-bold text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px]">
                We&apos;re here,<br /><em className="italic text-gold">whenever you are.</em>
              </h1>
            </Reveal>
          </Container>
        </div>
      </div>

      <Contact />
      <Faq />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
