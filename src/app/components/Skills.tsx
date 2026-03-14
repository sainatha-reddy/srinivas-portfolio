import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    category: 'AI/ML Frameworks & Concepts',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'LLM Engineering', 'RAG']
  },
  {
    category: 'Developer Tools & DevOps',
    skills: ['FastAPI', 'OpenCV', 'Selenium', 'Git', 'Jupyter', 'DevOps', 'Docker', 'CI/CD pipelines', 'Cloud Infrastructure']
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
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

    return () => mm.revert();
  }, []);

  return (
    <section id="skills" ref={triggerRef} className="py-20 overflow-hidden bg-gray-950 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building production-ready AI solutions
          </p>
        </div>

        {/* Skills Container */}
        <div 
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mobile-flex-row" 
          ref={sectionRef}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group w-[280px] md:w-auto flex-shrink-0"
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

        {/* CSS for mobile flex row */}
        <style>{`
          @media (max-width: 767px) {
            .mobile-flex-row {
              flex-direction: row !important;
              width: max-content !important;
            }
          }
        `}</style>

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
