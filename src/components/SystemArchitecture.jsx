import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShieldCheck, Server, Database, Cloud, Zap, ArrowRight, Layers } from 'lucide-react';

export default function SystemArchitecture() {
  const [selectedNode, setSelectedNode] = useState(0);

  const architectureNodes = [
    {
      id: 'client',
      title: '1. Frontend (Client Layer)',
      icon: <Monitor className="w-6 h-6 text-[#00f3ff]" />,
      tech: 'React 19, Next.js App Router, TypeScript, TailwindCSS',
      description: 'Renderizado ultrarrápido (SSR/SSG), arquitectura modular basada en componentes reactivos y optimización de assets con Core Web Vitals 95+.',
      metrics: ['< 0.8s LCP', '100% Responsive', 'Zero Layout Shift']
    },
    {
      id: 'gateway',
      title: '2. API Gateway & Security',
      icon: <ShieldCheck className="w-6 h-6 text-[#a855f7]" />,
      tech: 'Express, JWT, OAuth2, Rate Limiter, CORS Sanitization',
      description: 'Enrutamiento centralizado, validación estricta de esquemas Zod/Joi, protección contra ataques OWASP y manejo de tokens encriptados.',
      metrics: ['Auth Token < 5ms', 'Rate Limit: 100 req/m', 'CORS Enforced']
    },
    {
      id: 'microservices',
      title: '3. Backend Microservices',
      icon: <Server className="w-6 h-6 text-[#00ff9d]" />,
      tech: 'Node.js, Python (FastAPI), WebSockets, BullMQ',
      description: 'Servicios asíncronos desacoplados para alta concurrencia, eventos Pub/Sub en tiempo real y tareas en segundo plano.',
      metrics: ['50k Req/sec', 'Full Event Logging', 'Async Processing']
    },
    {
      id: 'data',
      title: '4. Database & Caching',
      icon: <Database className="w-6 h-6 text-[#ff007f]" />,
      tech: 'PostgreSQL (Prisma ORM), MongoDB, Redis Cluster',
      description: 'Persistencia híbrida relacional/NoSQL con índices optimizados, caché distribuida de sesiones y pools de conexiones eficientes.',
      metrics: ['ACID Compliance', '< 15ms Latencia DB', '99.99% Uptime']
    },
    {
      id: 'cloud',
      title: '5. Cloud Infrastructure',
      icon: <Cloud className="w-6 h-6 text-[#00f3ff]" />,
      tech: 'Docker, AWS (S3, EC2, Lambda), GitHub Actions CI/CD',
      description: 'Infraestructura como código en contenedores aislados, escalado automático horizontal e integración continua sin tiempos de inactividad.',
      metrics: ['Auto-scaling', 'Zero Downtime Deploy', 'Global CDN']
    }
  ];

  return (
    <section id="arquitectura" className="section-padding relative bg-[#080914]/80 border-y border-white/5">
      <div className="container text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="badge-pill mb-3">FLUJO DE SISTEMA</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Arquitectura <span className="text-gradient-purple">Full-Stack Interactiva</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Haz clic en cada capa del sistema para inspeccionar cómo fluyen los datos y la seguridad de extremo a extremo.
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-10">
          {architectureNodes.map((node, index) => {
            const isSelected = selectedNode === index;
            return (
              <motion.div
                key={node.id}
                onClick={() => setSelectedNode(index)}
                whileHover={{ scale: 1.03 }}
                className={`glass-panel p-5 rounded-2xl cursor-pointer border text-left transition-all relative ${
                  isSelected
                    ? 'border-[#00f3ff] bg-[#12162e] shadow-[0_0_25px_rgba(0,243,255,0.3)]'
                    : 'border-white/10 hover:border-white/20 bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">{node.icon}</div>
                  <span className="text-xs font-mono text-slate-500 font-bold">0{index + 1}</span>
                </div>
                <h3 className="font-bold text-white text-sm md:text-base mb-1">{node.title}</h3>
                <p className="text-xs text-slate-400 font-mono truncate">{node.tech}</p>

                {index < architectureNodes.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#00f3ff]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Inspector Box */}
        <div className="glass-panel glass-panel-glow p-6 md:p-8 rounded-3xl text-left border border-cyan-500/30">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/10">
                {architectureNodes[selectedNode].icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white">
                  {architectureNodes[selectedNode].title}
                </h3>
                <span className="text-xs font-mono text-[#00f3ff]">
                  Tecnologías: {architectureNodes[selectedNode].tech}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              {architectureNodes[selectedNode].metrics.map((m, i) => (
                <span key={i} className="badge-pill text-xs">
                  <Zap className="w-3 h-3" /> {m}
                </span>
              ))}
            </div>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
            {architectureNodes[selectedNode].description}
          </p>
        </div>
      </div>
    </section>
  );
}
