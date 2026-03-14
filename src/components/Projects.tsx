import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const TiltCard = ({ project, theme, variants }: { project: any; theme: string; variants: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden flex flex-col h-full border border-warm-accent/20 dark:border-slate-700 group"
      variants={variants}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileHover={{
        boxShadow: theme === 'dark'
          ? '0 30px 60px -15px rgba(45, 212, 191, 0.2)'
          : '0 30px 60px -15px rgba(92, 61, 46, 0.18)',
      }}
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-sage to-warm-accent dark:from-teal-400 dark:to-blue-500" />
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-sage dark:text-teal-400 transition-colors duration-300 group-hover:translate-x-1 transition-transform">{project.title}</h3>
        <p className="text-warm-brown dark:text-slate-300 mb-4 flex-grow transition-colors duration-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-warm-soft dark:bg-slate-700 rounded-full text-sm text-sage dark:text-teal-400 transition-all duration-300 hover:scale-105">
              {tech}
            </span>
          ))}
        </div>
        <div className="bg-cream dark:bg-slate-700/50 p-3 rounded mb-4 transition-colors duration-300">
          <h4 className="text-sm font-semibold text-sage dark:text-teal-300 mb-1 transition-colors duration-300">Metrics & Outcomes:</h4>
          <p className="text-sm text-warm-brown dark:text-slate-300 transition-colors duration-300">{project.metrics}</p>
        </div>
      </div>
      <div className="p-4 bg-warm-soft/50 dark:bg-slate-700/30 flex justify-between items-center transition-colors duration-300">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-cream dark:bg-slate-600 rounded-lg text-sage dark:text-teal-300 transition-all duration-300"
          whileHover={{ scale: 1.05, backgroundColor: theme === 'dark' ? '#334155' : '#FFFAF3' }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="h-4 w-4 mr-2" />
          View Code
        </motion.a>
        <div className="flex gap-1">
          {project.category.map((cat: string, i: number) => (
            <span key={i} className="text-xs text-muted dark:text-slate-400 transition-colors duration-300">
              {cat}{i < project.category.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

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
    title: "Captcha & Document Authentication",
    description: "Built CNN and EfficientNet architectures for document authentication and captcha classification. Achieved 95.2% accuracy on document authentication through domain-specific training optimisation that outperformed generic augmentation baselines. Comprehensive data curation, preprocessing, and augmentation pipeline for complex distorted character recognition.",
    technologies: ["PyTorch", "EfficientNet", "OpenCV", "Docker", "AWS"],
    metrics: "95.2% document authentication accuracy; 99% captcha classification accuracy; domain-specific training outperformed generic augmentation across all validation benchmarks",
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
    title: "Signature Analysis & Signer Identification",
    description: "End-to-end signature analysis system using Faster R-CNN for detection, multi-modal feature extraction combining EfficientNet, VGG19, ResNet50, and ViT with adaptive fusion, and DeepLabV3-ResNet50 for foreground-background segmentation. Multi-level clustering (DBSCAN, hierarchical, threshold-based) with automated parameter optimisation and silhouette score validation achieves robust cross-document signer identification.",
    technologies: ["PyTorch", "Faster R-CNN", "ViT", "EfficientNet", "DeepLabV3", "OpenCV"],
    metrics: "Cross-document signer identification via adaptive multi-modal fusion of 4 architectures; precise segmentation via DeepLabV3; state-of-the-art forgery detection robustness via adversarially-trained ViT",
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
  },
  {
    title: "AI-Powered SQL Agent",
    description: "Multi-agent SQL intelligence system with a 4-agent architecture (Router, SQL, Analysis, Visualization) orchestrated by LangGraph. Implements natural language to SQL conversion with RAG via ChromaDB, MCP protocol compliance, multi-provider LLM support (OpenAI, Google, local LLMs), real-time PostgreSQL query execution with validation, and automatic data visualisation with statistical analysis.",
    technologies: ["LangGraph", "ChromaDB", "PostgreSQL", "RAG", "MCP", "Python"],
    metrics: "4-agent LangGraph orchestration with NL2SQL validated against live PostgreSQL execution; multi-provider LLM support across OpenAI, Google & local models; automatic statistical analysis and visualisation output",
    github: "https://github.com/MuthuAjay",
    category: ["NLP", "LLMs", "RAG"]
  },
  {
    title: "Object Detection Framework",
    description: "Built and benchmarked multiple object detection architectures from scratch — YOLOv3/v5 (custom darknet backbone, neck, head, loss, and anchor generation), DETR with DDP training, RT-DETR trained on WIDER Face with live inference, and Faster R-CNN. Also includes a custom lightweight YOLO-26 variant and YOLOv8-based face & pothole detection.",
    technologies: ["PyTorch", "YOLOv8", "ONNX", "FiftyOne", "OpenCV", "DDP"],
    metrics: "Trained RT-DETR & YOLOv8 on WIDER Face; implemented INT8 quantization (PTQ & QAT) for edge deployment; ONNX export pipeline for cross-platform inference; benchmarked custom YOLO-26 against standard architectures",
    github: "https://github.com/MuthuAjay/object_detection",
    category: ["Computer Vision", "Object Detection"]
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Computer Vision', 'NLP', 'RAG', 'Transformers', 'Data Engineering', 'Research', 'Classification', 'Segmentation', 'LLMs', 'Object Detection'];
  
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
    <section id="projects" className="py-20 bg-cream dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage dark:text-teal-600 mb-3 text-center">
            My Work
          </p>
          <h2 className="font-serif text-3xl font-bold mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-warm-accent dark:from-teal-400 dark:to-blue-500">Featured Projects</span>
          </h2>
          <p className="text-warm-brown dark:text-slate-300 text-center mb-8 max-w-3xl mx-auto transition-colors duration-300">
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
                  ? 'bg-warm-brown dark:bg-teal-500 text-cream dark:text-white shadow-md'
                  : 'bg-warm-soft dark:bg-slate-800 text-muted dark:text-slate-300 hover:bg-cream dark:hover:bg-slate-700 transition-colors duration-300'
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
            <TiltCard
              key={index}
              project={project}
              theme={theme}
              variants={projectVariants}
            />
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warm-brown to-warm-dark dark:from-teal-500 dark:to-blue-600 text-cream dark:text-white rounded-lg transition-all duration-300 shadow-lg relative overflow-hidden group"
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