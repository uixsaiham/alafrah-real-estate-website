"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { BD_SUSTAINABLE_AERIAL } from "../data/images";

const SLIDE_DURATION = 6000;

const featuredProjects = projects.filter((p) => p.listingType === "Buy" && p.currency === "BDT").slice(0, 3);

const slides = [
  ...featuredProjects.map((project) => ({
    image: project.image,
    kicker: project.status,
    title: project.name,
    location: project.location,
    meta: `${project.startingPrice}${project.priceUnit === "total" ? " onwards" : ""}`,
    href: `/projects/${project.slug}`,
  })),
  {
    image: BD_SUSTAINABLE_AERIAL,
    kicker: "Our commitment",
    title: "Built for commerce, designed to last",
    location: "Every Al Afrah development",
    meta: "See our approach",
    href: "/about",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[index];

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-moss-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <motion.img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: (SLIDE_DURATION + 1200) / 1000, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Persistent overlays so they don't fade with each slide */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,40,32,.7)_0%,rgba(31,45,37,.42)_45%,rgba(24,40,32,.15))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(25,39,31,.5),transparent_45%)] pointer-events-none" />

      {/* Slide info + navigation */}
      <div className="hidden md:block absolute z-10 right-[48px] bottom-[39px] max-w-[280px] text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Link href={slide.href} className="group block">
              <p className="font-mono text-[10px] uppercase tracking-[.08em] text-white/70 mb-2">{slide.kicker}</p>
              <p className="font-serif text-[22px] leading-[1.1] mb-1 group-hover:underline">{slide.title}</p>
              <p className="text-white/75 text-[12px]">
                {slide.location} · {slide.meta}
              </p>
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-end gap-2 mt-5">
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}: ${s.title}`}
              className="relative h-[3px] w-8 bg-white/25 overflow-hidden"
            >
              {i === index && (
                <motion.span
                  key={index}
                  className="absolute inset-0 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                />
              )}
              {i < index && <span className="absolute inset-0 bg-white" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
