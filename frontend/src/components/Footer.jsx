import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="flex items-center space-x-4">
          <p className="text-white font-semibold">Let's Collaborate</p>
          <a href="https://www.linkedin.com/in/mohammed-thashreef-063780265/" target='_blank' aria-label="LinkedIn" className="text-cyan-500 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/mohammedthasreef123" target='_blank' aria-label="GitHub" className="text-cyan-500 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/call_me_thasreef_/" target='_blank' aria-label="Instagram" className="text-cyan-500 hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-cyan-500 font-semibold">
            Developed by <span className="text-white">Thasreef</span>
            <span className="ml-2">🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
