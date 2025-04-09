import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
              Shubham Gadekar
            </h2>
            <p className="text-gray-400">Computer Engineering Student | Cybersecurity Enthusiast</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://github.com/Shubhamgadekar2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2, color: "#FFFFFF" }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shubham-gadekar04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2, color: "#FFFFFF" }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:shubham.gadekar2025@gmail.com"
              className="text-gray-400 hover:text-white"
              whileHover={{ scale: 1.2, color: "#FFFFFF" }}
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shubham Gadekar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;