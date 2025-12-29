import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const EXPERIENCES = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Ntechzy Pvt. Ltd.",
    period: "Dec 2025 – Present",
    desc: "Working on end-to-end web application development by building scalable REST APIs, implementing responsive frontend interfaces, and integrating databases.",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Ntechzy Pvt. Ltd.",
    period: "May 2025 – Nov 2025",
    desc: "Assisted in developing full-stack web applications, creating reusable frontend components, and fixing bugs while learning industry best practices.",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
  },
];

const ExperienceSection2 = () => {
  const targetRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Dynamically calculate how far the cards need to slide
  useEffect(() => {
    const calculateRange = () => {
      if (scrollRef.current) {
        // Range = Total width of cards - visible width of container
        setScrollRange(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };

    calculateRange();
    window.addEventListener("resize", calculateRange);
    return () => window.removeEventListener("resize", calculateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Performance Fix: use x (transform) instead of left
  // Logic Fix: scrollRange ensures we stop exactly at the last card
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  
  // Car travel: 0 to 90vw (stops before hitting the edge)
  const carX = useTransform(scrollYProgress, [0, 1], ["0vw", "90vw"]);
  
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950 font-sans">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="flex flex-col w-full">
          {/* Section Header */}
          <div className="px-6 md:px-12 mb-12">
            <h2 className="text-5xl md:text-8xl font-black text-white/10 uppercase tracking-tighter italic mb-10">
              Experience<span className="text-red-600 opacity-100">.</span>
            </h2>
          </div>

          <div className="relative">
            {/* The Moving Car - Switched to x for GPU acceleration */}
            <motion.div 
              style={{ x: carX }}
              className="absolute -top-16 z-30 pointer-events-none"
            >
              <div className="relative w-32 h-20 md:w-48">
                <img
                  src="https://res.cloudinary.com/dmhpenz2y/image/upload/v1767008059/red2_v4spn8.png"
                  alt="car"
                  className="w-full h-auto object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                />
                {/* Visual Polish: Headlight Glow */}
                <div className="absolute top-1/2 -right-2 w-8 h-4 bg-red-500/30 blur-xl rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Progress Track */}
            <div className="absolute top-0 left-0 w-full h-px bg-zinc-800" />
            <motion.div 
              style={{ scaleX, transformOrigin: "left" }}
              className="absolute top-0 left-0 w-full h-0.5 bg-red-600 shadow-[0_0_20px_#ef4444]"
            />

            {/* Horizontal Scroll Content */}
            <motion.div 
              ref={scrollRef}
              style={{ x }} 
              className="flex gap-12 px-6 md:px-12 pt-20"
            >
              {EXPERIENCES.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}
              
              {/* Future/Buffer space */}
              <div className="shrink-0 w-[300px] flex items-center">
                 <span className="text-zinc-800 font-black text-4xl md:text-7xl italic whitespace-nowrap select-none">
                   IN 
                   <br></br>
                   <span>PROGRESS</span>
                 </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for better organization
const ExperienceCard = ({ exp }) => (
  <div className="relative shrink-0 w-[300px] md:w-[500px]">
    {/* Connection Point */}
    <div className="absolute -top-[84px] left-0 w-3 h-3 bg-red-600 rounded-full shadow-[0_0_10px_#ef4444]" />
    
    <span className="block text-[10px] font-mono text-red-500 mb-4 tracking-widest uppercase">
      {exp.period}
    </span>

    <div className="p-6 md:p-10 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl backdrop-blur-md hover:border-red-500/40 transition-colors duration-500">
      <h3 className="text-xl md:text-3xl font-bold text-white mb-2 italic">
        {exp.role}
      </h3>
      <p className="text-red-500/80 text-sm font-bold mb-4 uppercase tracking-tight">{exp.company}</p>
      <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
        {exp.desc}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-10">
        {exp.tech.map((t) => (
          <span key={t} className="px-2 py-1 text-[9px] font-black uppercase text-zinc-400 border border-zinc-800 rounded bg-zinc-950/50">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceSection2;