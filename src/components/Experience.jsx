// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { FaHandsHelping, FaFutbol, FaRunning, FaTrophy } from 'react-icons/fa';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Elections IT Support',
      organization: 'Vidhansabha & Loksabha Elections 2024',
      period: '2024',
      accent: 'cyan',
      description: [
        'Monitored and repaired IT systems during election processes',
        'Provided network troubleshooting and problem-solving support',
        'Ensured smooth operation of election technology infrastructure',
        'Collaborated with election officials to address technical issues promptly',
      ],
    },
    {
      id: 2,
      title: 'Disaster Management Volunteer',
      organization: "State-Level Disaster Management Camp 'AVHAN 2023'",
      period: '2023',
      accent: 'purple',
      description: [
        'Participated in a residential disaster management program under NSS at Gondwana University, Gadchiroli',
        'Focused on rescue and relief operations training',
        'Developed skills in emergency response and crisis management',
        'Collaborated with team members during disaster simulation exercises',
      ],
    },
  ];

  const accentMap = {
    cyan: { color: 'var(--neon-cyan)', bg: 'rgba(34, 211, 238, 0.08)', border: 'rgba(34, 211, 238, 0.2)' },
    purple: { color: 'var(--neon-purple)', bg: 'rgba(168, 85, 247, 0.08)', border: 'rgba(168, 85, 247, 0.2)' },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="relative z-10" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container-cyber">
        <SectionHeader
          label="// 05 — Operations"
          title="FIELD OPS"
          subtitle="Volunteer experience and community service demonstrating leadership and teamwork."
        />

        {/* Experience Cards */}
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {experiences.map((exp) => {
            const accent = accentMap[exp.accent];

            return (
              <motion.div key={exp.id} variants={itemVariants}>
                <GlassCard accentColor={exp.accent} className="h-full">
                  {/* Top Accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)` }}
                  />

                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: accent.bg, border: `1px solid ${accent.border}`, color: accent.color }}
                    >
                      <FaHandsHelping size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{exp.organization}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs mb-4"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: accent.color,
                      background: `${accent.color}10`,
                      border: `1px solid ${accent.color}20`,
                    }}
                  >
                    {exp.period}
                  </span>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: accent.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Extracurricular */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard accentColor="emerald">
            <div className="text-center">
              <span
                className="text-label inline-block mb-3"
                style={{ color: 'var(--neon-emerald)' }}
              >
                Extracurricular Activities
              </span>
              <p className="text-gray-300 mb-4">
                Represented college in{' '}
                <span style={{ color: 'var(--neon-emerald)' }}>Football, Kho-Kho, and Athletics</span>{' '}
                competitions. Participated in intercollegiate competitions, showcasing teamwork and leadership skills.
              </p>
              <div className="flex justify-center gap-4">
                {[
                  { icon: <FaFutbol size={18} />, label: 'Football' },
                  { icon: <FaRunning size={18} />, label: 'Kho-Kho' },
                  { icon: <FaTrophy size={18} />, label: 'Athletics' },
                ].map((sport) => (
                  <motion.div
                    key={sport.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{
                      background: 'rgba(16, 185, 129, 0.06)',
                      border: '1px solid rgba(16, 185, 129, 0.12)',
                      color: 'var(--neon-emerald)',
                    }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.3)' }}
                  >
                    {sport.icon}
                    <span className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>{sport.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;