import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Building } from 'lucide-react';
import { developerData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experiencia" className="section-padding relative bg-[#070812]/90 border-t border-white/5">
      <div className="container text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="badge-pill mb-3">TRAYECTORIA PROFESIONAL</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Experiencia <span className="text-gradient-purple">Laboral & Impacto</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Historial comprobado entregando software de calidad en startups y empresas en crecimiento.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto relative text-left">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00f3ff] via-[#a855f7] to-[#ff007f] opacity-40 -translate-x-1/2" />

          <div className="space-y-12">
            {developerData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col md:flex-row items-start"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#090b16] border-2 border-[#00f3ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.6)] z-10">
                    <Briefcase className="w-3.5 h-3.5 text-[#00f3ff]" />
                  </div>

                  {/* Card Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/40">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-[#00f3ff] mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="text-sm font-semibold text-[#a855f7] mb-3 flex items-center gap-1 justify-start md:justify-start">
                        <Building className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>

                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2 text-xs text-slate-400">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
