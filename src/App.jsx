// src/App.jsx
import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

// Eagerly loaded components
import BootSequence from './components/BootSequence';
import CyberGridCanvas from './components/CyberGridCanvas';
import CursorGlow from './components/CursorGlow';
import CommandPalette from './components/CommandPalette';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load sections
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="flex gap-1">
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="w-2 h-2 rounded-full animate-pulse-glow"
          style={{
            backgroundColor: 'var(--neon-cyan)',
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  </div>
);

const App = () => {
  const [booted, setBooted] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  // Ctrl+K / Cmd+K handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen noise-overlay" style={{ backgroundColor: 'var(--bg-deep)', color: '#e5e7eb' }}>
      {/* Boot Sequence */}
      <AnimatePresence>
        {!booted && <BootSequence onComplete={handleBootComplete} />}
      </AnimatePresence>

      {/* Animated Background */}
      <CyberGridCanvas />
      <div className="aurora-bg" />

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Content */}
      {booted && (
        <>
          <Navbar onCommandPalette={() => setCommandPaletteOpen(true)} />
          <main className="relative z-10">
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
              <About />
              <Education />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;