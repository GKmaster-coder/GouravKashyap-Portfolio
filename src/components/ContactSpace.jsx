// ContactSpace.jsx
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { send } from "@emailjs/browser";
import astronaut from "/assets/Astra.png";
import { FaPaperPlane, FaRocket } from "react-icons/fa";

const ContactSpace = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Enhanced stars with different colors and intensities
  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map(() => {
      const size = Math.random() * 3 + 1;
      const colorIntensity = Math.random();
      let color = "white";
      if (colorIntensity > 0.8) color = "#60a5fa"; // blue
      if (colorIntensity > 0.9) color = "#f87171"; // red
      
      return {
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        size,
        color,
        delay: Math.random() * 10 + "s",
        duration: (Math.random() * 10 + 5) + "s",
        twinkle: Math.random() > 0.7,
      };
    });
  }, []);

  const onSubmit = async (data) => {
    try {
      await send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          service_needed: data.service,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#020204] relative overflow-hidden flex items-center py-10">
      <style>{`
        @keyframes floatAstronaut {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes moveStar {
          from { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          to { transform: translateY(-40px) translateX(20px); opacity: 1; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .star {
          animation: moveStar infinite alternate ease-in-out;
        }
        .twinkle {
          animation: twinkle 3s infinite ease-in-out;
        }
        .glow-gradient {
          background: radial-gradient(
            ellipse at center,
            rgba(255, 0, 80, 0.15) 0%,
            rgba(59, 130, 246, 0.1) 30%,
            transparent 70%
          );
        }
        .form-glow {
          box-shadow: 
            0 0 60px rgba(59, 130, 246, 0.1),
            0 0 100px rgba(255, 0, 80, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .input-glow:focus {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
      `}</style>

      {/* Enhanced cosmic glow */}
      <div className="absolute inset-0 glow-gradient"></div>

      {/* Shooting stars container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shooting stars */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shooting-star"
            style={{
              top: `${20 + i * 30}%`,
              left: `${-10 + i * 15}%`,
              width: "60px",
              transform: `rotate(-45deg)`,
              animation: `shootStar ${8 + i * 2}s infinite ${i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: s.color,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
            className={`absolute rounded-full star ${s.twinkle ? "twinkle" : ""}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Astronaut with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
            className="flex justify-center relative"
          >
            <div className="relative">
              <motion.img 
                src={astronaut} 
                className="w-[420px] select-none relative z-10 astronaut-float"
                style={{ animation: "floatAstronaut 6s ease-in-out infinite" }}
              />
              {/* Astronaut glow effect */}
              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full scale-110 z-0"></div>
            </div>
          </motion.div>

          {/* Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3
            }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/15 rounded-3xl p-8 backdrop-blur-xl form-glow relative overflow-hidden">
              {/* Form background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/3 -skew-x-12 animate-pulse"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="p-2 bg-red-600 rounded-lg"
                  >
                    <FaRocket className="text-white text-lg" />
                  </motion.div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Launch Your Project
                  </h2>
                </div>
                <p className="text-white/70 mb-8 text-lg">
                  Ready to bring your ideas to orbit? Let's create something amazing together.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <input
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                        className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 input-glow transition-all duration-300"
                      />
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2 flex items-center gap-1"
                        >
                          • Name is required
                        </motion.p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        {...register("email", { required: true })}
                        placeholder="Your Email"
                        type="email"
                        className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 input-glow transition-all duration-300"
                      />
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2 flex items-center gap-1"
                        >
                          • Email is required
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <select
                      {...register("service", { required: true })}
                      className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-red-500 input-glow transition-all duration-300 appearance-none"
                    >
                      <option value="" className="text-gray-700">Select a service</option>
                      <option value="Web Development" className="text-gray-700">Web Development</option>
                      <option value="React Projects" className="text-gray-700">React Projects</option>
                      <option value="UI/UX Design" className="text-gray-700">UI/UX Design</option>
                      <option value="Full Stack App" className="text-gray-700">Full Stack App</option>
                    </select>
                    {errors.service && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        • Please select a service
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      {...register("message", { required: true })}
                      placeholder="Tell me about your project... 🚀"
                      rows={5}
                      className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 input-glow transition-all duration-300 resize-none"
                    />
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        • Please write your message
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-red-600 to-amber-700 hover:from-red-700 hover:to-amber-900 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-200" />
                    {isSubmitting ? "Launching..." : "Launch Message"}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add shooting star animation */}
      <style>{`
        @keyframes shootStar {
          0% { transform: translateX(-100px) translateY(-100px) rotate(-45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100vw) translateY(100vh) rotate(-45deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ContactSpace;