"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Container from "./Container";
import Kicker from "./Kicker";
import Reveal from "./Reveal";
import Section from "./Section";
import { useLanguage } from "../context/LanguageContext";

const inquiryTypes = ["Booking", "Payment", "Discussion", "Site visit", "Customization"];

const inputClass =
  "w-full py-[14px] border-0 border-b border-line bg-transparent text-ink outline-none font-sans text-[15px]";
const labelClass = "grid gap-2 text-moss font-mono text-[10px] uppercase tracking-[.07em]";

export default function Contact() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section id="contact" className="py-[84px] md:py-[130px] bg-cream">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px]">
        <Reveal>
          <Kicker>Get in touch</Kicker>
          {language === "bn" ? (
            <h2 className="font-bengali-serif font-extrabold text-[42px] md:text-[52px] leading-[1.35] mb-8">
              আসুন,<br /><em className="not-italic text-gold-dark">একসাথে আপনার স্বপ্নের বাড়ির পরিকল্পনা করি।</em>
            </h2>
          ) : (
            <h2 className="font-serif font-bold text-[44px] md:text-[52px] leading-[1.02] tracking-[-.04em] mb-8">
              Let&apos;s shape<br /><em className="italic text-gold-dark">your next chapter.</em>
            </h2>
          )}
          <div className="grid gap-6">
            <a href="tel:+8801711030749" className="flex items-center gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-paper text-moss shrink-0">
                <Phone size={17} strokeWidth={1.6} />
              </span>
              <div>
                <div className="text-[15px] font-medium">01711-030749</div>
                <div className="text-muted text-[12px]">Mon–Sat, 9am–6pm</div>
              </div>
            </a>
            <a href="mailto:info@greenestate.com.bd" className="flex items-center gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-paper text-moss shrink-0">
                <Mail size={17} strokeWidth={1.6} />
              </span>
              <div>
                <div className="text-[15px] font-medium">info@greenestate.com.bd</div>
                <div className="text-muted text-[12px]">We reply within one business day</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-paper text-moss shrink-0">
                <MapPin size={17} strokeWidth={1.6} />
              </span>
              <div>
                <div className="text-[15px] font-medium">Head office, Dhaka</div>
                <div className="text-muted text-[12px]">Matuail, Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="bg-paper p-8 md:p-10"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[.09em] text-moss mb-[15px]">Quick enquiry</p>
            {submitted ? (
              <div className="py-10">
                <h3 className="font-serif text-[26px] mb-3">Thank you.</h3>
                <p className="text-muted text-[14px] leading-[1.6]">
                  Your enquiry has been received — a member of our team will reach out shortly.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <label className={labelClass}>
                  Full name
                  <input required placeholder="Your name" className={inputClass} />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className={labelClass}>
                    Phone
                    <input required type="tel" placeholder="01XXXXXXXXX" className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    Email
                    <input type="email" placeholder="you@email.com" className={inputClass} />
                  </label>
                </div>
                <label className={labelClass}>
                  I&apos;m interested in
                  <select defaultValue="" required className={inputClass}>
                    <option value="" disabled>
                      Choose an option
                    </option>
                    {inquiryTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>
                  Message
                  <textarea rows={3} placeholder="Tell us a little more" className={`${inputClass} resize-none`} />
                </label>
                <button
                  type="submit"
                  className="flex items-center justify-between w-full px-[18px] py-4 mt-2 border-0 bg-moss text-white text-[13px] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Send enquiry <ArrowUpRight size={17} />
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </Container>
    </Section>
  );
}
