import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior AI Engineer',
    company: 'TechCorp AI',
    period: 'Jan 2023 - Present',
    location: 'San Francisco, CA',
    description: 'Leading the development of enterprise AI solutions and managing a team of ML engineers.',
    achievements: [
      'Architected and deployed a multi-model NLP pipeline processing 1M+ documents daily',
      'Reduced model inference latency by 60% through optimization and hardware acceleration',
      'Mentored 5 junior engineers and established ML best practices across the organization',
      'Led the migration of legacy ML systems to cloud-native microservices architecture'
    ]
  },
  {
    title: 'Machine Learning Engineer',
    company: 'DataFlow Inc',
    period: 'Mar 2021 - Dec 2022',
    location: 'New York, NY',
    description: 'Developed and deployed production ML models for predictive analytics and recommendation systems.',
    achievements: [
      'Built a recommendation engine that increased user engagement by 35%',
      'Implemented A/B testing framework for model evaluation and continuous improvement',
      'Designed data pipelines processing 500GB+ of data daily using Apache Spark',
      'Collaborated with product teams to translate business requirements into ML solutions'
    ]
  },
  {
    title: 'Data Scientist',
    company: 'Analytics Solutions',
    period: 'Jun 2019 - Feb 2021',
    location: 'Boston, MA',
    description: 'Focused on statistical modeling and machine learning for business intelligence applications.',
    achievements: [
      'Developed time series forecasting models with 92% accuracy for demand prediction',
      'Created automated reporting dashboards using Python and Tableau',
      'Conducted exploratory data analysis to uncover actionable business insights',
      'Presented findings to C-level executives and stakeholders'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building impactful AI solutions across various industries and scales
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-950"></div>
                </div>

                {/* Content Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl mb-2 text-white">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span>{exp.period}</span>
                      </div>
                      <span>📍 {exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
