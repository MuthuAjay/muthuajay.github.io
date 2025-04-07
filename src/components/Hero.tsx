import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative background elements - animated blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-400/10 dark:bg-teal-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzAgMHYzMGgzMHpNMCAzMGgzMHYzMHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-6 py-20 z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-slate-900 dark:text-white transition-colors duration-300">Data Scientist specializing in</span>
            <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 inline-block"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              Machine Learning, Computer Vision(CNN), LLM, RAG
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Transforming complex data challenges into actionable insights through advanced AI solutions
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.a 
              href="#projects" 
              className="inline-flex items-center px-8 py-3 bg-teal-500 text-white rounded-lg shadow-md relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-0 bg-white bg-opacity-20 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 flex items-center">
                View Projects
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </span>
            </motion.a>
            
            <motion.a 
              href="files/Muthu_Ajay_ML.pdf" 
              className="inline-flex items-center px-8 py-3 border-2 border-teal-500 text-teal-500 rounded-lg shadow-md hover:text-white relative overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-0 bg-teal-500 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 flex items-center">
                Download Resume
                <motion.span
                  initial={{ y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Download className="ml-2 h-5 w-5" />
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-teal-500 rounded-full flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-teal-500 rounded-full"
            initial={{ y: 0 }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;