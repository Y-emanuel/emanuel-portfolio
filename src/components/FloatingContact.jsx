// src/components/FloatingContact.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="#contact"
        className="bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:bg-purple-700 transition flex items-center gap-2"
      >
        <span>📩</span>
        <span className="font-medium">Get in Touch</span>
      </a>
    </motion.div>
  );
}