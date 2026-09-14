"use client";

import { motion } from "framer-motion";
import { ArrowUp, Clock, Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import BlueprintGrid from "./BlueprintGrid";
import Container from "./Container";
import CountUp from "./CountUp";
import NewsletterForm from "./NewsletterForm";
import OfficeStatus from "./OfficeStatus";
import Reveal from "./Reveal";
import SkylineArt from "./SkylineArt";

const EASE = "ease-[cubic-bezier(.22,1,.36,1)]";

const exploreLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const listingLinks = [
  { label: "New developments", href: "/projects?type=Buy" },
  { label: "For lease", href: "/projects?type=Rent" },
  { label: "Resale units", href: "/projects?type=Sell" },
];

const stats = [
  { value: 24, suffix: "+", label: "Developments delivered" },
  { value: 350, suffix: "+", label: "Brands & tenants housed" },
  { value: 120, suffix: "+", label: "Team members" },
  { value: 12, suffix: "", label: "Years, since 2013" },
];

const socials = [
  { label: "Facebook", href: "#facebook", icon: Facebook },
  { label: "LinkedIn", href: "#linkedin", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/8801711030749", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="relative pt-[70px] pb-[25px] text-[#e9e8df] bg-moss-dark overflow-hidden">
      <BlueprintGrid className="absolute inset-0 text-[#e9e8df]/[.045] pointer-events-none" />
      <SkylineArt className="absolute inset-x-0 bottom-0 h-[160px] w-full text-[#e9e8df]/[.07] pointer-events-none" />
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full border border-[#f5f3eb]/10 -left-[160px] -top-[180px] pointer-events-none"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[340px] h-[340px] rounded-full border border-[#f5f3eb]/8 right-[-70px] bottom-[-140px] pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Container className="relative grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 pt-[6px] pb-[42px] mb-[46px] border-b border-[#e9e8df]/14">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06} y={14}>
            <div className="font-serif text-[32px] md:text-[40px] leading-none mb-2">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[.07em] text-[#e9e8df]/58">{stat.label}</div>
          </Reveal>
        ))}
      </Container>

      <Container className="relative grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 md:gap-8 pb-[55px] md:pb-[64px]">
        <Reveal>
          <a href="/" aria-label="Al Afrah Limited home" className="group inline-flex items-center mb-5">
            <img
              src="/logo-al-afrah-horizontal.svg"
              alt="Al Afrah Limited"
              className={`h-[26px] w-auto block transition-transform duration-300 ${EASE} group-hover:scale-[1.05]`}
            />
          </a>
          <p className="text-[13px] leading-[1.6] text-[#e9e8df]/65 max-w-[280px] mb-6">
            Building well-constructed shopping malls and commercial spaces across Bangladesh since 2013 — 24 developments, 350+ brands and tenants housed.
          </p>
          <div className="flex items-center gap-[10px] mb-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`grid place-items-center w-9 h-9 rounded-full border border-[#e9e8df]/25 transition-[background-color,border-color,transform] duration-300 ${EASE} hover:bg-[#e9e8df]/10 hover:border-[#e9e8df]/55 hover:-translate-y-[3px]`}
              >
                <social.icon size={15} strokeWidth={1.6} />
              </a>
            ))}
          </div>
          <OfficeStatus />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-mono text-[10px] uppercase tracking-[.07em] text-[#e9e8df]/45 mb-5">Explore</p>
          <nav className="flex flex-col gap-3 text-[13px] text-[#e9e8df]/75">
            {exploreLinks.map((link) => (
              <a key={link.label} href={link.href} className="w-max transition-colors duration-200 hover:text-[#e9e8df]">
                {link.label}
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-[10px] uppercase tracking-[.07em] text-[#e9e8df]/45 mb-5">Listings</p>
          <nav className="flex flex-col gap-3 text-[13px] text-[#e9e8df]/75">
            {listingLinks.map((link) => (
              <a key={link.label} href={link.href} className="w-max transition-colors duration-200 hover:text-[#e9e8df]">
                {link.label}
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-mono text-[10px] uppercase tracking-[.07em] text-[#e9e8df]/45 mb-5">Get in touch</p>
          <div className="grid gap-3 text-[13px] text-[#e9e8df]/80 mb-7">
            <a href="tel:+8801711030749" className="flex items-center gap-[10px] transition-colors duration-200 hover:text-[#e9e8df]">
              <Phone size={14} strokeWidth={1.6} className="text-[#e9e8df]/50 shrink-0" /> 01711-030749
            </a>
            <a
              href="mailto:info@alafrah.com.bd"
              className="flex items-center gap-[10px] transition-colors duration-200 hover:text-[#e9e8df]"
            >
              <Mail size={14} strokeWidth={1.6} className="text-[#e9e8df]/50 shrink-0" /> info@alafrah.com.bd
            </a>
            <span className="flex items-center gap-[10px]">
              <MapPin size={14} strokeWidth={1.6} className="text-[#e9e8df]/50 shrink-0" />
              <span>Gulshan Avenue, Dhaka, Bangladesh</span>
            </span>
            <span className="flex items-center gap-[10px]">
              <Clock size={14} strokeWidth={1.6} className="text-[#e9e8df]/50 shrink-0" /> Mon–Sat, 9am–6pm
            </span>
          </div>

          <p className="font-serif text-[19px] leading-[1.2] mb-3">
            Occasional notes on <em className="italic">building commerce.</em>
          </p>
          <NewsletterForm />
        </Reveal>
      </Container>

      <Container className="relative grid gap-4 md:flex md:justify-between md:items-center pt-[19px] border-t border-[#e9e8df]/22 text-[#e9e8df]/57 font-mono text-[10px] uppercase tracking-[.07em]">
        <span>© 2026 Al Afrah Limited. All rights reserved.</span>
        <span className="hidden md:inline">Gulshan Avenue, Dhaka, Bangladesh</span>
        <div className="flex items-center gap-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-[6px] w-max transition-colors duration-200 hover:text-[#e9e8df]"
          >
            Back to top{" "}
            <ArrowUp
              size={13}
              className={`transition-transform duration-300 ${EASE} group-hover:-translate-y-[3px]`}
            />
          </button>
        </div>
      </Container>
    </footer>
  );
}
