import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certificationsData = [
  { title: 'TPO Coordinator', issuer: 'College/University' },
  { title: 'AI & ML Certificate', issuer: 'Relevant Platform' }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Licenses & <span className="text-cyan-neon">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-neon/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaCertificate className="text-3xl text-cyan-neon" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">Issued by {cert.issuer}</p>
              
              <div className="mt-6 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-neon w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
