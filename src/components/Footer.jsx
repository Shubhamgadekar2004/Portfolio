// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={18} />, href: 'https://github.com/Shubhamgadekar2004', label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/shubham-gadekar04/', label: 'LinkedIn' },
    { icon: <FaEnvelope size={18} />, href: 'mailto:shubham.gadekar2025@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
      {/* Gradient Line */}
      <div className="section-divider" />

      <div className="container-cyber py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-xl font-bold gradient-text mb-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Shubham Gadekar
            </h2>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
              Computer Engineering Student | Cybersecurity Enthusiast
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#64748b',
                }}
                whileHover={{
                  borderColor: 'rgba(34, 211, 238, 0.3)',
                  color: '#e2e8f0',
                  boxShadow: '0 0 15px rgba(34, 211, 238, 0.1)',
                  scale: 1.1,
                }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} Shubham Gadekar. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-1 flex items-center justify-center gap-1" style={{ fontFamily: 'var(--font-mono)' }}>
            Made with <FaHeart className="text-red-500" size={12} /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;