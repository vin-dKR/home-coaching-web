import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';

const TeachingResourcesPage: React.FC = () => {
    const resources = [
        {
            category: 'Lesson Planning',
            items: [
                'Lesson Plan Templates',
                'Curriculum Guides',
                'Activity Ideas',
                'Assessment Tools',
                'Progress Trackers'
            ]
        },
        {
            category: 'Teaching Materials',
            items: [
                'Interactive Worksheets',
                'Visual Aids',
                'Presentation Templates',
                'Educational Games',
                'Reference Materials'
            ]
        },
        {
            category: 'Professional Development',
            items: [
                'Teaching Methodologies',
                'Classroom Management Tips',
                'Student Engagement Strategies',
                'Parent Communication Guides',
                'Continuing Education Resources'
            ]
        }
    ];

    return (
        <div className='bg-white'>
            <PageLayout
                title="Teaching Resources"
                subtitle="Access comprehensive resources to enhance your teaching effectiveness"
            >
                <div className="grid md:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <WhoWeAreCard key={index}>
                            <h3 className="text-xl font-instru font-semibold text-gray-800 mb-4 text-center">
                                {resource.category}
                            </h3>
                            <div className="space-y-3">
                                {resource.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-amber-50/50 transition-colors">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-600 font-atki text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </WhoWeAreCard>
                    ))}
                </div>

                <WhoWeAreCard className="text-center mt-12">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-4">
                        Join Our Tutor Community
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Connect with other educators, share best practices, and access exclusive resources
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-amber-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-colors">
                            Become a Tutor
                        </button>
                        <button className="border border-amber-500 text-amber-600 px-6 py-3 rounded-2xl font-semibold hover:bg-amber-50 transition-colors">
                            Access Resource Library
                        </button>
                    </div>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default TeachingResourcesPage;
