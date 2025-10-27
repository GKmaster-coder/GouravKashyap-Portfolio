import React, { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactSpace from "./components/ContactSpace";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
      </Routes>
      <About/>
      <SkillsSection/>
      <ContactSpace/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
