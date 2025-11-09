// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María R.",
      role: "Owner of Café El Sol",
      quote:
        "Emanuel transformed our website — now we get 40% more online bookings. Fast, professional, and always communicative!",
    },
    {
      name: "Luis M.",
      role: "Founder of TechStart",
      quote:
        "Hired Emanuel to build our management app. Delivered ahead of schedule, clean code, clear documentation. Will hire again.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          What Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
              <div>
                <strong className="text-white">{t.name}</strong>
                <span className="text-gray-400 block text-sm">— {t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
