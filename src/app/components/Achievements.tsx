import { Award, Users, Star, Code } from 'lucide-react';

export function Achievements() {
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
        <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/10 border-t border-gray-800">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Responsibilities & Achievements
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Leadership roles and community contributions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => {
                        const CardContent = (
                            <>
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <div className="text-blue-400 text-sm font-medium mb-4">
                                    {item.organization}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </>
                        );

                        const cardClasses = "bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 block h-full";

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
            </div>
        </section>
    );
}
