interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C', 'C++', 'HTML', 'CSS', 'TypeScript']
  },
  {
    category: 'AI/ML Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face']
  },
  {
    category: 'Developer Tools',
    skills: ['FastAPI', 'OpenCV', 'Selenium', 'Git', 'Jupyter', 'VS Code', 'Docker', 'DevOps']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'Milvus']
  },
  {
    category: 'Soft Skills',
    skills: ['Communication', 'Problem-solving', 'Teamwork', 'Time Management']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building production-ready AI solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                <h3 className="text-lg text-white group-hover:text-purple-400 transition-colors">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <svg
                      className="w-1.5 h-1.5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Always learning and staying updated with the latest advancements in AI and machine learning
          </p>
        </div>
      </div>
    </section>
  );
}
