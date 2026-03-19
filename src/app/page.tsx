"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import About from "@/components/About";
import Chat from "@/components/Chat";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero3D from "@/components/Hero3D";
import Projects from "@/components/Projects";
import { config } from "@/lib/config";

function App() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className="relative min-h-screen text-slate-900 overflow-x-hidden">
      {/* Subtle Immersive Background */}
      <Hero3D />

      {/* Fixed Top Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none"
      >
        <div className="mx-auto max-w-3xl pointer-events-auto">
          <div className="flex justify-center items-center gap-3 sm:gap-6 px-4 sm:px-6 py-3 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20">
            {[
              { name: "About", href: "#about" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Certificates", href: "#certificates" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Cinematic Layout Container */}
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <main id="content" className="relative">
          {/* Hero Section - Full Page Header */}
          <motion.div
            className="min-h-screen flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Header
              name={config.name}
              role={config.role}
              about={config.about}
              contact={config.contact}
            />
          </motion.div>

          {/* Scrollable Content Regions */}
          <div className="space-y-48 pb-32">
            <motion.section
              id="about"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <About bio={config.bio} skills={config.skills} />
            </motion.section>

            <motion.section
              id="experience"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Experience experiences={config.experience} />
            </motion.section>

            <motion.section
              id="projects"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Projects projects={config.projects} />
            </motion.section>

            <motion.section
              id="certificates"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24 lg:mb-48"
            >
              <div className="text-center mb-20 group/title">
                <h2 className="text-4xl font-serif font-black uppercase tracking-[0.4em] text-white transition-all duration-700 group-hover/title:tracking-[0.5em] inline-block cursor-default">
                  Certifications
                </h2>
                <div className="h-1 w-24 bg-cyan-500 mx-auto mt-4 rounded-full opacity-50" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {config.certificates.map((cert, _index) => (
                  <div
                    key={cert.name}
                    className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all shadow-2xl"
                  >
                    {/* Cert Image / Icon */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-950 p-6 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-cyan-500" />
                      <Image
                        src={
                          cert.image ||
                          "/ai_neural_processor_core_1773297711972.png"
                        }
                        alt={cert.name}
                        fill
                        className="object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">
                        {cert.issuer}
                      </div>
                      <h3 className="text-lg font-serif font-black text-white mb-3 leading-tight">
                        {cert.name}
                      </h3>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                        {cert.date}
                      </div>
                      <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3 italic">
                        "{cert.description}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* FINAL CONTACT SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Contact />
            </motion.div>

            <Footer contact={config.contact} />
          </div>
        </main>
      </div>
      <Chat />
    </div>
  );
}

export default App;
