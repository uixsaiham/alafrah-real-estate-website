import type { ReactNode } from "react";

export default function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-[9px] font-mono text-[10px] uppercase tracking-[.09em] text-moss mb-[15px] ${className}`}>
      <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden="true" focusable="false" className="shrink-0">
        <g stroke="currentColor" strokeWidth="1">
          <line x1="4.5" y1="0" x2="4.5" y2="9" />
          <line x1="0" y1="4.5" x2="9" y2="4.5" />
        </g>
      </svg>
      {children}
    </p>
  );
}
