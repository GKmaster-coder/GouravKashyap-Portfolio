import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_CONFIG = {
  GREETING_DURATION: 180,
  FINAL_DELAY: 1000,
  LOGO_DURATION: 1500, // How long to show the logo
  EXIT_DURATION: 1.2,
  TEXT_ANIMATION_DURATION: 0.2,
};

const GREETINGS = [
  "Hello", "नमस्ते", "Hola", "Bonjour", "Ciao", "Olá", 
  "こんにちは", "안녕하세요", "你好", "Hallo", "Salam", 
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "नमस्ते", "Let's Go..."
];

const IntroAnimation = ({ onFinish }) => {
  const greetings = useMemo(() => GREETINGS, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false); // Controls logo visibility
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    if (currentIndex < greetings.length - 1) {
      // Step 1: Cycle through greetings
      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, ANIMATION_CONFIG.GREETING_DURATION);
    } else {
      // Step 2: After last greeting, show the logo
      timeoutId = setTimeout(() => {
        setShowLogo(true);
        
        // Step 3: Wait for logo display, then exit everything
        setTimeout(() => {
          setIsVisible(false);
          onFinish();
        }, ANIMATION_CONFIG.LOGO_DURATION);
        
      }, ANIMATION_CONFIG.FINAL_DELAY);
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, greetings.length, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100vh",
            opacity: 0,
            transition: { duration: ANIMATION_CONFIG.EXIT_DURATION, ease: "easeInOut" }
          }}
        >
          {/* GREETING TEXT */}
          {!showLogo && (
            <motion.h1
              key={currentIndex}
              className="text-white text-7xl font-bold text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -20 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: ANIMATION_CONFIG.TEXT_ANIMATION_DURATION }}
            >
              {greetings[currentIndex]}
            </motion.h1>
          )}

          {/* LOGO ZOOM MOTION */}
          {showLogo && (
            <motion.img
              src="/logo2.png" // Ensure this path is correct in your public folder
              alt="Logo"
              className="w-48 h-48 md:w-100 md:h-100 object-contain"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;