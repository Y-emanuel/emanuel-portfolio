// src/components/WhatIDo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Apps with Login",
    desc: "Secure user systems with authentication, dashboards, and role-based access.",
    icon: "👤",
  },
  {
    title: "REST APIs",
    desc: "Fast, scalable backends to power your mobile apps or frontend systems.",
    icon: "🔌",
  },
  {
    title: "Corporate Websites",
    desc: "Beautiful, responsive sites that convert visitors into customers.",
    icon: "🌐",
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-dark">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          What I Build
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}