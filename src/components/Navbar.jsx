import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleResumeClick = () => {
    const resumeUrl = '/Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h1 className="text-2xl font-semibold font-[Playfair] tracking-wide ml-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            Charan Satya Dev
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8 text-[16px] font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-cyan-400 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleResumeClick}
              className="hover:text-cyan-400 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              Resume
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="sm:hidden mt-4 flex flex-col items-start gap-4 px-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-white text-base hover:text-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleResumeClick}
              className="text-white text-base hover:text-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Resume
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
