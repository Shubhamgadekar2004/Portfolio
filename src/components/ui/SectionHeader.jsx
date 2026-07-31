// src/components/ui/SectionHeader.jsx
import { motion } from 'framer-motion';

const SectionHeader = ({ label, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';

  return (
    <motion.div
      className={`mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && (
        <motion.span
          className="text-label inline-block mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {label}
        </motion.span>
      )}
      <h2 className="text-display-lg gradient-text-glow mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          {subtitle}
        </p>
      )}
      <motion.div
        className={`section-divider mt-6 max-w-xs ${align === 'center' ? 'mx-auto' : ''}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default SectionHeader;
