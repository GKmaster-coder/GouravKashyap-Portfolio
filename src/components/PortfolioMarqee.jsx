import React from "react";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiMysql,
} from "react-icons/si";

const skills = [
  { label: "React", icon: <FaReact size={26} /> },
  { label: "Next.js", icon: <SiNextdotjs size={26} /> },
  { label: "Java", icon: <FaJava size={26} /> },
  { label: "Spring Boot", icon: <SiSpringboot size={26} /> },
  { label: "MySQL", icon: <SiMysql size={26} /> },
  { label: "MongoDB", icon: <SiMongodb size={26} /> },
  { label: "PostgreSQL", icon: <SiPostgresql size={26} /> },
  { label: "Express.js", icon: <SiExpress size={26} /> },
  { label: "Node.js", icon: <FaNodeJs size={26} /> },
];

const PortfolioMarquee = () => {
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-[#0a0a0a]">
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-container { white-space: nowrap; overflow: hidden; width: 100%; }
        .marquee-content {
          display: inline-flex;
          animation: scroll 18s linear infinite;
        }
        .group:hover .marquee-content {
          animation-play-state: paused;
        }
        .ribbon {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          padding: 14px 0;
        }
      `}</style>

      {/* 🔴 Top Ribbon (Red) */}
      <div className="ribbon rotate-2 bg-red-600 shadow-lg shadow-red-800">
        <div className="marquee-container group">
          <div className="marquee-content">
            {repeatedSkills.map((skill, i) => (
              <div
                key={`red-${i}`}
                className="flex items-center gap-2 px-6 text-white text-lg font-semibold tracking-wide"
              >
                {skill.icon}
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ⚪ Bottom Ribbon (White) */}
      <div className="ribbon -rotate-2 bg-white shadow-lg shadow-gray-400">
        <div className="marquee-container group">
          <div
            className="marquee-content"
            style={{ animationDirection: "reverse", animationDuration: "18s" }}
          >
            {repeatedSkills.map((skill, i) => (
              <div
                key={`white-${i}`}
                className="flex items-center gap-2 px-6 text-black text-lg font-semibold tracking-wide"
              >
                {skill.icon}
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMarquee;
