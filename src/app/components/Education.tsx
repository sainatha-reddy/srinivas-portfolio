import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    score: string;
    details?: string;
}

const educationData: EducationItem[] = [
    {
        degree: 'B.Tech in CSE with major in Artificial Intelligence',
        institution: 'IIITDM Kancheepuram',
        period: '2021 - 2025',
        score: 'CGPA: 9.02',
        details: 'Major Coursework: Machine Learning, Deep Learning, Data Structures and Algorithms, Computer Vision, NLP, Probability and Statistics, Operating Systems, Computer Organization and Architecture'
    },
    {
        degree: 'Board of Intermediate Education',
        institution: 'Narayana Junior College',
        period: '2019 - 2021',
        score: 'Score: 97.3%'
    },
    {
        degree: 'Central Board of Secondary Education',
        institution: 'Jawahar Navodaya Vidyalaya',
        period: '2018 - 2019',
        score: 'Score: 92.6%'
    }
];

export function Education() {
    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/10 border-t border-gray-800">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Education
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Academic background and foundational knowledge
                    </p>
                </div>

                <div className="space-y-8">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-3">
                                        <GraduationCap className="w-6 h-6 text-blue-400" />
                                        {item.degree}
                                    </h3>
                                    <div className="text-lg text-blue-400 font-medium mb-2">
                                        {item.institution}
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-end text-gray-400 space-y-2 mt-2 md:mt-0">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-purple-400" />
                                        <span>{item.period}</span>
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-sm w-fit">
                                        {item.score}
                                    </div>
                                </div>
                            </div>

                            {item.details && (
                                <p className="text-gray-400 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-800/50">
                                    {item.details}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
