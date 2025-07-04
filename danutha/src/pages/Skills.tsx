import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';


const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '🟨' },
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'REST APIs', icon: '🔗' },
      ],
    },
    {
      title: 'Tools & Others',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', icon: '🌿' },
        { name: 'GitHub', icon: '⚫' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Postman', icon: '📮' },
        { name: 'Docker', icon: '🐳' },
        { name: 'FireBase', icon: '🔥' },
      ],
    },
  ];

  const certifications = [
    {
      title: 'IEEE Xtreme 18.0 Programming',
      issuer: 'IEEE',
      date: '2024',
      badge: 'IEEE',
      color: 'from-blue-500 to-white-500'
    },
    {
      title: 'Code Rally 5.0',
      issuer: 'IEEE Computer Society Informatics Institute of Technology Student Branch Chapter',
      date: '2024',
      badge: 'IEEE',
      color: 'from-blue-500 to-white-500'
    },
    {
      title: 'Problem Solving - HackerRank Certificates ',
      issuer: 'HackerRank',
      date: '2024',
      badge: '',
      color: 'from-green-500 to-white-500'
    },
    {
      title: 'Programming Python - HackerRank Certificates',
      issuer: 'HackerRank',
      date: '2024',
      badge: '',
      color: 'from-green-600 to-emerald-600'
    },

     {
      
      title: 'Java (Basic) Certificate',
      issuer: 'HackerRank',
      date: '2024',
      badge: '',
      color: 'from-green-600 to-emerald-600'
    },

    {
    title: 'Java Object-Oriented Programming',
    issuer: 'LinkedIn Learning',
    date: '2024',
    badge: <Linkedin className="w-5 h-5 text-gray-800 dark:text-white" />,
    color: 'from blue-500 to-cyan-500'
  },
  {
    title: 'Java Threads',
    issuer: 'LinkedIn Learning',
    date: '2024',
    badge: <Linkedin className="w-5 h-5 text-gray-800 dark:text-white" />,
    color: ''
  },
  {
    title: 'Creating Spring Boot Microservices',
    issuer: 'LinkedIn Learning',
    date: '2024',
    badge: <Linkedin className="w-5 h-5 text-gray-800 dark:text-white" />,
    color: ''
  }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center mb-8">
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold text-lg mb-4`}>
                  {category.title}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200 mb-2">
                      {skill.icon}
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium text-sm text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Professional certifications that validate my expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} text-white text-xl font-bold`}>
                    {cert.badge}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices. Currently exploring Next.js, Nest js, and cloud 
              technologies to expand my toolkit.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;