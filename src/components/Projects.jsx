// src/components/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaNetworkWired, FaFingerprint, FaCubes, FaTimes, FaShieldAlt } from 'react-icons/fa';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Digital Evidence Management System using Blockchain',
      description: 'Tamper-proof chain of custody platform for law enforcement & forensic agencies digital forensics and cybercrime investigation mandate.',
      details: 'Designed and built a tamper-proof chain of custody platform for law enforcement and forensic agencies to secure digital evidence. Implemented Ethereum/Ganache smart contracts in Solidity for immutable cryptographic hashing (SHA-256) and audit logging. Integrated a Flask backend with Web3.js and an intuitive web interface for managing evidence submission, verification, and audit trails without risk of manipulation.',
      tech: ['Solidity', 'Web3.js', 'Flask', 'JavaScript', 'Ganache Blockchain', 'SHA 256', 'Cryptography'],
      icon: <FaCubes size={28} />,
      accent: 'cyan',
      metrics: [
        { label: 'Security', value: 'Tamper-Proof' },
        { label: 'Blockchain', value: 'Web3 / Ganache' },
        { label: 'Hashing', value: 'SHA-256' },
      ],
    },
    {
      id: 2,
      title: 'AI Powered Network Intrusion Detection System',
      description: 'Real-time ML-based threat detection system for network traffic analysis — applicable to police network security monitoring and cyber investigation infrastructure.',
      details: 'Engineered a real-time machine learning threat detection engine capable of analyzing live network traffic patterns for security anomalies and cyber threats. Performed extensive feature engineering on packet flow metrics, trained models using Scikit-learn (Random Forest, Gradient Boosting, SVM), and visualized live intrusion alerts through an interactive Streamlit dashboard designed for SOC and investigation teams.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'Feature Engineering', 'Anomaly Detection'],
      icon: <FaShieldAlt size={28} />,
      accent: 'emerald',
      metrics: [
        { label: 'Detection', value: 'Real-Time' },
        { label: 'Model', value: 'ML Ensemble' },
        { label: 'Dashboard', value: 'Streamlit' },
      ],
    },
    {
      id: 3,
      title: 'Hybrid Fingerprint Pattern Classification & Minutiae Analysis',
      description: 'AI-powered forensic-grade fingerprint recognition system combining deep learning with classical image processing techniques.',
      details: 'Implemented Level 1 pattern classification (Arch, Loop, Whorl) and Level 2 minutiae extraction (Ridge Endings, Bifurcations). Built core and delta point detection algorithms for advanced forensic matching. Achieved 90%+ accuracy on real-world datasets using a combination of PyTorch, EfficientNet for deep learning, and OpenCV for classical image processing. Designed for real-world security systems, law enforcement, and forensic laboratories.',
      tech: ['PyTorch', 'EfficientNet', 'OpenCV', 'Streamlit', 'Deep Learning', 'Computer Vision', 'Image Processing'],
      icon: <FaFingerprint size={28} />,
      accent: 'purple',
      liveDemo: 'https://lnkd.in/d8kqmreY',
      github: 'https://lnkd.in/dn9GvBha',
      metrics: [
        { label: 'Accuracy', value: '90%+' },
        { label: 'Speed', value: '<5s' },
        { label: 'Level 1 & 2', value: 'Minutiae' },
      ],
    },
    {
      id: 4,
      title: 'Local Network Vulnerability Scanner & NIDS',
      description: 'A GUI-based tool to scan local networks for open ports, insecure services, misconfigurations, and active traffic anomalies.',
      details: 'Developed a comprehensive network security scanning tool with an intuitive graphical interface. Implemented device discovery functionality to automatically map all devices on a local network. Created robust port and service scanning modules to identify open ports and running services that could present security risks. Built a risk classification system that analyzes findings and suggests specific remediation steps based on severity levels.',
      tech: ['Python', 'Network Security', 'GUI Development', 'Socket Programming', 'Nmap', 'Scapy'],
      icon: <FaNetworkWired size={28} />,
      accent: 'blue',
      metrics: [
        { label: 'Scanning', value: 'Full Network' },
        { label: 'Risk Levels', value: 'Multi-tier' },
        { label: 'Interface', value: 'GUI' },
      ],
    },
  ];

  const accentMap = {
    cyan: { color: 'var(--neon-cyan)', bg: 'rgba(34, 211, 238, 0.08)', border: 'rgba(34, 211, 238, 0.2)' },
    purple: { color: 'var(--neon-purple)', bg: 'rgba(168, 85, 247, 0.08)', border: 'rgba(168, 85, 247, 0.2)' },
    emerald: { color: 'var(--neon-emerald)', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.2)' },
    blue: { color: 'var(--neon-blue)', bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.2)' },
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
    <section id="projects" className="relative z-10" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container-cyber">
        <SectionHeader
          label="// 04 — Experiments"
          title="PROJECT LAB"
          subtitle="Research-driven projects in cybersecurity, blockchain forensics, AI threat detection, and biometric analysis."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project) => {
            const accent = accentMap[project.accent];

            return (
              <motion.div key={project.id} variants={itemVariants}>
                <GlassCard
                  accentColor={project.accent}
                  className="cursor-pointer h-full"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Top Accent Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)`,
                    }}
                  />

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: accent.bg,
                        border: `1px solid ${accent.border}`,
                        color: accent.color,
                      }}
                    >
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg font-bold text-white mb-1"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="text-center py-2 rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                        >
                          <div className="text-sm font-bold" style={{ color: accent.color, fontFamily: 'var(--font-mono)' }}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="pill"
                        style={{
                          borderColor: `${accent.color}20`,
                          color: accent.color,
                          fontSize: '0.7rem',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="pill" style={{ fontSize: '0.7rem' }}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      className="flex-1 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-center"
                      style={{
                        background: accent.bg,
                        border: `1px solid ${accent.border}`,
                        color: accent.color,
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      View Details
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          color: '#94a3b8',
                        }}
                        onClick={e => e.stopPropagation()}
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          color: '#94a3b8',
                        }}
                        onClick={e => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-[150] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

              <motion.div
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl"
                style={{
                  background: 'rgba(10, 15, 30, 0.97)',
                  border: `1px solid ${accentMap[selectedProject.accent].border}`,
                  boxShadow: `0 0 40px ${accentMap[selectedProject.accent].bg}, 0 25px 60px rgba(0,0,0,0.5)`,
                }}
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={e => e.stopPropagation()}
              >
                <div
                  className="h-1 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accentMap[selectedProject.accent].color}, transparent)`,
                  }}
                />

                <div className="p-8 pb-0">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: accentMap[selectedProject.accent].bg,
                          border: `1px solid ${accentMap[selectedProject.accent].border}`,
                          color: accentMap[selectedProject.accent].color,
                        }}
                      >
                        {selectedProject.icon}
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold text-white"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {selectedProject.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{selectedProject.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-lg transition-colors"
                      style={{ color: '#64748b', background: 'rgba(255,255,255,0.05)' }}
                    >
                      <FaTimes size={16} />
                    </button>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  {selectedProject.metrics && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {selectedProject.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="text-center py-3 rounded-xl"
                          style={{
                            background: accentMap[selectedProject.accent].bg,
                            border: `1px solid ${accentMap[selectedProject.accent].border}`,
                          }}
                        >
                          <div className="text-lg font-bold" style={{ color: accentMap[selectedProject.accent].color, fontFamily: 'var(--font-mono)' }}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                      Project Details
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.details}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="pill"
                          style={{
                            borderColor: `${accentMap[selectedProject.accent].color}20`,
                            color: accentMap[selectedProject.accent].color,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon btn-neon-primary"
                      >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon btn-neon-secondary"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="btn-neon btn-neon-secondary ml-auto"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;