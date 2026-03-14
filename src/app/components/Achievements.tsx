import React, { useLayoutEffect, useRef } from 'react';
import { Award, Users, Star, Code } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Achievements() {
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

    const achievements = [
        {
            title: 'Research Paper Published',
            organization: 'MIKE2025 / TENCON2025',
            icon: <Award className="w-6 h-6 text-yellow-400" />,
            description: 'Published research on LegalAI at major international conferences.',
            link: 'https://www.linkedin.com/posts/srinivastls_mike2025-tencon2025-legalai-activity-7431903210417762304-ABHG'
        },
        {
            title: 'Artly Expense Tracker',
            organization: 'Google Play Store App',
            icon: <Star className="w-6 h-6 text-green-400" />,
            description: 'Designed, developed, and published an intuitive expense tracking application for Android devices.',
            link: 'https://play.google.com/store/apps/details?id=com.artly.expense_tracker'
        },
        {
            title: 'Placement Cell Coordinator',
            organization: 'IIITDM Kancheepuram',
            icon: <Users className="w-6 h-6 text-purple-400" />,
            description: 'Coordinated campus placement activities and corporate relations for the student body.'
        },
        {
            title: 'Head Core',
            organization: 'Developers Club IIITDM (2024–25)',
            icon: <Code className="w-6 h-6 text-blue-400" />,
            description: 'Organized major technical events including Vashisht Hackathons and led development of the club website.',
            link: 'https://devclub.iiitdm.ac.in/'
        },
        {
            title: 'Website Developer',
            organization: 'Computer Science & Engineering Dept',
            icon: <Code className="w-6 h-6 text-indigo-400" />,
            description: 'Designed and deployed the official website for the CSE Department at IIITDM.',
            link: 'https://cse.iiitdm.ac.in/'
        },
        {
            title: 'Core Member',
            organization: 'Google Developer Student Club',
            icon: <Star className="w-6 h-6 text-pink-400" />,
            description: 'Active core member facilitating developer community growth and technical workshops.'
        }
    ];

    return (
        <section id="achievements" ref={triggerRef} className="py-20 overflow-hidden bg-gray-950 border-t border-gray-800 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Responsibilities & Achievements
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Leadership roles and community contributions
                    </p>
                </div>
            </div>

            <div className="flex gap-8 px-[10vw]" ref={sectionRef} style={{ width: 'max-content' }}>
                {achievements.map((item, index) => {
                    const CardContent = (
                        <div className="flex flex-col h-full">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2 leading-snug">
                                {item.title}
                            </h3>
                            <div className="text-blue-400 text-sm font-medium mb-4">
                                {item.organization}
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {item.description}
                            </p>
                        </div>
                    );

                    const cardClasses = "bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 block h-full w-[300px] md:w-[400px] flex-shrink-0";

                    return item.link ? (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cardClasses}
                        >
                            {CardContent}
                        </a>
                    ) : (
                        <div key={index} className={cardClasses}>
                            {CardContent}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
