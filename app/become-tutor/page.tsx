import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';
import CTAButton from '@/components/ui/CTAButton';

const BecomeTutorPage: React.FC = () => {
    const benefits = [
        {
            icon: '💰',
            title: 'Earn Competitive Rates',
            description: 'Set your own pricing and earn what you deserve'
        },
        {
            icon: '🕐',
            title: 'Flexible Schedule',
            description: 'Teach according to your availability and preferences'
        },
        {
            icon: '📍',
            title: 'Teach Locally',
            description: 'Connect with students in your neighborhood'
        },
        {
            icon: '📈',
            title: 'Build Your Profile',
            description: 'Grow your teaching practice with our platform'
        }
    ];

    const requirements = [
        'Strong subject knowledge',
        'Excellent communication skills',
        'Teaching experience (preferred)',
        'Educational qualifications in relevant field',
        'Patience and passion for teaching'
    ];

    return (
        <div className='bg-white'>
            <PageLayout
                title="Become a Tutor"
                subtitle="Join our community of educators and start making a difference in students' lives"
            >
                {/* Benefits */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <WhoWeAreCard key={index} className="flex items-start space-x-4">
                            <div className="text-2xl">{benefit.icon}</div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 font-atki text-sm">{benefit.description}</p>
                            </div>
                        </WhoWeAreCard>
                    ))}
                </div>

                {/* Requirements */}
                <WhoWeAreCard className="mb-12">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-6 text-center">
                        Tutor Requirements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {requirements.map((requirement, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 font-atki">{requirement}</span>
                            </div>
                        ))}
                    </div>
                </WhoWeAreCard>

                {/* Application Form */}
                <WhoWeAreCard>
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-6 text-center">
                        Start Your Teaching Journey
                    </h3>
                    <div className="text-black grid md:grid-cols-2 gap-4 mb-6">
                        <input type="text" placeholder="Full Name" className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                        <input type="email" placeholder="Email Address" className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                        <input type="tel" placeholder="Phone Number" className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                        <select className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500">
                            <option>Select Subject</option>
                            <option>Mathematics</option>
                            <option>Science</option>
                            <option>English</option>
                            <option>Computer Science</option>
                        </select>
                        <input type="text" placeholder="Educational Qualification" className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 md:col-span-2" />
                        <textarea placeholder="Teaching Experience (if any)" rows={3} className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 md:col-span-2"></textarea>
                    </div>
                    <div className="text-center">
                        <CTAButton className="px-12">Apply Now</CTAButton>
                    </div>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default BecomeTutorPage;
