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
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-sm transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          solid ? "bg-moss-dark/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,.2)]" : "bg-white/[0.05]"
        }`}
      >
        {/* Soft glossy highlight along the top of the bar */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.1] to-transparent pointer-events-none" />
        {/* Scrim so nav content stays legible over busy/bright hero photos even before the solid state kicks in */}
        {!solid && (
          <div className="absolute inset-0 h-[130px] bg-[linear-gradient(180deg,rgba(9,18,12,.58)_0%,rgba(9,18,12,.24)_55%,transparent_100%)] pointer-events-none" />
        )}
        {/* Hairline glass edge at the bottom of the bar */}
        <div
          className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent pointer-events-none ${
            solid ? "via-white/14" : "via-white/25"
          }`}
        />
        <Container className="relative z-10">
        <nav className="flex h-[75px] md:h-[94px] items-center justify-between">
          <a href="/" aria-label="Green Estate home" className="group flex items-center">
            <img
              src="/logo.png"
              alt="Green Estate"
              className={`h-[30px] md:h-[36px] w-auto block drop-shadow-[0_2px_10px_rgba(0,0,0,.35)] transition-transform duration-300 ${EASE_CLASS} group-hover:scale-[1.05]`}
            />
          </a>
          <div className="hidden md:flex gap-[28px] ml-[64px] text-[13px] font-medium">
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
              className={`hidden lg:flex items-center gap-2 pr-[16px] border-r ${onDark ? "border-white/15" : "border-line"} ${onDark ? "text-white/55" : "text-muted"} transition-colors duration-200 ${onDark ? "hover:text-white" : "hover:text-ink"}`}
            >
              <Phone size={13} /> 01711-030749
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
              className="flex gap-[10px] items-center bg-gold text-moss-dark px-[18px] py-[13px] mt-10 text-[13px] font-semibold shadow-[0_8px_20px_rgba(240,180,41,.35)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
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
