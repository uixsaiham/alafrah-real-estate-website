"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";

const faqs = [
  {
    q: "How much down payment do I need to book a shop or office unit?",
    a: "Most Al Afrah developments require a 10–20% booking payment, with the balance structured across construction milestones for under-construction projects, or paid in full at registration for ready units.",
  },
  {
    q: "Can I get financing through Al Afrah?",
    a: "We don't lend directly, but our sales team works with partner banks and can introduce you to a loan officer once you've shortlisted a unit. Use the investment calculator on any project page to estimate your EMI first.",
  },
  {
    q: "Do you handle registration and paperwork?",
    a: "Yes. Our legal team prepares and verifies all registration documents, and can act on your behalf under power of attorney if you're buying from abroad.",
  },
  {
    q: "What happens after handover — is there ongoing mall or building management?",
    a: "Every handover includes a one-year defect liability period, and our facilities and leasing team remains available for common-area maintenance and tenant mix support for the life of the building.",
  },
  {
    q: "Can I resell or lease out my unit through Al Afrah?",
    a: "Yes — our resale and leasing desk lists units from previous Al Afrah developments and can help with valuation, tenant screening, or a sale.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="py-[84px] md:py-[130px]">
      <Container className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[60px]">
        <Reveal>
          <Kicker>FAQs</Kicker>
          <h2 className="font-serif font-bold text-[36px] md:text-[44px] leading-[1.05] tracking-[-.03em] max-w-[380px]">
            Answers to what<br /><em className="italic text-gold-dark">matters most.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div key={faq.q} className="border-t border-line last:border-b">
                  <button
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex items-center justify-between w-full py-6 text-left gap-6"
                  >
                    <span className="font-serif text-[19px] leading-[1.3]">{faq.q}</span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-moss transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted text-[14px] leading-[1.7] pb-6 max-w-[520px]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
