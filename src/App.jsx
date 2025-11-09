// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import Testimonials from "./components/Testimonials";
import WhatIDo from "./components/WhatIDo";
import FloatingContact from "./components/FloatingContact";
import ErrorBoundary from './components/ErrorBoundary.jsx'

function TestAnimation() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 bg-primary rounded-full mx-auto mt-10"
    />
  );
}

export default function App() {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <FloatingContact />
    </div>
  );
}
