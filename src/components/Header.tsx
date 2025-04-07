import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with subtle animation */}
          <motion.a 
            href="#home" 
            className="text-2xl font-bold text-slate-900 dark:text-white relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Muthu<span className="text-teal-500">Ajay</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.href}
                className="text-slate-700 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors relative font-medium text-sm"
                whileHover={{ y: -2 }}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 * index,
                  ease: "easeOut"
                }}
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
            
            {/* Theme Toggle Button with animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>
          
          {/* Mobile Menu Controls */}
          <div className="flex items-center md:hidden space-x-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>
            
            <motion.button 
              onClick={toggleMobileMenu}
              className="text-slate-700 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-400 focus:outline-none"
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white dark:bg-slate-900 z-40 md:hidden flex flex-col pt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={link.name}
                    href={link.href}
                    className="text-xl text-slate-800 dark:text-slate-200 font-medium py-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    <motion.span 
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-teal-500"
                      whileHover={{ 
                        backgroundColor: theme === 'dark' ? '#134e4a' : '#e6fffa',
                        scale: 1.1
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.span>
                  </motion.a>
                ))}
              </nav>
              
              {/* Social links in mobile menu */}
              <motion.div 
                className="mt-12 flex justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a href="https://github.com/muthuajay" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/muthuajay" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="mailto:contact@muthuajay.com" className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;