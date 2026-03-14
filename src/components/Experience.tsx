import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { Star, Code2, Sprout, Calendar, ChevronDown, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// ── Animated count-up for the tenure banner ──────────────────────────────────
const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(v) { setDisplay(Math.round(v) + suffix); },
    });
    return () => ctrl.stop();
  }, [isInView, to, suffix]);

  return <span ref={ref}>{display}</span>;
};

// ── Data ──────────────────────────────────────────────────────────────────────
const experiences = [
  {
    title: 'Senior Data Scientist',
    company: 'Ernst & Young',
    period: '2023 – Present',
    yearLabel: '2023',
    active: true,
    accentColor: '#5C3D2E',
    dotFrom: '#5C3D2E',
    dotTo: '#2C1810',
    icon: <Star className="w-5 h-5 text-white" />,
    metrics: [
      { value: '75%', label: 'Less Review Time', icon: '↓' },
      { value: 'SQL', label: 'Agent Deployed', icon: '🤖' },
      { value: '94.9%', label: 'XGBoost CV Acc.', icon: '🎯' },
    ],
    description:
      'Leading enterprise AI initiatives — architecting multi-agent LangGraph systems, RAG pipelines, and Vision Transformer solutions for large-scale client engagements across legal, finance, and document processing domains.',
    highlights: [
      'Architected a RAG-based contract analysis system using LangChain & Chroma DB, reducing manual legal review time by 75%',
      'Developed an AI-powered SQL Agent with 4-agent LangGraph architecture (Router, SQL, Analysis, Visualization), NL-to-SQL via ChromaDB RAG, multi-provider LLM support, and real-time PostgreSQL execution with auto visualisation',
      'Deployed an XGBoost model with dimensionality reduction for high-cardinality features, achieving 94.9% average cross-validation accuracy with minimised overfitting',
      'Led AI strategy and model governance for cross-functional teams across multiple client engagements',
    ],
    stack: ['LangGraph', 'ChromaDB', 'LangChain', 'LLMs', 'XGBoost', 'PyTorch'],
  },
  {
    title: 'Data Scientist',
    company: 'Ernst & Young',
    period: '2021 – 2023',
    yearLabel: '2021',
    active: false,
    accentColor: '#8B9E7E',
    dotFrom: '#8B9E7E',
    dotTo: '#6B8A5E',
    icon: <Code2 className="w-5 h-5 text-white" />,
    metrics: [
      { value: '99%', label: 'CNN Accuracy', icon: '🎯' },
      { value: '95.2%', label: 'Doc Auth Acc.', icon: '🔐' },
      { value: '60%', label: 'Faster RAG', icon: '⚡' },
    ],
    description:
      'Developed and deployed production ML systems for signature analysis, document authentication, computer vision, and NLP — achieving industry-leading accuracy benchmarks.',
    highlights: [
      'Built end-to-end signature analysis system: Faster R-CNN detection, multi-modal fusion of EfficientNet + VGG19 + ResNet50 + ViT with adaptive fusion, DBSCAN/hierarchical/threshold clustering with silhouette score validation for cross-document signer identification',
      'Implemented DeepLabV3-ResNet50 for signature segmentation, achieving precise foreground-background separation for downstream verification',
      'Built EfficientNet document authentication system achieving 95.2% accuracy via domain-specific training optimisation over generic augmentation',
      'Engineered RAG frameworks that improved information retrieval speeds by 60%; built CNN pipelines achieving 99% captcha classification accuracy',
    ],
    stack: ['PyTorch', 'Faster R-CNN', 'EfficientNet', 'DeepLabV3', 'RAG', 'Docker', 'AWS'],
  },
  {
    title: 'Associate Data Scientist',
    company: 'Ernst & Young',
    period: '2020 – 2021',
    yearLabel: '2020',
    active: false,
    accentColor: '#D4A574',
    dotFrom: '#D4A574',
    dotTo: '#A67C52',
    icon: <Sprout className="w-5 h-5 text-white" />,
    metrics: [
      { value: 'CV', label: 'CNN Research', icon: '🔬' },
      { value: 'AWS', label: 'Cloud Deploys', icon: '☁️' },
      { value: 'E2E', label: 'ML Pipelines', icon: '🔗' },
    ],
    description:
      'Built foundational ML expertise through hands-on work across data engineering, model development, and early computer vision projects.',
    highlights: [
      'Developed data preprocessing pipelines and feature engineering strategies for structured and unstructured datasets',
      'Contributed to CNN-based image recognition models and early computer vision experiments',
      'Collaborated with cross-functional client teams to translate business problems into data-driven solutions',
      'Gained deep proficiency in PyTorch, OpenCV, scikit-learn, and cloud deployment on AWS',
    ],
    stack: ['PyTorch', 'OpenCV', 'scikit-learn', 'AWS', 'Pandas', 'NumPy'],
  },
];

