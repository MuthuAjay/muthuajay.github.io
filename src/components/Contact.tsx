import React, { useState } from 'react';
import { Github, Linkedin, Mail, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent } from '../utils/analytics';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      trackEvent('contact_form_submitted');
    } catch (error) {
      setStatus('error');
      console.error('Error sending message:', error);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-400/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Get in Touch</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="text-xl font-semibold mb-6 text-slate-800 dark:text-white transition-colors duration-300"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            <div className="space-y-6">
              <motion.a
                variants={itemVariants}
                href="https://linkedin.com/in/muthuajay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-3 rounded-lg bg-white/50 dark:bg-slate-700/30 hover:bg-white dark:hover:bg-slate-700 group"
                onClick={() => trackEvent('social_link_clicked', { platform: 'linkedin' })}
                whileHover={{ 
                  x: 5, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
              >
                <Linkedin className="h-6 w-6 mr-3 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Connect on LinkedIn</span>
              </motion.a>
              
              <motion.a
                variants={itemVariants}
                href="https://github.com/muthuajay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-3 rounded-lg bg-white/50 dark:bg-slate-700/30 hover:bg-white dark:hover:bg-slate-700 group"
                onClick={() => trackEvent('social_link_clicked', { platform: 'github' })}
                whileHover={{ 
                  x: 5, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
              >
                <Github className="h-6 w-6 mr-3 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform" />
                <span>Follow on GitHub</span>
              </motion.a>
              
              <motion.a
                variants={itemVariants}
                href="mailto:contact@muthuajay.com"
                className="flex items-center text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-3 rounded-lg bg-white/50 dark:bg-slate-700/30 hover:bg-white dark:hover:bg-slate-700 group"
                onClick={() => trackEvent('social_link_clicked', { platform: 'email' })}
                whileHover={{ 
                  x: 5, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
              >
                <Mail className="h-6 w-6 mr-3 text-teal-500 dark:text-teal-400 group-hover:scale-110 transition-transform" />
                <span>contact@muthuajay.com</span>
              </motion.a>
            </div>
            
            <motion.div 
              className="mt-12 p-5 bg-white dark:bg-slate-700 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h4 className="text-lg font-medium mb-3 text-teal-600 dark:text-teal-400">Response Time</h4>
              <p className="text-slate-700 dark:text-slate-300">I typically respond to inquiries within 24-48 hours. Looking forward to discussing how we can work together!</p>
            </motion.div>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  focused === 'name' ? 'text-teal-500 dark:text-teal-400' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 
                  ${focused === 'name' 
                    ? 'border-teal-500 ring-2 ring-teal-500/20 dark:border-teal-400 dark:ring-teal-400/20' 
                    : 'border-slate-300 dark:border-slate-600'
                  } 
                  bg-white dark:bg-slate-800 text-slate-900 dark:text-white`}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                required
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  focused === 'email' ? 'text-teal-500 dark:text-teal-400' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 
                  ${focused === 'email' 
                    ? 'border-teal-500 ring-2 ring-teal-500/20 dark:border-teal-400 dark:ring-teal-400/20' 
                    : 'border-slate-300 dark:border-slate-600'
                  } 
                  bg-white dark:bg-slate-800 text-slate-900 dark:text-white`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                required
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label 
                htmlFor="message" 
                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  focused === 'message' ? 'text-teal-500 dark:text-teal-400' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 
                  ${focused === 'message' 
                    ? 'border-teal-500 ring-2 ring-teal-500/20 dark:border-teal-400 dark:ring-teal-400/20' 
                    : 'border-slate-300 dark:border-slate-600'
                  } 
                  bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                required
              ></textarea>
            </motion.div>
            
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={status === 'loading'}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                status === 'loading' 
                  ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:shadow-lg text-white'
              }`}
              whileHover={{ scale: status !== 'loading' ? 1.02 : 1 }}
              whileTap={{ scale: status !== 'loading' ? 0.98 : 1 }}
            >
              <span className="absolute inset-0 w-0 bg-white bg-opacity-20 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </span>
            </motion.button>
            
            {status === 'success' && (
              <motion.div 
                className="mt-4 flex items-center p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p>Your message has been sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div 
                className="mt-4 flex items-center p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p>Failed to send message. Please try again or contact me directly via email.</p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;