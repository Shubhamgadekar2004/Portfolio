// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 300 });
  const springY = useSpring(y, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'System Profile' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skill Matrix' },
  { id: 'projects', label: 'Project Lab' },
  { id: 'experience', label: 'Field Ops' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ onCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 z-50"
      style={{ transform: 'translateX(-50%)' }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Desktop Nav */}
      <div
        className="hidden lg:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(3, 7, 18, 0.85)' : 'rgba(3, 7, 18, 0.5)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${scrolled ? 'rgba(34, 211, 238, 0.15)' : 'rgba(255, 255, 255, 0.06)'}`,
          boxShadow: scrolled
            ? '0 0 20px rgba(34, 211, 238, 0.05), 0 8px 32px rgba(0,0,0,0.4)'
            : '0 8px 32px rgba(0,0,0,0.2)',
        }}
      >
        {navItems.map(item => (
          <MagneticButton key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                color: activeSection === item.id ? '#fff' : '#94a3b8',
              }}
            >
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid rgba(34, 211, 238, 0.2)',
                  }}
                  layoutId="nav-active"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          </MagneticButton>
        ))}

        {/* Command Palette Trigger */}
        <div className="w-px h-5 mx-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <button
          onClick={onCommandPalette}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200"
          style={{
            fontFamily: 'var(--font-mono)',
            color: '#64748b',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.2)';
            e.currentTarget.style.color = '#94a3b8';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#64748b';
          }}
        >
          <span>⌘K</span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{
            background: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <span
            className="text-sm font-semibold gradient-text"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SG
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg transition-colors"
            style={{
              color: '#94a3b8',
              background: 'rgba(255,255,255,0.05)',
            }}
          >
            {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 top-0 left-0 z-[100] flex flex-col items-center justify-center"
              style={{
                background: 'rgba(3, 7, 18, 0.95)',
                backdropFilter: 'blur(20px)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-3 rounded-xl"
                style={{
                  color: '#94a3b8',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <FaTimes size={18} />
              </button>

              <nav className="flex flex-col items-center gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-8 py-3 rounded-xl text-lg font-medium transition-all"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: activeSection === item.id ? 'var(--neon-cyan)' : '#94a3b8',
                      background: activeSection === item.id ? 'rgba(34, 211, 238, 0.08)' : 'transparent',
                      border: activeSection === item.id ? '1px solid rgba(34, 211, 238, 0.15)' : '1px solid transparent',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;