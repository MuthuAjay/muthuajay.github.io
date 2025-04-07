import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    title: "Senior Data Scientist",
    company: "Ernst & Young",
    period: "2023 - Present",
    description: "Leading AI initiatives and managing a team of data scientists. Implemented advanced RAG systems and vision transformers for enterprise solutions.",
    highlights: [
      "Architected and deployed enterprise-scale RAG systems for automated document analysis",
      "Led AI strategy development for cross-functional teams and client engagements",
      "Mentored junior data scientists and implemented technical best practices"
    ]
  },
  {
    title: "Data Scientist",
    company: "Ernst & Young",
    period: "2021 - 2023",
    description: "Developed ML models for document classification and NLP tasks. Achieved 99% accuracy in production systems.",
    highlights: [
      "Built and optimized CNN architectures for complex image recognition challenges",
      "Implemented end-to-end ML pipelines from data preparation to model deployment",
      "Achieved 99% accuracy in document classification production systems"
    ]
  },
  {
    title: "Associate Data Scientist",
    company: "Ernst & Young",
    period: "2020 - 2021",
    description: "Started as an associate working on data preprocessing and model development. Contributed to multiple successful ML projects.",
    highlights: [
      "Performed comprehensive data preprocessing and feature engineering",
      "Contributed to model development and evaluation for client projects",
      "Collaborated with cross-functional teams to implement data-driven solutions"
    ]
  }
];

const Experience = () => {
  const { theme } = useTheme();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 opacity-70"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
              Professional Experience
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey as a data scientist, building and deploying AI solutions across different domains and complexity levels.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative mb-12 last:mb-0"
              variants={itemVariants}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500/30 dark:from-teal-400 dark:to-blue-400/20"></div>
              )}
              
              {/* Timeline dot and content card */}
              <div className="flex items-start gap-6">
                {/* Timeline indicator */}
                <div className="relative flex-shrink-0">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500 rounded-full shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Briefcase className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                
                {/* Content card */}
                <motion.div 
                  className="flex-1 bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: theme === 'dark' 
                      ? '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' 
                      : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Card header */}
                  <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 dark:from-teal-500/20 dark:to-blue-500/20 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-teal-600 dark:text-teal-300">{exp.title}</h3>
                        <div className="text-slate-700 dark:text-slate-300 font-medium">{exp.company}</div>
                      </div>
                      <div className="flex items-center px-3 py-1.5 bg-teal-100 dark:bg-teal-800/40 text-teal-700 dark:text-teal-300 rounded-full text-sm">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                    
                    {/* Highlights */}
                    <h4 className="font-medium text-slate-800 dark:text-white mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-teal-500 dark:text-teal-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start text-slate-600 dark:text-slate-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + (i * 0.1) }}
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-2 mr-2"></span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;