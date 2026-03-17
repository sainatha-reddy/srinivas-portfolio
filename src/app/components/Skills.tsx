import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C', 'C++', 'HTML', 'CSS', 'TypeScript'],
    color: 'from-blue-500 to-cyan-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    category: 'AI/ML & Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'LLM Engineering', 'RAG'],
    color: 'from-purple-500 to-pink-500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    category: 'Tools & DevOps',
    skills: ['FastAPI', 'OpenCV', 'Selenium', 'Git', 'Docker', 'CI/CD', 'Cloud Infra', 'Jupyter'],
    color: 'from-orange-500 to-yellow-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 011 1V4z" />
      </svg>
    )
  },
  {
    category: 'Databases & Others',
    skills: ['MySQL', 'Milvus', 'Problem-solving', 'Teamwork', 'Communication'],
    color: 'from-green-500 to-emerald-400',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  }
];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Background animation
      gsap.to(".skill-blob", {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Hover effect for cards
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            duration: 0.3
          });
        });
      });

      // Reveal animation
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cards[0],
            start: "top 95%",
            toggleActions: "play none none none"
          },
          y: 30,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={triggerRef} className="py-24 relative overflow-hidden bg-gray-950">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="skill-blob absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="skill-blob absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="skill-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building production-ready AI solutions, 
            bridging the gap between research and deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="skill-card group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 transition-all duration-500 hover:border-white/[0.2] overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl`}></div>
              
              {/* Category Icon & Title */}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text transition-all">
                  {category.category}
                </h3>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/[0.05] border border-white/[0.1] rounded-full hover:bg-white/[0.1] hover:border-white/[0.2] hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Indicator Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-20 text-center animate-pulse">
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Continuous Learning & Research in Progress
          </p>
        </div>
      </div>

      <style>{`
        .skill-card {
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

