import type React from "react";
import type { SocialLinks } from "@/lib/types";

interface FooterProps {
  contact: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 mb-4">
        <a
          className="font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 focus-visible:text-cyan-400 transition-all"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
        <a
          className="font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 focus-visible:text-cyan-400 transition-all"
          href={`tel:${contact.phone}`}
        >
          {contact.phone}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
