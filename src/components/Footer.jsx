import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white py-16 overflow-hidden">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-[#003b2f24] to-[#000f2f40] opacity-90"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl mx-auto px-4">
        
        {/* Logo Added Here */}
        <img 
          src="/logo2.png" 
          alt="Logo" 
          className="mx-auto mb-4 h-16 w-auto object-contain"
        />

        <h2 className="text-5xl font-bold tracking-wide mb-2">Gourav Kashyap</h2>

        {/* Underline effect */}
        <div className="w-24 h-[3px] bg-red-400 mx-auto mb-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-6">
          {/* LinkedIn */}
          <Link
            to="https://www.linkedin.com/in/gourav-kashyap-0241722a3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-red-400 transition duration-300"
          >
            <FaLinkedin />
          </Link>

          {/* Instagram */}
          <Link
            to="https://www.instagram.com/gouravkashyap2468/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-red-400 transition duration-300"
          >
            <FaInstagram />
          </Link>

          {/* Gmail */}
          <Link
            to="mailto:gouravkashyap2468@gmail.com"
            aria-label="Gmail"
            className="hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </Link>

          {/* GitHub */}
          <Link
            to="https://github.com/GKmaster-coder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-red-400 transition duration-300"
          >
            <FaGithub />
          </Link>
        </div>

        {/* Quote */}
        <p className="italic text-gray-300 mb-6">
          “Success is when preparation meets opportunity.”
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 Gourav Kashyap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;