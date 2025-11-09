// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, liveLink, githubLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 30px -10px rgba(110, 68, 255, 0.4)",
        transition: { duration: 0.2 }
      }}
      className="bg-gray-800 rounded-xl p-6 group"
    >
      <div className="h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl mb-4 flex items-center justify-center">
        <span className="text-gray-300 font-medium">Preview</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={liveLink}
          className="text-sm text-primary hover:text-purple-300 font-medium"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          className="text-sm text-blue-400 hover:text-blue-300 font-medium"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}