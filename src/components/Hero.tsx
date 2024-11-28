import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Data Scientist & ML Engineer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transforming Data into Intelligence with Deep Learning, Computer Vision, and LLMs
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href="#projects" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
            Contact Me
          </a>
        </div>
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-purple-600" />
        </div>
      </div>
    </section>
  );
}