import Image from "next/image";
import type React from "react";
import type { Project } from "@/lib/types";
import { motion } from "framer-motion";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import GitHubIcon from "./icons/GitHubIcon";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="mb-24 scroll-mt-24 lg:mb-48"
      aria-label="Selected projects"
    >
      <div className="text-center mb-20 group/title">
        <h2 className="text-4xl font-serif font-black uppercase tracking-[0.4em] text-white transition-all duration-700 group-hover/title:tracking-[0.5em] inline-block cursor-default">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-cyan-500 mx-auto mt-4 rounded-full opacity-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            key={project.name}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all shadow-2xl"
          >
            {/* Project Image */}
            <div className="aspect-video overflow-hidden relative">
              <Image
                src={
                  project.name.includes("News")
                    ? "/quick_news_project_mockup_1773303206792.png"
                    : project.name.includes("Recognition")
                      ? "/face_recognition_project_mockup_1773303256023.png"
                      : "/gesture_volume_project_mockup_1773303277246.png"
                }
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-serif font-black text-white">
                  {project.name}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <GitHubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLinkIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Overlay */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/20 rounded-3xl transition-all pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
