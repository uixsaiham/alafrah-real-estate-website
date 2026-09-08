"use client";

import { useState } from "react";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import Contact from "../components/Contact";
import EnquiryModal from "../components/EnquiryModal";
import Footer from "../components/Footer";
import Kicker from "../components/Kicker";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data/blog";

export default function BlogPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <main>
      <div className="bg-moss-dark">
        <Nav onEnquire={() => setEnquiryOpen(true)} />
        <Container className="pt-[125px] pb-[64px] md:pt-[164px] md:pb-[80px]">
          <Reveal>
            <Kicker className="text-[#dce5d6]">Journal</Kicker>
            <h1 className="font-serif font-medium text-white text-[44px] md:text-[60px] leading-[1.02] tracking-[-.04em] max-w-[720px]">
              Notes on<br /><em className="italic">building well.</em>
            </h1>
          </Reveal>
        </Container>
      </div>

      <Container className="py-[64px] md:py-[96px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[22px] gap-y-[52px]">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>

      <Contact />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
