import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-[calc(100%-40px)] md:w-[min(1220px,calc(100%-96px))] mx-auto ${className}`}>
      {children}
    </div>
  );
}
