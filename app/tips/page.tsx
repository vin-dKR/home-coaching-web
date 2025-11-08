import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';

const LearningTipsPage: React.FC = () => {
    const tips = [
        {
            category: 'Study Techniques',
            tips: [
                'Use the Pomodoro Technique (25 min study, 5 min break)',
                'Create mind maps for complex topics',
                'Teach what you learn to someone else',
                'Use spaced repetition for better retention'
            ]
        },
        {
            category: 'Time Management',
            tips: [
                'Create a weekly study schedule',
                'Prioritize tasks using the Eisenhower Matrix',
                'Set specific, measurable goals',
                'Review and adjust your plan regularly'
            ]
        },
        {
            category: 'Exam Preparation',
            tips: [
                'Start preparing at least 2 weeks before exams',
                'Practice with previous year papers',
                'Focus on understanding concepts, not memorization',
                'Take regular breaks to avoid burnout'
            ]
        }
    ];

    return (
        <div className='bg-white'>
            <PageLayout
                title="Learning Tips & Strategies"
                subtitle="Expert advice to enhance your learning efficiency and academic performance"
            >
                <div className="space-y-8">
                    {tips.map((category, index) => (
                        <WhoWeAreCard key={index}>
                            <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-6">
                                {category.category}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {category.tips.map((tip, tipIndex) => (
                                    <div key={tipIndex} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-amber-600 text-xs">💡</span>
                                        </div>
                                        <p className="text-gray-600 font-atki leading-relaxed">{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </WhoWeAreCard>
                    ))}
                </div>

                <WhoWeAreCard className="text-center mt-12">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-4">
                        Get Personalized Learning Advice
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Our tutors can provide customized learning strategies based on your specific needs and goals
                    </p>
                    <button className="bg-amber-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-colors">
                        Connect with a Learning Coach
                    </button>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default LearningTipsPage;
