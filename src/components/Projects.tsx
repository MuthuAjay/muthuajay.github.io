import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: "RAG-Based Contract Analysis System",
    description: "Developed a sophisticated contract analysis application using Retrieval-Augmented Generation (RAG), Chroma DB vector store, and Large Language Models for legal document processing.",
    technologies: ["PyTorch", "Langchain", "Chroma DB", "LLMs", "FastAPI"],
    metrics: "Significantly reduced manual review time, improved legal team efficiency by 75%",
    github: "https://github.com/MuthuAjay/RAG",
    category: ["NLP", "RAG"]
  },
  {
    title: "Captcha & Document Classification",
    description: "Built CNN models to classify complex, distorted alphanumeric characters from images, handling document classification with 99% accuracy. Implemented comprehensive data curation and preprocessing pipeline.",
    technologies: ["PyTorch", "OpenCV", "Docker", "AWS"],
    metrics: "97% accuracy on challenging visual recognition tasks, 60% reduction in processing time",
    github: "https://github.com/MuthuAjay/Captcha_Classification",
    category: ["Computer Vision", "Classification"]
  },
  {
    title: "ML Paper Replication & SQL Optimization",
    description: "Replicated and enhanced machine learning research papers with a focus on query optimization. Integrated LLM-powered RAG models for SQL performance enhancement.",
    technologies: ["PyTorch", "pandas", "scikit-learn", "SQL"],
    metrics: "30% enhancement in query performance, validated research findings with real-world data",
    github: "https://github.com/MuthuAjay/ML_Paper_Replication",
    category: ["Research", "Data Engineering"]
  },
  {
    title: "Signature Comparison & Verification",
    description: "Implemented Vision Transformer (ViT) models for signature verification and forgery detection. Designed a robust comparison system with enhanced security features and adversarial attack protection.",
    technologies: ["PyTorch", "Vision Transformers", "OpenCV", "FastAPI"],
    metrics: "State-of-the-art performance on signature verification benchmarks, improved robustness against forgery attempts",
    github: "https://github.com/MuthuAjay/signature_comparison_project",
    category: ["Computer Vision", "Transformers"]
  },
  {
    title: "Offline GPT Implementation",
    description: "Created a local, offline implementation of GPT-based language models for secure, private NLP applications. Developed pre-training and fine-tuning pipelines for domain-specific use cases.",
    technologies: ["PyTorch", "Transformers", "HuggingFace", "ONNX"],
    metrics: "Successfully pre-trained on 10GB custom dataset, optimized for edge deployment",
    github: "https://github.com/MuthuAjay/offline_gpt",
    category: ["NLP", "LLMs"]
  },
  {
    title: "Segment Anything Model (SAM) Implementation",
    description: "Designed and implemented SAM architecture for image segmentation, including custom dataset preparation, automated training pipelines, and hyperparameter tuning for optimal performance.",
    technologies: ["PyTorch", "Computer Vision", "Transfer Learning", "Docker"],
    metrics: "Achieved optimized segmentation performance, successfully adapted to domains with limited data",
    github: "https://github.com/MuthuAjay/Segment_Anything",
    category: ["Computer Vision", "Segmentation"]
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Computer Vision', 'NLP', 'RAG', 'Transformers', 'Data Engineering', 'Research', 'Classification', 'Segmentation', 'LLMs'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Featured Projects</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-center mb-8 max-w-3xl mx-auto transition-colors duration-300">
            A collection of my data science and machine learning projects, focused on computer vision, NLP, and advanced AI techniques.
          </p>
        </motion.div>
        
        {/* Filter buttons with animations */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category 
                  ? 'bg-teal-500 text-white shadow-md' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex flex-col h-full border border-slate-200 dark:border-slate-700 group"
              variants={projectVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: theme === 'dark' 
                  ? '0 25px 50px -12px rgba(45, 212, 191, 0.15)' 
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Project top gradient bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-teal-400 to-blue-500 transform origin-left transition-transform duration-300 group-hover:scale-x-100" />
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400 transition-colors duration-300 group-hover:translate-x-1 transition-transform">{project.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4 flex-grow transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm text-teal-600 dark:text-teal-400 transition-all duration-300 hover:scale-105">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="bg-slate-200/70 dark:bg-slate-700/50 p-3 rounded mb-4 transition-colors duration-300">
                  <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-300 mb-1 transition-colors duration-300">Metrics & Outcomes:</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 transition-colors duration-300">{project.metrics}</p>
                </div>
              </div>
              
              {/* Card footer */}
              <div className="p-4 bg-slate-200/50 dark:bg-slate-700/30 flex justify-between items-center transition-colors duration-300">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-600 rounded-lg text-teal-600 dark:text-teal-300 transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: theme === 'dark' ? '#334155' : '#e2e8f0' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </motion.a>
                <div className="flex gap-1">
                  {project.category.map((cat, i) => (
                    <span key={i} className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
                      {cat}{i < project.category.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.a 
            href="https://github.com/MuthuAjay" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 w-0 bg-white bg-opacity-20 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative z-10 flex items-center font-medium">
              <Github className="h-5 w-5 mr-3" />
              View All Projects on GitHub
              <motion.span 
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;