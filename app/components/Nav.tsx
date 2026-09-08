"use client";

import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import Container from "./Container";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav({ onEnquire, onDark = true }: { onEnquire: () => void; onDark?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = onDark ? "text-white" : "text-ink";
  const mutedColor = onDark ? "text-white/82" : "text-muted";
  const borderColor = onDark ? "border-white/28" : "border-line";
  const outlineBorder = onDark ? "border-white/55" : "border-ink/55";

  return (
    <Container>
      <nav className={`relative z-20 flex h-[75px] md:h-[94px] items-center justify-between border-b ${borderColor}`}>
        <a href="/" aria-label="Green Estate home" className={`flex items-center gap-[9px] text-xl tracking-[-0.05em] font-medium ${textColor}`}>
          <span className="grid place-items-center w-[27px] h-[27px] border border-current rounded-full font-serif italic text-[17px]">
            G
          </span>
          Green Estate
        </a>
        <div className={`hidden md:flex gap-[34px] ml-[90px] text-[13px] ${mutedColor}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={onDark ? "hover:text-white" : "hover:text-ink"}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={`flex items-center gap-[22px] text-[13px] ${textColor}`}>
          <a href="tel:+8801711030749" className="hidden md:flex items-center gap-2">
            <Phone size={14} /> 01711-030749
          </a>
          <button
            className={`hidden md:flex gap-[10px] items-center bg-transparent px-[15px] py-[11px] border transition-colors duration-200 ${onDark ? "hover:bg-white/10" : "hover:bg-ink/5"} ${outlineBorder}`}
            onClick={onEnquire}
          >
            Book a visit <ArrowUpRight size={15} />
          </button>
          <button
            className="md:hidden border-0 bg-transparent"
            aria-label="Open navigation"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={19} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-moss-dark text-white p-6 md:hidden">
          <div className="flex justify-between items-center h-[75px]">
            <span className="flex items-center gap-[9px] text-xl tracking-[-0.05em] font-medium">
              <span className="grid place-items-center w-[27px] h-[27px] border border-current rounded-full font-serif italic text-[17px]">
                G
              </span>
              Green Estate
            </span>
            <button aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-10 text-2xl font-serif">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="flex gap-[10px] items-center bg-white text-moss-dark px-[18px] py-[13px] mt-10 text-[13px]"
            onClick={() => {
              setMobileOpen(false);
              onEnquire();
            }}
          >
            Book a visit <ArrowUpRight size={15} />
          </button>
          <a href="tel:+8801711030749" className="flex items-center gap-2 mt-6 text-white/80">
            <Phone size={14} /> 01711-030749
          </a>
        </div>
      )}
    </Container>
  );
}
