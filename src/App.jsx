import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ContactSpace from "./components/ContactSpace";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import Terminal from "./components/Terminal";
import Project from "./components/Project";

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

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // ✅ Create refs for each section
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  return (
    <Router>
      {/* Intro Animation */}
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
        
          <Navbar />

          {/* Scroll to section when route changes */}
          <Routes>
            <Route path="/*" element={<ScrollToSection sections={sections} />} />
          </Routes>

          {/* ✅ All sections rendered on one page */}
          <div ref={sections.home}>
            <HeroSection />
          </div>

          <div ref={sections.about}>
            <About />
          </div>

          <div ref={sections.skills}>
            <SkillsSection />
          </div>

          <Terminal />
          <Feedback />

          <div ref={sections.contact}>
            <ContactSpace />
          </div>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;





// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import IntroAnimation from "./components/IntroAnimation";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import ContactSpace from "./components/ContactSpace";
// import SkillsSection from "./components/SkillsSection";
// import Footer from "./components/Footer";
// import Project from "./components/Project";
// import Feedback from "./components/Feedback";
// import Terminal from "./components/Terminal";
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   const [showIntro, setShowIntro] = useState(true);

//   return (
//     <Router>
//       <ScrollToTop/>
//       {/* ✅ Intro Animation (Only shows once) */}
//       {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

//       {/* ✅ Main UI (hidden until intro finishes) */}
//       {!showIntro && (
//         <>
//           <Navbar />

//           <Routes>
//             {/* ✅ Show Hero only on Home route */}
//             <Route path="/" element={<HeroSection />} />

//             {/* ✅ Other routes (if you want to navigate later) */}
//             <Route path="/about" element={<About />} />
//             <Route path="/skills" element={<SkillsSection />} />
//             <Route path="/contact" element={<ContactSpace />} />
            
//           </Routes>

//           {/* ✅ These sections will appear on ALL pages (optional: can move them into routes if needed) */}
//           <About />
//           <SkillsSection />
//           {/* <Project/> */}
//           <Terminal/>
//           <Feedback/>
//           <ContactSpace />
//           <Footer />
//         </>
//       )}
//     </Router>
//   );
// }

// export default App;

