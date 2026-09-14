"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";
import { blogPosts } from "../data/blog";

export default function Journal() {
  const [feature, ...rest] = blogPosts;
  const small = rest.slice(0, 2);
  const smallBg = ["bg-[#e4dcc4]", "bg-moss text-[#f5f3eb]"];

  return (
    <Section id="journal" className="py-[84px] md:py-[130px]">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-[35px] md:mb-[48px] gap-[25px]">
          <div>
            <Kicker>News & journal</Kicker>
            <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
              Stories from <em className="italic text-gold-dark">the build.</em>
            </h2>
          </div>
          <a href="/blog" className="flex items-center gap-[10px] pb-[7px] border-b border-ink text-[13px] w-max">
            Read the journal <ArrowUpRight size={16} />
          </a>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-[22px]">
          <Reveal className="md:row-span-2">
            <Link href={`/blog/${feature.slug}`} className="block bg-[#e4e0d5] h-full group overflow-hidden">
              <div
                className="h-[220px] md:h-[270px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${feature.image}')` }}
              />
              <div className="px-7 pt-[27px] pb-8">
                <Kicker>
                  {feature.category} · {feature.readTime}
                </Kicker>
                <h3 className="font-serif font-bold text-[31px] leading-[1.05] tracking-[-.035em] mb-[34px] max-w-[380px]">
                  {feature.title}
                </h3>
                <span className="flex items-center gap-2 text-[13px]">
                  Read story <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          </Reveal>
          {small.map((post, index) => (
            <Reveal key={post.slug} delay={(index + 1) * 0.1} className="[perspective:1200px]">
              <Link
                href={`/blog/${post.slug}`}
                className={`group relative isolate block min-h-[215px] md:min-h-[240px] px-7 py-[27px] transition-all duration-500 ease-out hover:z-20 hover:shadow-[0_30px_55px_rgba(0,0,0,.28)] hover:[transform:translateY(-10px)_scale(1.035)_rotateX(3deg)] ${smallBg[index]}`}
              >
                <p
                  className={`font-mono text-[10px] uppercase tracking-[.09em] mb-[15px] ${
                    index === 1 ? "opacity-70" : "text-moss"
                  }`}
                >
                  {post.category} · {post.readTime}
                </p>
                <h3 className="font-serif font-bold text-[28px] leading-[1.05] tracking-[-.035em] mt-9 mb-3 max-w-[380px]">
                  {post.title}
                </h3>
                <span className="flex items-center gap-2 text-[13px]">
                  Read story{" "}
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>

                {/* Flyout is absolutely positioned so its growth doesn't stretch the sibling card sharing this grid row. */}
                <div
                  className={`absolute left-0 right-0 top-full overflow-hidden max-h-0 group-hover:max-h-[280px] transition-[max-height] duration-500 ease-out shadow-[0_20px_45px_rgba(0,0,0,.25)] ${smallBg[index]}`}
                >
                  <div className="relative h-[160px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                      style={{ backgroundImage: `url('${post.image}')` }}
                    />
                  </div>
                  <p className="text-[13px] leading-[1.5] opacity-80 px-7 py-5 max-w-[340px]">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
