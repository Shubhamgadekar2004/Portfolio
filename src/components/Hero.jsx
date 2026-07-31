// src/components/Hero.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const socialLinks = [
    { icon: <FaGithub size={18} />, label: 'GitHub', href: 'https://github.com/Shubhamgadekar2004' },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubham-gadekar04/' },
    { icon: <FaEnvelope size={18} />, label: 'Email', href: 'mailto:shubham.gadekar2025@gmail.com' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="container-cyber relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-20 pt-32"
        style={{ y, opacity }}
      >
        {/* Text Content */}
        <motion.div
          className="lg:w-3/5 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 pill pill-cyan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
            <span>System Online — Ready for Deployment</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-display-xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className="block gradient-text-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Shubham Gadekar
            </motion.span>
          </h1>

          {/* Typewriter */}
          <motion.div
            className="text-xl md:text-2xl mb-8 h-12"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--neon-cyan)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Typewriter
              options={{
                strings: [
                  'Computer Engineering Student',
                  'Cybersecurity Enthusiast',
                  'Machine Learning Developer',
                  'Network Security Specialist'
                ],
                autoStart: true,
                loop: true,
                cursor: '▊',
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Passionate about network security, cybersecurity, and AI-driven security solutions. 
            Building the future of digital protection through innovation and expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <motion.a
              href="#contact"
              className="btn-neon btn-neon-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-neon btn-neon-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#94a3b8',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{
                  borderColor: 'rgba(34, 211, 238, 0.3)',
                  color: '#e2e8f0',
                  boxShadow: '0 0 15px rgba(34, 211, 238, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="lg:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            {/* Outer Glow Ring */}
            <div
              className="absolute -inset-4 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, var(--neon-cyan), var(--neon-purple), var(--neon-blue), var(--neon-cyan))',
                opacity: 0.3,
                filter: 'blur(15px)',
              }}
            />

            {/* Border Ring */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1"
              style={{
                background: 'conic-gradient(from 0deg, var(--neon-cyan), var(--neon-purple), var(--neon-blue), var(--neon-cyan))',
              }}
            >
              <div
                className="w-full h-full rounded-full overflow-hidden"
                style={{ background: 'var(--bg-deep)' }}
              >
                <img
                  src="/photo1.jpg"
                  alt="Shubham Gadekar - Computer Engineer & Cybersecurity Researcher"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Status Dot */}
            <motion.div
              className="absolute bottom-4 right-4 w-6 h-6 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--bg-deep)',
                border: '2px solid var(--neon-emerald)',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)',
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: '#64748b' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="text-xs" style={{ fontFamily: 'var(--font-mono)' }}>scroll</span>
        <FaChevronDown size={14} />
      </motion.a>
    </section>
  );
};

export default Hero;
