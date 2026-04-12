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
    skills: ['FastAPI', 'OpenCV', 'Selenium', 'Git', 'Docker', 'CI/CD', 'Cloud Infra', 'Jupyter', 'Terraform'],
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
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)"
        });
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={triggerRef} className="py-12 relative overflow-hidden bg-gray-950/20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="skill-blob absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-[60px] will-change-transform"></div>
        <div className="skill-blob absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-500/10 rounded-full blur-[80px] will-change-transform"></div>
        <div className="skill-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-[40px] will-change-transform"></div>
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

        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
          <span className="text-[15rem] md:text-[25rem] font-bold text-white/[0.02] leading-none uppercase tracking-tighter">
            Expertise
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              onMouseMove={(e) => {
                const card = cardsRef.current[index];
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 10;
                const rotateY = ((centerX - x) / centerX) * 10;
                
                gsap.to(card, {
                  rotateX,
                  rotateY,
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  duration: 0.5,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={() => {
                const card = cardsRef.current[index];
                if (!card) return;
                gsap.to(card, {
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1,
                  y: 0,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  duration: 0.5,
                  ease: "power2.out"
                });
              }}
              className="skill-card group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 transition-all duration-300 hover:border-white/[0.15] overflow-hidden"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              {/* Animated Border Beam */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className={`absolute inset-[-2px] bg-gradient-to-r ${category.color} blur-sm`}></div>
                <div className="absolute inset-[1px] bg-gray-950 rounded-[15px]"></div>
              </div>

              {/* Card Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-3xl`}></div>
              
              {/* Category Icon & Title */}
              <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 text-white shadow-xl group-hover:shadow-${category.color.split(' ')[0].replace('from-', '')}/20 transition-all duration-500 animate-float`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text transition-all tracking-tight">
                  {category.category}
                </h3>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3.5 py-1.5 text-xs font-semibold text-gray-400 bg-white/[0.03] border border-white/[0.05] rounded-lg hover:bg-white/[0.1] hover:border-white/[0.2] hover:text-white transition-all cursor-default transform hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Indicator Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-700 ease-in-out`}></div>
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
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      border-color 0.3s ease;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateZ(20px); }
          50% { transform: translateY(-10px) translateZ(20px); }
        }
      `}</style>
    </section>
  );
}

