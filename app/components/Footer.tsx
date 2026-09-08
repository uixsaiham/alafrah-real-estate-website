import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="pt-[78px] pb-[25px] text-[#e9e8df] bg-moss-dark">
      <Container className="flex flex-col md:flex-row md:justify-between pb-[55px] md:pb-[76px] gap-10">
        <div>
          <a href="/" className="flex items-center gap-[9px] text-xl tracking-[-.05em] font-medium mb-8">
            <span className="grid place-items-center w-[27px] h-[27px] border border-current rounded-full font-serif italic text-[17px]">
              G
            </span>
            Green Estate
          </a>
          <nav className="flex flex-col gap-3 text-[13px] text-[#e9e8df]/75">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#e9e8df]">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="w-full md:w-[365px]">
          <p className="mb-7 font-serif text-[28px] leading-[1.1]">
            Occasional notes on<br /><em className="italic">building well.</em>
          </p>
          <div className="flex justify-between items-center py-[13px] border-b border-[#e9e8df]/52 text-[#e9e8df]/55 font-mono text-[11px]">
            <span>Your email address</span>
            <ArrowUpRight size={18} />
          </div>
        </div>
      </Container>
      <Container className="grid gap-4 md:flex md:justify-between pt-[19px] border-t border-[#e9e8df]/22 text-[#e9e8df]/57 font-mono text-[10px] uppercase tracking-[.07em]">
        <span>© 2025 Green Estate</span>
        <span>Matuail, Dhaka, Bangladesh</span>
        <div className="flex gap-[18px] md:gap-[25px]">
          <a href="#facebook" className="hover:text-[#e9e8df]">
            Facebook
          </a>
          <a href="#linkedin" className="hover:text-[#e9e8df]">
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
