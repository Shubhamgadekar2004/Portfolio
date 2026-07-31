// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import AnimatedCounter from './ui/AnimatedCounter';

const About = () => {
  const stats = [
    { value: 89.28, suffix: '%ile', label: 'UGC NET Score', color: 'cyan' },
    { value: 3, suffix: '', label: 'National Certifications', color: 'purple' },
    { value: 4, suffix: '+', label: 'Security Projects', color: 'emerald' },
    { value: 2, suffix: '+', label: 'Degrees', color: 'blue' },
  ];

  const cards = [
    {
      icon: <FaUser size={20} />,
      title: 'Personal Info',
      accent: 'cyan',
      items: [
        { label: 'Email', value: 'shubham.gadekar2025@gmail.com' },
        { label: 'Phone', value: '+91 9284807101' },
        { label: 'Location', value: 'Pune, India' },
      ],
    },
    {
      icon: <FaGraduationCap size={20} />,
      title: 'Education',
      accent: 'purple',
      items: [
        { label: 'M.Tech', value: 'AI & DS (Cybersecurity), NFSU Goa' },
        { label: 'B.E.', value: 'Computer Eng, Pune University' },
        { label: 'Status', value: 'UGC NET Qualified (89.28 %ile)' },
      ],
    },
    {
      icon: <FaBriefcase size={20} />,
      title: 'Experience & Leadership',
      accent: 'emerald',
      items: [
        { label: 'Workshops', value: 'Cybersecurity Awareness Seminars' },
        { label: 'Volunteer', value: 'Elections IT & Disaster Management' },
      ],
    },
    {
      icon: <FaLaptopCode size={20} />,
      title: 'Specializations',
      accent: 'pink',
      items: [
        { value: 'Digital Forensics & Incident Response' },
        { value: 'IoT & Connected Vehicle Security' },
        { value: 'Blockchain Evidence Management' },
        { value: 'AI Network Intrusion Detection' },
      ],
    },
  ];

  const accentMap = {
    cyan: 'var(--neon-cyan)',
    purple: 'var(--neon-purple)',
    emerald: 'var(--neon-emerald)',
    blue: 'var(--neon-blue)',
    pink: 'var(--neon-pink)',
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="relative z-10" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container-cyber">
        <SectionHeader
          label="// 01 — Identity"
          title="SYSTEM PROFILE"
          subtitle="M.Tech AI & Data Science Scholar at NFSU Goa specializing in Cybersecurity, Digital Forensics & AI Threat Detection."
        />

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card text-center py-6"
              variants={itemVariants}
            >
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: accentMap[stat.color] }}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              <p>
                Currently pursuing an M.Tech in AI & Data Science with a specialization in Cybersecurity at the National Forensic Sciences University (NFSU), Goa Campus. UGC NET Qualified in Computer Science & Applications with an 89.28 percentile.
              </p>
              <p>
                Specialized in digital forensics, embedded/IoT security architectures, connected vehicle security, threat modeling, and ML-driven intrusion detection systems.
              </p>
              <p>
                Proven track record in building tamper-proof blockchain chain of custody platforms for forensic evidence and deploying AI models for real-time network anomaly monitoring.
              </p>
            </div>
          </motion.div>

          {/* Info Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {cards.map((card) => (
              <motion.div key={card.title} variants={itemVariants}>
                <GlassCard accentColor={card.accent} className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${accentMap[card.accent]}15`,
                        color: accentMap[card.accent],
                      }}
                    >
                      {card.icon}
                    </div>
                    <h3
                      className="font-semibold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400">
                        {item.label && (
                          <span className="text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>
                            {item.label}:{' '}
                          </span>
                        )}
                        <span className="text-gray-300">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
