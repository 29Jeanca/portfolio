import React, { useState, useEffect } from 'react';
import { Code, Briefcase, Sparkles, Menu, X, Terminal, Cpu } from 'lucide-react';
import { developerData } from '../data/portfolioData';

export default function Navbar({ onOpenRecruiterModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Arquitectura', href: '#arquitectura' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#06070d]/80 backdrop-blur-md border-b border-white/10' : 'py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00f3ff] to-[#a855f7] p-[1px]">
            <div className="w-full h-full bg-[#090a14] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-all">
              <Code className="w-5 h-5 text-[#00f3ff] group-hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
              {developerData.name}
              <span className="inline-block w-2 h-2 rounded-full bg-[#00ff9d] animate-ping" />
            </span>
            <span className="block text-xs text-[#94a3b8] font-mono">Full Stack Dev</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 glass-panel px-6 py-2 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#94a3b8] hover:text-[#00f3ff] transition-colors relative py-1 text-decoration-none"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onOpenRecruiterModal} className="btn-recruiter text-xs">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            Modo Reclutador
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white bg-white/5 border border-white/10"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 mx-4 p-5 rounded-2xl flex flex-col gap-4 border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#00f3ff] py-2 border-b border-white/5 text-decoration-none"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRecruiterModal();
            }}
            className="btn-recruiter text-sm justify-center w-full mt-2"
          >
            <Sparkles className="w-4 h-4" />
            Modo Reclutador
          </button>
        </div>
      )}
    </header>
  );
}
