import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const EXPERIENCES = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Ntechzy Pvt. Ltd.",
    period: "Dec 2025 – Present",
    desc: "Working on end-to-end web application development by building scalable REST APIs, implementing responsive frontend interfaces, and integrating databases to deliver production-ready features.",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Ntechzy Pvt. Ltd.",
    period: "May 2025 – Nov 2025",
    desc: "Assisted in developing full-stack web applications, creating reusable frontend components, implementing backend APIs, and fixing bugs while learning industry best practices and workflows.",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
  },
];


const ExperienceCard = ({ exp, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex w-full mb-24 ${isEven ? "justify-start" : "justify-end"}`}
        >
            {/* The Card */}
            <div className={`w-full md:w-[45%] p-6 bg-zinc-900/50 border border-zinc-800 backdrop-blur-md rounded-2xl group hover:border-red-500/50 transition-colors duration-500`}>
                <span className="text-red-500 font-mono text-sm tracking-widest">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{exp.role}</h3>
                <p className="text-zinc-400 font-medium">{exp.company}</p>
                <p className="text-zinc-500 mt-4 leading-relaxed">{exp.desc}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                    {exp.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-[10px] uppercase tracking-tighter bg-red-500/10 text-red-400 border border-red-500/20 rounded-full">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Connection Dot on the line */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-4 h-4 bg-black border-2 border-red-500 rounded-full z-10" />
                <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full blur-md animate-pulse" />
            </div>
        </motion.div>
    );
};

const ExperienceSection = () => {
    const containerRef = useRef(null);

    // Track scroll progress for the center line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative bg-black py-20 px-6 overflow-hidden roboto">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center mb-28">
                    <span className="block text-sm uppercase tracking-[0.3em] text-red-500 mb-4">
                        Professional Journey
                    </span>
                    <span className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-tight">
                        Experience
                    </span>
                    <span className="block w-24 h-1 mx-auto mt-6 rounded-full bg-linear-to-r from-red-600 to-red-400" />
                </h2>

                <div className="relative">
                    {/* Central Neon Red Line (Background) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2 hidden md:block" />

                    {/* Central Neon Red Line (Progress) */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)] origin-top -translate-x-1/2 hidden md:block"
                    />

                    {/* Experience List */}
                    <div className="relative z-10">
                        {EXPERIENCES.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;