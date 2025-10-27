import React, { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
