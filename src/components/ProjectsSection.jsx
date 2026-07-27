import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Zap, X, CheckCircle, ArrowRight, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { developerData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Full-Stack', 'AI & Cloud', 'Cloud & DevOps'];

  const filteredProjects = activeFilter === 'All'
    ? developerData.projects
    : developerData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="proyectos" className="section-padding relative">
      <div className="container text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="badge-pill mb-3">CASOS DE ÉXITO & PORTAFOLIO</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Proyectos <span className="text-gradient-cyan">Destacados</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Aplicaciones reales de alta complejidad construidas con enfoque en escalabilidad y UX impecable.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#00f3ff] to-[#a855f7] text-white shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 group flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b16] via-[#090b16]/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="badge-pill bg-[#090b16]/80 backdrop-blur-md text-xs">
                    {project.category}
                  </span>
                </div>

                {/* Metrics Badges Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.metrics.map((m, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#00f3ff]/20 backdrop-blur-md border border-cyan-400/30 text-xs font-mono text-cyan-300 font-semibold">
                      ⚡ {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00f3ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#00f3ff] hover:underline flex items-center gap-1.5"
                  >
                    <span>Ver Detalles & Arquitectura</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
                      title="Ver Código en GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#00f3ff]/10 hover:bg-[#00f3ff]/20 text-[#00f3ff] transition"
                      title="Ver Demo en Vivo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Project Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel glass-panel-glow max-w-3xl w-full rounded-3xl p-6 md:p-8 bg-[#090c1a] border border-cyan-500/30 max-h-[90vh] overflow-y-auto text-left relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-[#00f3ff] mb-4">
                <span>{selectedProject.category}</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                {selectedProject.title}
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                {selectedProject.longDesc}
              </p>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-sm md:text-base font-extrabold text-[#00f3ff]">⚡ {m}</span>
                  </div>
                ))}
              </div>

              {/* System Architecture Step-by-Step */}
              <div className="mb-6">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#a855f7]" />
                  <span>Flujo de Arquitectura del Sistema:</span>
                </h3>
                <div className="space-y-2">
                  {selectedProject.architecture.map((arch, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#101328] border border-white/5 text-xs md:text-sm flex items-start gap-3">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-[#00f3ff] font-mono text-xs font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <span className="font-bold text-white block">{arch.step}</span>
                        <span className="text-slate-400 text-xs">{arch.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                  >
                    <span>Demo en Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Ver Repositorio</span>
                  </a>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
