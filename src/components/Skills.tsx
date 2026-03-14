import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Flame, Zap, Eye, GitMerge, Brain, MessageSquare, Database, Cloud, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// ── CountUp ───────────────────────────────────────────────────────────────────
const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const ctrl = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate(v) { setDisplay(Math.round(v) + suffix); },
    });
    return () => ctrl.stop();
  }, [isInView, to, suffix]);

  return <span ref={ref}>{display}</span>;
};

// ── Featured signature skills ─────────────────────────────────────────────────
const featuredSkills = [
  {
    name: 'PyTorch',
    caption: 'Primary deep learning framework',
    stat: 4, suffix: '+', statLabel: 'years as primary framework',
    color: '#5C3D2E',
    icon: <Flame className="w-7 h-7" />,
  },
  {
    name: 'LLMs & RAG',
    caption: 'Production-grade AI pipelines',
    stat: 75, suffix: '%', statLabel: 'less legal review time',
    color: '#8B9E7E',
    icon: <Zap className="w-7 h-7" />,
  },
  {
    name: 'Computer Vision',
    caption: 'EfficientNet · ViT · YOLO · R-CNN',
    stat: 8, suffix: '+', statLabel: 'architectures built & deployed',
    color: '#D4A574',
    icon: <Eye className="w-7 h-7" />,
  },
  {
    name: 'LangGraph',
    caption: 'Multi-agent orchestration',
    stat: 4, suffix: '', statLabel: 'agent SQL system deployed',
    color: '#C9907E',
    icon: <GitMerge className="w-7 h-7" />,
  },
];

// ── Skill categories ──────────────────────────────────────────────────────────
const skillCategories = [
  {
    title: 'AI & Deep Learning',
    accentColor: '#5C3D2E',
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: 'PyTorch', level: 'Expert' },
      { name: 'Deep Learning', level: 'Expert' },
      { name: 'CNNs', level: 'Expert' },
      { name: 'Transformers', level: 'Expert' },
      { name: 'LLMs', level: 'Expert' },
      { name: 'Gen AI', level: 'Proficient' },
      { name: 'XGBoost', level: 'Proficient' },
      { name: 'scikit-learn', level: 'Expert' },
      { name: 'Statistical Modelling', level: 'Proficient' },
      { name: 'Reinforcement Learning', level: 'Familiar' },
    ],
  },
  {
    title: 'Computer Vision',
    accentColor: '#8B9E7E',
    icon: <Eye className="w-5 h-5" />,
    skills: [
      { name: 'Object Detection', level: 'Expert' },
      { name: 'Image Segmentation', level: 'Expert' },
      { name: 'OpenCV', level: 'Expert' },
      { name: 'EfficientNet', level: 'Expert' },
      { name: 'Vision Transformers', level: 'Expert' },
      { name: 'Faster R-CNN', level: 'Expert' },
      { name: 'YOLO', level: 'Expert' },
      { name: 'DeepLabV3', level: 'Proficient' },
      { name: 'Image Processing', level: 'Expert' },
    ],
  },
  {
    title: 'NLP & LLM Ops',
    accentColor: '#C9907E',
    icon: <MessageSquare className="w-5 h-5" />,
    skills: [
      { name: 'RAG', level: 'Expert' },
      { name: 'LangChain', level: 'Expert' },
      { name: 'LangGraph', level: 'Expert' },
      { name: 'ChromaDB', level: 'Expert' },
      { name: 'Prompt Engineering', level: 'Expert' },
      { name: 'HuggingFace', level: 'Proficient' },
      { name: 'OpenAI API', level: 'Proficient' },
      { name: 'MCP Protocol', level: 'Proficient' },
    ],
  },
  {
    title: 'Data Engineering',
    accentColor: '#D4A574',
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: 'SQL', level: 'Expert' },
      { name: 'Pandas', level: 'Expert' },
      { name: 'NumPy', level: 'Expert' },
      { name: 'Feature Engineering', level: 'Expert' },
      { name: 'EDA', level: 'Expert' },
      { name: 'ETL Pipelines', level: 'Proficient' },
      { name: 'Data Visualisation', level: 'Proficient' },
      { name: 'Hive / Hadoop', level: 'Familiar' },
    ],
  },
  {
    title: 'Cloud & Deployment',
    accentColor: '#6B8A5E',
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: 'Docker', level: 'Expert' },
      { name: 'FastAPI', level: 'Expert' },
      { name: 'Git / GitHub', level: 'Expert' },
      { name: 'AWS', level: 'Proficient' },
      { name: 'Azure', level: 'Proficient' },
      { name: 'ONNX', level: 'Proficient' },
      { name: 'GCP', level: 'Familiar' },
    ],
  },
  {
    title: 'Languages & Viz',
    accentColor: '#8C7B6B',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'Matplotlib', level: 'Expert' },
      { name: 'Seaborn', level: 'Expert' },
      { name: 'Power BI', level: 'Proficient' },
      { name: 'Tableau', level: 'Proficient' },
      { name: 'C++ (CUDA basics)', level: 'Familiar' },
    ],
  },
];

