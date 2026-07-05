import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span className="text-cyan-neon">Me</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center flex flex-col gap-8"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I am a passionate web and Android developer with experience in building responsive and interactive applications. I love turning ideas into reality using clean code and modern design.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-neon/30 transition-colors">
              <FaGraduationCap className="text-3xl text-cyan-neon mb-3" />
              <h4 className="font-semibold text-lg text-white">B.Tech (Pursuing)</h4>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-neon/30 transition-colors">
              <FaBriefcase className="text-3xl text-cyan-neon mb-3" />
              <h4 className="font-semibold text-lg text-white">1+ Year Experience</h4>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-neon/30 transition-colors">
              <FaCode className="text-3xl text-cyan-neon mb-3" />
              <h4 className="font-semibold text-lg text-white">6+ Projects</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
