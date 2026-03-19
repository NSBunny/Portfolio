import React from 'react';
import {
  Code2,
  Cpu,
  Database,
  BarChart3,
  Globe,
  Terminal,
  BrainCircuit,
  Eye,
  FileJson,
  Box,
  Layers
} from 'lucide-react';

interface AboutProps {
  bio: string;
  skills: string[];
}

const skillIcons: { [key: string]: React.ElementType } = {
  'Java': Code2,
  'Python': Terminal,
  'C': Code2,
  'JavaScript': Globe,
  'HTML': Layers,
  'CSS': Box,
  'Prompt Engineering': BrainCircuit,
  'Machine Learning': Cpu,
  'Computer Vision': Eye,
  'Data Analytics': BarChart3,
  'MySQL': Database,
  'MongoDB': Database,
  'Power BI': BarChart3,
  'AI Tools': BrainCircuit
};

const About: React.FC<AboutProps> = ({ bio, skills }) => {
  return (
    <section id="about" className="mb-24 scroll-mt-24 lg:mb-48" aria-label="About">
      <div className="text-center mb-20 group/title">
        <h2 className="text-4xl font-serif font-black uppercase tracking-[0.4em] text-white transition-all duration-700 group-hover/title:tracking-[0.5em] inline-block cursor-default">
          About
        </h2>
        <div className="h-1 w-24 bg-cyan-500 mx-auto mt-4 rounded-full opacity-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <p className="text-2xl text-slate-100 font-serif italic leading-relaxed">
            "{bio}"
          </p>
          <div className="flex gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-4xl font-serif font-black text-white">{skills.length}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Core Skills</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-black text-white">4+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Core Projects</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-black text-white">6+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Certifications</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = skillIcons[skill] || Code2;
            return (
              <div key={skill} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all group cursor-default flex flex-col items-center justify-center text-center">
                <div className="h-10 w-10 mb-3 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-white">{skill}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
