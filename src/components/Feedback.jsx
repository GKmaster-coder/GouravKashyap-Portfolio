import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Full Stack Developer at TCS",
    feedback:
      "Gourav Kashyap is an exceptional MERN stack developer. His problem-solving approach and clean code style helped us build a scalable web application on time.",
    img: "https://i.pinimg.com/1200x/33/68/c4/3368c4cf650b851ed3f13b87bc882db9.jpg",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Product Manager at CodeWave",
    feedback:
      "Working with Gourav was a great experience. He developed a complete MERN stack dashboard for us with authentication, routing, and API integration—flawless work!",
    img: "https://i.pinimg.com/736x/95/44/95/954495cfc19ae65165b6bd6975cfb230.jpg",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    role: "Founder at DevSpark",
    feedback:
      "Gourav has an amazing ability to convert ideas into functional and interactive applications. He built our full-stack project using React, Node.js, and MongoDB with great precision.",
    img: "https://i.pinimg.com/736x/61/c0/0b/61c00bdbf6626ead1e1b3773a47838f8.jpg",
    rating: 4,
  },
  {
    name: "Sneha Gupta",
    role: "UI/UX Designer at PixelMate",
    feedback:
      "Gourav not only writes quality backend code but also has a strong eye for UI details. His MERN stack projects are both functional and visually appealing.",
    img: "https://i.pinimg.com/1200x/3c/41/63/3c4163f44ded9c5a30de44760e234146.jpg",
    rating: 5,
  },
];

const Feedback = () => {
  const carouselRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
          >
            <FaStar
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-red-500/10 rounded-full blur-xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Title with floating animation */}
      <motion.div
        variants={floatingAnimation}
        animate="animate"
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          What People{" "}
          <span className="text-red-500 drop-shadow-[0_0_10px_#ff4d4d]">
            Say
          </span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-red-500 to-red-600 mx-auto rounded-full" />
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-2 gap-10 px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            onHoverStart={() => setHoveredCard(i)}
            onHoverEnd={() => setHoveredCard(null)}
            viewport={{ once: true, margin: "-50px" }}
            className="relative rounded-xl bg-[#1a1a1a]/60 backdrop-blur-xl border border-red-900/40 
                     p-2 hover:shadow-[0_0_30px_#ff4d4d30] hover:border-red-500/70 transition-all duration-500 group cursor-pointer"
            variants={{
              hover: {
                y: -8,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }
            }}
          >
            {/* Floating quote icon */}
            <motion.div
              className="absolute -top-3 -left-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
              animate={{
                rotate: hoveredCard === i ? 360 : 0,
                scale: hoveredCard === i ? 1.2 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <FaQuoteLeft className="w-3 h-3 text-white" />
            </motion.div>

            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100"
              animate={{
                backgroundPosition: hoveredCard === i ? ["0% 0%", "100% 100%"] : "0% 0%",
              }}
              transition={{ duration: 2, repeat: hoveredCard === i ? Infinity : 0 }}
            />

            <div className="relative z-10 flex flex-col items-center">
              {/* Animated avatar */}
              <motion.div
                className="relative mb-4"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 rounded-full bg-linear-to-r from-red-500 to-red-600 p-1">
                  <motion.img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full rounded-full object-cover border-2 border-[#1a1a1a]"
                    whileHover={{
                      scale: 1.1,
                    }}
                  />
                </div>
                {/* Online indicator */}
                <motion.div
                  className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1a1a]"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Star rating */}
              <StarRating rating={t.rating} />

              {/* Feedback text with typing animation */}
              <motion.p
                className="text-gray-300 text-center italic leading-relaxed min-h-[120px] flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                "{t.feedback}"
              </motion.p>

              {/* Name with slide animation */}
              <motion.h3
                className="text-xl font-semibold mt-6 text-red-400"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.3 }}
              >
                {t.name}
              </motion.h3>

              {/* Role with fade animation */}
              <motion.p
                className="text-sm text-gray-500 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.4 }}
              >
                {t.role}
              </motion.p>
            </div>

            {/* Floating particles on hover */}
            {hoveredCard === i && (
              <>
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0,
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-red-400 rounded-full"
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden px-6 relative">
        {/* Navigation Arrows */}
        <motion.button
          onClick={scrollLeft}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 border border-red-400/40 w-10 h-10 rounded-full flex justify-center items-center backdrop-blur-md shadow-lg z-10"
        >
          <FaArrowLeft className="text-red-400" />
        </motion.button>
        
        <motion.button
          onClick={scrollRight}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 border border-red-400/40 w-10 h-10 rounded-full flex justify-center items-center backdrop-blur-md shadow-lg z-10"
        >
          <FaArrowRight className="text-red-400" />
        </motion.button>

        {/* Slider */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[85%] snap-center bg-[#1a1a1a]/60 backdrop-blur-xl border border-red-900/40 p-6 rounded-xl hover:border-red-500 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border border-red-500"
                  />
                </motion.div>
                
                <StarRating rating={t.rating} />
                
                <p className="text-gray-300 text-center mt-4 italic">
                  "{t.feedback}"
                </p>
                <h3 className="text-lg font-semibold mt-4 text-red-400">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            background: "linear-gradient(45deg, #dc2626, #ef4444)",
            boxShadow: "0 0 30px rgba(239, 68, 68, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Read More Testimonials
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Feedback;