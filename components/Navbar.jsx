import React, { useState } from 'react';

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
    { href: '#', label: 'Home' },
    { href: '#', label: 'Features' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'About' },
  ];

  return (
    <nav className="relative">
      <div className="container mx-auto px-6 py-6 h-72">
        <div className="flex items-center justify-between h-full">
          
          {/* Left-aligned navigation links for desktop */}
          <div className="hidden md:flex items-center colo space-x-6">
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
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-1/5">
            <a href="#" className="text-2xl font-bold drop-shadow-sm drop-shadow-white">
                <img src='../src/assets/sakeMAMAbombath.png' className='max-w-md'></img>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="w-11/12 text-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar