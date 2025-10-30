import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { type: "system", text: "Welcome to Gourav Kashyap's Portfolio Terminal 🚀" },
    { type: "system", text: 'Type "help" to see available commands.' },
    { type: "system", text: "" },
  ]);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      execute: () => [
        { type: "system", text: "Available commands:" },
        { type: "command", text: "help       - Show this help message" },
        { type: "command", text: "skills     - View my technical skills" },
        { type: "command", text: "projects   - See my projects" },
        { type: "command", text: "experience - View my work experience" },
        { type: "command", text: "contact    - Get contact information" },
        { type: "command", text: "clear      - Clear the terminal" },
      ],
    },

    skills: {
      execute: () => [
        { type: "system", text: "Technical Skills:" },
        { type: "skill", text: "• Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap" },
        { type: "skill", text: "• Backend: Node.js, Express.js, REST APIs, Spring Boot, Hibernate" },
        { type: "skill", text: "• Databases: MongoDB, MySQL, SQL" },
        { type: "skill", text: "• Languages: Java (Core & Advanced), C++, C, JavaScript" },
        { type: "skill", text: "• Tools: VS Code, Eclipse, Git, GitHub, Postman, npm/yarn" },
        { type: "skill", text: "• Cloud & DevOps: AWS (Basics), Docker" },
      ],
    },

    projects: {
      execute: () => [
        { type: "system", text: "Highlighted Projects:" },
        {
          type: "project",
          text: (
            <>
              •{" "}
              <Link
                to="https://github.com/GKmaster-coder/Ecommerce-Website-BCA-Final-Year-Project.git"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                E-Commerce Website
              </Link>{" "}
              — React + Spring Boot + MySQL full-stack app featuring user auth, shopping cart & admin panel.
            </>
          ),
        },
        {
          type: "project",
          text: (
            <>
              •{" "}
              <span className="text-red-400">Shape Based Game</span> — Java OOP project teaching 2D & 3D shapes with inheritance, interfaces & polymorphism.
            </>
          ),
        },
        {
          type: "project",
          text: (
            <>
              •{" "}
              <span className="text-red-400">Product Management System</span> — Java + MySQL CRUD system using JDBC, Collection Framework & advanced search.
            </>
          ),
        },
      ],
    },

    experience: {
      execute: () => [
        { type: "system", text: "Work Experience:" },
        {
          type: "experience",
          text: "• Full Stack Developer Intern — Ntechzy Pvt. Ltd. (May 2025 – Present)",
        },
        {
          type: "experience",
          text: "  - Building real-time web apps using MERN Stack in an agile team environment.",
        },
        {
          type: "experience",
          text: "  - Developing responsive UIs, integrating REST APIs & managing MongoDB data models.",
        },
        {
          type: "experience",
          text: "  - Participating in code reviews, daily standups & sprint development.",
        },
      ],
    },

    contact: {
      execute: () => [
        { type: "system", text: "Contact Information:" },
        { type: "contact", text: "• Name: Gourav Kashyap" },
        { type: "contact", text: "• Email: gouravkashyap2468@gmail.com" },
        { type: "contact", text: "• Phone: +91 9899174113" },
        {
          type: "contact",
          text: (
            <>
              • LinkedIn:{" "}
              <Link
                to="https://www.linkedin.com/in/gourav-kashyap-0241722a3/"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                linkedin.com/in/gourav-kashyap
              </Link>
            </>
          ),
        },
        {
          type: "contact",
          text: (
            <>
              • GitHub:{" "}
              <Link
                to="https://github.com/GKmaster-coder"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                github.com/GKmaster-coder
              </Link>
            </>
          ),
        },
        {
          type: "contact",
          text: (
            <>
              • LeetCode:{" "}
              <Link
                to="https://leetcode.com/u/GKmaster-coder/"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                leetcode.com/u/GKmaster-coder
              </Link>
            </>
          ),
        },
        { type: "contact", text: "• Location: Delhi, India" },
      ],
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.trim().toLowerCase();

    if (command === "clear") {
      setOutput([
        { type: "system", text: "Welcome to Gourav Kashyap's Portfolio Terminal 🚀" },
        { type: "system", text: 'Type "help" to see available commands.' },
        { type: "system", text: "" },
      ]);
      setInput("");
      return;
    }

    const newOutput = [...output, { type: "user", text: `$ ${input}` }];

    if (commands[command]) {
      const result = commands[command].execute();
      setOutput([...newOutput, ...result, { type: "system", text: "" }]);
    } else {
      setOutput([
        ...newOutput,
        { type: "error", text: `Command not found: ${command}` },
        { type: "system", text: 'Type "help" for available commands.' },
        { type: "system", text: "" },
      ]);
    }

    setInput("");
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const getTextColor = (type) => {
    switch (type) {
      case "system":
        return "text-red-400";
      case "user":
        return "text-white";
      case "command":
        return "text-red-300 ml-5";
      case "skill":
      case "project":
      case "experience":
      case "contact":
        return "text-red-200 ml-5";
      case "error":
        return "text-red-500 font-bold";
      default:
        return "text-white";
    }
  };

  return (
    <div className="flex justify-center bg-[#0a0a0a] items-center py-8 px-10">
      <div className="w-full max-w-4xl h-[600px] bg-black border-2 border-red-600 rounded-lg overflow-hidden font-mono shadow-2xl shadow-red-900/50">
        <div className="bg-red-950 px-4 py-3 flex items-center border-b border-red-600">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-red-400 border border-red-300"></div>
            <div className="w-3 h-3 rounded-full bg-red-300 border border-red-200"></div>
          </div>
          <div className="text-red-400 ml-4 font-bold text-sm">gourav-portfolio-terminal</div>
        </div>

        <div
          ref={terminalRef}
          className="h-[calc(100%-60px)] p-4 overflow-y-auto bg-black scrollbar-hidden"
        >
          <div className="mb-4 space-y-1">
            {output.map((line, index) => (
              <div key={index} className={`leading-relaxed break-words ${getTextColor(line.type)}`}>
                {line.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-red-500 font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none text-white font-mono text-base outline-none flex-1 caret-red-500 placeholder-gray-500"
              placeholder="Type a command..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
