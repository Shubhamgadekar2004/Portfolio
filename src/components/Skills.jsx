// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { TbBrandPython, TbBrandCpp, TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbSql } from 'react-icons/tb';
import { FaNetworkWired, FaTools, FaDatabase, FaShieldAlt, FaLinux, FaCubes, FaBrain, FaMicrochip } from 'react-icons/fa';
import { MdSecurity, MdAutoGraph } from 'react-icons/md';
import SectionHeader from './ui/SectionHeader';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      label: 'LANGUAGES',
      accent: 'cyan',
      skills: ['Python', 'C/C++', 'JavaScript', 'SQL', 'Solidity', 'HTML/CSS'],
    },
    {
      title: 'Cybersecurity & Forensics',
      label: 'SECURITY & INVESTIGATION',
      accent: 'purple',
      skills: ['Penetration Testing', 'Digital Forensics', 'Threat Modeling', 'Risk Assessment', 'Vulnerability Assessment', 'Incident Response', 'Chain of Custody Handling'],
    },
    {
      title: 'Security Tools',
      label: 'SECURITY ARSENAL',
      accent: 'emerald',
      skills: ['Wireshark', 'Nmap', 'Tcpdump', 'Autopsy', 'Burp Suite', 'Cisco Packet Tracer'],
    },
    {
      title: 'Network & Protocols',
      label: 'NETWORKING',
      accent: 'blue',
      skills: ['TCP/IP', 'UDP', 'SNMP', 'BGP', 'OSPF', 'VLANs', 'Network Traffic Analysis', 'Packet Analysis'],
    },
    {
      title: 'Blockchain & Cryptography',
      label: 'WEB3 & CRYPTO',
      accent: 'pink',
      skills: ['Solidity', 'Web3.js', 'Ganache', 'Smart Contracts', 'SHA 256', 'Cryptographic Hashing'],
    },
    {
      title: 'Machine Learning & AI',
      label: 'AI & ML',
      accent: 'cyan',
      skills: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Anomaly Detection', 'Feature Engineering'],
    },
    {
      title: 'Embedded & IoT Security',
      label: 'HARDWARE & IOT',
      accent: 'purple',
      skills: ['Linux (Ubuntu)', 'Embedded Security', 'IoT Security Architectures'],
    },
    {
      title: 'Development Tools',
      label: 'DEVOPS & TOOLING',
      accent: 'emerald',
      skills: ['Git', 'Flask', 'Streamlit', 'REST APIs', 'Docker', 'VS Code'],
    },
  ];

  const accentMap = {
    cyan: { color: 'var(--neon-cyan)', bg: 'rgba(34, 211, 238, 0.08)', border: 'rgba(34, 211, 238, 0.15)' },
    purple: { color: 'var(--neon-purple)', bg: 'rgba(168, 85, 247, 0.08)', border: 'rgba(168, 85, 247, 0.15)' },
    emerald: { color: 'var(--neon-emerald)', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.15)' },
    blue: { color: 'var(--neon-blue)', bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.15)' },
    pink: { color: 'var(--neon-pink)', bg: 'rgba(236, 72, 153, 0.08)', border: 'rgba(236, 72, 153, 0.15)' },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="relative z-10" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container-cyber">
        <SectionHeader
          label="// 03 — Capabilities"
          title="SKILL MATRIX"
          subtitle="Comprehensive technical skill set spanning cybersecurity, forensics, networking, machine learning, and blockchain."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {categories.map((category) => {
            const accent = accentMap[category.accent];

            return (
              <motion.div
                key={category.title}
                className="glass-card overflow-visible flex flex-col justify-between"
                variants={cardVariants}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span
                        className="block text-[0.7rem] uppercase tracking-widest mb-1"
                        style={{ fontFamily: 'var(--font-mono)', color: accent.color }}
                      >
                        {category.label}
                      </span>
                      <h3
                        className="text-base font-bold text-white leading-snug"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Top Accent Line */}
                  <div
                    className="w-full h-px mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${accent.color}, transparent)`,
                      opacity: 0.3,
                    }}
                  />

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="pill text-xs"
                        style={{
                          borderColor: `${accent.color}25`,
                          color: '#e2e8f0',
                          background: 'rgba(255,255,255,0.02)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;