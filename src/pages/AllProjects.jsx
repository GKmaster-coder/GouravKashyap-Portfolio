import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/allProjectsData";

const ValorProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Full Stack", "Portfolio"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* SCANLINE ANIMATION */}
      <div className="fixed inset-0 pointer-events-none z-60 overflow-hidden opacity-20">
        <motion.div 
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-0.5 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
        />
      </div>

   {/* HEADER SECTION */}
<div className="relative pt-24 pb-12 px-8 md:px-16 border-b border-red-900/20 bg-linear-to-b from-red-950/10 to-transparent">
  <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-red-600 text-black px-2 py-0.5 text-[10px] font-black tracking-tighter uppercase">
          Showcase
        </span>
        <div className="h-px w-12 bg-red-600/50" />
      </div>

      <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.8]">
        LIVE<span className="text-red-600"> </span><br />
        PROJ<span className="text-red-600">ECTS</span>
      </h1>

      <p className="mt-6 max-w-xl text-sm text-zinc-400 leading-relaxed">
        A curated collection of real-world projects, showcasing design precision,
        scalable architecture, and production-ready deployments.
      </p>
    </div>

    <div className="flex flex-wrap gap-2 justify-end">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-8 py-3 text-xs font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden group ${
            selectedCategory === cat
              ? "text-white"
              : "text-zinc-600 hover:text-zinc-300"
          }`}
        >
          {selectedCategory === cat && (
            <motion.div
              layoutId="tab"
              className="absolute inset-0 bg-red-600 -z-10 skew-x-[-20deg]"
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  </div>
</div>


      {/* WIDE RECTANGULAR GRID */}
      <div className="p-8 md:p-16">
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-red-600/50 transition-all duration-500"
              >
                {/* WIDE ASPECT CONTAINER */}
                <div className="relative aspect-21/9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                  />
                  
                  {/* TACTICAL OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
                  
                  <div className="absolute top-0 right-0 p-4">
                    <div className="text-[10px] font-mono text-red-600 font-bold tracking-tighter bg-black/80 px-2 py-1">
                   {project.category.toUpperCase()}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-8 max-w-[60%]">
                    <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold line-clamp-1 group-hover:text-white transition-colors">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* ACTION BAR */}
                <div className="px-8 py-4 bg-black/60 flex justify-between items-center border-t border-zinc-800 group-hover:border-red-600/30 transition-colors">
                  <div className="flex gap-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-black text-zinc-500 uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="relative px-6 py-2 bg-zinc-800 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-black transition-all"
                  >
                    ACCESS_PROJECT
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* FOOTER STATS */}
      <div className="px-16 py-10 opacity-30 flex gap-20 overflow-hidden whitespace-nowrap">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-4xl font-black italic text-zinc-800 uppercase">System Integrity 100%</span>
            <div className="h-2 w-2 bg-red-600 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValorProjects;