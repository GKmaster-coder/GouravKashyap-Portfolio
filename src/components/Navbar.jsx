import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true); // 👈 new state for navbar visibility
  const panelRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    {name:"All Projects",path:"/all-projects"}
  ];

  // 🔥 Hide navbar after scrolling down 2 sections (about 2 view heights)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 2; // hide after 2 sections
      setVisible(scrollY < threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    hidden: { opacity: 0, pointerEvents: "none" },
    visible: { opacity: 1, pointerEvents: "auto", transition: { when: "beforeChildren", staggerChildren: 0.06 } },
    exit: { opacity: 0, transition: { when: "afterChildren" } },
  };

  const panelVariant = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { type: "spring", stiffness: 110, damping: 18 } },
    exit: { y: "-100%", opacity: 0, transition: { ease: "easeInOut" } },
  };

  const linkVariant = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.35 } },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className="fixed top-0 left-0 w-full z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4 }}
        >
          <nav className="w-full bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 py-3 md:py-4 flex items-center justify-between">
              {/* Logo */}
              <NavLink
                to="/"
                className="text-xl sm:text-2xl md:text-2xl font-extrabold text-red-600 hover:text-red-400 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                Gourav Kashyap
              </NavLink>

              {/* Center Menu Button */}
              <div className="flex-1 flex justify-center max-w-xs">
                <button
                  onClick={() => setOpen((s) => !s)}
                  aria-expanded={open}
                  aria-label="Open menu"
                  className="relative inline-flex items-center justify-center px-4 sm:px-6 py-2 rounded-full border border-red-500/30 bg-red-600 hover:bg-red-700 backdrop-blur-md shadow-lg hover:scale-105 transform transition active:scale-95"
                >
                  <span className="hidden md:inline text-white font-semibold tracking-wide text-sm sm:text-base">MENU</span>
                  <span className="md:hidden inline-flex flex-col gap-1">
                    <span className={`w-5 sm:w-6 h-0.5 bg-white block transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`w-5 sm:w-6 h-0.5 bg-white block transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                    <span className={`w-5 sm:w-6 h-0.5 bg-white block transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                  </span>
                </button>
              </div>

              {/* Desktop Contact Button */}
              <NavLink
                to="/contact"
                className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Reach Out
              </NavLink>

              {/* Mobile Contact Button */}
              <NavLink
                to="/contact"
                className="md:hidden bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg shadow-md transition-all duration-300 text-sm active:scale-95"
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </nav>

          {/* Menu Overlay */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-40 flex items-start justify-center"
                variants={overlayVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseDown={onOverlayMouseDown}
              >
                <motion.div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden />
                <motion.div
                  ref={panelRef}
                  className="relative w-full max-w-4xl mx-auto mt-10 md:mt-20 rounded-b-2xl overflow-hidden border border-red-500/20"
                  variants={panelVariant}
                >
                  <div className="bg-gradient-to-b from-red-900/90 to-black/80 px-6 sm:px-8 py-8 md:py-12 relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-4 right-4 text-white text-2xl md:text-3xl leading-none hover:text-red-400 transition-colors duration-300 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-white/10"
                      aria-label="Close menu"
                    >
                      ×
                    </button>

                    {/* Desktop Links */}
               <motion.ul className="hidden md:grid grid-cols-2 gap-6 text-center">
  {navLinks.map((link) => (
    <motion.li key={link.path} variants={linkVariant}>
      <NavLink
        to={link.path}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `block py-4 text-3xl font-semibold rounded-lg transition-all duration-300 hover:bg-red-500/20 hover:scale-105 ${
            isActive
              ? "text-red-400 bg-red-500/10 border border-red-500/30"
              : "text-white"
          }`
        }
      >
        {link.name}
      </NavLink>
    </motion.li>
  ))}
</motion.ul>

                    {/* Mobile Links */}
                    <motion.ul className="md:hidden flex flex-col gap-4 text-center">
                      {navLinks.map((link) => (
                        <motion.li key={link.path} variants={linkVariant}>
                          <NavLink
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `block py-3 px-4 text-xl font-semibold rounded-lg transition-all duration-300 hover:bg-red-500/20 hover:scale-105 active:scale-95 ${
                                isActive
                                  ? "text-red-400 bg-red-500/10 border border-red-500/30"
                                  : "text-white"
                              }`
                            }
                          >
                            {link.name}
                          </NavLink>
                        </motion.li>
                      ))}
                    </motion.ul>
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
