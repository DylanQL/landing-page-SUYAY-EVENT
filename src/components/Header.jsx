import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = ['Inicio', 'Eventos', 'Categorías', 'Nosotros', 'Contacto'];

  return (
    <>
      <motion.header
        className={`header ${scrolled ? 'header-scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-container">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="/Logo_sin_fondo-suyay.png" alt="Suyay Events Logo" className="logo-img" />
            <h1 className="logo-text">SUYAY EVENTS</h1>
          </motion.div>
          
          <div className="nav-container">
            <nav className="nav-menu">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-item ${index === 0 ? 'active' : ''}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="https://fork-suyay-events-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 29, 142, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Publica tu evento
            </motion.a>

            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="mobile-nav-header">
              <div className="logo">
                <img src="/Logo_sin_fondo-suyay.png" alt="Suyay Events Logo" className="logo-img" />
                <h1 className="logo-text">SUYAY EVENTS</h1>
              </div>
              <button className="close-button" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mobile-nav-items">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className={`mobile-nav-item ${index === 0 ? 'active' : ''}`}
                  onClick={toggleMobileMenu}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://fork-suyay-events-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
            >
              Publica tu evento
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
