import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="text-cyan-neon">Education</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative border-l-2 border-cyan-neon/30 pl-8 ml-4 md:ml-auto">

          {/* Education Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-dark border-4 border-cyan-neon shadow-[0_0_10px_#00EEFF]"></div>

            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaGraduationCap className="text-cyan-neon text-sm" />
                    Bachelor of Technology (B.Tech) - CSE
                  </h3>
                  <h4 className="text-lg text-gray-300 font-medium mt-1">SPNREC, Araria</h4>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/5">
                  2025 - 2028 (Pursuing)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Education Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-dark border-4 border-cyan-neon shadow-[0_0_10px_#00EEFF]"></div>

            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaGraduationCap className="text-cyan-neon text-sm" />
                    Diploma - Computer Science Engineering (CSE)
                  </h3>
                  <h4 className="text-lg text-gray-300 font-medium mt-1">NGP, Patna 13</h4>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/5">
                  2022 - 2025
                </span>
              </div>
              <p className="text-cyan-neon font-semibold mt-2">CGPA: 8.31</p>
            </div>
          </motion.div>

          {/* Education Item 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-dark border-4 border-cyan-neon shadow-[0_0_10px_#00EEFF]"></div>

            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaGraduationCap className="text-cyan-neon text-sm" />
                    Secondary School (10th Grade)
                  </h3>
                  <h4 className="text-lg text-gray-300 font-medium mt-1">Bihar Public School, Paliganj, Patna</h4>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/5">
                  2022
                </span>
              </div>
              <p className="text-cyan-neon font-semibold mt-2">Score: 85%</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
