// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllProjects from "./pages/AllProjects";

// ✅ Wrapper to manage intro only on homepage
function AppContent() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);

  // Show intro only if we're on the homepage
  useEffect(() => {
    if (location.pathname === "/") {
      setShowIntro(true);
    } else {
      setShowIntro(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* ✅ Only show IntroAnimation on homepage */}
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <Navbar />

          <Routes>
            {/* ✅ Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* ✅ All Projects page */}
            <Route path="/all-projects" element={<AllProjects />} />

            {/* Optional fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
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
