// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaBriefcase, FaLaptopCode } from 'react-icons/fa';

const About = () => {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a Computer Engineering student with expertise in network security, cybersecurity, and machine learning. 
              My passion lies in developing AI-driven security solutions to protect digital infrastructure from evolving threats.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With 2 years of experience in Networking and Security, I've developed strong skills in risk assessment, 
              network analysis, and troubleshooting. I'm proficient with tools like Wireshark, Nmap, and Cisco Packet Tracer.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              As an NSS Volunteer Coordinator, I've participated in disaster management camps and election support, 
              demonstrating my commitment to community service and my ability to work under pressure.
            </p>
          </motion.div>

          <motion.div className="md:w-1/2" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <FaUser className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Personal Info</h3>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-medium">Email:</span> shubham.gadekar2025@gmail.com</li>
                  <li><span className="font-medium">Phone:</span> +91 9284807101</li>
                  <li><span className="font-medium">Location:</span> Pune, India</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full mr-4">
                    <FaGraduationCap className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-medium">Degree:</span> B.E. in Computer Engineering</li>
                  <li><span className="font-medium">University:</span> Pune University</li>
                  <li><span className="font-medium">Status:</span> UGC NET Qualified</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
                    <FaBriefcase className="text-green-600 dark:text-green-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-medium">Years:</span> 2+ in Networking</li>
                  <li><span className="font-medium">Role:</span> NSS Volunteer Coordinator</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full mr-4">
                    <FaLaptopCode className="text-red-600 dark:text-red-400" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Cybersecurity</li>
                  <li>Machine Learning</li>
                  <li>Network Security</li>
                  <li>AI-driven Solutions</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
