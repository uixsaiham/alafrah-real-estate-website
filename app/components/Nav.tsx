"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_CLASS = "ease-[cubic-bezier(.22,1,.36,1)]";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav({
  onEnquire,
  onDark = true,
  transparentAtTop = false,
}: {
  onEnquire: () => void;
  onDark?: boolean;
  /** Start transparent (for sitting over a photo) and gain a solid background once scrolled. */
  transparentAtTop?: boolean;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solid, setSolid] = useState(!transparentAtTop);

  useEffect(() => {
    if (!transparentAtTop) return;
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentAtTop]);

  const textColor = onDark ? "text-white" : "text-ink";
  const mutedColor = onDark ? "text-white/82" : "text-muted";
  const borderColor = onDark ? "border-white/28" : "border-line";
  const outlineBorder = onDark ? "border-white/55" : "border-ink/55";

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          solid ? "bg-moss-dark/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,.18)]" : "bg-transparent"
        }`}
      >
        <Container>
        <nav
          className={`flex h-[75px] md:h-[94px] items-center justify-between border-b transition-colors duration-300 ${
            solid ? "border-transparent" : borderColor
          }`}
        >
          <a href="/" aria-label="Green Estate home" className="group flex items-center">
            <span
              className={`inline-flex items-center bg-white px-[10px] py-[6px] shadow-[0_2px_10px_rgba(0,0,0,.15)] transition-transform duration-300 ${EASE_CLASS} group-hover:scale-[1.05]`}
            >
              <img src="/logo.jpg" alt="Green Estate" className="h-[24px] md:h-[28px] w-auto block" />
            </span>
          </a>
          <div className={`hidden md:flex gap-[34px] ml-[90px] text-[13px] ${mutedColor}`}>
            {links.map((link) => {
              const active = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 ${onDark ? "hover:text-white" : "hover:text-ink"} ${
                    active ? (onDark ? "text-white" : "text-ink") : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`pointer-events-none absolute left-0 -bottom-[3px] h-px w-full origin-left bg-current transition-transform duration-300 ${EASE_CLASS} ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>
          <div className={`flex items-center gap-[22px] text-[13px] ${textColor}`}>
            <a href="tel:+8801711030749" className="hidden md:flex items-center gap-2">
              <Phone size={14} /> 01711-030749
            </a>
            <button
              className={`group hidden md:flex gap-[10px] items-center bg-transparent px-[15px] py-[11px] border transition-colors duration-200 ${onDark ? "hover:bg-white/10" : "hover:bg-ink/5"} ${outlineBorder}`}
              onClick={onEnquire}
            >
              Book a visit{" "}
              <ArrowUpRight
                size={15}
                className={`transition-transform duration-300 ${EASE_CLASS} group-hover:translate-x-1 group-hover:-translate-y-0.5`}
              />
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
        </Container>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-50 bg-moss-dark text-white p-6 md:hidden"
          >
            <div className="flex justify-between items-center h-[75px]">
              <span className="inline-flex items-center bg-white px-[10px] py-[6px]">
                <img src="/logo.jpg" alt="Green Estate" className="h-[24px] w-auto block" />
              </span>
              <motion.button
                aria-label="Close navigation"
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.9, rotate: 90 }}
              >
                <X size={22} />
              </motion.button>
            </div>
            <div className="flex flex-col gap-6 mt-10 text-2xl font-serif">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: EASE }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.button
              className="flex gap-[10px] items-center bg-white text-moss-dark px-[18px] py-[13px] mt-10 text-[13px]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + links.length * 0.05, ease: EASE }}
              onClick={() => {
                setMobileOpen(false);
                onEnquire();
              }}
            >
              Book a visit <ArrowUpRight size={15} />
            </motion.button>
            <motion.a
              href="tel:+8801711030749"
              className="flex items-center gap-2 mt-6 text-white/80"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + links.length * 0.05, ease: EASE }}
            >
              <Phone size={14} /> 01711-030749
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
