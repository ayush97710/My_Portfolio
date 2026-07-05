import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Enter your Web3Forms Access Key here!
    formData.append("access_key", "51ae8ea0-1079-459e-80f0-09a61d7cb959");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In <span className="text-cyan-neon">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Let's work together!</h3>
              <p className="text-gray-400">
                I'm currently available for freelance work or internship opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a href="mailto:ayush@bireenainfotech.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                  <FaEnvelope />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">ayush@bireenainfotech.com</span>
              </a>

              <a href="mailto:kr624ayush@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                  <FaEnvelope />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">kr624ayush@gmail.com</span>
              </a>

              <a href="tel:+919771041624" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                  <FaPhoneAlt />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+91 9771041624</span>
              </a>

              <a href="https://www.linkedin.com/in/ayush-kumar-a573bb2b3/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                  <FaLinkedin />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn Profile</span>
              </a>

              <a href="https://github.com/ayush97710" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon group-hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.1)]">
                  <FaGithub />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-all"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full mt-2">
                Send Message
              </button>
              {result && <p className="text-center mt-4 text-cyan-neon">{result}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
