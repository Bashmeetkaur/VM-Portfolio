import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header 
      className="py-4 text-center"
      style={{
        background: 'linear-gradient(90deg,rgba(41, 68, 80, 0.55),rgba(21, 31, 39, 0.56))',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="position-relative">
        {/* Bubble Effect Simulation */}
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)',
            bottom: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}
        />
        <motion.h1
          className="display-4 text-white"
          style={{
            fontWeight: 'bold',
        
            textShadow: '2px 2px 0 #1976d2, -2px -2px 0 #1976d2, 2px -2px 0 #1976d2, -2px 2px 0 #1976d2',
            position: 'relative',
            zIndex: 2
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          VIPUL MEHRA
        </motion.h1>
        <motion.p
          className="lead text-white mb-0"
          style={{
            
            textShadow: '1px 1px 0 #1976d2, -1px -1px 0 #1976d2, 1px -1px 0 #1976d2, -1px 1px 0 #1976d2',
            position: 'relative',
            zIndex: 2
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer | React Enthusiast
        </motion.p>
      </div>
    </header>
  );
}

export default Header;