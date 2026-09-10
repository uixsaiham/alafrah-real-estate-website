"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function EnquiryModal({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage();
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center p-5 bg-[rgba(27,39,31,.64)]"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative w-full md:w-[min(510px,100%)] p-[35px] md:p-[47px] bg-paper shadow-[0_25px_90px_rgba(0,0,0,.25)]"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          className="absolute right-[27px] top-[25px] flex items-center gap-2 text-muted bg-transparent border-0 font-mono text-[10px] uppercase tracking-[.08em]"
          onClick={onClose}
        >
          Close <span className="text-2xl font-light">×</span>
        </button>
        <p className="font-mono text-[10px] uppercase tracking-[.09em] text-moss mb-[15px]">Book a visit</p>
        {language === "bn" ? (
          <h2 className="font-bengali-serif font-extrabold text-[36px] md:text-[44px] mb-[35px] leading-[1.4]">
            সরাসরি দেখুন <em className="not-italic text-gold-dark">প্রকল্পটি।</em>
          </h2>
        ) : (
          <h2 className="font-serif font-bold text-[42px] md:text-[48px] mb-[35px] leading-[1.05]">
            See a project<br /><em className="italic text-gold-dark">in person.</em>
          </h2>
        )}
        <label className="grid gap-2 mb-[18px] text-moss font-mono text-[10px] uppercase tracking-[.07em]">
          Phone number
          <input
            autoFocus
            type="tel"
            placeholder="01XXXXXXXXX"
            className="w-full py-[14px] border-0 border-b border-line bg-transparent text-ink outline-none font-sans text-[15px]"
          />
        </label>
        <label className="grid gap-2 mb-[18px] text-moss font-mono text-[10px] uppercase tracking-[.07em]">
          Which project?
          <select
            defaultValue=""
            className="w-full py-[14px] border-0 border-b border-line bg-transparent text-ink outline-none font-sans text-[15px]"
          >
            <option value="" disabled>
              Choose a project
            </option>
            {projects.map((project) => (
              <option key={project.slug}>{project.name}</option>
            ))}
          </select>
        </label>
        <button
          className="flex items-center justify-between w-full px-[18px] py-4 mt-5 border-0 bg-moss text-white text-[13px] transition-transform duration-200 hover:-translate-y-0.5"
          onClick={onClose}
        >
          Request a visit <ArrowUpRight size={17} />
        </button>
      </motion.div>
    </motion.div>
  );
}
