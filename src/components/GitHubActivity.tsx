import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Github, Code, GitBranch, GitMerge } from 'lucide-react';
import useGitHubStats from '../hooks/useGitHubStats';

const GitHubActivity = () => {
  const { theme } = useTheme();
  const username = "muthuajay";
  const { contributions, repositories, pullRequests, loading, error } = useGitHubStats(username);

  const formatNumber = (num: number) => num.toLocaleString('en-US');
  const colorScheme = theme === 'dark' ? 'dark' : 'light';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    {
      icon: <Code className="w-6 h-6 text-sage dark:text-teal-500" />,
      label: "Contributions",
      value: loading ? "Loading..." : error ? "Error" : `${formatNumber(contributions)}+`
    },
    {
      icon: <GitBranch className="w-6 h-6 text-warm-accent dark:text-blue-500" />,
      label: "Repositories",
      value: loading ? "Loading..." : error ? "Error" : `${formatNumber(repositories)}+`
    },
    {
      icon: <GitMerge className="w-6 h-6 text-rose dark:text-purple-500" />,
      label: "Pull Requests",
      value: loading ? "Loading..." : error ? "Error" : `${formatNumber(pullRequests)}+`
    }
  ];

  return (
    <section className="py-20 bg-cream dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-sage/10 dark:bg-teal-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-accent/10 dark:bg-blue-500/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <p className="text-xs font-semibold tracking-widest uppercase text-sage dark:text-teal-400 mb-3">
              Open Source
            </p>
            <h2 className="font-serif text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-warm-accent dark:from-teal-400 dark:to-blue-500">
                GitHub Contributions
              </span>
            </h2>
            <p className="text-muted dark:text-slate-400 max-w-2xl mx-auto">
              Consistent contributions to open-source and personal projects, showcasing my commitment to continuous learning and code quality.
            </p>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm flex items-center space-x-4 border border-warm-accent/20 dark:border-slate-700"
                whileHover={{
                  y: -5,
                  boxShadow: theme === 'dark'
                    ? '0 20px 25px -5px rgba(45, 212, 191, 0.1)'
                    : '0 20px 25px -5px rgba(92, 61, 46, 0.08)'
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="p-3 rounded-lg bg-warm-soft dark:bg-slate-700 shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold font-serif text-warm-dark dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted dark:text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Calendar card */}
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg border border-warm-accent/20 dark:border-slate-700 overflow-hidden"
            variants={itemVariants}
            whileHover={{
              boxShadow: theme === 'dark'
                ? '0 25px 50px -12px rgba(45, 212, 191, 0.15)'
                : '0 25px 50px -12px rgba(92, 61, 46, 0.12)'
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <div className="flex items-center">
                <Github className="w-6 h-6 mr-3 text-warm-brown dark:text-white" />
                <h3 className="text-xl font-semibold font-serif text-warm-dark dark:text-white">
                  Contribution Calendar
                </h3>
              </div>
              <motion.a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-warm-soft dark:bg-slate-700 rounded-full text-warm-brown dark:text-slate-300 hover:bg-cream dark:hover:bg-slate-600 transition-colors text-sm font-medium border border-warm-accent/20 dark:border-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub Profile
              </motion.a>
            </div>

            <div className="overflow-x-auto pb-2">
              {error ? (
                <div className="text-center p-8 text-rose dark:text-red-500">
                  Error loading GitHub data. Please try again later.
                </div>
              ) : (
                <GitHubCalendar
                  username={username}
                  colorScheme={colorScheme}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={5}
                  blockRadius={3}
                  labels={{ totalCount: '{{count}} contributions in the last year' }}
                />
              )}
            </div>

            <p className="text-center mt-6 text-sm text-muted dark:text-slate-400">
              This calendar represents my GitHub contribution activity over the past year
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
