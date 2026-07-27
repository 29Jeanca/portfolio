import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare, User, Sparkles } from 'lucide-react';
import { developerData } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', role: 'Recruiter / HR' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Confetti explosion trigger
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '', role: 'Recruiter / HR' });
    }, 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="section-padding relative bg-[#06070e]">
      <div className="container text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="badge-pill mb-3">CONECTEMOS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Inicia una <span className="text-gradient-cyan">Conversación</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            ¿Tienes una vacante, un proyecto o una propuesta técnica? Escríbeme y te responderé en breve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left max-w-5xl mx-auto">
          {/* Quick Direct Info Column */}
          <div className="lg:col-span-5 glass-panel p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contacto Directo</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Disponible para vacantes de tiempo completo (Full-Time Remote), consultoría de arquitectura de software y proyectos seleccionados.
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <Mail className="w-5 h-5 text-[#00f3ff]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email Principal</span>
                    <span className="text-slate-200 text-sm font-semibold truncate block max-w-[180px]">
                      {developerData.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition"
                  title="Copiar Email"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Response Time Guarantee Pill */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-[#00f3ff] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Compromiso de Respuesta Rápida</span>
                </div>
                <p>Respondo todas las solicitudes técnicas o de empleo en menos de 24 horas.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-slate-400 font-mono">
              🟢 Zona horaria flexible (UTC-6 / US & LATAM Sync)
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 glass-panel glass-panel-glow p-6 md:p-8 rounded-3xl border border-cyan-500/30">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Muchas gracias por contactarme. Revisaré tu propuesta y me pondré en contacto contigo lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Nombre Completo</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. María Rodríguez"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f3ff] text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Tu Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="maria@empresa.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f3ff] text-sm font-sans"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Propósito del Contacto</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0e1022] border border-white/10 text-white focus:outline-none focus:border-[#00f3ff] text-sm font-sans"
                  >
                    <option value="Recruiter / HR">Reclutador / Oportunidad de Empleo</option>
                    <option value="Client / Freelance">Proyecto Freelance / Consultoría</option>
                    <option value="Tech Collaboration">Colaboración de Código / Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Mensaje</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detalles sobre la vacante o el proyecto..."
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f3ff] text-sm font-sans"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3">
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje con Confeti 🚀</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
