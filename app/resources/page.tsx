import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';
import CTAButton from '@/components/ui/CTAButton';

const StudyResourcesPage: React.FC = () => {
    const resources = [
        {
            category: 'Study Materials',
            items: [
                'Chapter-wise Notes',
                'Practice Worksheets',
                'Sample Papers',
                'Formula Sheets',
                'Reference Books'
            ]
        },
        {
            category: 'Learning Tools',
            items: [
                'Interactive Quizzes',
                'Video Lessons',
                'Mind Maps',
                'Flashcards',
                'Study Planners'
            ]
        },
        {
            category: 'Exam Preparation',
            items: [
                'Previous Year Papers',
                'Mock Tests',
                'Revision Timetables',
                'Stress Management Tips',
                'Time Management Guides'
            ]
        }
    ];

    return (
        <div className='bg-white'>
            <PageLayout
                title="Study Resources"
                subtitle="Access free learning materials and tools to boost your academic performance"
            >
                <div className="grid md:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <WhoWeAreCard key={index}>
                            <h3 className="text-xl font-instru font-semibold text-gray-800 mb-4 text-center">
                                {resource.category}
                            </h3>
                            <div className="space-y-3">
                                {resource.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-midy/30 transition-colors">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-600 font-atki text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </WhoWeAreCard>
                    ))}
                </div>

                <WhoWeAreCard className="text-center mt-12 bg-gradient-to-r from-amber-50 to-orange-50">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-4">
                        Need Personalized Study Materials?
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Our tutors can create custom study plans and materials tailored to your learning style
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton className="bg-amber-500 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-colors">
                            Find a Tutor
                        </CTAButton>
                        <CTAButton variant='secondary' className="border border-amber-500 text-amber-600 px-6 py-3 rounded-2xl font-semibold hover:bg-amber-50 transition-colors">
                            Download Free Samples
                        </CTAButton>
                    </div>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default StudyResourcesPage;
