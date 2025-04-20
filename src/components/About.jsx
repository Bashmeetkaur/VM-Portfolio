/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import profileImg from '../assets/profile.png';
import { motion } from 'framer-motion';

function About() {
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
          About Me
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <motion.img
              src={profileImg}
              alt="Vipul Mehra"
              className="img-fluid rounded-full border border-2 border-primary mb-4 shadow profile-img"
              style={{ width: '300px', height: '450px', objectFit: 'cover', borderRadius: '150px' }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <div className="col-md-8">
            <motion.p
              className="fs-5 text-muted"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I’m Vipul Mehra, a passionate developer skilled in React, JavaScript, and web design. I love building user-friendly applications and solving real-world problems with code. With experience in full-stack development, I thrive on creating innovative solutions.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;