import React, { useState } from "react";
import { motion } from "framer-motion";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

 const projects = [
  // ---------------- NEW MERGED PROJECTS ----------------
  {
    id: 1,
    title: "E-Commerce Website (Java + React)",
    description:
      "A complete Java full-stack e-commerce system built using React, Spring Boot, Hibernate, and Razorpay with full admin control and order management.",
    image: "/images/ecommerce-java.jpg",
    category: "Full Stack",
    tech: ["React", "Java", "Spring Boot", "Hibernate", "Razorpay"],
    link: "https://github.com/GKmaster-coder/Ecommerce-Website-BCA-Final-Year-Project.git",
  },
  {
    id: 2,
    title: "Major SD Singh Ayurvedic Medical College Website",
    description:
      "A fully functional MERN stack website built during internship featuring dynamic pages, admin CMS, college info, and SEO optimized structure. The official live website of the college.",
    image: "/assets/projects/major-sd.png",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://majorsdspgamc.com/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern, responsive, animated portfolio built using React, Tailwind CSS, and Framer Motion with smooth transitions and dynamic sections.",
    image: "/assets/projects/portfolio.png",
    category: "Frontend",
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    link: "https://gourav-kashyap-portfolio.vercel.app/",
  },
  {
    id: 4,
    title: "Amazon Shopping Website Clone",
    description:
      "A pixel-perfect Amazon UI clone built with HTML and CSS, replicating home page, product grid, and all core layouts.",
    image: "/images/amazon.jpg",
    category: "Frontend",
    tech: ["HTML", "CSS"],
    link: "https://github.com/GKmaster-coder/Amazon_clone.com.git",
  },

  // ---------------- EXISTING PROJECTS ----------------
  {
    id: 5,
    title: "E-Commerce Website (MERN)",
    description:
      "Full MERN stack e-commerce platform with admin panel, user authentication, product management, and secure Stripe payments.",
    image: "/images/ecommerce.jpg",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://yourprojectlink.com",
  },
  {
    id: 6,
    title: "Fitness & Diet Planner",
    description:
      "Full-stack fitness tracking system with BMI calculator, daily logs, nutrition tracking, and graphical progress charts.",
    image: "/images/fitness.jpg",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    id: 7,
    title: "Weather Dashboard",
    description:
      "A modern weather dashboard using OpenWeather API, featuring real-time forecasts and dynamic charts.",
    image: "/images/weather.jpg",
    category: "Frontend",
    tech: ["React", "API", "Chart.js"],
    link: "#",
  },
  {
    id: 8,
    title: "Doctor Appointment System",
    description:
      "An online doctor appointment platform with Strapi backend, real-time status updates, and video calling integration.",
    image: "/images/doctor.jpg",
    category: "Full Stack",
    tech: ["React", "Strapi", "Tailwind", "Socket.io"],
    link: "#",
  },
  {
    id: 9,
    title: "Chatbot Assistant",
    description:
      "A conversational AI chatbot using Node.js and IBM Watson Assistant with NLP-based smart responses.",
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
