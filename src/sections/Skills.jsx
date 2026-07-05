import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, level: '90%' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: '85%' },
  { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: '80%' },
  { name: 'ReactJS', icon: <FaReact className="text-[#61DAFB]" />, level: '75%' },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" />, level: '85%' },
  { name: 'GitHub', icon: <FaGithub className="text-white" />, level: '85%' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical <span className="text-cyan-neon">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 group"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              
              {/* Progress Bar */}
              <div className="w-full bg-dark rounded-full h-1.5 mt-2 overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  className="bg-cyan-neon h-1.5 rounded-full shadow-[0_0_10px_#00EEFF]"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
