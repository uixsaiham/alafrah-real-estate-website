"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  suffix = "",
  className = "",
  immediate = false,
}: {
  value: number;
  suffix?: string;
  className?: string;
  /** Start counting on mount instead of on scroll-into-view — use for content that's already above the fold. */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const scrollInView = useInView(ref, { once: true, margin: "-80px" });
  const inView = immediate || scrollInView;
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => setDisplay(Math.round(latest)));
    return unsubscribe;
  }, [spring]);

  return (
    <motion.span ref={ref} className={className}>
      {display.toLocaleString("en-US")}
      {suffix}
    </motion.span>
  );
}
