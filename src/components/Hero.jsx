// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-darker via-dark to-darker overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(110,68,255,0.08)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Hi, I'm{" "}
            <span className="text-primary inline-block">
              Emanuel
            </span>
          </motion.h1>

          {/* Texto fijo en lugar del efecto de escritura */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-200 min-h-[2.5rem]"
          >
            Full Stack Web Developer
          </motion.p>

          {/* Nuevo badge */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm text-green-400 font-medium flex items-center gap-1"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Currently Available for New Projects
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-300 max-w-lg"
          >
            Building fast, responsive web apps with clean code and modern tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(110, 68, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-primary hover:bg-purple-700 rounded-lg font-medium text-white transition"
            >
              Let’s Build Your Project →
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img
              src="/your-photo.png"
              alt="Emanuel"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}