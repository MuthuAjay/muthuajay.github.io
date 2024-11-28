import React from 'react';
import { Briefcase, Award, Users, Brain } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Current Role",
      description: "Data Science Consultant at Ernst & Young"
    },
    {
      icon: Brain,
      title: "Expertise",
      description: "Deep Learning, Transformers, Computer Vision"
    },
    {
      icon: Award,
      title: "Specialization",
      description: "CNNs, Vision Transformers, LLMs"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Cross-functional Team Leadership"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                I'm Muthu Ajay, a passionate Data Scientist and Machine Learning enthusiast currently working as a Consultant at Ernst & Young. With expertise in Deep Learning, Transformers, and Computer Vision, I specialize in building robust AI models and deploying scalable machine learning solutions.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in data science blends cutting-edge research with practical applications, enabling businesses to unlock the power of data. I have a proven track record of delivering high-impact solutions, such as designing CNNs and Vision Transformers to achieve state-of-the-art performance in challenging classification and segmentation tasks.
              </p>
              <p className="text-gray-600 mb-6">
                My work includes implementing Large Language Models (LLMs) like GPT-2 and Segment Anything Model (SAM) to tackle complex problems, from PII detection to multimodal AI systems. I thrive on collaboration and innovation, consistently leading cross-functional teams to deliver optimized solutions that drive measurable business outcomes.
              </p>
              <p className="text-gray-600">
                When I'm not solving data problems, I enjoy exploring advancements in AI, mentoring aspiring data scientists, and contributing to the broader data science community. Let's shape the future with data!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}