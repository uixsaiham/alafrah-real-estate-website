"use client";

import { useId } from "react";

/**
 * Full-bleed architectural drafting texture — a fine grid with registration
 * crosshairs at each corner, like a blueprint or site-plan sheet. Inherits
 * `color` from its parent, so control intensity with a text-color utility
 * plus opacity (e.g. `text-white/10`).
 */
export default function BlueprintGrid({ className = "" }: { className?: string }) {
  const patternId = useId();
  const corners: [number, number][] = [
    [4, 4],
    [96, 4],
    [4, 96],
    [96, 96],
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={patternId} width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M5,0 L0,0 L0,5" fill="none" stroke="currentColor" strokeWidth="0.15" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill={`url(#${patternId})`} />
      {corners.map(([cx, cy], i) => (
        <g key={i} stroke="currentColor" strokeWidth="0.3" fill="none">
          <line x1={cx - 2.4} y1={cy} x2={cx + 2.4} y2={cy} />
          <line x1={cx} y1={cy - 2.4} x2={cx} y2={cy + 2.4} />
          <circle cx={cx} cy={cy} r="1.4" />
        </g>
      ))}
    </svg>
  );
}
