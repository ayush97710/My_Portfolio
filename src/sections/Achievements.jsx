import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 bg-dark/50">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="text-cyan-neon">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-8 flex flex-col items-center group cursor-pointer"
          >
            <FaTrophy className="text-5xl text-yellow-500 mb-4 group-hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] transition-all" />
            <h3 className="text-xl font-bold text-white">Best Developer Award</h3>
            <p className="text-gray-400 mt-2 text-sm">Recognized for outstanding performance and dedication.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-8 flex flex-col items-center group cursor-pointer"
          >
            <FaMedal className="text-5xl text-blue-400 mb-4 group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all" />
            <h3 className="text-xl font-bold text-white">Top 5 Hackathon Winner</h3>
            <p className="text-gray-400 mt-2 text-sm">Secured top position in a competitive national hackathon.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
