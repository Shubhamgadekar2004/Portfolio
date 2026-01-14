// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { TbBrandPython, TbBrandCpp, TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbSql } from 'react-icons/tb';
import { FaNetworkWired, FaTools, FaDatabase, FaShieldAlt, FaLinux } from 'react-icons/fa';
import { MdSecurity, MdAutoGraph } from 'react-icons/md';
import WaveCanvas from './WaveCanvas';

const Skills = () => {
  const technicalSkills = [
    { name: "Risk Assessment", icon: <MdAutoGraph size={24} />, color: "bg-red-500" },
    { name: "Network Analysis", icon: <FaNetworkWired size={24} />, color: "bg-blue-500" },
    { name: "Troubleshooting", icon: <FaTools size={24} />, color: "bg-purple-500" },
    { name: "Cybersecurity", icon: <MdSecurity size={24} />, color: "bg-green-500" },
  ];

  const programmingSkills = [
    { name: "Python", icon: <TbBrandPython size={24} />, color: "bg-blue-600" },
    { name: "C/C++", icon: <TbBrandCpp size={24} />, color: "bg-blue-800" },
    { name: "HTML", icon: <TbBrandHtml5 size={24} />, color: "bg-orange-600" },
    { name: "CSS", icon: <TbBrandCss3 size={24} />, color: "bg-blue-500" },
    { name: "JavaScript", icon: <TbBrandJavascript size={24} />, color: "bg-yellow-500" },
    { name: "SQL", icon: <TbSql size={24} />, color: "bg-blue-400" },
  ];

  const toolsSkills = [
    { name: "Wireshark", icon: <FaShieldAlt size={24} />, color: "bg-blue-600" },
    { name: "Nmap", icon: <FaNetworkWired size={24} />, color: "bg-green-600" },
    { name: "Cisco Packet Tracer", icon: <FaNetworkWired size={24} />, color: "bg-blue-800" },
    { name: "Linux", icon: <FaLinux size={24} />, color: "bg-yellow-600" },
    { name: "Tcpdump", icon: <FaDatabase size={24} />, color: "bg-purple-600" },
    { name: "Autopsy", icon: <MdSecurity size={24} />, color: "bg-red-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <WaveCanvas color="rgba(147, 51, 234, 0.2)" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 px-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <FaTools className="mr-2" /> Technical Skills
              </h3>
            </div>
            <motion.div 
              className="p-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className={`${skill.color} p-2 rounded-full mr-3 text-white`}>
                      {skill.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Programming Skills */}
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-4 px-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <TbBrandPython className="mr-2" /> Programming
              </h3>
            </div>
            <motion.div 
              className="p-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {programmingSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className={`${skill.color} p-2 rounded-full mr-3 text-white`}>
                      {skill.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-green-600 to-green-800 py-4 px-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <FaShieldAlt className="mr-2" /> Tools & Software
              </h3>
            </div>
            <motion.div 
              className="p-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {toolsSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className={`${skill.color} p-2 rounded-full mr-3 text-white`}>
                      {skill.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;