// Each card enters from a different direction to break monotony
const cardEntrance = [
  { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 75, damping: 14 } } },
  { hidden: { opacity: 0, y: 55 },  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 75, damping: 14 } } },
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 75, damping: 14 } } },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Experience = () => {
  const { theme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // first card open by default

  return (
    <section
      id="experience"
      className="py-24 bg-cream dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-sage/10 dark:bg-teal-500/5 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-warm-accent/10 dark:bg-blue-500/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage dark:text-teal-400 mb-3">
            Career Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-warm-accent dark:from-teal-500 dark:to-blue-600">
              Professional Experience
            </span>
          </h2>
          <p className="text-muted dark:text-slate-400 max-w-2xl mx-auto">
            Five years at Ernst & Young, progressing from building foundational ML pipelines to leading enterprise AI strategy.
          </p>
        </motion.div>

        {/* ── EY Tenure Banner ── */}
        <motion.div
          className="max-w-4xl mx-auto mb-14 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {[
            { label: 'Years at EY', to: 5, suffix: '+' },
            { label: 'Promotions', to: 3, suffix: '' },
            { label: 'AI Projects Shipped', to: 8, suffix: '+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-slate-700 rounded-xl p-5 text-center border border-warm-accent/20 dark:border-slate-600 shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              whileHover={{ y: -3, boxShadow: theme === 'dark' ? '0 12px 24px -6px rgba(0,0,0,0.3)' : '0 12px 24px -6px rgba(92,61,46,0.12)' }}
            >
              <div className="font-serif text-3xl font-bold text-warm-dark dark:text-white mb-1">
                <CountUp to={stat.to} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-muted dark:text-slate-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Timeline ── */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">

              {/* Connector line — starts below the year label (~96px from top) */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-8 bottom-0 w-0.5 origin-top"
                  style={{
                    top: '96px',
                    background: `linear-gradient(to bottom, ${exp.accentColor}80, ${exp.accentColor}15)`,
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.3, ease: 'easeOut', delay: 0.4 }}
                />
              )}

              <div className="flex items-start gap-6">

                {/* ── Timeline dot column — circle + year label stacked ── */}
                <div className="relative flex-shrink-0 z-10 flex flex-col items-center gap-1">
                  {/* Circle + pulse ring */}
                  <div className="relative">
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${exp.dotFrom}, ${exp.dotTo})` }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      {exp.icon}
                    </motion.div>

                    {/* Pulsing ring — only on active role */}
                    {exp.active && (
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ border: `2px solid ${exp.accentColor}` }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0, 0.9] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                  </div>

                  {/* Year label — sits naturally below the circle */}
                  <motion.span
                    className="text-xs font-bold tracking-wider text-muted dark:text-slate-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.12 }}
                  >
                    {exp.yearLabel}
                  </motion.span>
                </div>

                {/* ── Content card ── */}
                <motion.div
                  className="flex-1 bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden border-l-4"
                  style={{ borderLeftColor: exp.accentColor }}
                  variants={cardEntrance[index]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{
                    y: -5,
                    boxShadow: theme === 'dark'
                      ? `0 24px 48px -12px ${exp.accentColor}35`
                      : `0 24px 48px -12px ${exp.accentColor}28`,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  {/* Card header */}
                  <div
                    className="p-6 pb-4"
                    style={{ background: `linear-gradient(110deg, ${exp.accentColor}0f, transparent 60%)` }}
                  >
                    {/* Title row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="text-xl font-bold text-warm-dark dark:text-white">{exp.title}</h3>
                          {exp.active && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-muted dark:text-slate-400 font-medium">{exp.company}</div>
                      </div>
                      <div
                        className="flex items-center px-3 py-1.5 rounded-full text-sm font-medium"
                        style={{ backgroundColor: `${exp.accentColor}18`, color: exp.accentColor }}
                      >
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Metric chips */}
                    <div className="flex flex-wrap gap-2">
                      {exp.metrics.map((metric, mi) => (
                        <motion.div
                          key={mi}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border cursor-default"
                          style={{
                            backgroundColor: `${exp.accentColor}10`,
                            borderColor: `${exp.accentColor}28`,
                            color: exp.accentColor,
                          }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: `${exp.accentColor}22`,
                            transition: { duration: 0.15 },
                          }}
                        >
                          <span>{metric.icon}</span>
                          <span className="font-bold">{metric.value}</span>
                          <span className="text-xs opacity-70 font-normal">{metric.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-6 pb-6">
                    <p className="text-sm text-warm-brown dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {exp.stack.map((tech, ti) => (
                        <motion.span
                          key={ti}
                          className="px-2.5 py-1 text-xs rounded-md bg-warm-soft dark:bg-slate-600 text-warm-brown dark:text-slate-300 font-medium"
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * ti, duration: 0.25 }}
                          whileHover={{ scale: 1.06 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Achievements accordion trigger */}
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="flex items-center gap-2 text-sm font-semibold w-full text-left py-1 group"
                      style={{ color: exp.accentColor }}
                    >
                      <Award className="w-4 h-4 flex-shrink-0" />
                      Key Achievements
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="ml-auto"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    {/* Accordion body */}
                    <AnimatePresence initial={false}>
                      {expandedIndex === index && (
                        <motion.ul
                          key="bullets"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden mt-3 space-y-2.5"
                        >
                          {exp.highlights.map((h, hi) => (
                            <motion.li
                              key={hi}
                              className="flex items-start text-sm text-warm-brown dark:text-slate-300"
                              initial={{ opacity: 0, x: -14 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: hi * 0.08, duration: 0.3, ease: 'easeOut' }}
                            >
                              <span
                                className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2.5 flex-shrink-0"
                                style={{ backgroundColor: exp.accentColor }}
                              />
                              {h}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider → GitHubActivity */}
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
