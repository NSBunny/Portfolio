import { motion } from "framer-motion";
import type React from "react";
import type { SocialLinks } from "@/lib/types";
import EmailIcon from "./icons/EmailIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import PhoneIcon from "./icons/PhoneIcon";
import ResumeButton from "./ResumeButton";

interface HeaderProps {
  name: string;
  role: string;
  about: string;
  contact: SocialLinks;
}

const Header: React.FC<HeaderProps> = ({ name, role, about, contact }) => {
  return (
    <header className="flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-6xl font-serif font-black tracking-tight text-white sm:text-8xl md:text-9xl whitespace-nowrap transition-all duration-700 hover:tracking-[0.1em] hover:text-cyan-400 cursor-default select-none drop-shadow-[0_5px_15px_rgba(255,255,255,0.1)]">
          {name}
        </h1>

        <h2 className="mt-8 text-sm font-bold tracking-[0.6em] text-cyan-400 uppercase italic opacity-90">
          {role}
        </h2>

        <p className="mt-10 max-w-lg text-lg leading-relaxed text-slate-300 font-light mx-auto">
          {about}
        </p>

        <div className="mt-12 flex flex-col items-center gap-10">
          <ResumeButton href="/resume.pdf" />

          <ul className="flex items-center gap-6" aria-label="Social media">
            {[
              { icon: GitHubIcon, href: contact.github, label: "GitHub" },
              { icon: LinkedInIcon, href: contact.linkedin, label: "LinkedIn" },
              {
                icon: EmailIcon,
                href: `mailto:${contact.email}`,
                label: "Email",
              },
              { icon: PhoneIcon, href: `tel:${contact.phone}`, label: "Phone" },
            ].map((item) => (
              <li key={item.label} className="shrink-0">
                <a
                  className="block text-slate-400 hover:text-cyan-600 transition-colors"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${item.label} (opens in a new tab)`}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
