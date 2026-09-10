"use client";

import { useEffect, useState } from "react";

function computeStatus() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "numeric",
    hour12: false,
    weekday: "short",
  }).formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const open = weekday !== "Sun" && hour >= 9 && hour < 18;
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "numeric",
    minute: "2-digit",
  }).format(now);
  return { open, time };
}

export default function OfficeStatus() {
  const [status, setStatus] = useState<{ open: boolean; time: string } | null>(null);

  useEffect(() => {
    setStatus(computeStatus());
    const id = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <span className="inline-flex items-center gap-[8px] font-mono text-[10px] uppercase tracking-[.07em] text-[#e9e8df]/65">
      <span className="relative flex w-[7px] h-[7px]">
        <span
          className={`absolute inline-flex w-full h-full rounded-full opacity-60 animate-ping ${status.open ? "bg-sage" : "bg-rust"}`}
        />
        <span className={`relative inline-flex w-full h-full rounded-full ${status.open ? "bg-sage" : "bg-rust"}`} />
      </span>
      {status.open ? "Office open now" : "Office closed"} · Dhaka {status.time}
    </span>
  );
}
