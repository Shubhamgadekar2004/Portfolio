// src/components/Education.jsx
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Engineering in Computer Engineering",
      institution: "Pune University",
      period: "2021 — 2025*",
      icon: <FaGraduationCap size={20} />
    },
    {
      id: 2,
      type: "certification",
      title: "Google Cybersecurity Professional Certification",
      institution: "Google",
      details: [
        "Understanding cybersecurity practices and their impact on organizations",
        "Protecting networks, devices, people, and data from unauthorized access",
        "Identifying common risks, threats, vulnerabilities, and applying mitigation techniques",
        "Experience with Python, Linux, and SQL"
      ],
      icon: <FaCertificate size={20} />
    },
    {
      id: 3,
      type: "certification",
      title: "Google AI Essentials",
      institution: "Google",
      details: "Comprehensive understanding of AI fundamentals, applications, and ethical considerations",
      icon: <FaCertificate size={20} />
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
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-40 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`relative flex flex-col md:flex-row mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 z-10 flex items-center justify-center text-white">
                {item.icon}
              </div>
              
              {/* Content box */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{item.title}</h3>
                  <h4 className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</h4>
                  
                  {item.period && <p className="text-gray-500 dark:text-gray-500 mb-4">{item.period}</p>}
                  
                  {typeof item.details === 'string' ? (
                    <p className="text-gray-700 dark:text-gray-300">{item.details}</p>
                  ) : (
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
