// src/components/Education.jsx
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaShieldAlt, FaAward } from 'react-icons/fa';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';

const Education = () => {
  const educationData = [
    {
      id: 1,
      type: 'education',
      title: 'M.Tech in AI & Data Science (Cybersecurity Specialization)',
      institution: 'National Forensic Sciences University (NFSU), Goa Campus',
      period: '2025 — Present',
      details: [
        'Specialized coursework in cybersecurity, digital forensics, embedded systems security, and threat modeling',
        'Focus on connected vehicle security, IoT security architectures, and ML-driven anomaly detection',
      ],
      icon: <FaGraduationCap size={18} />,
      accent: 'cyan',
    },
    {
      id: 2,
      type: 'education',
      title: 'B.E. in Computer Engineering',
      institution: 'Savitribai Phule Pune University',
      period: '2021 — 2025',
      details: 'Organized cybersecurity awareness workshops and digital literacy programs for students and faculty',
      icon: <FaGraduationCap size={18} />,
      accent: 'purple',
    },
    {
      id: 3,
      type: 'certification',
      title: 'Google Cybersecurity Professional Certificate',
      institution: 'Google',
      details: [
        'Completed 8-course program covering threat detection, network security, incident response, and SIEM tools',
        'Hands-on experience with Linux, SQL, Python scripting for security automation, and security frameworks (NIST, CIA Triad)',
      ],
      icon: <FaCertificate size={18} />,
      accent: 'emerald',
    },
    {
      id: 4,
      type: 'certification',
      title: 'CASA Certified API Security Analyst',
      institution: 'CASA',
      details: [
        'Industry recognized certification validating expertise in API security testing and secure API design',
        'Covers OWASP API Security Top 10, authentication flaws, injection attacks, broken access control, and rate limiting',
      ],
      icon: <FaShieldAlt size={18} />,
      accent: 'pink',
    },
    {
      id: 5,
      type: 'certification',
      title: 'UGC NET Computer Science & Applications',
      institution: 'National Testing Agency (NTA)',
      details: 'Achieved 89.28 Percentile national level validation of core CS and cybersecurity knowledge',
      icon: <FaAward size={18} />,
      accent: 'blue',
    },
  ];

  const accentMap = {
    cyan: 'var(--neon-cyan)',
    purple: 'var(--neon-purple)',
    emerald: 'var(--neon-emerald)',
    pink: 'var(--neon-pink)',
    blue: 'var(--neon-blue)',
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
    <section id="education" className="relative z-10" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container-cyber">
        <SectionHeader
          label="// 02 — Credentials"
          title="EDUCATION & CERTIFICATIONS"
          subtitle="Academic foundation and professional certifications in cybersecurity, AI, and forensics."
        />

        {/* Timeline */}
        <motion.div
          className="max-w-4xl mx-auto relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Timeline Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.3), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.1))',
            }}
          />

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative flex flex-col md:flex-row mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10"
                style={{
                  background: 'var(--bg-deep)',
                  border: `2px solid ${accentMap[item.accent]}`,
                  boxShadow: `0 0 20px ${accentMap[item.accent]}40`,
                  color: accentMap[item.accent],
                }}
                whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${accentMap[item.accent]}60` }}
              >
                {item.icon}
              </motion.div>

              {/* Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <GlassCard accentColor={item.accent}>
                  {/* Type Badge */}
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs uppercase tracking-wider mb-3"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: accentMap[item.accent],
                      background: `${accentMap[item.accent]}10`,
                      border: `1px solid ${accentMap[item.accent]}20`,
                    }}
                  >
                    {item.type === 'certification' ? '⊕ Certification' : '◎ Degree'}
                  </span>

                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    {item.institution}
                  </p>

                  {item.period && (
                    <p className="text-gray-500 text-xs mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                      {item.period}
                    </p>
                  )}

                  {typeof item.details === 'string' ? (
                    <p className="text-gray-300 text-sm">{item.details}</p>
                  ) : (
                    <ul className="space-y-1.5">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentMap[item.accent] }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
