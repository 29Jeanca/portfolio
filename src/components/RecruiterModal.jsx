import React, { useState } from 'react';
import { X, Download, Mail, Phone, Check, Calendar, Briefcase, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { developerData } from '../data/portfolioData';

export default function RecruiterModal({ isOpen, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel glass-panel-glow max-w-2xl w-full rounded-3xl p-6 md:p-8 bg-[#090b16] border border-cyan-500/30 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-bold text-pink-400 mb-4">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>MODO RECLUTADOR FAST-TRACK</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
          Resumen Ejecutivo para Reclutadores & Tech Leads
        </h2>
        <p className="text-slate-400 text-sm mb-6">
          Información clave organizada para evaluar mi fit técnico en menos de 60 segundos.
        </p>

        {/* Executive Pitch Card */}
        <div className="p-4 rounded-2xl bg-[#121426] border border-cyan-500/20 mb-6 space-y-3">
          <div className="flex items-center gap-2 text-[#00f3ff] font-semibold text-sm">
            <Award className="w-4 h-4" />
            <span>Resumen del Perfil</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            {developerData.aboutShort}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="badge-pill">6+ Años Exp.</span>
            <span className="badge-pill">Remoto 100%</span>
            <span className="badge-pill">Inglés Técnico C1/B2</span>
            <span className="badge-pill">Node.js + React</span>
            <span className="badge-pill">AWS & Docker</span>
          </div>
        </div>

        {/* Fast Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <button
            onClick={handleCopyEmail}
            className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-cyan-500/20 transition"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Mail className="w-4 h-4" />}
            <span>{copiedEmail ? '¡Email Copiado!' : 'Copiar Email Directo'}</span>
          </button>

          <a
            href={developerData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-purple-500/20 transition text-decoration-none"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>Perfil en LinkedIn</span>
          </a>
        </div>

        {/* Key Competencies Table */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Desglose de Competencias Principales:</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-cyan-400 font-bold block mb-1">Frontend Architecture</span>
              <span className="text-slate-300">React, Next.js (App Router), TypeScript, Redux Toolkit, TailwindCSS</span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-purple-400 font-bold block mb-1">Backend & Microservices</span>
              <span className="text-slate-300">Node.js, Express, Python (FastAPI), WebSockets, REST & GraphQL</span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-emerald-400 font-bold block mb-1">Databases & Caching</span>
              <span className="text-slate-300">PostgreSQL (Prisma), MongoDB, Redis Caching, Modelado ACID</span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-pink-400 font-bold block mb-1">Cloud & DevOps</span>
              <span className="text-slate-300">Docker, AWS (S3, EC2, Lambda), GitHub Actions CI/CD</span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <a
            href="#contacto"
            onClick={onClose}
            className="btn-primary text-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Entrevista / Enviar Mensaje</span>
          </a>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white underline"
          >
            Cerrar Ventana
          </button>
        </div>
      </div>
    </div>
  );
}
