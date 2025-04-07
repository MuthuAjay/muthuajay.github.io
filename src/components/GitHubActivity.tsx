import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Github, Code, GitBranch, GitMerge } from 'lucide-react';
import useGitHubStats from '../hooks/useGitHubStats';

const GitHubActivity = () => {
  const { theme } = useTheme();
  const username = "muthuajay"; // Your GitHub username
  const { contributions, repositories, pullRequests, loading, error } = useGitHubStats(username);
  
  // Format numbers with commas for thousands
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };
  
  // Dynamically set color scheme based on current theme
  const colorScheme = theme === 'dark' ? 'dark' : 'light';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };
  
  // Dynamic stats based on API data
  const stats = [
    { 
      icon: <Code className="w-6 h-6 text-teal-500" />, 
      label: "Contributions", 
      value: loading ? "Loading..." : error ? "Error" : `${formatNumber(contributions)}+` 
    },
    { 
      icon: <GitBranch className="w-6 h-6 text-blue-500" />, 
      label: "Repositories", 
      value: loading ? "Loading..." : error ? "Error" : `${formatNumber(repositories)}+` 
    },
    { 
      icon: <GitMerge className="w-6 h-6 text-purple-500" />, 
      label: "Pull Requests", 
      value: loading ? "Loading..." : error ? "Error" : `${formatNumber(pullRequests)}+` 
    }
  ];
  
  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzAgMHYzMGgzMHpNMCAzMGgzMHYzMHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-teal-400/10 dark:bg-teal-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
                GitHub Contributions
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Consistent contributions to open-source and personal projects, showcasing my commitment to continuous learning and code quality.
            </p>
          </motion.div>
          
          {/* GitHub stats cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm flex items-center space-x-4 border border-slate-200 dark:border-slate-700"
                whileHover={{ 
                  y: -5, 
                  boxShadow: theme === 'dark' 
                    ? '0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(56, 189, 248, 0.05)'
                    : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="p-3 rounded-lg bg-white dark:bg-slate-700 shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-800 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* GitHub Calendar */}
          <motion.div 
            className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: theme === 'dark' 
                ? '0 25px 50px -12px rgba(45, 212, 191, 0.15), 0 25px 25px -5px rgba(0, 0, 0, 0.1)'
                : '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <div className="flex items-center">
                <Github className="w-6 h-6 mr-3 text-slate-800 dark:text-white" />
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Contribution Calendar</h3>
              </div>
              <motion.a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub Profile
              </motion.a>
            </div>
            
            <div className="overflow-x-auto pb-2">
              {error ? (
                <div className="text-center p-8 text-red-500">
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
                  labels={{
                    totalCount: '{{count}} contributions in the last year',
                  }}
                />
              )}
            </div>
            
            <p className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
              This calendar represents my GitHub contribution activity over the past year
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;