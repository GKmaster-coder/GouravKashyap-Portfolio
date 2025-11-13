import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaDatabase,
  FaAws,
  FaDocker,
  FaFire, // Added missing import
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiRedux,
  SiVercel,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "Java", icon: <FaJava className="text-4xl text-red-500" />, color: "from-red-500/20 to-red-600/10", borderColor: "border-red-500/40" },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "React.js", icon: <FaReact className="text-4xl text-red-400" />, color: "from-red-500/20 to-red-600/10", borderColor: "border-red-400/40" },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-red-500" />, color: "from-red-500/20 to-red-600/10", borderColor: "border-red-500/40" },
    { name: "Express.js", icon: <SiExpress className="text-4xl text-red-300" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-300/40" },
    { name: "Spring Boot", icon: <SiSpringboot className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "Hibernate", icon: <SiHibernate className="text-4xl text-red-300" />, color: "from-red-300/20 to-red-400/10", borderColor: "border-red-300/40" },
    { name: "HTML5", icon: <SiHtml5 className="text-4xl text-red-500" />, color: "from-red-500/20 to-red-600/10", borderColor: "border-red-500/40" },
    { name: "CSS3", icon: <SiCss3 className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-red-300" />, color: "from-red-300/20 to-red-400/10", borderColor: "border-red-300/40" },
    { name: "Redux (Basics)", icon: <SiRedux className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "MySQL", icon: <SiMysql className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "MongoDB (Basics)", icon: <SiMongodb className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-4xl text-red-500" />, color: "from-red-500/20 to-red-600/10", borderColor: "border-red-500/40" },
    { name: "Postman", icon: <FaDatabase className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "AWS (Basics)", icon: <FaAws className="text-4xl text-red-500" />, color: "from-red-500/20 to-red-600/10", borderColor: "border-red-500/40" },
    { name: "Docker", icon: <FaDocker className="text-4xl text-red-400" />, color: "from-red-400/20 to-red-500/10", borderColor: "border-red-400/40" },
    { name: "VS Code & Eclipse", icon: <SiVercel className="text-4xl text-red-300" />, color: "from-red-300/20 to-red-400/10", borderColor: "border-red-300/40" },
  ];

  // Duplicate the array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="relative py-20 bg-slate-900 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        .marquee-pause:hover {
          animation-play-state: paused;
        }
        .skill-card-glow {
          box-shadow: 
            0 0 20px rgba(239, 68, 68, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-linear(ellipse_at_center,var(--tw-gradient-stops))] from-red-500/15 via-transparent to-transparent" />
      
      {/* Animated Red Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6 pulse-glow"
          >
            <FaFire className="text-red-400 animate-pulse" />
            <span className="text-sm font-medium text-red-300">
              Technologies & Tools
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life and build amazing digital experiences
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* First Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex space-x-6 marquee-pause"
          >
            <div className="flex space-x-6 animate-marquee">
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="shrink-0 w-40 h-40 bg-linear-to-br from-white/5 to-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-2xl skill-card-glow flex flex-col items-center justify-center gap-3 p-4 cursor-pointer group relative overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -skew-x-12 animate-pulse" />
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <span className="relative z-10 text-white font-semibold text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-200 group-hover:to-rose-200 transition-all duration-300">
                    {skill.name}
                  </span>
                  
                  {/* Border Glow on Hover */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${skill.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Second Marquee (Reverse) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-6 mt-8 marquee-pause"
          >
            <div className="flex space-x-6 animate-marquee-reverse">
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`reverse-${skill.name}-${index}`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-white/5 to-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-2xl skill-card-glow flex flex-col items-center justify-center gap-3 p-4 cursor-pointer group relative overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -skew-x-12 animate-pulse" />
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <span className="relative z-10 text-white font-semibold text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-200 group-hover:to-rose-200 transition-all duration-300">
                    {skill.name}
                  </span>
                  
                  {/* Border Glow on Hover */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${skill.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-20" />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "1", label: "Years Experience" },
            { number: "100%", label: "Code Quality" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-2xl skill-card-glow group hover:bg-red-900/30 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-rose-300 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-red-200/80 text-sm mt-2 group-hover:text-red-100 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;