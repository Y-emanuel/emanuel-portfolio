// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const techSkills = ["React", "Node.js", "JavaScript", "HTML5", "CSS3", "MongoDB", "Express", "REST APIs", "Git"];
  const tools = ["Vercel", "Render", "Postman", "GitHub", "Figma"];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-dark to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [-2, 2, -2] }} // ← flotar arriba/abajo
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05
                  }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  animate={{ rotate: [0, 3, 0] }} // ← girar ligeramente
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05
                  }}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}