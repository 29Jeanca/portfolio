import React from 'react';
import { ArrowUp, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { developerData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#04050a] py-12 text-slate-400 text-sm relative z-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f3ff] to-[#a855f7] p-[1px]">
            <div className="w-full h-full bg-[#090a14] rounded-[7px] flex items-center justify-center">
              <Code className="w-4 h-4 text-[#00f3ff]" />
            </div>
          </div>
          <span className="font-bold text-white text-base tracking-tight">
            {developerData.name}
          </span>
          <span className="text-xs font-mono text-slate-500">© {new Date().getFullYear()}</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={developerData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-[#00f3ff] transition"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={developerData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-[#00f3ff] transition"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={developerData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-[#00f3ff] transition"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00f3ff] transition"
        >
          <span>Volver Arriba</span>
          <div className="p-2 rounded-full bg-white/5 border border-white/10">
            <ArrowUp className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>
    </footer>
  );
}
