import React from "react";
import profile from "/assets/boy.jpg";

const About = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] to-[#1a0a0a] text-white px-6 sm:px-10 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
      
      {/* Left: Enhanced Profile Image */}
      <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="rounded-3xl overflow-hidden border-2 border-red-500/40 shadow-2xl shadow-red-500/30 transition-all duration-700 group-hover:shadow-red-500/50 group-hover:border-red-500/60">
          <img
            src={profile}
            alt="Gourav Kashyap"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 max-w-3xl space-y-8 text-center md:text-left">
        
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient">
            Gourav Kashyap
          </h1>
          <div className="w-16 sm:w-20 h-1 mx-auto md:mx-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            Full Stack Developer
          </h2>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          I build <span className="text-red-400 font-semibold">scalable and modern web applications</span> with clean architecture, high performance, and smooth UI/UX. My stack includes{" "}
          <span className="text-red-400 font-semibold">React, Next.js, Node.js, Express, MongoDB</span> and REST APIs—turning ideas into awesome apps.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            { label: "Experience", value: "1+ years", desc: "Building apps" },
            { label: "Specialty", value: "Full Stack", desc: "End-to-end" },
            { label: "Focus", value: "Performance", desc: "User-first UX" }
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 text-center transition-all duration-500 hover:border-red-500/60 hover:shadow-2xl hover:-translate-y-2">
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <h3 className="text-lg sm:text-xl font-bold">{stat.value}</h3>
              <p className="text-xs text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 mt-10">
          <button className="group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl shadow-xl hover:-translate-y-1 transition-all duration-500 font-semibold">
            View Projects
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"></div>
          </button>
          <button className="px-6 py-3 border-2 border-red-600/60 hover:bg-red-600/10 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
            Get in Touch
          </button>
        </div>

        {/* About Details */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold flex justify-center md:justify-start gap-2">
            <span className="w-2 bg-red-600 rounded-full"></span> About Me
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
            I'm a passionate developer who loves building high-performance web experiences using clean UI, powerful backend, and engaging digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
