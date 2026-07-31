// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaTerminal } from 'react-icons/fa';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ type: 'success', text: '> Message transmitted successfully. Awaiting response...' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(null), 5000);
    }, 1500);
  };

  const terminalCommands = [
    { cmd: 'connect github', action: 'https://github.com/Shubhamgadekar2004', icon: <FaGithub size={14} /> },
    { cmd: 'connect linkedin', action: 'https://www.linkedin.com/in/shubham-gadekar04/', icon: <FaLinkedin size={14} /> },
    { cmd: 'send mail', action: 'mailto:shubham.gadekar2025@gmail.com', icon: <FaEnvelope size={14} /> },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt size={18} />, title: 'Location', details: 'Pune, Maharashtra, India' },
    { icon: <FaPhone size={18} />, title: 'Phone', details: '+91 9284807101' },
    { icon: <FaEnvelope size={18} />, title: 'Email', details: 'shubham.gadekar2025@gmail.com' },
  ];

  const inputStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.9rem',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '12px',
    padding: '0.75rem 1rem',
    color: '#e5e7eb',
    outline: 'none',
    width: '100%',
    transition: 'all 0.3s ease',
  };

  return (
    <section id="contact" className="relative z-10" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container-cyber">
        <SectionHeader
          label="// 06 — Transmission"
          title="CONTACT TERMINAL"
          subtitle="Establish a connection. Send a transmission."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Terminal + Quick Actions */}
          <div className="space-y-6">
            {/* Terminal Card */}
            <GlassCard accentColor="cyan">
              <div className="flex items-center gap-2 mb-4">
                <FaTerminal size={14} style={{ color: 'var(--neon-cyan)' }} />
                <span className="text-label" style={{ color: 'var(--neon-cyan)' }}>Quick Actions</span>
              </div>

              {/* Terminal Prompt */}
              <div
                className="rounded-xl p-4 space-y-2"
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(34, 211, 238, 0.08)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                }}
              >
                <div className="text-gray-500">
                  <span style={{ color: 'var(--neon-emerald)' }}>visitor</span>
                  <span className="text-gray-600">@</span>
                  <span style={{ color: 'var(--neon-cyan)' }}>portfolio</span>
                  <span className="text-gray-600"> ~ $</span>
                </div>

                {terminalCommands.map((cmd) => (
                  <motion.a
                    key={cmd.cmd}
                    href={cmd.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-1.5 px-2 -mx-2 rounded-lg transition-all duration-200 cursor-pointer"
                    style={{ color: '#94a3b8', textDecoration: 'none' }}
                    whileHover={{
                      backgroundColor: 'rgba(34, 211, 238, 0.06)',
                      color: '#e2e8f0',
                    }}
                  >
                    <span className="text-gray-600">$</span>
                    {cmd.icon}
                    <span>{cmd.cmd}</span>
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard accentColor="cyan" hover3D={false} className="!p-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(34, 211, 238, 0.06)',
                          border: '1px solid rgba(34, 211, 238, 0.1)',
                          color: 'var(--neon-cyan)',
                        }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h4
                          className="text-xs uppercase tracking-wider text-gray-500"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {info.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{info.details}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard accentColor="cyan" hover3D={false}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#eab308' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }} />
                <span className="ml-2 text-xs text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>
                  message_compose.sh
                </span>
              </div>

              {submitMessage && (
                <div
                  className="mb-6 p-3 rounded-xl text-sm"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    background: submitMessage.type === 'success'
                      ? 'rgba(16, 185, 129, 0.08)'
                      : 'rgba(239, 68, 68, 0.08)',
                    border: `1px solid ${submitMessage.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                    color: submitMessage.type === 'success' ? 'var(--neon-emerald)' : '#ef4444',
                  }}
                >
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider text-gray-500 mb-2"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      style={inputStyle}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                        e.target.style.boxShadow = '0 0 15px rgba(34, 211, 238, 0.05)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider text-gray-500 mb-2"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      style={inputStyle}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                        e.target.style.boxShadow = '0 0 15px rgba(34, 211, 238, 0.05)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase tracking-wider text-gray-500 mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter subject"
                    style={inputStyle}
                    onFocus={e => {
                      e.target.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                      e.target.style.boxShadow = '0 0 15px rgba(34, 211, 238, 0.05)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider text-gray-500 mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Type your message..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => {
                      e.target.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                      e.target.style.boxShadow = '0 0 15px rgba(34, 211, 238, 0.05)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-neon btn-neon-primary w-full md:w-auto"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Transmitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaPaperPlane size={14} />
                      Send Transmission
                    </span>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;