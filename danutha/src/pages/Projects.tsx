import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AgriMart",
      description:
        "AgriMart connects farmers directly with buyers, reducing post-harvest losses and market inefficiencies in Sri Lanka’s agriculture. Farmers list fresh produce, while buyers browse by crop, price, quality, and location. With secure login, real-time pricing, AI predictions, and direct negotiation, AgriMart makes connection with farmers and buyers as well as transparent in Sinhala, Tamil, and English. It empowers farmers and creates a more efficient, sustainable marketplace.",
      image: "public/Images/agrimart.jpg",
      technologies: [
        "Flutter",
        "Django",
        "FireBase",
        "TensorFlow",
        "Mobile Application",
      ],
      github: "https://github.com/agrimart44/AgriMart",
      demo: "https://agri-mart-landing-page-gy3o.vercel.app/",
      featured: true,
      stats: { duration: "8 months" },
      demo: true,
    },
    {
      title: "Realtime Ticket Simulating System",
      description:
        "The Real-Time Ticketing Simulation System is an application that allows users to simulate a dynamic ticketing environment where vendors add tickets to a pool, and consumers retrieve tickets in real time. The system provides a user-friendly interface for configuration, control, and monitoring of the simulation.",
      image: "public/Images/Tickets.jpg",
      technologies: ["Angular", "Spring Boot", "Multi Threading", "Java"],
      github: "https://github.com/Danutha2/RealTimeTicketing",
      demo: "https://github.com/Danutha2/RealTimeTicketing",
      featured: true,
      stats: { duration: "2 months" },
      demo: true,
    },
    {
      title: " Student Management System",
      description:
        "This is a Student Management System that allows users to register students, store and load student details, manage student records, and generate reports. The system supports the following features:",
      image:
        "public/Images/stams.jpg",
      technologies: ["Java"],
      github: "https://github.com/Danutha2/STAMS",
      demo: "https://github.com/Danutha2/STAMS",
      featured: false,
      stats: { duration: "1 month" },
      demo: true,
    },

    {
      title: "Expense Tracker",
      description:
        "Developed a RESTful API using NestJS to manage personal expenses with a modular, service-based architecture. Features include adding/retrieving expenses, calculating totals, finding the highest expense, and managing custom categories. Used DTOs for validation and clean separation of concerns. Built with scalable structure and MySQL integration.",
      image:
        "public/Images/expenseT.jpg",
      technologies: ["NestJS", "Node.js", "MySQL", "AWS S3"],
      github: "https://github.com/danutha/expense-tracker",
      demo: "https://expense-tracker-demo.netlify.app",
      featured: false,
      stats: { duration: "1 Week months" },
      demo: true,
    },

    {
      title: "Task Master",
      description:
        "The Task Manager is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to efficiently manage their daily tasks. It provides a clean and responsive user interface where tasks can be created, edited, updated, deleted, and tracked based on their status.",
      image:
        "public/Images/taskmaster2.jpg",
      technologies: ["Express js", "Node js","Node", "MongoDB"],
      github: "https://github.com/Danutha2/TaskManager",
      demo: "https://github.com/Danutha2/TaskManager",
      featured: false,
      stats: { duration: "1 Week" },
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
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {project.stats.users}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {project.stats.duration}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Users size={12} className="mr-1" />
                        {project.stats.users}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {project.stats.duration}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
