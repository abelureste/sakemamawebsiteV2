import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import sakemamalogo from '../src/assets/sakeMAMAbombath.png'

// =================================================================
// FILE: Navbar.js
// This would be in a separate file, e.g., src/components/Navbar.js
// =================================================================

// You can use any icon library, e.g., react-icons
// For this example, we'll use simple SVG paths for menu icons.
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#images', label: 'Images' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="relative">
      <div className="container mx-auto px-6 py-6 h-48 md:h-72"> {/* Adjusted height for mobile */}
        <div className="flex items-center justify-between h-full">
          
          {/* Left-aligned navigation links for desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#" className="text-2xl font-bold">
                <img src={sakemamalogo} className='w-48 md:w-72 drop-shadow-sm drop-shadow-gray-400'></img> {/* Responsive width */}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-4xl font-bold hover:text-gray-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar