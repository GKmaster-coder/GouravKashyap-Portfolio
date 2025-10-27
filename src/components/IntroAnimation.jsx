import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_CONFIG = {
  GREETING_DURATION: 180,
  FINAL_DELAY: 1000,
  EXIT_DURATION: 1.2,
  TEXT_ANIMATION_DURATION: 0.2,
};

const GREETINGS = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Ciao",
  "Olá",
  "Здравствуйте",
  "Merhaba",
  "Γειά",
  "Hej",
  "Hallo",
  "Salam",
];

const IntroAnimation = ({ onFinish }) => {
  const greetings = useMemo(() => GREETINGS, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    if (currentIndex < greetings.length - 1) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, ANIMATION_CONFIG.GREETING_DURATION);
    } else {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        onFinish();
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
          <motion.h1
            key={currentIndex}
            className="text-white text-5xl font-bold text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: ANIMATION_CONFIG.TEXT_ANIMATION_DURATION }}
          >
            {greetings[currentIndex]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
