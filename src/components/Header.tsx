import React from 'react';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Muthu Ajay
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/MuthuAjay" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/muthu-ajay-b2a817195/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:muthu@example.com" className="text-gray-700 hover:text-purple-600">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}