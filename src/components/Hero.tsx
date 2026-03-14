import React, { useRef, useEffect, useState } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

const CountStat = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) { setDisplay(value); return; }
    const num = parseInt(match[1]);
    const suffix = match[2];
    const ctrl = animate(0, num, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate(v) { setDisplay(Math.round(v) + suffix); },
    });
    return () => ctrl.stop();
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <div className="text-2xl font-bold font-serif text-warm-dark dark:text-white">{display}</div>
      <div className="text-xs text-muted dark:text-slate-400 whitespace-nowrap">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-cream to-warm-soft dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-sage/10 dark:bg-teal-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-warm-accent/10 dark:bg-amber-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 opacity-20 dark:opacity-10 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzAgMHYzMGgzMHpNMCAzMGgzMHYzMHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge — specific role & company */}
            <motion.div
              className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 text-sage dark:bg-teal-500/20 dark:border-teal-500/25 dark:text-teal-400 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-sage dark:bg-teal-500 animate-pulse" />
              Senior Data Scientist @ Ernst & Young
            </motion.div>

            {/* Heading — line-by-line slide-up reveal */}
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.15] text-warm-dark dark:text-white mb-6">
              {[
                { node: 'Turning Data', delay: 0.3 },
                {
                  node: (
                    <>into{' '}<span className="text-sage dark:text-teal-400 italic">Intelligent</span></>
                  ),
                  delay: 0.45,
                },
                { node: 'Solutions', delay: 0.6 },
              ].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: line.delay, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line.node}
                  </motion.div>
                </div>
              ))}
            </h1>

            {/* Description — specific to Muthu Ajay's actual work */}
            <motion.p
              className="text-lg text-muted dark:text-slate-400 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Senior Data Scientist at Ernst & Young with 3+ years building production-grade AI systems — from Computer Vision & CNNs to LLMs, RAG pipelines, and end-to-end ML solutions with real-world business impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-warm-brown text-cream hover:bg-warm-dark dark:bg-teal-500 dark:text-white dark:hover:bg-teal-600 rounded-full font-medium shadow-md transition-colors group"
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px rgba(92, 61, 46, 0.25)' }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="files/Muthu_Ajay_ML.pdf"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white rounded-full font-medium transition-all group"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>

            {/* Key stats row — real achievements */}
            <motion.div
              className="flex gap-8 pt-8 border-t border-warm-accent/20 dark:border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {[
                { value: '3+', label: 'Years at EY' },
                { value: '99%', label: 'Model Accuracy' },
                { value: '60%', label: 'Faster RAG Retrieval' },
                { value: '7+', label: 'Projects Shipped' },
              ].map((stat, i) => (
                <CountStat key={i} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile avatar — visible only on xs screens */}
          <motion.div
            className="flex sm:hidden justify-center -mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <div
              className="w-28 h-28 overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl"
              style={{ borderRadius: '50%' }}
            >
              <img
                src="files/profile.jpg"
                alt="Muthu Ajay"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right: Profile Image with Floating Stat Cards */}
          <motion.div
            className="relative mx-auto w-full max-w-sm lg:max-w-md hidden sm:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            {/* Profile image */}
            <div className="relative z-10">
              <div
                className="overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700"
                style={{ borderRadius: '180px 180px 90px 90px' }}
              >
                <img
                  src="files/profile.jpg"
                  alt="Muthu Ajay - Senior Data Scientist at EY"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div
                className="absolute -inset-1.5 bg-gradient-to-br from-sage/30 to-warm-accent/20 dark:from-teal-400/30 dark:to-blue-500/20 -z-10 blur-sm"
                style={{ borderRadius: '190px 190px 100px 100px' }}
              />
            </div>

            {/* Floating Card 1: Current Role */}
            <motion.div
              className="absolute -left-8 top-1/4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl z-20"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sage dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-warm-dark dark:text-white whitespace-nowrap">Ernst & Young</div>
                  <div className="text-xs text-muted dark:text-slate-400 whitespace-nowrap">Senior Data Scientist</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Top Achievement */}
            <motion.div
              className="absolute -right-6 top-1/2 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl z-20"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-warm-accent/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-warm-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-warm-dark dark:text-white">99%</div>
                  <div className="text-xs text-muted dark:text-slate-400 whitespace-nowrap">Model Accuracy</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3: RAG achievement */}
            <motion.div
              className="absolute -left-6 bottom-1/4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl z-20"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-warm-dark dark:text-white">60%</div>
                  <div className="text-xs text-muted dark:text-slate-400 whitespace-nowrap">Faster RAG Retrieval</div>
                </div>
              </div>
            </motion.div>

            {/* Background glow */}
            <div className="absolute -z-10 inset-0 w-full h-full bg-gradient-to-br from-sage/15 dark:from-teal-400/15 to-warm-accent/10 dark:to-blue-500/10 blur-3xl" />
          </motion.div>

        </div>
      </div>

      {/* Wave divider → About section (warm-soft bg) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path
            d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
            className="fill-warm-soft dark:fill-slate-900"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
