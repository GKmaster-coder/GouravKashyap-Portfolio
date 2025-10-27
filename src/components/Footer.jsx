import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white py-16 overflow-hidden">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#003b2f24] to-[#000f2f40] opacity-90"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold tracking-wide mb-2">Gaurav Kashyap</h2>

        {/* Underline effect */}
        <div className="w-24 h-[3px] bg-red-400 mx-auto mb-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="#"
            className="hover:text-red-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="hover:text-red-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-red-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Quote */}
        <p className="italic text-gray-300 mb-6">
          “Success is when preparation meets opportunity.”
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 Gaurav Kashyap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
