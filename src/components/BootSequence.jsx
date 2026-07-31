// src/components/BootSequence.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { text: '> INITIALIZING SYSTEM...', delay: 0, color: 'var(--neon-cyan)' },
  { text: '> Loading Neural Networks...', delay: 400, color: '#94a3b8' },
  { text: '> Loading AI Models...', delay: 700, color: '#94a3b8' },
  { text: '> Loading Research Database...', delay: 1000, color: '#94a3b8' },
  { text: '> Loading Project Archives...', delay: 1300, color: '#94a3b8' },
  { text: '> Loading Security Protocols...', delay: 1600, color: '#94a3b8' },
  { text: '> Verifying Credentials...', delay: 1900, color: '#94a3b8' },
  { text: '> SYSTEM READY', delay: 2300, color: 'var(--neon-emerald)' },
  { text: '> ACCESS GRANTED ✓', delay: 2600, color: 'var(--neon-emerald)' },
];

const BootSequence = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timers = [];

    bootLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        setProgress(((index + 1) / bootLines.length) * 100);
      }, line.delay);
      timers.push(timer);
    });

    // Start exit after last line
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);
    timers.push(exitTimer);

    // Complete after exit animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3600);
    timers.push(completeTimer);

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center scanline"
          style={{ backgroundColor: '#010409' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-xl px-6">
            {/* Logo / Header */}
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="text-sm tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--neon-cyan)' }}
              >
                SHUBHAM GADEKAR // RESEARCH LAB
              </span>
            </motion.div>

            {/* Terminal Lines */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(34, 211, 238, 0.1)',
              }}
            >
              {visibleLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="py-0.5"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: line.color,
                  }}
                >
                  {line.text}
                  {index === visibleLines.length - 1 && (
                    <motion.span
                      className="inline-block ml-1 w-2 h-4"
                      style={{ backgroundColor: line.color }}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div
              className="h-1 rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-blue), var(--neon-purple))',
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>

            {/* Progress Text */}
            <div className="flex justify-between mt-2">
              <span
                className="text-xs"
                style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}
              >
                BOOT SEQUENCE
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}
              >
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
