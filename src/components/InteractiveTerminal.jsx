import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check, Play, CornerDownLeft } from 'lucide-react';
import { developerData } from '../data/portfolioData';

export default function InteractiveTerminal({ onHireClick }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Bienvenido al terminal interactivo v2.4.0. Escribe "help" o presiona los botones de acceso rápido.' },
    { type: 'cmd', text: 'bio' },
    { type: 'out', text: developerData.terminalCommands.bio }
  ]);
  const [copied, setCopied] = useState(false);

  const handleRunCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = developerData.terminalCommands[cleanCmd] || `Error: comando no encontrado: "${cleanCmd}". Escribe "help" para ver comandos.`;

    if (cleanCmd === 'hire' && onHireClick) {
      onHireClick();
    }

    setHistory((prev) => [
      ...prev,
      { type: 'cmd', text: cleanCmd },
      { type: 'out', text: output }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputVal);
    }
  };

  const copyTerminalContent = () => {
    const textToCopy = history.map((h) => (h.type === 'cmd' ? `> ${h.text}` : h.text)).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-box overflow-hidden max-w-2xl w-full mx-auto my-6 text-left">
      {/* Terminal Titlebar */}
      <div className="bg-[#0f1120] px-4 py-2.5 flex items-center justify-between border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#00f3ff]" /> alex-dev@fullstack-cli ~
          </span>
        </div>
        <button
          onClick={copyTerminalContent}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-white/5 px-2 py-1 rounded transition"
          title="Copiar salida del terminal"
        >
          {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copiado' : 'Copiar'}</span>
        </button>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 h-64 overflow-y-auto space-y-2 text-xs md:text-sm font-mono scrollbar-thin">
        {history.map((item, idx) => (
          <div key={idx}>
            {item.type === 'cmd' && (
              <div className="flex items-center gap-2 text-[#00f3ff]">
                <span className="text-[#a855f7] font-bold">❯</span>
                <span className="font-semibold">{item.text}</span>
              </div>
            )}
            {item.type === 'out' && (
              <div className="text-slate-300 pl-4 border-l-2 border-[#00f3ff]/30 py-0.5 leading-relaxed">
                {item.text}
              </div>
            )}
            {item.type === 'sys' && (
              <div className="text-slate-400 italic mb-2">{item.text}</div>
            )}
          </div>
        ))}
      </div>

      {/* Command Shortcut Buttons */}
      <div className="px-4 py-2 border-t border-white/5 bg-[#0b0c18] flex flex-wrap gap-2 items-center text-xs">
        <span className="text-slate-400 font-mono font-semibold">Atajos:</span>
        {['bio', 'skills', 'projects', 'experience', 'contact', 'hire'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleRunCommand(cmd)}
            className="px-2.5 py-1 rounded bg-[#16182e] hover:bg-[#00f3ff]/20 text-[#00f3ff] border border-cyan-500/30 transition-all font-mono text-[11px]"
          >
            {cmd}
          </button>
        ))}
        <button
          onClick={() => handleRunCommand('clear')}
          className="px-2.5 py-1 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-all font-mono text-[11px] ml-auto"
        >
          clear
        </button>
      </div>

      {/* Terminal Input Row */}
      <div className="px-4 py-2.5 bg-[#080914] border-t border-cyan-500/20 flex items-center gap-2 font-mono">
        <span className="text-[#a855f7] font-bold">❯</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Escribe un comando (ej: "skills", "projects")...'
          className="bg-transparent text-slate-200 w-full focus:outline-none text-xs md:text-sm placeholder-slate-600 font-mono"
        />
        <button
          onClick={() => handleRunCommand(inputVal)}
          className="p-1 rounded bg-[#00f3ff]/10 hover:bg-[#00f3ff]/20 text-[#00f3ff] transition"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
