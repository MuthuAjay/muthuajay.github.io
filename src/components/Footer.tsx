import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 pt-16 pb-8 relative overflow-hidden transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Logo and brief description */}
          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-bold text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Muthu<span className="text-teal-500">Ajay</span>
            </motion.h3>
            <motion.p 
              className="text-slate-600 dark:text-slate-400 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Data Scientist and AI specialist passionate about solving complex challenges with innovative machine learning solutions.
            </motion.p>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <motion.h4 
              className="text-lg font-semibold text-slate-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
          
          {/* Contact information */}
          <div className="space-y-4">
            <motion.h4 
              className="text-lg font-semibold text-slate-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Connect
            </motion.h4>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.a
                href="https://github.com/muthuajay"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muthu-ajay-b2a817195/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:muthuajay97@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
            <motion.p 
              className="text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Email: muthuajay97@gmail.com
            </motion.p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-slate-200 dark:bg-slate-700 my-8"></div>
        
        {/* Copyright and back to top */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-slate-600 dark:text-slate-400 text-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="flex items-center">
              © 2024 Muthu Ajay. All rights reserved. Built with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> in React.
            </p>
          </motion.div>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -2 }}
          >
            <span className="mr-2">Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
