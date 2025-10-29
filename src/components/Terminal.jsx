import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { type: "system", text: "Welcome to My Portfolio Terminal!" },
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
        { type: "command", text: "resume     - Download my resume" },
        { type: "command", text: "projects   - See my projects" },
        { type: "command", text: "experience - View my work experience" },
        { type: "command", text: "contact    - Get contact information" },
        { type: "command", text: "clear      - Clear the terminal" },
      ],
    },

    skills: {
      execute: () => [
        { type: "system", text: "Technical Skills:" },
        { type: "skill", text: "• JavaScript/TypeScript" },
        { type: "skill", text: "• React.js" },
        { type: "skill", text: "• Node.js" },
        { type: "skill", text: "• Python" },
        { type: "skill", text: "• HTML/CSS" },
        { type: "skill", text: "• Git & GitHub" },
        { type: "skill", text: "• MongoDB" },
        { type: "skill", text: "• AWS" },
      ],
    },

    resume: {
      execute: () => {
        const resumeContent =
          "Name: John Doe\nEmail: john.doe@example.com\nSkills: React, Node.js, Python\n\nThis is a sample resume content.";
        const blob = new Blob([resumeContent], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        return [
          { type: "system", text: "Downloading resume..." },
          { type: "system", text: "Resume downloaded successfully!" },
        ];
      },
    },

    projects: {
      execute: () => [
        { type: "system", text: "My Projects:" },
        {
          type: "project",
          text: (
            <>
              •{" "}
              <Link
                to="https://ecommerce-demo.vercel.app"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                E-commerce Platform
              </Link>{" "}
              — Full-stack React/Node.js app
            </>
          ),
        },
        {
          type: "project",
          text: (
            <>
              •{" "}
              <Link
                to="https://task-manager-demo.vercel.app"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                Task Management App
              </Link>{" "}
              — React with drag & drop
            </>
          ),
        },
        {
          type: "project",
          text: (
            <>
              •{" "}
              <Link
                to="https://portfolio-terminal.vercel.app"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                Portfolio Website
              </Link>{" "}
              — React terminal interface
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
          text: "• Senior Frontend Developer - Tech Corp (2022–Present)",
        },
        {
          type: "experience",
          text: "• Full Stack Developer - Startup Inc (2020–2022)",
        },
        {
          type: "experience",
          text: "• Junior Developer - Web Solutions (2018–2020)",
        },
      ],
    },

    contact: {
      execute: () => [
        { type: "system", text: "Contact Information:" },
        { type: "contact", text: "• Email: your.email@example.com" },
        {
          type: "contact",
          text: (
            <>
              • LinkedIn:{" "}
              <Link
                to="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                linkedin.com/in/yourprofile
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
                to="https://github.com/yourusername"
                target="_blank"
                className="text-red-400 underline hover:text-red-300"
              >
                github.com/yourusername
              </Link>
            </>
          ),
        },
        { type: "contact", text: "• Phone: +1 (555) 123-4567" },
      ],
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.trim().toLowerCase();

    if (command === "clear") {
      setOutput([
        { type: "system", text: "Welcome to My Portfolio Terminal!" },
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
          <div className="text-red-400 ml-4 font-bold text-sm">
            portfolio-terminal
          </div>
        </div>

        <div
          ref={terminalRef}
          className="h-[calc(100%-60px)] p-4 overflow-y-auto bg-black scrollbar-hidden"
        >
          <div className="mb-4 space-y-1">
            {output.map((line, index) => (
              <div
                key={index}
                className={`leading-relaxed break-words ${getTextColor(line.type)}`}
              >
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
              autoFocus
              placeholder="Type a command..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
