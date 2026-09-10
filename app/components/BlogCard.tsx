"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "../data/blog";
import { useLanguage } from "../context/LanguageContext";

export default function BlogCard({ post }: { post: BlogPost }) {
  const { language } = useLanguage();
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[16/10] overflow-hidden bg-[#ddd]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      </div>
      <div className="pt-5">
        <p className="font-mono text-[10px] uppercase tracking-[.07em] text-moss mb-3">
          {post.category} · {post.readTime}
        </p>
        <h3
          className={
            language === "bn"
              ? "font-bengali-serif font-semibold text-[23px] leading-[1.45] mb-3"
              : "font-serif font-bold text-[22px] leading-[1.15] tracking-[-.02em] mb-3"
          }
        >
          {language === "bn" ? post.titleBn : post.title}
        </h3>
        <p className="text-muted text-[13px] leading-[1.6] mb-4 line-clamp-2">{post.excerpt}</p>
        <span className="flex items-center gap-2 text-[13px]">
          Read story{" "}
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  );
}
