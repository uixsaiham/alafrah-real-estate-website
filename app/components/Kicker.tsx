import type { ReactNode } from "react";

export default function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.09em] text-moss mb-[15px] ${className}`}>
      {children}
    </p>
  );
}
