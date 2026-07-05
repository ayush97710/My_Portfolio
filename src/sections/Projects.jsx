import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectData = [
  {
    title: 'Test Pustak App',
    description: 'A comprehensive educational application designed to help students prepare for exams with mock tests and study materials.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop', // Education/Tech placeholder
    tech: ['React Native', 'Firebase', 'Node.js'],
    github: '#',
    live: '#'
  },
  {
    title: 'Pocket Campus 2.0',
    description: 'A smart campus assistant app providing real-time updates and notifications for class and campus activities with a continuous Firestore listener service.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop', // Mobile app placeholder
    tech: ['Java', 'Firebase', 'Android Studio', 'XML'],
    github: 'https://github.com/ayush97710/PocketCampus.git',
    live: '#'
  },
  {
    title: 'House Price Prediction',
    description: 'A machine learning web app predicting house prices based on features like area, rooms, and location for real-time predictions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Data/House placeholder
    tech: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/ayush97710/House_Price_Prediction',
    live: '#'
  },
  {
    title: 'Bireena Infotech Website',
    description: 'A corporate website showcasing services like web development, SEO, and digital marketing, along with internship programs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', // Corporate placeholder
    tech: ['WordPress', 'Web Hosting', 'Responsive Design'],
    github: '#',
    live: 'https://bireenainfotech.com/'
  },
  {
    title: 'Champaran Meat House',
    description: 'A restaurant website featuring its menu, gallery, and online ordering options.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', // Restaurant placeholder
    tech: ['WordPress', 'Web Hosting', 'Responsive Design'],
    github: '#',
    live: 'https://champaranmeathouse.com/'
  },
  {
    title: 'Surtaal Studio',
    description: 'A website showcasing musical and recording services with an elegant, modern design.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop', // Studio placeholder
    tech: ['WordPress', 'Web Hosting', 'Responsive Design'],
    github: '#',
    live: 'https://surtaalstudio.com/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured <span className="text-cyan-neon">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/20 transition-colors duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-neon transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-semibold px-2 py-1 bg-cyan-neon/10 text-cyan-neon rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-neon transition-colors">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-neon transition-colors">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
