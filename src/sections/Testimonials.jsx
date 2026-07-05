import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Client <span className="text-cyan-neon">Testimonials</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 relative"
          >
            <FaQuoteLeft className="text-3xl text-cyan-neon/20 absolute top-6 left-6" />
            <p className="text-gray-300 italic mb-6 relative z-10 pt-4 text-lg">
              "Ayush delivered the project on time and with exceptional quality! His attention to detail is remarkable."
            </p>
            <h4 className="text-cyan-neon font-bold">- Client A</h4>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 relative"
          >
            <FaQuoteLeft className="text-3xl text-cyan-neon/20 absolute top-6 left-6" />
            <p className="text-gray-300 italic mb-6 relative z-10 pt-4 text-lg">
              "A highly professional developer, very skilled and creative. I highly recommend him for complex web solutions."
            </p>
            <h4 className="text-cyan-neon font-bold">- Client B</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
