import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-20 px-6">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="text-xl md:text-2xl text-cyan-neon font-medium mb-2 tracking-wide">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Ayush <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-blue-500">Kumar</span>
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-300 font-semibold mb-3">
              Web Developer | Android Developer | UI Designer
            </h3>
            <p className="text-lg text-gray-400 max-w-lg">
              Creating modern, responsive websites and apps with clean design and smooth UI.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a href="https://drive.google.com/file/d/1GL3iqfe7_-AbUomyznG4qNt3Q0ZqPnue/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-secondary">Download Resume</a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-neon to-blue-600 animate-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-dark border-4 border-dark flex items-center justify-center">
              <img 
                src={profileImg} 
                alt="Ayush Kumar" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Ayush+Kumar&background=0D1117&color=00EEFF&size=512"; }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
