import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional <span className="text-cyan-neon">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative border-l-2 border-cyan-neon/30 pl-8 ml-4 md:ml-auto">
          
          {/* Experience Item 1 */}
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
                    <FaBriefcase className="text-cyan-neon text-sm" />
                    Web Developer & SEO Executive
                  </h3>
                  <h4 className="text-lg text-cyan-neon font-medium mt-1">Bireena Infotech</h4>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/5">
                  JULY 2025 - PRESENT
                </span>
              </div>
              <ul className="text-gray-400 mt-4 list-disc pl-4 space-y-2 text-sm md:text-base">
                <li>Design, develop, and maintain responsive websites using modern web technologies.</li>
                <li>Optimize websites for search engines (SEO) to improve ranking, visibility, and organic traffic.</li>
                <li>Work closely with design and content teams to enhance user experience and performance.</li>
                <li>Perform website updates, debugging, and performance optimization.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience Item 2 */}
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
                    <FaBriefcase className="text-cyan-neon text-sm" />
                    AI & Machine Learning Intern
                  </h3>
                  <h4 className="text-lg text-cyan-neon font-medium mt-1">Prishal Technolabs Pvt. Ltd</h4>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/5">
                  Jan 2025 – Mar 2025
                </span>
              </div>
              <ul className="text-gray-400 mt-4 list-disc pl-4 space-y-2 text-sm md:text-base">
                <li>Gained hands-on experience in Artificial Intelligence and Machine Learning concepts.</li>
                <li>Worked on data preprocessing, model training, and basic ML algorithms.</li>
                <li>Assisted in developing and testing ML-based solutions for real-world problems.</li>
                <li>Enhanced analytical thinking and problem-solving skills through project-based learning.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
