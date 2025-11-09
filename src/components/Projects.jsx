import ProjectCard from './ProjectCard';
import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "TaskFlow",
      description: "Task management app with user authentication and CRUD operations.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "PhotoGallery",
      description: "Image-centric website with lightbox, categories, and lazy loading.",
      tech: ["React", "CSS3", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "API Manager",
      description: "RESTful API for managing products with full CRUD and documentation.",
      tech: ["Node.js", "Express", "MongoDB", "Postman"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}