"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import type React from "react";

interface ResumeButtonProps {
  href: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ href }) => {
  return (
    <motion.a
      href={href}
      download
      target="_blank"
      rel="noreferrer noopener"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-widest text-cyan-400 glass transition-all hover:text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Corner circuit accents */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-cyan-500/50" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-cyan-500/50" />

      {/* Content */}
      <FileText className="z-10 h-5 w-5 transition-transform group-hover:rotate-12" />
      <span className="z-10">Download RESUME</span>

      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-[2px] bg-cyan-400/30"
        animate={{
          left: ["-10%", "110%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.a>
  );
};

export default ResumeButton;
