import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// --- Enhanced CircularSkill Component ---
const CircularSkill = ({ name, percentage, icon, color, index }) => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 100, 
          damping: 12, 
          delay: index * 0.1 
        }
      });

      const animationControls = animate(0, percentage, {
        duration: 1.5,
        delay: index * 0.1 + 0.2,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayPercentage(Math.round(value));
        }
      });
      
      return () => animationControls.stop();
    } else {
       controls.start({ opacity: 0, scale: 0.8, y: 20 });
       setDisplayPercentage(0);
    }
  }, [isInView, controls, percentage, index]);

  // Calculate the circumference and offset for the circle animation
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayPercentage / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center mb-10"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={controls}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.2 },
        boxShadow: theme === 'dark' 
          ? '0 10px 25px -5px rgba(45, 212, 191, 0.2), 0 10px 10px -5px rgba(56, 189, 248, 0.1)'
          : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className={`w-32 h-32 rounded-full flex items-center justify-center ${color} relative shadow-lg dark:shadow-xl border border-slate-200 dark:border-slate-700/50 group transition-all duration-300`}>
        {/* Using SVG for circular progress bar */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}
            strokeWidth="6"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={theme === 'dark' ? '#2dd4bf' : '#14b8a6'}
            strokeWidth="6"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
          />
        </svg>
        
        {/* Percentage display */}
        <div className="text-2xl font-bold text-slate-700 dark:text-slate-100 z-10">{displayPercentage}%</div>
        
        {/* Icon with improved animation */}
        {icon && (
          <div className="absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-40 transform transition-transform duration-300 group-hover:scale-110">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
             {icon}
            </motion.div>
          </div>
        )}
      </div>
      <div className="mt-4 text-slate-600 dark:text-slate-300 font-medium tracking-wide text-center text-sm">
        {name}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { theme } = useTheme();
  const mlSkills = [
    {
      name: "PYTHON",
      percentage: 95,
      color: "bg-yellow-100 dark:bg-yellow-900/40", // Increased dark opacity
      icon: <svg className="w-16 h-16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#FFD43B" d="M62.602 4.255c-3.121 0-6.102.234-8.738.688-7.805 1.344-9.227 4.156-9.227 9.347v6.852h18.453v2.285H37.039c-5.227 0-9.805 3.141-11.238 9.125-1.649 6.852-1.722 11.126 0 18.273 1.273 5.324 4.317 9.125 9.546 9.125h6.164v-8.222c0-5.938 5.137-11.172 11.238-11.172h18.453c5.004 0 9.227-4.121 9.227-9.149V14.289c0-4.879-4.121-8.542-9.227-9.347-3.215-.511-6.559-.688-9.601-.688zm-10.055 5.5a3.549 3.549 0 0 1 3.551 3.574 3.55 3.55 0 0 1-3.551 3.55 3.549 3.549 0 0 1-3.55-3.55 3.548 3.548 0 0 1 3.55-3.574z"/><path fill="#3776AB" d="M83.277 23.427v7.988c0 6.195-5.25 11.402-11.238 11.402H53.586c-4.93 0-9.227 4.215-9.227 9.148v17.156c0 4.878 4.242 7.75 9.227 9.148 5.976 1.684 11.676 1.988 18.453 0 4.512-1.325 9.227-3.988 9.227-9.148v-6.851H62.812v-2.285h27.68c5.227 0 7.175-3.645 9.227-9.125 2.133-5.637 2.039-11.058 0-18.273-1.465-5.188-4.266-9.125-9.227-9.125h-7.215zM73.14 79.121a3.55 3.55 0 0 1 3.551 3.55 3.55 3.55 0 0 1-3.551 3.551 3.55 3.55 0 1 1 0-7.101z"/></svg>
    },
     { // --- NEW: Deep Learning ---
      name: "DEEP LEARNING",
      percentage: 92,
      color: "bg-indigo-100 dark:bg-indigo-900/40",
      icon: <svg className="w-16 h-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M6 8h12" /><path d="M12 8v8" /><path d="M12 16a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M14 16h6" /></svg>
    },
    { // --- NEW: CNNs ---
      name: "CNNs",
      percentage: 90,
      color: "bg-emerald-100 dark:bg-emerald-900/40",
      icon: <svg className="w-16 h-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="3" y="15" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h6" /><path d="M9 18h6" /><path d="M6 9v6" /><path d="M18 9v6" /></svg>
    },
    { // --- NEW: Transformers ---
        name: "TRANSFORMERS",
        percentage: 88,
        color: "bg-orange-100 dark:bg-orange-900/40",
        icon: <svg className="w-16 h-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8l-3 3l3 3l3 -3z" /><path d="M12 14l-3 3l3 3l3 -3z" /><path d="M9 11l-3 3l3 3" /><path d="M15 11l3 3l-3 3" /><line x1="3" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="21" y2="12" /><line x1="12" y1="21" x2="12" y2="18" /><line x1="12" y1="6" x2="12" y2="3" /></svg>
    },
     { // --- Updated LLM ---
      name: "LLMs", // Changed from LLM to LLMs for plural if preferred
      percentage: 90,
      color: "bg-purple-100 dark:bg-purple-900/40", // Increased dark opacity
      // Simple abstract icon for LLMs (e.g., text/brain waves)
      icon: <svg className="w-16 h-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/><path d="M18 15a2 2 0 1 1 -4 0v-6a2 2 0 1 1 4 0v6z"/><path d="M16 11h2"/></svg>
    },
    {
      name: "PYTORCH",
      percentage: 90,
      color: "bg-red-100 dark:bg-red-900/40", // Increased dark opacity
      icon: <svg className="w-16 h-16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#EE4C2C" d="M100.586 33.49c-.37 6.103-.574 9.533-.662 10.19-.19 1.438-.734 1.732-2.496 1.457l-1.444-.209c-.969-.146-2.961-.772-2.961-3.023 0-2.055 1.319-3.082 2.342-4.086 1.318-1.295 2.661-2.697 2.637-6.427-.007-.871-.034-1.973-.087-3.267l-2.45-.3c.082 1.538.116 2.786.125 3.748.032 4.809-1.822 6.713-3.32 8.257-.892.921-1.659 1.707-1.659 2.672 0 .818.667 1.373 1.657 1.518.477.069 1.078.082 1.73-.014-.062.882-.103 1.768-.137 2.661-.26.692-.048 1.391-.065 2.103-.115 5.104-.179 10.875-.179 21.136v39.717H93V66.709c0-10.615.066-16.081.184-21.347.015-.631.033-1.25.056-1.862-1.821.576-3.532.477-4.919.154-2.342-.546-3.984-2.927-3.984-4.906 0-1.758 1.139-2.915 2.204-3.999 1.074-1.09 2.183-2.215 2.219-4.477.002-.156 0-.495-.012-1.007l-2.445-.3c.008.385.01.661.01.846-.022 1.3-.557 1.855-1.458 2.773-1.244 1.265-2.952 2.999-2.952 5.816 0 3.051 2.353 6.089 5.782 6.855.309.069.628.123.952.164-1.244 8.426-2.448 16.386-3.002 20.021-.11.715-.654 1.009-1.31 1.009h-.513c-.951 0-1.746-.073-2.53-.242.151.295.296.582.427.859.216.454.417.911.593 1.37.929-.025 1.765-.04 2.577-.04h.574c1.814 0 3.377-.864 3.71-3.54.525-4.217 1.85-13.047 3.137-21.704L88.059.005l2.442.298-2.389 19.599c-.085.724-.16 1.456-.239 2.187 1.562-1.687 6.159-3.194 6.159-7.709 0-1.569-.425-2.39-1.277-2.39-.138 0-.29.024-.455.078l-.614.194c-.204.063-.383.121-.571.121-.552 0-1.041-.401-1.041-1.707 0-1.883 1.658-2.845 3.164-2.845 1.991 0 4.202 1.491 4.202 6.259 0 5.127-3.219 7.293-4.902 8.53-.196.144-.377.277-.538.402l.156-1.633.039-.419c.014-.156.027-.312.039-.468l1.133-12.009 2.445.297-.771 8.5z"/></svg>
    },
    {
      name: "OPENCV",
      percentage: 88,
      color: "bg-green-100 dark:bg-green-900/40", // Increased dark opacity
      icon: <svg className="w-16 h-16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#309E3A" d="M64 35.639V29.9a21.572 21.572 0 0 0-15.942 7.059 21.572 21.572 0 0 0-15.94-7.06v5.74a15.77 15.77 0 0 1 15.77 15.77 20.564 20.564 0 0 0-10.541-2.894v5.739c8.82 0 15.94 7.118 15.94 15.939 0 1.8-.297 3.533-.843 5.152h1.686c.546-1.62.843-3.353.843-5.152 0-8.82-7.119-15.94-15.94-15.94v-5.738a20.564 20.564 0 0 0-10.54 2.895 15.772 15.772 0 0 1 15.77-15.77 15.771 15.771 0 0 1 15.77 15.77 15.771 15.771 0 0 1-15.77 15.769V53.256A21.579 21.579 0 0 0 37.349 66.79a21.58 21.58 0 0 0 7.532 13.535v-6.642a15.766 15.766 0 0 1-4.736-11.35 15.766 15.766 0 0 1 4.736-11.35v6.642a21.557 21.557 0 0 0-2.895 10.541c0 1.8.297 3.533.843 5.152h11.433c.546-1.62.843-3.352.843-5.152 0-3.87-1.36-7.429-3.637-10.219v-6.644a21.578 21.578 0 0 0-10.219 18.246c0 1.8.297 3.533.843 5.152h5.695c-.546-1.619-.843-3.352-.843-5.152a15.771 15.771 0 0 1 15.77-15.77 15.771 15.771 0 0 1 15.77 15.77c0 1.8-.297 3.533-.843 5.152h5.695c.546-1.619.843-3.352.843-5.152a21.578 21.578 0 0 0-10.219-18.246v6.644a15.763 15.763 0 0 1-3.638 10.219c0-8.82-7.118-15.939-15.939-15.939V53.256A15.771 15.771 0 0 1 64 69.025a15.766 15.766 0 0 1-4.736-11.35A15.766 15.766 0 0 1 64 46.325a21.579 21.579 0 0 0-7.767-13.534V51.41c1.105-1.08 2.363-1.992 3.739-2.717v-6.64A21.57 21.57 0 0 0 42.118 64c0 8.82 7.12 15.94 15.94 15.94V53.255A15.771 15.771 0 0 1 64 35.64z"/></svg>
    },
    {
      name: "RAG",
      percentage: 92,
      color: "bg-blue-100 dark:bg-blue-900/40", // Increased dark opacity
      icon: <svg className="w-16 h-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" /><path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" /><path d="M17 15v6h1.5a1.5 1.5 0 0 0 1.5 -1.5v-3a1.5 1.5 0 0 0 -1.5 -1.5h-1.5z" /></svg>
    },
    {
      name: "DOCKER",
      percentage: 80,
      color: "bg-cyan-100 dark:bg-cyan-900/40", // Increased dark opacity
      icon: <svg className="w-16 h-16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#2396ED" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49.4H63.8v-17H48.6v17H33.4V34.2H18.2v17H3v17h.4c1.3 0 2.6.1 3.9.1 3.5 0 6.8-.4 9.5-1.4 4.6-1.8 9.3-6.1 11.1-9.5 4.2.2 8.2-.3 12.4-1.5 1-.3 2.4-.8 3.8-1.4H79c.8 0 1.6-.1 2.4-.2v6.8h15.2v-5.9c2.5 0 5.1-.3 7.6-.9.8-.2 1.8-.5 2.8-.8.8 2.1 2.7 4 4.8 5.2 3.3 1.9 6.6 2.9 10.2 2.9 3.8-.1 7.5-1.3 10-2.1l1.2-.5zm-6.1-1.7c-1.3 1-3.3 2.3-6.8 2.3-2 0-3.9-.4-5.7-1.3-3.1-1.6-3.9-5.3-3.5-8.2-.1.1 1.3.5 1.9.7 3.1 1 6.5 1.2 9.2.5.2 0 .5-.1.7-.2.1.5.1 1.1.2 1.5.1 1.4.6 3.4 4 4.7zM80.8 33.7h11.3v11.3H80.8zm-15.8.1h11.3v11.3H65zm-15.8 0h11.3v11.3H49.2zm-15.7 0h11.3v11.3H33.5zM18 33.7h11.3v11.3H18zM3.3 66.8c-.3-.7-.5-1.5-.6-2.3h.3c3 0 6.8-.5 9.9-2.8 1.5-1.1 2.7-2.5 3.4-3.6.3.8.7 1.5 1.1 2.2-1.8 3.1-6.4 5.5-10.5 6.1-.9.2-2.5.4-3.6.4z"/></svg>
    }
  ].sort((a, b) => b.percentage - a.percentage);

  const skillSections = [
    { title: "Machine Learning, AI & Deployment", skills: mlSkills },
  ];

  // Animation variants for section titles
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500 relative">
            Technical Expertise
            <motion.span 
              className="absolute -bottom-2 left: 0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-600"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "50%", left: "25%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-slate-600 dark:text-slate-400 text-center mb-16 max-w-3xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Proficient in the full lifecycle of AI/ML projects, from foundational Python and core libraries to advanced model development (CNNs, Transformers, LLMs), deployment (Docker), and specialized applications (RAG, CV).
        </motion.p>

        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <motion.h3
              className="text-xl md:text-2xl font-semibold mb-12 text-center text-teal-600 dark:text-teal-400 tracking-wide"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {section.title}
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12 justify-items-center items-start">
              {section.skills.map((skill, index) => (
                <CircularSkill
                  key={`${section.title}-${skill.name}`}
                  index={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;