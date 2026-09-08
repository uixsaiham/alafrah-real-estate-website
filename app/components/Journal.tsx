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
  const smallBg = ["bg-[#dcd9cc]", "bg-[#72816d] text-[#f5f3eb]"];

  return (
    <Section id="journal" className="py-[84px] md:py-[130px]">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-[35px] md:mb-[48px] gap-[25px]">
          <div>
            <Kicker>News & journal</Kicker>
            <h2 className="font-serif font-medium text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em]">
              Notes on <em className="italic">building well.</em>
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
                <h3 className="font-serif font-medium text-[31px] leading-[1.05] tracking-[-.035em] mb-[34px] max-w-[380px]">
                  {feature.title}
                </h3>
                <span className="flex items-center gap-2 text-[13px]">
                  Read story <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          </Reveal>
          {small.map((post, index) => (
            <Reveal key={post.slug} delay={(index + 1) * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className={`block min-h-[215px] md:min-h-[240px] px-7 py-[27px] h-full ${smallBg[index]}`}
              >
                <p
                  className={`font-mono text-[10px] uppercase tracking-[.09em] mb-[15px] ${
                    index === 1 ? "opacity-70" : "text-moss"
                  }`}
                >
                  {post.category} · {post.readTime}
                </p>
                <h3 className="font-serif font-medium text-[28px] leading-[1.05] tracking-[-.035em] mt-9 mb-6 max-w-[380px]">
                  {post.title}
                </h3>
                <span className="flex items-center gap-2 text-[13px]">
                  Read story <ArrowUpRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