// ── ATS keyword row ───────────────────────────────────────────────────────────
const atsBadges = [
  'PyTorch', 'scikit-learn', 'LangChain', 'LangGraph', 'HuggingFace',
  'FastAPI', 'AWS', 'Azure', 'Docker', 'Pandas', 'NumPy', 'ONNX',
  'ChromaDB', 'SQL', 'OpenCV', 'Git', 'Power BI', 'Tableau', 'XGBoost', 'TensorFlow',
];

// Badge styles by proficiency level
const badgeStyle = (level: string, color: string) => {
  if (level === 'Expert') return {
    backgroundColor: `${color}1a`,
    borderColor: `${color}40`,
    color,
  };
  if (level === 'Proficient') return {
    backgroundColor: `${color}0d`,
    borderColor: `${color}25`,
    color,
    opacity: 0.8,
  };
  return {}; // Familiar — Tailwind classes handle it
};

// ── Component ─────────────────────────────────────────────────────────────────
const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20 bg-warm-soft dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-sage dark:text-teal-400 mb-3">
            Skills & Expertise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-warm-accent dark:from-teal-500 dark:to-blue-600">
              Technical Expertise
            </span>
          </h2>
          <p className="text-muted dark:text-slate-400 max-w-2xl mx-auto">
            Four years at EY building production AI — from foundational data engineering to cutting-edge multi-agent LLM systems and computer vision at scale.
          </p>
        </motion.div>

        {/* ── Featured skills row (4 tiles) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {featuredSkills.map((feat, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-warm-accent/20 dark:border-slate-700 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{
                y: -5,
                boxShadow: theme === 'dark'
                  ? `0 20px 40px -10px ${feat.color}35`
                  : `0 20px 40px -10px ${feat.color}28`,
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ backgroundColor: feat.color }} />
              {/* Faint background glow */}
              <div className="absolute inset-0 opacity-[0.04] rounded-xl" style={{ backgroundColor: feat.color }} />

              <div className="relative">
                <div className="mb-3" style={{ color: feat.color }}>{feat.icon}</div>
                <div className="font-serif text-base font-bold text-warm-dark dark:text-white mb-0.5 leading-tight">
                  {feat.name}
                </div>
                <div className="text-xs text-muted dark:text-slate-400 mb-4 leading-relaxed">
                  {feat.caption}
                </div>
                <div className="font-serif text-3xl font-bold leading-none" style={{ color: feat.color }}>
                  <CountUp to={feat.stat} suffix={feat.suffix} />
                </div>
                <div className="text-xs text-muted dark:text-slate-500 mt-1">{feat.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Category skill cards (6 cards, 3-col grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skillCategories.map((cat, i) => (
            // Perspective wrapper for flip entrance
            <div key={i} style={{ perspective: '900px' }}>
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-warm-accent/15 dark:border-slate-700 shadow-sm h-full"
                initial={{ rotateY: 88, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -4,
                  boxShadow: theme === 'dark'
                    ? `0 20px 40px -10px ${cat.accentColor}30`
                    : `0 20px 40px -10px ${cat.accentColor}22`,
                }}
              >
                {/* Card header */}
                <div
                  className="px-5 py-4 flex items-center gap-3 border-b border-warm-accent/10 dark:border-slate-700"
                  style={{ backgroundColor: `${cat.accentColor}0e` }}
                >
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${cat.accentColor}20`, color: cat.accentColor }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-warm-dark dark:text-white text-sm tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="p-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        skill.level === 'Familiar'
                          ? 'bg-warm-soft dark:bg-slate-700 text-muted dark:text-slate-400 border-transparent'
                          : ''
                      }`}
                      style={skill.level !== 'Familiar' ? badgeStyle(skill.level, cat.accentColor) : {}}
                      initial={{ opacity: 0, scale: 0.75 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + si * 0.04, duration: 0.22, ease: 'easeOut' }}
                      whileHover={{ scale: 1.08 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>

                {/* Proficiency legend */}
                <div className="px-5 pb-4 flex items-center gap-4">
                  {[
                    { label: 'Expert', opacity: 1 },
                    { label: 'Proficient', opacity: 0.45 },
                    { label: 'Familiar', opacity: 0, isGray: true },
                  ].map(({ label, opacity, isGray }) => (
                    <span key={label} className="flex items-center gap-1.5 text-xs text-muted dark:text-slate-500">
                      <span
                        className={`w-2 h-2 rounded-full inline-block ${isGray ? 'bg-warm-accent/30 dark:bg-slate-600' : ''}`}
                        style={!isGray ? { backgroundColor: cat.accentColor, opacity } : {}}
                      />
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ── ATS keyword row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-muted dark:text-slate-500 mb-5 text-center">
            Also works with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {atsBadges.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-warm-accent/25 dark:border-slate-700 rounded-full text-sm text-warm-brown dark:text-slate-300 shadow-sm"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035, duration: 0.25 }}
                whileHover={{ scale: 1.08, borderColor: '#8B9E7E' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
