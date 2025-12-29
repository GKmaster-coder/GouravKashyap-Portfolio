import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const panelRef = useRef(null);
  const scrollTimer = useRef(null); // Ref for the scroll timeout

const navLinks = [ 
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "All Projects", path: "/all-projects" },
  { name: "Contact", path: "/contact" }
];


  // Logic to show/hide navbar based on scroll activity
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Always show navbar at the very top
      if (scrollY < 50) {
        setVisible(true);
        return;
      }

      // Hide while scrolling
      setVisible(false);

      // Clear the previous timer and set a new one to show navbar when scrolling stops
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        setVisible(true);
      }, 150); // Navbar reappears 150ms after user stops scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onOverlayMouseDown = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const overlayVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { delay: 0.2 } },
  };

  const panelVariant = {
    hidden: { x: "100%" },
    visible: { x: "0%", transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { x: "100%", transition: { ease: "easeInOut", duration: 0.3 } },
  };

  const linkVariant = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className="fixed top-0 left-0 w-full z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="w-full bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 py-3 md:py-4 flex items-center justify-between">
              
              {/* Logo + Name */}
              <NavLink
                to="/"
                className="flex items-center gap-3 z-60"
                onClick={() => setOpen(false)}
              >
                <img 
                  src="/logo2.png" // 👈 Replace with your actual logo path
                  alt="Logo" 
                  className="w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-md shadow-sm"
                />
                <span className="text-xl sm:text-2xl font-extrabold text-red-600 hover:text-red-400 transition-colors duration-300">
                  Gourav Kashyap
                </span>
              </NavLink>

              {/* Center Menu Button */}
              <div className="flex-1 flex justify-center max-w-xs">
                <button
                  onClick={() => setOpen((s) => !s)}
                  className="relative z-60 inline-flex items-center justify-center px-4 sm:px-6 py-2 rounded-full border border-red-500/30 bg-red-600 hover:bg-red-700 backdrop-blur-md shadow-lg hover:scale-105 transform transition active:scale-95"
                >
                  <span className="hidden md:inline text-white font-semibold tracking-wide text-sm sm:text-base">
                    {open ? "CLOSE" : "MENU"}
                  </span>
                  <span className="md:hidden inline-flex flex-col gap-1">
                    <span className={`w-5 sm:w-6 h-0.5 bg-white block transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`w-5 sm:w-6 h-0.5 bg-white block transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
                    <span className={`w-5 sm:w-6 h-0.5 bg-white block transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                  </span>
                </button>
              </div>

              {/* Contact Buttons */}
              <NavLink
                to="/contact"
                className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
              >
                Reach Out
              </NavLink>

              <NavLink
                to="/contact"
                className="md:hidden bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg shadow-md transition-all duration-300 text-sm active:scale-95"
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </nav>

          {/* Side Menu Overlay */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-40 flex justify-end"
                variants={overlayVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseDown={onOverlayMouseDown}
              >
                <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-md" aria-hidden />
                <motion.div
                  ref={panelRef}
                  variants={panelVariant}
                  className="relative w-full max-w-md h-full bg-neutral-950 border-l border-red-500/20 shadow-2xl flex flex-col"
                >
                  <div className="flex flex-col h-full pt-15 px-8 pb-10 overflow-y-auto">
                    <p className="text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 opacity-70">Navigation</p>
                    <motion.ul className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <motion.li key={link.path} variants={linkVariant}>
                          <NavLink
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `block py-2 text-4xl font-bold transition-all duration-300 hover:translate-x-2 ${
                                isActive ? "text-red-500 pl-2 border-l-4 border-red-500" : "text-white hover:text-red-400"
                              }`
                            }
                          >
                            {link.name}
                          </NavLink>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <div className="mt-auto pt-10 border-t border-white/10">
                      <p className="text-gray-500 text-sm mb-2">Say Hello</p>
                      <a href="mailto:gouravkashyap2468@gmail.com" className="text-white hover:text-red-500 transition-colors">
                        gouravkashyap2468@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}