import React, { useState } from "react";
import { motion } from "framer-motion";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "Full MERN stack e-commerce platform with admin panel, user login, and secure payments.",
      image: "/images/ecommerce.jpg",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://yourprojectlink.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "My personal portfolio built with React, Tailwind CSS, and Framer Motion animations.",
      image: "/images/portfolio.jpg",
      category: "Frontend",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://gourav-kashyap-portfolio.vercel.app/",
    },
    {
      id: 3,
      title: "Fitness & Diet Planner",
      description:
        "Full-stack fitness tracking app with BMI calculator, meal planner, and charts.",
      image: "/images/fitness.jpg",
      category: "Full Stack",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Real-time weather and forecast app using OpenWeather API with charts.",
      image: "/images/weather.jpg",
      category: "Frontend",
      tech: ["React", "API", "Chart.js"],
      link: "#",
    },
    {
      id: 5,
      title: "Doctor Appointment System",
      description:
        "Book and manage online doctor appointments with Strapi backend and video call support.",
      image: "/images/doctor.jpg",
      category: "Full Stack",
      tech: ["React", "Strapi", "Tailwind", "Socket.io"],
      link: "#",
    },
    {
      id: 6,
      title: "Chatbot Assistant",
      description:
        "Conversational AI chatbot using Node.js and IBM Watson Assistant.",
      image: "/images/chatbot.jpg",
      category: "Backend",
      tech: ["Node.js", "Express", "IBM Watson"],
      link: "#",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl lg:text-5xl font-bold">
          All <span className="text-red-600">Projects</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Explore all my development projects built using MERN stack and modern
          tools.
        </p>
      </motion.div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-linear-to-r from-red-600 to-blue-600 border-none"
                : "border-gray-700 hover:border-red-500"
            } text-sm font-semibold transition-all duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900/60 rounded-2xl overflow-hidden border border-red-700/40 hover:border-blue-500 transition-all duration-300 shadow-lg shadow-red-700/20"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-red-500 hover:text-blue-400 transition-all"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AllProjects;
