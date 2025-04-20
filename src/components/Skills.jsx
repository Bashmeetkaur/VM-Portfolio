/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills.js';
import { FaJava, FaPython, FaJs, FaHtml5, FaReact, FaNodeJs, FaFire, FaCode, FaPaintBrush, FaAndroid, FaGithub, FaTable, FaBrain, FaCodeBranch, FaChartBar, FaDatabase, FaRProject } from 'react-icons/fa';
import { SiCplusplus, SiDjango, SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

// Mapping proficiency levels to new labels, colors, and segments
const proficiencyMap = {
  Beginner: { label: 'Entry', color: '#f4c430', segments: 1 }, // Warm Yellow
  Intermediate: { label: 'Intermediate', color: '#4caf50', segments: 2 }, // Soft Green
  Advanced: { label: 'Advanced', color: '#26a69a', segments: 3 }, // Teal
};

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

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

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill); // Optional: for future interactivity
  };

  const closeSkillInfo = () => {
    setSelectedSkill(null);
  };

  return (
    <section className="py-5 bg-light fade-out" style={{ background: 'linear-gradient(135deg, #e0f7fa, #ffffff)', position: 'relative', minHeight: '100vh', overflow: 'visible' }}>
      <div className="container">
        <motion.h2
          className="text-center mb-5 display-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <div className="row justify-content-center">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="col-md-6 mb-5 text-center">
              <h4 className="mb-4 text-primary">{category}</h4>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {skillList.map((skill, skillIndex) => {
                  const proficiencyData = proficiencyMap[skill.proficiency] || { label: 'Entry', color: '#f4c430', segments: 1 };
                  return (
                    <div key={skillIndex} className="relative d-flex flex-column align-items-center">
                      <motion.div
                        className="badge bg-black text-white fs-6 cursor-pointer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        onClick={() => handleSkillClick(skill)}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        style={{ 
                          minWidth: '80px', 
                          minHeight: '80px', 
                          width: '80px', 
                          height: '80px', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center', 
                          flexDirection: 'column', 
                          padding: '10px',
                          overflow: 'hidden',
                          marginBottom: '10px' // Added to control spacing with pill
                        }}
                      >
                        <skill.icon size="1.5em" style={{ marginBottom: '4px' }} />
                        <span style={{ fontSize: '0.75rem', textAlign: 'center', whiteSpace: 'normal' }}>{skill.name}</span>
                      </motion.div>
                      <div className="w-full max-w-xs" style={{ position: 'relative', zIndex: 20 }}>
                        <div
                          className="h-8 rounded-full bg-transparent"
                          style={{
                            width: '140px',
                            position: 'relative',
                            minHeight: '2rem',
                            display: 'block',
                            overflow: 'visible',
                          }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              style={{
                                display: 'inline-block',
                                width: '46px',
                                height: '32px',
                                backgroundColor: i < proficiencyData.segments ? proficiencyData.color : 'transparent',
                                transition: 'background-color 0.3s',
                                verticalAlign: 'middle',
                                borderRight: i < 2 ? '1px solid #d3d3d3' : '1px solid #d3d3d3',
                                borderLeft: i === 0 ? '1px solid #d3d3d3' : '1px solid #d3d3d3',
                                // borderRight: i < 2 ? '1px solid black' : '1px solid black',
                                // borderLeft: i === 0 ? '1px solid black' : '1px solid black',
                                borderRadius: i === 0 ? '30px 0 0 30px' : i === 2 ? '0 30px 30px 0' : '0',
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-800 font-semibold ml-2">{proficiencyData.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;