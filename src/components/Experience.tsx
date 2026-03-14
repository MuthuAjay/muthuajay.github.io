import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    title: "Senior Data Scientist",
    company: "Ernst & Young",
    period: "2023 - Present",
    description: "Leading enterprise AI initiatives, architecting RAG and Vision Transformer systems for large-scale client engagements across legal, finance, and document processing domains.",
    highlights: [
      "Architected a RAG-based contract analysis system using LangChain & Chroma DB, reducing manual legal review time by 75%",
      "Deployed Vision Transformer (ViT) models for signature verification with state-of-the-art forgery detection performance",
      "Led AI strategy and model governance for cross-functional teams across multiple client engagements",
      "Mentored junior data scientists and established ML best practices for production deployments"
    ]
  },
  {
    title: "Data Scientist",
    company: "Ernst & Young",
    period: "2021 - 2023",
    description: "Developed and deployed production ML systems for document classification, computer vision, and NLP — achieving industry-leading accuracy benchmarks.",
    highlights: [
      "Built CNN architectures for captcha & document classification achieving 99% accuracy in production",
      "Engineered RAG frameworks that improved information retrieval speeds by 60% over baseline",
      "Implemented end-to-end ML pipelines from data curation and preprocessing to Docker-containerised AWS deployments",
      "Replicated and enhanced ML research papers, achieving 30% improvement in SQL query optimisation performance"
    ]
  },
  {
    title: "Associate Data Scientist",
    company: "Ernst & Young",
    period: "2020 - 2021",
    description: "Built foundational ML expertise through hands-on work across data engineering, model development, and early computer vision projects.",
    highlights: [
      "Developed data preprocessing pipelines and feature engineering strategies for structured and unstructured datasets",
      "Contributed to CNN-based image recognition models and early computer vision experiments",
      "Collaborated with cross-functional client teams to translate business problems into data-driven solutions",
      "Gained deep proficiency in PyTorch, OpenCV, scikit-learn, and cloud deployment on AWS"
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
    <section id="experience" className="py-24 bg-cream dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sage to-warm-accent dark:from-teal-400 dark:to-blue-500 opacity-70"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-sage/10 dark:bg-teal-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-warm-accent/10 dark:bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage dark:text-teal-400 mb-3">
            Career Journey
          </p>
          <h2 className="font-serif text-3xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-warm-accent dark:from-teal-500 dark:to-blue-600">
              Professional Experience
            </span>
          </h2>
          <p className="text-muted dark:text-slate-400 max-w-2xl mx-auto">
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
              {/* Timeline connector — draws downward on scroll */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-sage to-warm-accent/30 dark:from-teal-400 dark:to-blue-400/20 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                />
              )}
              
              {/* Timeline dot and content card */}
              <div className="flex items-start gap-6">
                {/* Timeline indicator */}
                <div className="relative flex-shrink-0">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sage to-warm-accent dark:from-teal-500 dark:to-blue-600 rounded-full shadow-lg"
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
                  <div className="bg-sage/10 dark:bg-teal-500/20 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-sage dark:text-teal-300">{exp.title}</h3>
                        <div className="text-warm-brown dark:text-slate-300 font-medium">{exp.company}</div>
                      </div>
                      <div className="flex items-center px-3 py-1.5 bg-sage/10 dark:bg-teal-800/40 text-sage dark:text-teal-300 rounded-full text-sm">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-warm-brown dark:text-slate-300 mb-4">{exp.description}</p>
                    
                    {/* Highlights */}
                    <h4 className="font-medium text-warm-brown dark:text-white mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-sage dark:text-teal-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start text-warm-brown dark:text-slate-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + (i * 0.1) }}
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage dark:bg-teal-400 mt-2 mr-2"></span>
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

      {/* Wave divider → GitHubActivity (bg-cream) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path
            d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,16 1440,24 L1440,48 L0,48 Z"
            className="fill-cream dark:fill-slate-900"
          />
        </svg>
      </div>
    </section>
  );
};

export default Experience;