import React, { useLayoutEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  metrics: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'AADIS: Advanced Agentic Document Intelligence System',
    description: 'A sophisticated multi-agent system designed to automate deep document understanding and intelligent information retrieval. Features intelligent document decomposition and agentic QA.',
    technologies: ['Python', 'Multi-Agent Systems', 'LLMs', 'RAG'],
    metrics: ['Multi-Agent Architecture', 'Automated Decomposition', 'Agentic QA'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    githubUrl: 'https://github.com/srinivastls/AADIS'
  },
  {
    title: 'NyayaMitra: AI-Powered Legal Assistant',
    description: 'Modular, multi-agent AI system for Indian legal domain: case retrieval, document summarization, fake news detection, and legal chatbot QA.',
    technologies: ['PyTorch', 'Hugging Face', 'Milvus', 'FastAPI', 'Streamlit', 'LangChain', 'GCP'],
    metrics: ['91% factual consistency', '88.4% classification acc', '200K+ cases scraped'],
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd8ZW58MHx8fHwxNzcyNDQ1NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    githubUrl: 'https://github.com/srinivastls/NyayaMitra'
  },
  {
    title: 'Celebrity Image Recognition',
    description: 'Developed image recognition system using ML classifiers and PCA for dimensionality reduction. Utilized OpenCV Haar cascades for facial feature detection.',
    technologies: ['Scikit-learn', 'OpenCV', 'Python', 'PCA'],
    metrics: ['Dimensionality reduction', 'Haar cascades'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbnxlbnwwfHx8fDE3NzI0NDU1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    githubUrl: 'https://github.com/srinivastls/Image_recognition'
  },
  {
    title: 'cp_snippets',
    description: 'Small, fast, and reusable competitive programming snippets for Python. Built for GATE / ICPC / Codeforces / LeetCode preparation.',
    technologies: ['Python', 'Competitive Programming', 'Algorithms', 'Data Structures'],
    metrics: ['Snippets', 'Competitive Programming'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    githubUrl: 'https://github.com/srinivastls/cp_snippets'
  },
  {
    title: '91-crpc',
    description: 'An open source repository focusing on legal frameworks or data.',
    technologies: ['Python', 'Data Analytics'],
    metrics: ['Legal Frameworks', 'Data Analytics'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    githubUrl: 'https://github.com/srinivastls/91-crpc'
  }
];

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const trigger = triggerRef.current;

      if (!section || !trigger) return;

      const totalWidth = section.scrollWidth;
      const amountToScroll = totalWidth - window.innerWidth;

      gsap.to(section, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${amountToScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={triggerRef} className="py-20 overflow-hidden bg-gray-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Scroll down to explore my work horizontally
          </p>
        </div>
      </div>

      {/* Projects Horizontal Container */}
      <div className="flex gap-8 px-[10vw]" ref={sectionRef} style={{ width: 'max-content' }}>
        {projects.map((project, index) => (
          <div key={index} className="w-[350px] md:w-[450px] flex-shrink-0">
            <TiltCard className="h-full">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="mb-6 space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <span className="text-sm text-gray-400 font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6 border-t border-gray-800 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors flex-1 justify-center group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex-1 justify-center group/btn"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span className="text-sm font-semibold">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
