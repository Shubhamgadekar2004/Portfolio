// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import ParticlesCanvas from './ParticlesCanvas';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ type: 'success', text: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Location",
      details: "Pune, Maharashtra, India"
    },
    {
      icon: <FaPhone size={24} />,
      title: "Phone",
      details: "+91 9284807101"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      details: "shubham.gadekar2025@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <ParticlesCanvas particleCount={70} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.type === 'success' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {submitMessage.text}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg w-full md:w-auto"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 text-blue-600 dark:text-blue-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Let's Connect!</h4>
              <p className="mb-4">
                Looking for opportunities in cybersecurity, machine learning, and network security. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Shubhamgadekar2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 p-2 rounded-full"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaGithub size={20} className="text-[#0077B5]" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shubham-gadekar04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 p-2 rounded-full"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <FaLinkedin size={20} className="text-[#0077B5]" />
                </motion.a>
                <motion.a
                  href="mailto:shubham.gadekar2025@gmail.com"
                  className="bg-white bg-opacity-20 p-2 rounded-full"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaEnvelope size={20} className="text-[#0077B5]"/>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default Contact;