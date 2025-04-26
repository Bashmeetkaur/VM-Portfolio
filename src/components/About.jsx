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
          <motion.div
              className="p-4 rounded-lg shadow-sm"
              style={{ background: 'rgba(255, 255, 255, 0.9)' }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="lead text-dark mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Hi, I’m Vipul Mehra, a passionate developer skilled in React, JavaScript, and web development. I love building user-friendly applications and solving real-world problems with code. With experience in full-stack development, I thrive in creating innovative solutions. Full Stack Developer (MERN Stack) with deep expertise in MongoDB, Express.js, React, and Node.js, committed to building dynamic, scalable, and high-performance web applications. Proficient in designing and developing robust RESTful APIs, creating intuitive and responsive front-end interfaces, and efficiently managing databases to ensure optimal performance and security.
              </p>
              <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                With hands-on experience delivering diverse projects such as e-commerce platforms, online booking systems, and real-time weather applications, I am adept at transforming complex business requirements into seamless, user-centric digital solutions. My work emphasizes writing clean, maintainable, and scalable code that enhances both user experience and long-term project sustainability.
              </p>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                I am passionate about leveraging modern web technologies to craft efficient, reliable, and innovative applications. Continuously learning and refining my skills, I aim to build products that are not only functional but also intuitive and visually engaging, delivering value to users and businesses alike.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;