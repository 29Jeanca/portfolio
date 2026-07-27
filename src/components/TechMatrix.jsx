import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
import { developerData } from '../data/portfolioData';

export default function TechMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = {
    frontend: <Code className="w-5 h-5 text-[#00f3ff]" />,
    backend: <Server className="w-5 h-5 text-[#a855f7]" />,
    database: <Database className="w-5 h-5 text-[#00ff9d]" />,
    devops: <Cloud className="w-5 h-5 text-[#ff007f]" />
  };

  const categories = [
    { id: 'all', label: 'Todo el Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Bases de Datos' },
    { id: 'devops', label: 'Cloud & DevOps' }
  ];

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return [
        ...developerData.skills.frontend.map((s) => ({ ...s, cat: 'frontend' })),
        ...developerData.skills.backend.map((s) => ({ ...s, cat: 'backend' })),
        ...developerData.skills.database.map((s) => ({ ...s, cat: 'database' })),
        ...developerData.skills.devops.map((s) => ({ ...s, cat: 'devops' }))
      ];
    }
    return developerData.skills[activeCategory].map((s) => ({ ...s, cat: activeCategory }));
  };

  return (
    <section id="stack" className="section-padding relative">
      <div className="container text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="badge-pill mb-3">MATRIZ TÉCNICA</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Tecnologías & <span className="text-gradient-cyan">Dominio Stack</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Stack moderno y probado en producción para desarrollo web de punta a punta.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#00f3ff] to-[#a855f7] text-white shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {getSkillsToDisplay().map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 relative group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {categoryIcons[skill.cat]}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base md:text-lg group-hover:text-[#00f3ff] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">{skill.highlight}</span>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold text-[#00f3ff] bg-cyan-500/10 px-2.5 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                  className="h-full bg-gradient-to-r from-[#00f3ff] via-[#a855f7] to-[#ff007f] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
