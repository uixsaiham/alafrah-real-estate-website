import { Check, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export type ServiceDetail = {
  icon: LucideIcon;
  step: string;
  title: string;
  titleBn: string;
  description: string;
  includes: string[];
  image: string;
  lead?: { name: string; nameBn: string; role: string; roleBn: string; image: string };
  highlight?: { value: string; label: string };
};

export default function ServiceDetailRow({ service, reverse = false }: { service: ServiceDetail; reverse?: boolean }) {
  const { language } = useLanguage();
  const content = (
    <Reveal>
      <div className="flex items-center gap-4 mb-6">
        <span className="grid place-items-center w-12 h-12 shrink-0 bg-cream text-moss">
          <service.icon size={20} strokeWidth={1.6} />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[.09em] text-moss">Service {service.step}</span>
      </div>
      <h3
        className={
          language === "bn"
            ? "font-bengali-serif font-extrabold text-[32px] md:text-[38px] leading-[1.4] mb-5"
            : "font-serif font-bold text-[30px] md:text-[36px] leading-[1.1] tracking-[-.02em] mb-5"
        }
      >
        {language === "bn" ? service.titleBn : service.title}
      </h3>
      <p className="text-muted text-[15px] leading-[1.7] mb-7 max-w-[480px]">{service.description}</p>
      <ul className="grid gap-3 mb-8">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.5]">
            <Check size={16} strokeWidth={2} className="shrink-0 mt-[2px] text-moss" />
            {item}
          </li>
        ))}
      </ul>

      {service.lead && (
        <div className="flex items-center gap-4">
          <img
            src={service.lead.image}
            alt={language === "bn" ? service.lead.nameBn : service.lead.name}
            className="w-11 h-11 rounded-full object-cover grayscale-[25%]"
          />
          <div>
            {language === "bn" ? (
              <>
                <div className="font-bengali text-[15px] font-medium leading-[1.5]">{service.lead.nameBn}</div>
                <div className="font-bengali text-muted text-[13px] leading-[1.5]">{service.lead.roleBn}</div>
              </>
            ) : (
              <>
                <div className="text-[15px] font-medium leading-[1.5]">{service.lead.name}</div>
                <div className="text-muted text-[13px] leading-[1.5]">{service.lead.role}</div>
              </>
            )}
          </div>
        </div>
      )}

      {service.highlight && (
        <div className="inline-flex items-baseline gap-3 bg-cream px-5 py-4">
          <span className="font-serif text-[28px] leading-none">{service.highlight.value}</span>
          <span className="text-muted text-[12px] max-w-[160px] leading-[1.4]">{service.highlight.label}</span>
        </div>
      )}
    </Reveal>
  );

  const image = (
    <Reveal delay={0.1} className="[perspective:1200px]">
      <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-[#ddd] group">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover block transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
      </div>
    </Reveal>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center py-[56px] md:py-[72px] border-t border-line first:border-t-0">
      <div className={`order-1 ${reverse ? "md:order-2" : "md:order-1"}`}>{content}</div>
      <div className={`order-2 ${reverse ? "md:order-1" : "md:order-2"}`}>{image}</div>
    </div>
  );
}
