import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';

const TutorGuidelinesPage: React.FC = () => {
    const guidelines = [
        {
            category: 'Professional Conduct',
            points: [
                'Maintain professional boundaries with students and parents',
                'Be punctual for all scheduled sessions',
                'Dress appropriately for teaching sessions',
                'Communicate clearly and professionally'
            ]
        },
        {
            category: 'Teaching Standards',
            points: [
                'Prepare lesson plans in advance',
                'Adapt teaching methods to student learning styles',
                'Provide constructive feedback',
                'Maintain accurate progress records'
            ]
        },
        {
            category: 'Platform Policies',
            points: [
                'Keep profile information accurate and up-to-date',
                'Respond to student inquiries within 24 hours',
                'Follow cancellation and rescheduling policies',
                'Maintain student confidentiality'
            ]
        }
    ];

    return (
        <PageLayout
            title="Tutor Guidelines"
            subtitle="Maintain high teaching standards and provide the best learning experience"
        >
            <div className="space-y-8">
                {guidelines.map((section, index) => (
                    <WhoWeAreCard key={index}>
                        <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-6">
                            {section.category}
                        </h3>
                        <div className="space-y-4">
                            {section.points.map((point, pointIndex) => (
                                <div key={pointIndex} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-amber-600 text-xs">✓</span>
                                    </div>
                                    <p className="text-gray-600 font-atki leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </WhoWeAreCard>
                ))}
            </div>

            <WhoWeAreCard className="text-center mt-12 bg-amber-50/50">
                <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-4">
                    Questions About Guidelines?
                </h3>
                <p className="text-gray-600 mb-6">
                    Our support team is here to help you understand and follow our guidelines
                </p>
                <button className="bg-amber-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-colors">
                    Contact Support
                </button>
            </WhoWeAreCard>
        </PageLayout>
    );
};

export default TutorGuidelinesPage;
