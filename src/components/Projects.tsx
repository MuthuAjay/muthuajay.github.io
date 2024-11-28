import React from 'react';
import { Brain, Bot, BarChart3, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "GPT Implementation",
    description: "Built a GPT model from scratch implementing the transformer architecture, including self-attention mechanisms and positional encoding for advanced text generation capabilities.",
    icon: Bot,
    tags: ["Transformers", "PyTorch", "NLP"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    link: "https://github.com/MuthuAjay/gpt"
  },
  {
    title: "Advanced CNN Architecture",
    description: "Developed a novel CNN architecture for medical image classification achieving 97% accuracy on brain tumor detection.",
    icon: Brain,
    tags: ["PyTorch", "CNN", "Medical Imaging"],
    image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "ML Pipeline Optimization",
    description: "Created an end-to-end ML pipeline using XGBoost and advanced target encoding techniques for financial forecasting.",
    icon: BarChart3,
    tags: ["XGBoost", "Feature Engineering", "MLOps"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectWrapper = ({ children }: { children: React.ReactNode }) => {
              if (project.link) {
                return (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    {children}
                  </a>
                );
              }
              return <>{children}</>;
            };

            return (
              <ProjectWrapper key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <project.icon className="h-6 w-6 text-purple-600" />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                      {project.link && (
                        <ExternalLink className="h-5 w-5 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ProjectWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}