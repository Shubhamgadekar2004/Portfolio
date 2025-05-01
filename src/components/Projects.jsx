// src/components/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaLaptopCode, FaNetworkWired, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Disease Prediction System",
      description: "A machine learning-based system that predicts the risk of liver, diabetes, kidney, and heart diseases based on patient data.",
      details: "Developed a comprehensive health prediction system leveraging machine learning algorithms to analyze patient data for multiple diseases. Implemented various algorithms including Logistic Regression, Random Forest, Support Vector Machines, and Gradient Boosting for comparison and optimization. Applied data preprocessing techniques to handle missing values, detect outliers, and perform feature scaling to enhance model accuracy.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas", "NumPy"],
      image: "disease-prediction",
      icon: <FaBrain className="text-[#0077B5]" size={32} />
    },
    {
      id: 2,
      title: "Local Network Vulnerability Scanner",
      description: "A GUI-based tool to scan local networks for open ports, insecure services, and misconfigurations.",
      details: "Developed a comprehensive network security scanning tool with an intuitive graphical interface. Implemented device discovery functionality to automatically map all devices on a local network. Created robust port and service scanning modules to identify open ports and running services that could present security risks. Built a risk classification system that analyzes findings and suggests specific remediation steps based on severity levels. Designed the application with modularity in mind for easy extension with additional scanning capabilities.",
      tech: ["Python", "Network Security", "GUI Development", "Socket Programming", "Nmap", "Scapy"],
      image: "vulnerability-scanner",
      icon: <FaNetworkWired className="text-[#0077B5]" size={32} />
    },
    {
      id: 3,
      title: "Network Congestion Monitoring Dashboard",
      description: "A real-time dashboard using SNMP and Streamlit to monitor traffic across a 12-switch campus network.",
      details: "Built a comprehensive real-time network monitoring solution for a campus-wide network infrastructure. Leveraged SNMP (Simple Network Management Protocol) to collect detailed traffic metrics from 12 network switches. Implemented port-level bandwidth monitoring with customizable thresholds for detecting congestion issues. Developed visualization components using Streamlit to display network performance metrics in an intuitive dashboard. Created an alert system to notify administrators of potential bottlenecks and provide automated suggestions for switch reconfigurations to optimize traffic flow. The solution reduced network downtime by 37% within the first month of deployment.",
      tech: ["Python", "SNMP", "Streamlit", "Network Monitoring", "Data Visualization", "Real-time Analytics"],
      image: "network-dashboard",
      icon: <FaChartLine className="text-[#0077B5]" size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    {selectedProject.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedProject.details}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <button
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300 font-medium py-2 px-6 rounded-lg transition-colors"
                      onClick={() => setSelectedProject(null)}
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