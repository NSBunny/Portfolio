import type React from "react";
import type { Experience as ExperienceType } from "@/lib/types";

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section
      id="experience"
      className="mb-24 scroll-mt-24 lg:mb-48"
      aria-label="Work experience"
    >
      <div className="text-center mb-20 group/title">
        <h2 className="text-4xl font-serif font-black uppercase tracking-[0.4em] text-white transition-all duration-700 group-hover/title:tracking-[0.5em] inline-block cursor-default">
          Work Experience
        </h2>
        <div className="h-1 w-24 bg-cyan-500 mx-auto mt-4 rounded-full opacity-50" />
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {experiences.map((exp) => (
          <div
            key={exp.company + exp.role}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-current" />
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all md:order-1 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center p-2">
                    {/* Placeholder for Dynamic Logo */}
                    <div className="text-[8px] font-black text-slate-500 uppercase">
                      {exp.company.substring(0, 3)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold leading-tight">
                      {exp.role}
                    </h3>
                    <div className="text-cyan-400 text-xs font-medium tracking-widest uppercase mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-bold text-slate-500 whitespace-nowrap hidden sm:block">
                  {exp.duration}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li
                    key={item.substring(0, 15) + i.toString()}
                    className="text-sm text-slate-400 font-light flex items-start gap-2"
                  >
                    <span className="text-cyan-500 shrink-0 mt-1">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
