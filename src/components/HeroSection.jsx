import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Download, Code2, Server, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';
import { developerData } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

export default function HeroSection({ onOpenRecruiterModal }) {
  const roles = [
    "Full Stack Senior Engineer",
    "Arquitecto de Microservicios & Cloud",
    "Especialista en React, Next.js & Node",
    "Diseñador de APIs de Ultra Alta Escala"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glowing Ambient Spheres */}
      <div className="bg-glow-orb top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00f3ff]/20 animate-pulse-glow" />
      <div className="bg-glow-orb top-40 right-10 w-[400px] h-[400px] bg-[#a855f7]/20" />

      <div className="container relative z-10 text-center">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-xs md:text-sm font-semibold text-[#00f3ff] mb-6 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] animate-ping" />
          <span>{developerData.availability}</span>
        </motion.div>

        {/* Hero Name & Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-tight"
        >
          Hola, soy <span className="text-gradient-cyan">{developerData.name}</span>
        </motion.h1>

        {/* Dynamic Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 md:h-12 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-3xl font-mono font-medium text-slate-300">
            {displayText}
            <span className="animate-pulse text-[#00f3ff] font-bold">|</span>
          </span>
        </motion.div>

        {/* Bio Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mb-8 leading-relaxed"
        >
          {developerData.tagline}
        </motion.p>

        {/* Primary Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#proyectos" className="btn-primary text-sm md:text-base">
            <span>Ver Proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button onClick={onOpenRecruiterModal} className="btn-recruiter text-sm md:text-base">
            <Sparkles className="w-4 h-4" />
            <span>Perfil para Reclutadores</span>
          </button>
          <a href="#contacto" className="btn-secondary text-sm md:text-base">
            <span>Contactar</span>
          </a>
        </motion.div>

        {/* Quick Stats Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {developerData.quickStats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-[#00f3ff]/40 text-center group"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-gradient-cyan mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Interactive Terminal Widget Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <InteractiveTerminal onHireClick={onOpenRecruiterModal} />
        </motion.div>
      </div>
    </section>
  );
}
