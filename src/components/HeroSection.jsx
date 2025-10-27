import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import useTypewriter from "../hooks/useTypewriter";
import heroImg from "/assets/Hero1.png";


const particlesOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 120,
  interactivity: {
    detectsOn: "canvas",
    events: { 
      onHover: { enable: true, mode: "repulse" }, 
      resize: true 
    }
  },
  particles: {
    number: { value: 45, density: { enable: true, area: 800 } },
    color: { value: ["#f87171", "#ef4444", "#fecaca"] },
    opacity: { value: 0.8, random: { enable: true, minimumValue: 0.3 }},
    size: { value: 3, random: { enable: true, minimumValue: 1 }},
    move: { enable: true, speed: 0.5, direction: "none", outModes: "bounce" },
    links: {
      enable: true,
      distance: 150,
      color: "#ef4444",
      opacity: 0.4,
      width: 1
    }
  }
};

const HeroSection = ({ className = "" }) => {
  const roleText = useTypewriter(
    ["Software Developer", "Full-Stack Engineer", "Frontend Developer", "Problem Solver"],
    70,
    1200
  );

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // Enhanced stars with different colors and intensities
  const stars = useMemo(() => {
    return Array.from({ length: 80 }).map(() => {
      const size = Math.random() * 2 + 1;
      const colorIntensity = Math.random();
      let color = "white";
      if (colorIntensity > 0.7) color = "#60a5fa"; // blue
      if (colorIntensity > 0.85) color = "#f87171"; // red
      
      return {
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        size,
        color,
        delay: Math.random() * 8 + "s",
        duration: (Math.random() * 6 + 4) + "s",
        twinkle: Math.random() > 0.6,
      };
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className={`relative overflow-hidden min-h-screen ${className}`}>
      <style>{`
        @keyframes floatStar {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(-100px) translateY(-100px) rotate(-45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100vw) translateY(100vh) rotate(-45deg); opacity: 0; }
        }
        .star {
          animation: floatStar infinite alternate ease-in-out;
        }
        .twinkle-star {
          animation: twinkle 4s infinite ease-in-out;
        }
        .cosmic-glow {
          background: radial-gradient(
            ellipse at center,
            rgba(239, 68, 68, 0.15) 0%,
            rgba(59, 130, 246, 0.1) 25%,
            rgba(139, 92, 246, 0.05) 50%,
            transparent 70%
          );
        }
      `}</style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900/30" />
      
      {/* Cosmic Glow Effect */}
      <div className="absolute inset-0 cosmic-glow" />
      
      {/* Static Stars */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
            className={`absolute rounded-full ${star.twinkle ? 'twinkle-star' : 'star'}`}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent"
            style={{
              top: `${15 + i * 25}%`,
              left: `${-20 + i * 10}%`,
              width: "80px",
              transform: `rotate(-45deg)`,
              animation: `shootingStar ${12 + i * 3}s infinite ${i * 4}s`,
            }}
          />
        ))}
      </div>

      <Particles
        id="hero-particles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 min-h-screen py-10 lg:py-16">

          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-sm font-medium text-red-300">
                  Available for new opportunities
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-white">Hello, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                  Gaurav Kashyap
                </span>
              </motion.h2>

              {/* Role */}
              <motion.div
                className="h-8 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-xl md:text-2xl font-semibold text-red-300/90">
                  {roleText}
                </span>
                <span className="ml-1 animate-pulse text-red-300">|</span>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                I turn complex ideas into seamless, high-impact web experiences — building
                modern, scalable, and performant applications that make a difference.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  onClick={scrollToProjects}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold shadow-2xl overflow-hidden backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative z-10">View My Work</span>
                  <FaArrowDown className="relative z-10 group-hover:translate-y-1 transition-transform" />
                </motion.button>

                <motion.a
                  href="/resume.pdf"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-red-500/30 text-red-300 font-semibold hover:border-red-400 hover:text-red-200 transition-all duration-300 backdrop-blur-sm bg-white/5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[ 
                  { Icon: FaGithub, href: "https://github.com/your" },
                  { Icon: FaLinkedin, href: "https://linkedin.com/in/your" },
                  { Icon: FaTwitter, href: "https://twitter.com/your" }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group p-3 rounded-xl bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-400/30 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <Icon className="text-2xl text-gray-400 group-hover:text-red-300 transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              animate={{
                y: [0, -15, 0],
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Enhanced Glow */}
              <div className="absolute inset-0 -inset-4 bg-gradient-to-r from-red-500/30 to-rose-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
              
              {/* Star Cluster around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <div className="absolute w-1 h-1 bg-blue-400 rounded-full twinkle-star" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full star" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-0 left-2 w-1 h-1 bg-red-300 rounded-full twinkle-star" style={{ animationDelay: '2s' }} />
              </div>
              
              {/* Image */}
              <div className="hidden lg:flex justify-center lg:justify-start relative z-10">
                <motion.img
                  src={heroImg}
                  alt="Gourav Kashyap"
                  className="w-64 sm:w-64 md:w-90 h-auto object-contain drop-shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center text-red-300/70 cursor-pointer backdrop-blur-sm bg-white/5 rounded-2xl p-3 border border-white/10"
            onClick={scrollToProjects}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <FaArrowDown className="text-lg" />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;