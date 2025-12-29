import React from "react";
import profile from "/assets/about3.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main
      className="min-h-screen w-full bg-linear-to-br from-[#0a0a0a] to-[#1a0a0a] text-white px-6 sm:px-10 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24"
      role="main"
    >
      {/* Left: Profile Image */}
      <figure className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="rounded-3xl overflow-hidden border-2 border-red-500/40 shadow-2xl shadow-red-500/30 transition-all duration-700 group-hover:shadow-red-500/50 group-hover:border-red-500/60">
          <img
            src={"https://res.cloudinary.com/dmhpenz2y/image/upload/v1767000176/about3_zglfoy.png"}
            alt="Gourav Kashyap portrait"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-red-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>
        <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>
      </figure>

      {/* Right Content */}
      <article className="flex-1 max-w-3xl space-y-8 text-center md:text-left">
        
        {/* Header Section */}
        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-linear-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient">
            Gourav Kashyap
          </h1>

          <div className="w-16 sm:w-20 h-1 mx-auto md:mx-0 bg-linear-to-r from-red-500 to-red-600 rounded-full"></div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            MERN & Java Full Stack Developer
          </h2>
        </header>

        {/* Description Section */}
        <section aria-labelledby="intro-text">
          <p id="intro-text" className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a <span className="text-red-400 font-semibold">Full Stack Developer Intern at Ntechzy Pvt. Ltd.</span> with hands-on experience in{" "}
            <span className="text-red-400 font-semibold">MERN and Java Full Stack development</span>. I specialize in building scalable, high-performance web applications with{" "}
            <span className="text-red-400 font-semibold">React.js, Node.js, Express, MongoDB, Spring Boot,</span> and <span className="text-red-400 font-semibold">MySQL</span>.
            My focus is on writing clean, maintainable code and delivering smooth, responsive user interfaces.
          </p>
        </section>

        {/* Stats Section */}
        <section aria-label="Developer stats">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { label: "Experience", value: "1+ Years", desc: "Web Development" },
              { label: "Stacks", value: "MERN & Java", desc: "Full Stack Expertise" },
              { label: "Focus", value: "Scalability", desc: "Clean & Performant Apps" },
            ].map((stat, i) => (
              <article
                key={i}
                className="bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 text-center transition-all duration-500 hover:border-red-500/60 hover:shadow-2xl hover:-translate-y-2"
              >
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <h3 className="text-lg sm:text-xl font-bold">{stat.value}</h3>
                <p className="text-xs text-gray-500">{stat.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Buttons Section */}
        <nav className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 mt-10">
          <a
            href="https://github.com/GKmaster-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl shadow-xl hover:-translate-y-1 transition-all duration-500 font-semibold"
          >
            View Projects
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
          </a>

          <Link to="/contact">
            <button className="px-6 py-3 border-2 border-red-600/60 hover:bg-red-600/10 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
              Get in Touch
            </button>
          </Link>
        </nav>

        {/* About Details */}
        <section aria-labelledby="about-me" className="mt-12">
          <h3 id="about-me" className="text-xl sm:text-2xl font-bold flex justify-center md:justify-start gap-2">
            <span className="w-2 bg-red-600 rounded-full"></span> About Me
          </h3>

          <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
            I completed my <span className="text-red-400 font-semibold">BCA from MIMT, Greater Noida</span> (2022–25) and Java Full Stack training at{" "}
            <span className="text-red-400 font-semibold">QSpiders Noida</span>.  
            Passionate about both <span className="text-red-400 font-semibold">frontend and backend development</span>, I love transforming complex problems into elegant, real-world solutions.  
            I’m currently exploring technologies like <span className="text-red-400 font-semibold">Next.js</span>, <span className="text-red-400 font-semibold">Docker</span>, and <span className="text-red-400 font-semibold">AWS</span> to stay ahead in full-stack innovation.
          </p>
        </section>
      </article>
    </main>
  );
};

export default About;
