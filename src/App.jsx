import React, { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechMatrix from './components/TechMatrix';
import SystemArchitecture from './components/SystemArchitecture';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ApiPlayground from './components/ApiPlayground';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RecruiterModal from './components/RecruiterModal';

export default function App() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06070d] text-slate-100 font-sans relative selection:bg-[#00f3ff] selection:text-black">
      {/* Background Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Floating Header */}
      <Navbar onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />
        <TechMatrix />
        <ProjectsSection />
        <SystemArchitecture />
        <ApiPlayground />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* Recruiter Fast-Track Modal */}
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
