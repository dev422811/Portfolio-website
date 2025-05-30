import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/hero_bg.jpg)' }} // Background image from the public folder
    >
      {/* Content Section */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row justify-center items-center gap-10`}
      >
        {/* Vertical Accent */}
        <div className="hidden md:flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-accent mb-5" />
          <div className="w-1 sm:h-80 h-40 bg-accent/50" />
        </div>

        {/* Main Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-playfair font-bold text-white leading-tight">
            Hi, I'm <span className="text-accent">Charan Satya Dev</span>
          </h1>
          <p className="mt-4 text-lg text-textMuted font-poppins">
            I'm passionate about&nbsp;
            <Typewriter
              options={{
                strings: ['CyberSecurity.', 'AI & ML.', 'Data Analysis.', 'Web Development.', 'Cloud Technology.'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                pauseFor: 1200,
              }}
            />
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-accent flex justify-center items-start p-2 hover:shadow-glow transition-all duration-300 cursor-pointer">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
