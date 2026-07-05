import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark py-8 mt-12 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold tracking-tighter">
            Ayush<span className="text-cyan-neon">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-1">Web Developer &bull; Android Developer</p>
        </div>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/ayush-kumar-a573bb2b3/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-neon transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/ayush97710" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-neon transition-colors">
            <FaGithub size={20} />
          </a>
        </div>

        <div className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Ayush Kumar. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
