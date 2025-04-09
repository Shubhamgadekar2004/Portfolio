// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { FaHandsHelping } from 'react-icons/fa';


const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Elections IT Support",
      organization: "Vidhansabha & Loksabha Elections 2024",
      period: "2024",
      description: [
        "Monitored and repaired IT systems during election processes",
        "Provided network troubleshooting and problem-solving support",
        "Ensured smooth operation of election technology infrastructure",
        "Collaborated with election officials to address technical issues promptly"
      ],
      icon: <FaHandsHelping size={24} />
    },
    {
      id: 2,
      title: "Disaster Management Volunteer",
      organization: "State-Level Disaster Management Camp 'AVHAN 2023'",
      period: "2023",
      description: [
        "Participated in a residential disaster management program under NSS at Gondwana University, Gadchiroli",
        "Focused on rescue and relief operations training",
        "Developed skills in emergency response and crisis management",
        "Collaborated with team members during disaster simulation exercises"
      ],
      icon: <FaHandsHelping size={24} />
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteer Experience</h2>
          <div className="w-40 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 text-blue-600 dark:text-blue-400">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.organization}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{exp.period}</p>
              
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-6 rounded-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-3">Extracurricular Activities</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Represented college in <span className="font-medium">Football, Kho-Kho, and Athletics</span> competitions.
            Participated in intercollegiate competitions, showcasing teamwork and leadership skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;