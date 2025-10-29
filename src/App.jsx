import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ContactSpace from "./components/ContactSpace";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Feedback from "./components/Feedback";
import Terminal from "./components/Terminal";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      {/* ✅ Intro Animation (Only shows once) */}
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {/* ✅ Main UI (hidden until intro finishes) */}
      {!showIntro && (
        <>
          <Navbar />

          <Routes>
            {/* ✅ Show Hero only on Home route */}
            <Route path="/" element={<HeroSection />} />

            {/* ✅ Other routes (if you want to navigate later) */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/contact" element={<ContactSpace />} />
            
          </Routes>

          {/* ✅ These sections will appear on ALL pages (optional: can move them into routes if needed) */}
          <About />
          <SkillsSection />
          {/* <Project/> */}
          <Terminal/>
          <Feedback/>
          <ContactSpace />
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
