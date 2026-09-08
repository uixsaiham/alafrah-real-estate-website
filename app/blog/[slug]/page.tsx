"use client";

import { ArrowUpRight } from "lucide-react";
import { use, useState } from "react";
import BlogCard from "../../components/BlogCard";
import Container from "../../components/Container";
import Contact from "../../components/Contact";
import EnquiryModal from "../../components/EnquiryModal";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import { blogPosts, getBlogPostBySlug } from "../../data/blog";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getBlogPostBySlug(slug);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  if (!post) {
    return (
      <main>
        <div className="bg-moss-dark">
          <Nav onEnquire={() => setEnquiryOpen(true)} />
        </div>
        <Container className="py-[120px] text-center">
          <h1 className="font-serif text-[40px] mb-4">Story not found.</h1>
          <a href="/blog" className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px]">
            Back to the journal <ArrowUpRight size={15} />
          </a>
        </Container>
        <Footer />
        {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
      </main>
    );
  }

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <div className="bg-moss-dark">
        <Nav onEnquire={() => setEnquiryOpen(true)} />
      </div>

      <Container className="pt-[40px] pb-[36px] md:pt-[56px] max-w-none">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-4">
            {post.category} · {post.readTime}
          </p>
          <h1 className="font-serif font-medium text-[36px] md:text-[52px] leading-[1.05] tracking-[-.03em] max-w-[820px] mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-muted text-[13px]">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formattedDate}</span>
          </div>
        </Reveal>
      </Container>

      <Container>
        <Reveal>
          <div className="aspect-[16/8] overflow-hidden bg-[#ddd]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover block" />
          </div>
        </Reveal>
      </Container>

      <Container className="py-[56px] md:py-[80px]">
        <Reveal className="grid gap-6 max-w-[680px]">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-[1.85] text-ink/85">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </Container>

      {more.length > 0 && (
        <Container className="pb-[84px] md:pb-[130px]">
          <Reveal>
            <h2 className="font-serif font-medium text-[32px] mb-8">More from the journal</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[22px]">
            {more.map((p, index) => (
              <Reveal key={p.slug} delay={index * 0.08}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      )}

      <Contact />
      <Footer />
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </main>
  );
}
