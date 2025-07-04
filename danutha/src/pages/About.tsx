import React from "react";
import { motion } from "framer-motion";
import { Download, Code, Coffee, Music, DumbbellIcon } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Code,
      name: "Clean Code",
      description: "Writing maintainable and efficient code",
    },
    {
      icon: Coffee,
      name: "Coffee",
      description: "Fueling creativity one cup at a time",
    },
    {
      icon: Music,
      name: "Music",
      description: "Background soundtrack for productivity",
    },
    {
      icon: DumbbellIcon,
      name: "Gym",
      description: "Every rep, a step forward",
    },
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
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hello! I'm Danutha Imbulpitiya, an undergraduate Software
            Engineering student
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently pursuing my Bachelor’s degree in Software
                Engineering, where I'm building strong foundations in full-stack
                development, particularly with the MERN stack. I’m passionate
                about creating beautiful, functional applications that address
                real-world problems and constantly strive to expand my skills
                through hands-on projects and continuous learning.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech started during my university years, where I
                discovered my passion for coding and problem-solving. Since
                then, I've been constantly learning new technologies and
                improving my craft, always striving to write clean, maintainable
                code.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new coffee shops,
                listening to music, or pushing my limits at the gym.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="public/Images/cV.pdf"
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download className="mr-2 -ml-1 h-5 w-5" />
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Gradient background blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-lg opacity-20"></div>

              {/* Circular container with image */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center">
                {/* Replace the initials with your photo */}
                <img
                  src="./public/Images/me.jpg" // <-- Replace with your actual image path
                  alt="Danutha Imbulpitiya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Interests & Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  <interest.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700/50"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Fun Facts About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                ☕
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Average 4 cups of coffee per day
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                🎵
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Code better with lo-fi music
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                🌱
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Always learning new technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
