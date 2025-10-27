import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

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
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full bg-transparent">
        <div className="container mx-auto px-10 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-lg md:text-2xl font-extrabold text-red-500">
            Gourav Kashyap
          </NavLink>

          <div className="flex-1 flex justify-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Open menu"
              className="relative inline-flex items-center justify-center px-6 py-2 rounded-full border border-red-500/30 bg-gradient-to-r from-red-700/80 to-red-600/70 backdrop-blur-md shadow-lg hover:scale-105 transform transition"
            >
              <span className="hidden md:inline text-white font-semibold tracking-wide">MENU</span>
              <span className="md:hidden inline-flex flex-col gap-1">
                <span className="w-6 h-0.5 bg-white block" />
                <span className="w-6 h-0.5 bg-white block" />
              </span>
            </button>
          </div>

          <NavLink
            to="/contact"
            className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            Reach Out
          </NavLink>
        </div>
      </nav>

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
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-md"
              aria-hidden
            />

            <motion.div
              ref={panelRef}
              className="relative w-full max-w-4xl mx-auto mt-10 rounded-b-2xl overflow-hidden"
              variants={panelVariant}
            >
              <div className="bg-gradient-to-b from-red-900/80 to-black/60 px-6 sm:px-8 py-10 relative">

                {/* ✅ Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-red-400 transition"
                >
                  ×
                </button>

                <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                  {navLinks.map((link, i) => (
                    <motion.li key={link.path} variants={linkVariant}>
                      <NavLink
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block py-3 text-2xl sm:text-3xl font-semibold hover:scale-105 transition ${
                            isActive ? "text-red-400" : "text-white"
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
    </header>
  );
}
