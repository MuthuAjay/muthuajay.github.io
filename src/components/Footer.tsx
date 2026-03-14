import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-warm-dark dark:bg-slate-800 pt-16 pb-8 relative overflow-hidden transition-colors duration-300">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sage via-warm-accent to-sage dark:from-teal-400 dark:via-blue-500 dark:to-teal-400"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">

          {/* Logo and description */}
          <div className="space-y-4">
            <motion.h3
              className="font-serif text-2xl font-bold text-cream dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Muthu<span className="text-warm-accent dark:text-teal-400">Ajay</span>
            </motion.h3>
            <motion.p
              className="text-cream/60 dark:text-slate-400 max-w-xs"
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
              className="text-lg font-semibold text-cream dark:text-white"
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
                    className="text-cream/70 dark:text-slate-400 hover:text-warm-accent dark:hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <motion.h4
              className="text-lg font-semibold text-cream dark:text-white"
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
              {[
                { href: 'https://github.com/muthuajay', icon: <Github className="w-5 h-5" /> },
                { href: 'https://www.linkedin.com/in/muthu-ajay-b2a817195/', icon: <Linkedin className="w-5 h-5" /> },
                { href: 'mailto:muthuajay97@gmail.com', icon: <Mail className="w-5 h-5" /> },
              ].map(({ href, icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream/20 dark:border-slate-600 flex items-center justify-center text-cream dark:text-slate-300 hover:bg-sage hover:border-sage dark:hover:bg-teal-500 dark:hover:border-teal-500 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
            <motion.p
              className="text-cream/60 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              muthuajay97@gmail.com
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/20 dark:bg-slate-700 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-cream/50 dark:text-slate-400 text-sm">
          <motion.p
            className="flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © 2024 Muthu Ajay. All rights reserved. Built with <Heart className="w-4 h-4 mx-1 text-rose dark:text-red-500" fill="currentColor" /> in React.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center text-cream/50 dark:text-slate-400 hover:text-warm-accent dark:hover:text-teal-400 transition-colors"
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
