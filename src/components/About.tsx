import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const dotsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
  };

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* Left Content (Text) */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Animated Heading 1 */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-2"
              variants={itemVariants}
            >
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Muthu Ajay</span>,
            </motion.h1>

            {/* Animated Heading 2 */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-slate-600 dark:text-slate-300"
              variants={itemVariants}
            >
              a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Data Scientist</span>.
            </motion.h2>

            {/* Paragraphs */}
            <motion.div className="max-w-xl mx-auto lg:mx-0" variants={itemVariants}>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Data Scientist Consultant at Ernst & Young with over 3 years of experience in designing and deploying advanced Machine Learning and Data Science solutions. I specialize in building scalable models across Computer Vision, Natural Language Processing, and Retrieval-Augmented Generation (RAG), with a strong focus on end-to-end ML pipelines and real-world business applications.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                My work includes developing high-accuracy predictive models, optimizing data-driven workflows, and delivering production-grade AI systems. Notable achievements include 99% accuracy in document classification tasks and engineering RAG frameworks that improved information retrieval speeds by 60%. I am passionate about transforming complex data into actionable insights through innovative machine learning strategies.
              </p>
            </motion.div>

            {/* Buttons with improved animations */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="px-7 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg transition-all duration-300 font-medium text-center shadow-md hover:shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">Contact Me</span>
              </motion.a>
              <motion.a
                href="#projects"
                className="px-7 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg transition-all duration-300 font-medium text-center shadow-md hover:bg-slate-300 dark:hover:bg-slate-600 hover:shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-0 bg-slate-300 dark:bg-slate-600 bg-opacity-50 dark:bg-opacity-50 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">View Projects</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with enhanced effects */}
          <motion.div
            className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0 relative mt-10 lg:mt-0"
            variants={imageContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            {/* Image container with improved styling */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-black/30 border-4 border-slate-200 dark:border-slate-700/50 transition-colors duration-300 transform hover:rotate-1 hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20">
              <img
                src="files/profile.jpg"
                alt="Muthu Ajay - Data Scientist"
                className="block w-full h-auto transform transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Decorative dots with animation */}
            <motion.div
              className="absolute -top-5 -right-5 w-20 h-20 grid grid-cols-4 gap-1.5 z-20"
              variants={dotsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-teal-500"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.03, duration: 0.3 }}
                />
              ))}
            </motion.div>

            {/* Enhanced gradient backgrounds */}
            <div className="absolute -z-0 w-[110%] h-[110%] rounded-full bg-gradient-to-br from-teal-600/20 via-blue-600/15 to-transparent blur-2xl -top-4 -left-4 animate-pulse-slow"></div>
            <div className="absolute -z-0 w-[90%] h-[90%] rounded-full bg-gradient-to-tl from-blue-500/15 via-teal-500/10 to-transparent blur-xl top-8 right-0 animate-pulse-slow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;