import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllProjects from "./pages/AllProjects";

function AppContent() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowIntro(true);
    } else {
      setShowIntro(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* INTRO */}
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {/* MAIN APP */}
      {!showIntro && (
        <>
          <Navbar />

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <>
                    {/* BLACK TRANSITION LAYER (ANIMATION ONLY) */}
                   <motion.div
  className="fixed inset-0 bg-black z-40 pointer-events-none"
  initial={{ y: "0%" }}
  animate={{ y: "-100%" }}
  transition={{
    duration: 1.2,
    // This cubic-bezier creates a "slow start, fast middle, elegant finish"
    ease: [0.76, 0, 0.24, 1], 
    delay: 0.2, // Small delay allows the user to register the intro before it slides
  }}
/>

                    {/* HOME PAGE (UNCHANGED DESIGN) */}
                    <HomePage />
                  </>
                }
              />

              <Route path="/all-projects" element={<AllProjects />} />

              <Route path="*" element={<HomePage />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;