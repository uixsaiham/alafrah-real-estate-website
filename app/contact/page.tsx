"use client";

import { useState } from "react";
import Container from "../components/Container";
import Contact from "../components/Contact";
import EnquiryModal from "../components/EnquiryModal";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Kicker from "../components/Kicker";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";

export default function ContactPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <div className="bg-moss-dark">
        <Nav onEnquire={() => setEnquiryOpen(true)} />
        <Container className="pt-[50px] pb-[64px] md:pt-[70px] md:pb-[80px]">
          <Reveal>
            <Kicker className="text-[#dce5d6]">Get in touch</Kicker>
            <h1 className="font-serif font-medium text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px]">
              We&apos;re here<br /><em className="italic">to help.</em>
            </h1>
          </Reveal>
        </Container>
      </div>

      <Contact />
      <Faq />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
