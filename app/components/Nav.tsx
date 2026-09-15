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
  const outlineBorder = onDark ? "border-white/55" : "border-ink/55";

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          solid ? "bg-moss-dark/95 backdrop-blur-sm shadow-[0_2px_16px_rgba(0,0,0,.16)]" : "bg-transparent"
        }`}
      >
        {/* Scrim so nav content stays legible over busy/bright hero photos even before the solid state kicks in */}
        {!solid && (
          <div className="absolute inset-0 h-[130px] bg-[linear-gradient(180deg,rgba(16,14,23,.58)_0%,rgba(16,14,23,.24)_55%,transparent_100%)] pointer-events-none" />
        )}
        {/* Hairline edge at the bottom of the bar */}
        <div
          className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent pointer-events-none ${
            solid ? "via-white/10" : "via-white/18"
          }`}
        />
        <Container className="relative z-10">
        <nav className="flex h-[75px] md:h-[94px] items-center justify-between">
          <a href="/" aria-label="Al Afrah Limited home" className="group flex items-center">
            <img
              src="/logo-al-afrah-horizontal.svg"
              alt="Al Afrah Limited"
              className={`h-[30px] md:h-[36px] w-auto block drop-shadow-[0_2px_10px_rgba(0,0,0,.35)] transition-transform duration-300 ${EASE_CLASS} group-hover:scale-[1.05]`}
            />
          </a>
          <div className="flex items-center gap-[46px]">
            <div className="hidden md:flex gap-[28px] text-[13px] font-medium">
              {links.map((link) => {
                const active = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`group relative py-1 transition-colors duration-200 ${
                      active
                        ? onDark
                          ? "text-white"
                          : "text-ink"
                        : `${mutedColor} ${onDark ? "hover:text-white" : "hover:text-ink"}`
                    }`}
                  >
                    {link.label}
                    <span
                      className={`pointer-events-none absolute left-0 -bottom-[3px] h-[2px] w-full origin-left bg-gold transition-transform duration-300 ${EASE_CLASS} ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
            <div className={`flex items-center gap-[16px] text-[13px] ${textColor}`}>
              <a
                href="tel:+8801711030749"
                className={`hidden lg:flex items-center gap-[9px] pl-[16px] pr-[18px] py-[13px] border transition-all duration-300 hover:-translate-y-0.5 ${
                  onDark
                    ? "border-white/30 text-white/85 hover:border-white/60 hover:bg-white/10 hover:text-white"
                    : "border-ink/25 text-muted hover:border-ink/45 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                <span className="relative flex items-center justify-center w-[16px] h-[16px] shrink-0">
                  <span
                    className={`absolute inset-0 rounded-full animate-ping ${onDark ? "bg-gold/40" : "bg-moss/30"}`}
                  />
                  <motion.span
                    className="relative flex"
                    animate={{ rotate: [0, -18, 16, -14, 10, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
                  >
                    <Phone size={13} fill="currentColor" />
                  </motion.span>
                </span>
                01711-030749
              </a>
              <button
                className="group hidden md:flex gap-[9px] items-center bg-gold text-moss-dark px-[22px] py-[13px] text-[13.5px] font-bold tracking-[.01em] shadow-[0_10px_24px_rgba(240,180,41,.4)] transition-all duration-200 hover:brightness-[1.08] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(240,180,41,.5)]"
                onClick={onEnquire}
              >
                Book a Visit{" "}
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.4}
                  className={`transition-transform duration-300 ${EASE_CLASS} group-hover:translate-x-1 group-hover:-translate-y-0.5`}
                />
              </button>
              <button
                className={`md:hidden grid place-items-center w-9 h-9 -mr-2 border-0 bg-transparent transition-transform duration-200 hover:scale-110 active:scale-95 ${textColor}`}
                aria-label="Open navigation"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={19} />
              </button>
            </div>
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
              <img src="/logo-al-afrah-horizontal.svg" alt="Al Afrah Limited" className="h-[28px] w-auto block" />
              <motion.button
                aria-label="Close navigation"
                onClick={() => setMobileOpen(false)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 90 }}
                transition={{ duration: 0.25, ease: EASE }}
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
                  whileHover={{ x: 6, color: "#e9c46a", transition: { duration: 0.2, ease: EASE } }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: EASE }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.button
              className="flex gap-[10px] items-center bg-gold text-moss-dark px-[18px] py-[13px] mt-10 text-[13px] font-semibold shadow-[0_8px_20px_rgba(240,180,41,.35)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, boxShadow: "0 12px 28px rgba(240,180,41,.5)", transition: { duration: 0.25, ease: EASE } }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4, delay: 0.1 + links.length * 0.05, ease: EASE }}
              onClick={() => {
                setMobileOpen(false);
                onEnquire();
              }}
            >
              Book a Visit <ArrowUpRight size={15} />
            </motion.button>
            <motion.a
              href="tel:+8801711030749"
              className="flex items-center gap-2 mt-6 text-white/80 transition-colors duration-200"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ x: 4, color: "#ffffff", transition: { duration: 0.2, ease: EASE } }}
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
