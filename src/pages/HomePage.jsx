// src/pages/HomePage.jsx
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import About from "../components/About";
import SkillsSection from "../components/SkillsSection";
import Projects from "../components/Projects";
import Terminal from "../components/Terminal";
import ContactSpace from "../components/ContactSpace";
import Footer from "../components/Footer";

function ScrollToSection({ sections }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    if (path === "") {
      sections.home.current?.scrollIntoView({ behavior: "smooth" });
    } else if (sections[path]) {
      sections[path].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, sections]);

  return null;
}

const HomePage = () => {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  return (
    <div className="bg-black text-white">
      <ScrollToSection sections={sections} />

      <div ref={sections.home}>
        <HeroSection />
      </div>

      <div ref={sections.about}>
        <About />
      </div>

      <div ref={sections.skills}>
        <SkillsSection />
      </div>

      <div ref={sections.projects}>
        <Projects />
      </div>

      <Terminal />

      <div ref={sections.contact}>
        <ContactSpace />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
