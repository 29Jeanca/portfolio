import React, { useState } from 'react';
import { Send, Play, Terminal, CheckCircle2, Clock, Code, Layers } from 'lucide-react';
import { developerData } from '../data/portfolioData';

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('GET /api/v1/developer/stats');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [latency, setLatency] = useState(14);

  const endpoints = [
    {
      id: 'GET /api/v1/developer/stats',
      method: 'GET',
      path: '/api/v1/developer/stats',
      data: {
        status: 200,
        developer: developerData.name,
        title: developerData.title,
        experience: developerData.yearsExperience,
        uptime: developerData.uptimeGuarantee,
        completedProjects: developerData.completedProjects,
        stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
      }
    },
    {
      id: 'GET /api/v1/projects/featured',
      method: 'GET',
      path: '/api/v1/projects/featured',
      data: {
        status: 200,
        total: developerData.projects.length,
        projects: developerData.projects.map((p) => ({
          id: p.id,
          title: p.title,
          tags: p.tags,
          metrics: p.metrics
        }))
      }
    },
    {
      id: 'POST /api/v1/hire/request',
      method: 'POST',
      path: '/api/v1/hire/request',
      data: {
        status: 201,
        message: '¡Petición enviada con éxito!',
        availability: 'Inmediata',
        nextStep: 'Enviaré mi disponibilidad de calendario en menos de 2 horas.'
      }
    }
  ];

  const handleSendRequest = (endpoint) => {
    setLoading(true);
    const randomLatency = Math.floor(Math.random() * 15) + 10;
    setTimeout(() => {
      setResponse(endpoint.data);
      setLatency(randomLatency);
      setLoading(false);
    }, 400);
  };

  return (
    <section className="section-padding relative">
      <div className="container text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="badge-pill mb-3">PLAYGROUND EN VIVO</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Simulador de <span className="text-gradient-cyan">API REST</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Prueba en tiempo real las respuestas JSON del backend simulado directamente en el navegador.
          </p>
        </div>

        {/* Console Container */}
        <div className="max-w-4xl mx-auto glass-panel glass-panel-glow rounded-3xl overflow-hidden border border-cyan-500/30 text-left">
          {/* Top Bar */}
          <div className="bg-[#0c0e1e] p-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00f3ff]" />
              <span className="text-xs font-mono text-slate-300 font-bold">API CLIENT CONSOLE v1.0</span>
            </div>

            {/* Endpoint Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {endpoints.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => {
                    setSelectedEndpoint(ep.id);
                    handleSendRequest(ep);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                    selectedEndpoint === ep.id
                      ? 'bg-[#00f3ff]/20 text-[#00f3ff] border border-cyan-500/40'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  <span className={ep.method === 'GET' ? 'text-green-400 font-bold' : 'text-purple-400 font-bold'}>
                    {ep.method}
                  </span>{' '}
                  {ep.path}
                </button>
              ))}
            </div>
          </div>

          {/* Console Body */}
          <div className="p-6 bg-[#080915] font-mono text-xs md:text-sm">
            {/* Request Line */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-[#00f3ff] font-bold">HTTP/1.1</span>
                <span>{selectedEndpoint}</span>
              </div>
              <button
                onClick={() => {
                  const ep = endpoints.find((e) => e.id === selectedEndpoint);
                  if (ep) handleSendRequest(ep);
                }}
                disabled={loading}
                className="btn-primary py-1 px-3 text-xs"
              >
                <Send className="w-3 h-3" />
                <span>{loading ? 'Enviando...' : 'Ejecutar (SEND)'}</span>
              </button>
            </div>

            {/* Response Display */}
            {response ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-bold">
                      200 OK
                    </span>
                    <span>Content-Type: application/json</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#00f3ff]" />
                    <span>Latencia: {latency}ms</span>
                  </div>
                </div>

                {/* Preformatted JSON Payload */}
                <pre className="p-4 rounded-xl bg-[#0d0f22] border border-cyan-500/20 text-slate-200 overflow-x-auto text-xs leading-relaxed">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                Haz clic en "Ejecutar (SEND)" o selecciona un endpoint para recibir la respuesta HTTP.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
