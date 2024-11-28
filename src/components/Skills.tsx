import React from 'react';
import { Brain, Code2, Database, GitBranch, Monitor, Server } from 'lucide-react';

const skills = [
  {
    category: "Deep Learning",
    icon: Brain,
    items: ["CNN Architecture Design", "Transfer Learning", "PyTorch", "TensorFlow"]
  },
  {
    category: "Natural Language Processing",
    icon: Code2,
    items: ["Transformer Architecture", "GPT Implementation", "BERT Fine-tuning", "Token Embedding"]
  },
  {
    category: "Traditional ML",
    icon: Database,
    items: ["XGBoost", "Random Forests", "Feature Engineering", "Target Encoding"]
  },
  {
    category: "MLOps",
    icon: Server,
    items: ["Docker", "Kubernetes", "ML Pipeline Design", "Model Monitoring"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2 mb-4">
                <skill.icon className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}