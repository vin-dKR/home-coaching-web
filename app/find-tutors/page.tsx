import React from 'react';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';
import CTAButton from '@/components/ui/CTAButton';
import PageLayout from '@/components/layouts/PageLayout';

const FindTutorsPage: React.FC = () => {
    const subjects = [
        'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English',
        'Computer Science', 'Economics', 'Accountancy', 'Business Studies'
    ];

    const tutorFeatures = [
        {
            icon: '✅',
            title: 'Verified Tutors',
            description: 'All tutors undergo thorough background checks and verification'
        },
        {
            icon: '⭐',
            title: 'Rated & Reviewed',
            description: 'Read genuine reviews from other students and parents'
        },
        {
            icon: '📍',
            title: 'Local Matching',
            description: 'Find tutors in your neighborhood for convenient learning'
        },
        {
            icon: '💰',
            title: 'Transparent Pricing',
            description: 'Clear pricing with no hidden charges or commitments'
        }
    ];

    return (
        <div className='bg-white'>
            <PageLayout
                title="Find Your Perfect Tutor"
                subtitle="Connect with verified, experienced tutors in your local area"
            >
                {/* Search Section */}
                <WhoWeAreCard className="mb-12">
                    <h2 className="text-2xl font-instru font-semibold text-gray-800 mb-6 text-center">
                        Search Tutors Near You
                    </h2>
                    <div className="text-black grid md:grid-cols-3 gap-4 mb-6">
                        <select className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500">
                            <option>Select Subject</option>
                            {subjects.map(subject => (
                                <option key={subject}>{subject}</option>
                            ))}
                        </select>
                        <select className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500">
                            <option>Select Grade/Class</option>
                            {['Class 1-5', 'Class 6-8', 'Class 9-10', 'Class 11-12', 'College'].map(grade => (
                                <option key={grade}>{grade}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Enter your location"
                            className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>
                    <div className="text-center">
                        <CTAButton className="px-8">Search Tutors</CTAButton>
                    </div>
                </WhoWeAreCard>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {tutorFeatures.map((feature, index) => (
                        <WhoWeAreCard key={index} className="flex items-start space-x-4">
                            <div className="text-2xl">{feature.icon}</div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 font-atki text-sm">{feature.description}</p>
                            </div>
                        </WhoWeAreCard>
                    ))}
                </div>

                {/* CTA */}
                <WhoWeAreCard className="text-center bg-amber-50/50">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-4">
                        Can't Find What You're Looking For?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Let us help you find the perfect tutor match
                    </p>
                    <CTAButton variant="secondary">Contact Our Support</CTAButton>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default FindTutorsPage;
