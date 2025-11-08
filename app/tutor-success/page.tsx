import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';

const TutorSuccessPage: React.FC = () => {
    const successStories = [
        {
            name: 'Dr. Anjali Mehta',
            subject: 'Physics',
            experience: '5 years on platform',
            achievement: 'Mentored 200+ students',
            story: 'Magic Knotes helped me build a full-time teaching practice from home while balancing my research work.',
            image: '👩‍🏫'
        },
        {
            name: 'Prof. Rajesh Kumar',
            subject: 'Mathematics',
            experience: '3 years on platform',
            achievement: 'Top-rated tutor',
            story: 'The platform connected me with serious learners, and I now earn more than my previous corporate job.',
            image: '👨‍🏫'
        },
        {
            name: 'Ms. Sneha Reddy',
            subject: 'English Literature',
            experience: '2 years on platform',
            achievement: '100+ 5-star reviews',
            story: 'Started teaching part-time, now I have a waiting list of students wanting to learn from me.',
            image: '👩‍🎓'
        }
    ];

    return (
        <div className='bg-white'>
            <PageLayout
                title="Tutor Success Stories"
                subtitle="Inspiring stories from educators who built successful teaching practices with Magic Knotes"
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {successStories.map((story, index) => (
                        <WhoWeAreCard key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-4xl mb-4">{story.image}</div>
                            <h3 className="font-semibold text-gray-800 mb-2">{story.name}</h3>
                            <p className="text-amber-600 text-sm mb-2">{story.subject}</p>
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                                {story.achievement}
                            </div>
                            <p className="text-gray-600 font-atki text-sm leading-relaxed mb-4">
                                "{story.story}"
                            </p>
                            <div className="text-xs text-gray-500">{story.experience}</div>
                        </WhoWeAreCard>
                    ))}
                </div>

                <WhoWeAreCard className="text-center mt-12">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-4">
                        Start Your Teaching Success Story
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Join our platform and begin your journey as an educator
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-amber-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-colors">
                            Apply as Tutor
                        </button>
                        <button className="border border-amber-500 text-amber-600 px-8 py-3 rounded-2xl font-semibold hover:bg-amber-50 transition-colors">
                            Learn More
                        </button>
                    </div>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default TutorSuccessPage;
