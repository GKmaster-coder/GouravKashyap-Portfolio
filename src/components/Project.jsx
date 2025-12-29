import React, { useEffect, useState, useRef, useMemo } from "react";
import img1 from "/assets/img1.JPG";
import img2 from "/assets/img2.JPG"
import img3 from "/assets/img3.JPG"
import photo1 from "/assets/photo1.JPG"
import photo2 from "/assets/photo2.PNG"
import photo3 from "/assets/photo3.png"
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { act } from "react";

const useIsMobile = (query = "(max-width: 639px)") => {
    const [isMobile, setIsMobile] = useState(() => {
        return typeof window !== "undefined" && window.matchMedia(query).matches;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mql = window.matchMedia(query);
        const handler = (e) => setIsMobile(e.matches);

        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [query]);

    return isMobile;
};

const Project = () => {
    const isMobile = useIsMobile();
    const scanRef = useRef(null);

    const projects = useMemo(
        () => [
            {
                title: "nk studio",
                link: "https://www.nk.studio/",
                bgColor: "#0d4d3d",
                image: isMobile ? photo1 : img1, // use mobile or desktop image
            },
            {
                title: "Gamily",
                link: "https://gamilyapp.com/",
                bgColor: "#3884d3",
                image: isMobile ? photo2 : img2,
            },
            {
                title: "Hungry Tiger",
                link: "https://www.eathungrytiger.com/",
                bgColor: "#dc9317",
                image: isMobile ? photo3 : img3,
            },
        ],
        [isMobile] // re-run only when `isMobile` changes
    );

    const { scrollYProgress } = useScroll({
        target: scanRef,
        offset: ["start start", "end end"]
    })

    const thresholds = projects.map((_, i) => (i + 1) / projects.length)

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const idx = thresholds.findIndex((t) => v <= t);
        setActiveIndex(idx === -1 ? thresholds.length - 1 : idx)
    });

    const activeProjects = projects[activeIndex]

    return (
        <>
            <section id="projects" className="relative text-white roboto" ref={scanRef}
                style={{
                    height: `${100 * projects.length}vh`,
                    backgroundColor: activeProjects.bgColor,
                    transition: "background-color 400ms ease"
                }}
            >
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
                    <h2 className={`text-3xl font-semibold z-10 text-center ${isMobile ? "mt-4" : "mt-8"}`}>
                        My Work
                    </h2>
                    <div className={`relative w-full flex flex-1 items-center justify-center
                        ${isMobile ? "-mt-4 " : ""}`}>
                        {projects.map((project, idx) => (
                            <div key={project.title}
                                className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"}`}
                                style={{
                                    width: "85%",
                                    maxWidth: "1200px"
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {activeIndex === idx && (
                                        <motion.h3 key={project.title}
                                            initial={{ opacity: 0, y: -30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 30 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0 italic font-semibold ${isMobile ? "-mt-24" : ""}`}
                                            style={{
                                                zIndex: 5,
                                                textAlign: isMobile ? "center" : "left"
                                            }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                    )}
                                </AnimatePresence>

                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};

export default Project;
