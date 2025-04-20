/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react';
import { projects } from '../data/projects.js';
import { motion } from 'framer-motion';

function Projects() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-out');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.remove('scrolled');
        } else {
          section.classList.add('scrolled');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-5 fade-out">
      <div className="container">
        <motion.h2
          className="text-center mb-5 display-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card h-100 border-0 shadow">
                <img src={project.image} className="card-img-top project-img" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <p className="card-text">
                    <strong>Technologies:</strong> {project.tech.join(', ')}
                  </p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;