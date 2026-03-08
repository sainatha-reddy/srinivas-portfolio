import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';

interface OpenSourceProject {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    stars?: number;
    forks?: number;
}

const openSourceProjects: OpenSourceProject[] = [
    {
        title: 'cp_snippets',
        description: 'Small, fast, and reusable competitive programming snippets for Python. Built for GATE / ICPC / Codeforces / LeetCode preparation.',
        technologies: ['Python', 'Competitive Programming', 'Algorithms', 'Data Structures'],
        githubUrl: 'https://github.com/srinivastls/cp_snippets',
    },
    {
        title: '91-crpc',
        description: 'An open source repository focusing on legal frameworks or data. (Description pending based on repo specifics).',
        technologies: ['Python', 'Data Analytics'],
        githubUrl: 'https://github.com/srinivastls/91-crpc',
    }
];

export function OpenSource() {
    return (
        <section id="opensource" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Open Source Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Contributions to the developer community and competitive programming
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {openSourceProjects.map((project, index) => (
                        <TiltCard key={index} className="h-full">
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg">
                                        <Github className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div className="flex gap-3 text-gray-400 text-sm">
                                        {project.stars !== undefined && (
                                            <div className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                                                <Star className="w-4 h-4" />
                                                <span>{project.stars}</span>
                                            </div>
                                        )}
                                        {project.forks !== undefined && (
                                            <div className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                                                <GitFork className="w-4 h-4" />
                                                <span>{project.forks}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-gray-800 mt-auto">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300"
                                    >
                                        <span>View Repository</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
