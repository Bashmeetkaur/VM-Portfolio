/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Footer() {
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
    <footer className="bg-dark text-white text-center py-4 fade-out">
      <motion.p
        className="mb-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        © 2025 Vipul Mehra. All rights reserved.
      </motion.p>
    </footer>
  );
}

export default Footer;