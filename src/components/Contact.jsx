/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Contact() {
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
      <div className="container text-center">
        <motion.h2
          className="mb-5 display-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="fs-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Email: <a href="mailto:vipulmehra02899@gmail.com" className="text-primary">vipulmehra02899@gmail.com</a>
        </motion.p>
        <motion.p
          className="fs-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Phone: <a href="tel:+919971855097" className="text-primary">+91 9971855097</a>
        </motion.p>
        <motion.a
          href="#top"
          className="btn btn-secondary mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Back to Top
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;