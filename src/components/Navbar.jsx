import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll detection for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // A trick to bypass the synchronous re-render warning from React 18+ strict mode
    // We delay the side-effect closure to avoid cascading renders
    const timeout = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Menús', path: '/#menus', isHash: true },
    { name: 'Delivery', path: '/#delivery', isHash: true },
    { name: 'Reservas', path: '/reservas', isHash: false },
    { name: 'Contacto', path: '/#contacto', isHash: true },
  ];

  const handleNavClick = (e, link) => {
    if (link.isHash && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(link.path.replace('/#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo-original.png" 
              alt="Caudillo Logo" 
              className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.isHash ? (
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-brand-blue hover:text-brand-terra font-semibold text-lg transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="text-brand-blue hover:text-brand-terra font-semibold text-lg transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            
            <a 
              href="https://www.instagram.com/caudillobar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-terra text-brand-cream px-6 py-2 rounded-full font-bold hover:bg-brand-blue transition-colors duration-300 shadow-[4px_4px_0px_#14294a] hover:shadow-[2px_2px_0px_#14294a] hover:translate-y-[2px] hover:translate-x-[2px]"
            >
              Seguinos
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-blue hover:text-brand-terra focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-t border-brand-terra/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
              {navLinks.map((link) => (
                <React.Fragment key={link.name}>
                  {link.isHash ? (
                    <a
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      className="block px-3 py-4 text-center text-xl font-bold text-brand-blue hover:bg-brand-terra/10 hover:text-brand-terra rounded-md transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-3 py-4 text-center text-xl font-bold text-brand-blue hover:bg-brand-terra/10 hover:text-brand-terra rounded-md transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
