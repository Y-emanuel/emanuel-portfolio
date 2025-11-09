// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img
              src="/your-photo.png" // Asegúrate de tener esta imagen en public/
              alt="Emanuel"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-4"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a Full Stack Web Developer specializing in building modern,
              fast, and reliable web applications using React, Node.js, and
              MongoDB.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I love turning ideas into real, functional digital products.
              Whether you need a responsive website, a user-authenticated web
              app, a RESTful API, or a full management system — I can build it
              from scratch with clean, maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach: clear communication, on-time delivery, and attention
              to detail.
            </p>

            {/* Botones de contacto y redes sociales */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#contact"
                className="text-primary hover:text-purple-300 font-medium"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/TU_USUARIO" // ✅ Reemplaza con tu usuario real
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/TU_PERFIL" // ✅ Reemplaza con tu perfil real
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white font-medium"
              >
                LinkedIn
              </a>
            </div>

            {/* Badge de disponibilidad */}
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-400">Available for new projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}