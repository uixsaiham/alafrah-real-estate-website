"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center gap-[10px] py-[13px] border-b border-[#e9e8df]/40 text-[#e9e8df]/85 font-mono text-[11px]">
        <Check size={15} /> You&apos;re subscribed.
      </div>
    );
  }

  return (
    <form
      className="flex items-center justify-between gap-3 py-[13px] border-b border-[#e9e8df]/40 text-[#e9e8df]/70 font-mono text-[11px]"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        className="w-full bg-transparent outline-none placeholder:text-[#e9e8df]/45 text-[#e9e8df]"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="shrink-0 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:translate-x-1 hover:-translate-y-0.5"
      >
        <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
