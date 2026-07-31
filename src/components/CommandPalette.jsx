// src/components/CommandPalette.jsx
import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaSearch } from 'react-icons/fa';

const actions = [
  { id: 'home', label: 'Navigate to Home', section: 'home', type: 'nav', icon: '⌂' },
  { id: 'about', label: 'Navigate to System Profile', section: 'about', type: 'nav', icon: '◉' },
  { id: 'education', label: 'Navigate to Education', section: 'education', type: 'nav', icon: '◎' },
  { id: 'skills', label: 'Navigate to Skill Matrix', section: 'skills', type: 'nav', icon: '⬡' },
  { id: 'projects', label: 'Navigate to Project Lab', section: 'projects', type: 'nav', icon: '◈' },
  { id: 'experience', label: 'Navigate to Field Ops', section: 'experience', type: 'nav', icon: '◇' },
  { id: 'contact', label: 'Navigate to Contact Terminal', section: 'contact', type: 'nav', icon: '▷' },
  { id: 'github', label: 'Open GitHub Profile', url: 'https://github.com/Shubhamgadekar2004', type: 'link', icon: '⟁' },
  { id: 'linkedin', label: 'Open LinkedIn Profile', url: 'https://www.linkedin.com/in/shubham-gadekar04/', type: 'link', icon: '⟁' },
  { id: 'email', label: 'Send Email', url: 'mailto:shubham.gadekar2025@gmail.com', type: 'link', icon: '✉' },
];

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    return actions.filter(a =>
      a.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const executeAction = (action) => {
    if (action.type === 'nav') {
      const el = document.getElementById(action.section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.type === 'link') {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    }
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      executeAction(filtered[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Palette */}
          <motion.div
            className="relative w-full max-w-lg mx-4 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(10, 15, 30, 0.95)',
              border: '1px solid rgba(34, 211, 238, 0.15)',
              boxShadow: '0 0 40px rgba(34, 211, 238, 0.1), 0 25px 60px rgba(0,0,0,0.5)',
            }}
            initial={{ scale: 0.95, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center px-4 border-b border-white/5">
              <FaSearch className="text-gray-500 mr-3 flex-shrink-0" size={14} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
                className="w-full py-4 bg-transparent text-white outline-none placeholder-gray-500"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
              />
              <kbd
                className="px-2 py-0.5 rounded text-xs text-gray-500"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-gray-500 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  No results found
                </div>
              ) : (
                filtered.map((action, index) => (
                  <button
                    key={action.id}
                    className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-white/5 text-white'
                        : 'text-gray-400 hover:bg-white/[0.03] hover:text-gray-200'
                    }`}
                    onClick={() => executeAction(action)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span className="text-sm w-5 text-center opacity-50" style={{ fontFamily: 'var(--font-mono)' }}>
                      {action.icon}
                    </span>
                    <span className="text-sm flex-1">{action.label}</span>
                    {index === selectedIndex && (
                      <span className="text-xs text-gray-600" style={{ fontFamily: 'var(--font-mono)' }}>
                        ↵
                      </span>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div
              className="px-4 py-2 border-t border-white/5 flex items-center gap-4 text-gray-600 text-xs"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
