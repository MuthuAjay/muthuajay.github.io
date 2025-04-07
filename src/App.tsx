import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { trackPageview } from './utils/analytics';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make sure the dark mode is correctly initialized before rendering
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    trackPageview();
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <GitHubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;