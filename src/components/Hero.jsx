// src/components/Hero.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import ParticlesCanvas from './ParticlesCanvas';

const Hero = ({ setActiveSection }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 overflow-hidden">
      <ParticlesCanvas particleCount={80} />
      <motion.div 
        className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between"
        style={{ y, opacity }}
      >
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Shubham Gadekar</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-gray-700 dark:text-gray-300 h-20">
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
              }}
            />
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Passionate about network security, cybersecurity, and AI-driven security solutions. 
            Building the future of digital protection through innovation and expertise.
          </p>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            <motion.a 
              href="#contact"
              onClick={() => setActiveSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            
            <motion.a 
              href="#projects"
              onClick={() => setActiveSection('projects')}
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-medium py-2 px-6 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
          
          <div className="flex justify-center md:justify-start mt-8 space-x-4">
            <motion.a
              href="https://github.com/Shubhamgadekar2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub size={24} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/shubham-gadekar04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:shubham.gadekar2025@gmail.com"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2 }}
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          style={{ perspective: 1000 }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden shadow-2xl"
            animate={{ 
              rotateY: [0, 5, 0, -5, 0],
              rotateX: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
            <img 
  src="photo1.jpg" 
  alt="Profile"
  className="w-full h-full object-cover rounded-full"
/>

            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.a
        href="#about"
        onClick={() => setActiveSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        whileHover={{ scale: 1.2 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
