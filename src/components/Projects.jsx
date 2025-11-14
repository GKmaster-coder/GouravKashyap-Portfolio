import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden min-h-screen bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Side - Project Cards */}
        <motion.div
          className="flex flex-col gap-6 order-2 lg:order-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              My <span className="text-red-600">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </motion.div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-red-600/30 hover:border-red-500 transition-all duration-300 hover:bg-gray-800/50"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -4,
                  borderColor: "#ef4444",
                  boxShadow: "0 15px 30px -8px rgba(220, 38, 38, 0.2)",
                }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {project.tech.slice(0, 2).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full border border-blue-400"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="px-2 py-1 bg-gray-700 text-white text-xs font-medium rounded-full border border-gray-600">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      className="bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg shadow-red-600/20 transition-all duration-300 flex items-center gap-1"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 20px -6px rgba(220, 38, 38, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View</span>
                      <motion.svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </motion.svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="/all-projects"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-xl shadow-red-600/20 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px -8px rgba(220, 38, 38, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Image Section */}
        <motion.div
          className="relative flex justify-center items-center order-1 lg:order-2 h-full overflow-hidden rounded-3xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Animated Glow Layer */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-purple-600/15 to-blue-600/20 blur-3xl"
              animate={{
                opacity: [0.15, 0.25, 0.15],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Image Container */}
          <motion.div
            className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl"
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <motion.img
              src="/project-image.png"
              alt="Project illustration"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 40px rgba(239, 68, 68, 0.3))",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
