import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';

const SuccessStoriesPage: React.FC = () => {
    const stories = [
        {
            name: 'Rahul Sharma',
            grade: 'Class 12',
            subject: 'Mathematics',
            improvement: '85% to 95%',
            story: 'Struggled with calculus concepts until I found my tutor through Magic Knotes. The personalized attention helped me score 95% in boards!',
            image: '👨‍🎓'
        },
        {
            name: 'Priya Patel',
            grade: 'Class 10',
            subject: 'Science',
            improvement: '70% to 88%',
            story: 'My physics tutor made complex concepts so easy to understand. I went from fearing science to loving it!',
            image: '👩‍🎓'
        },
        {
            name: 'Amit Kumar',
            grade: 'College',
            subject: 'Programming',
            improvement: 'Basic to Advanced',
            story: 'As a computer science student, my coding tutor helped me build real projects and land my first internship.',
            image: '👨‍💻'
        }
    ];

    return (
        <div className='bg-white'>
            <PageLayout
                title="Success Stories"
                subtitle="Real stories from students who transformed their academic journey with Magic Knotes"
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <WhoWeAreCard key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-4xl mb-4">{story.image}</div>
                            <h3 className="font-semibold text-gray-800 mb-2">{story.name}</h3>
                            <p className="text-amber-600 text-sm mb-2">{story.grade} • {story.subject}</p>
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                                Improved: {story.improvement}
                            </div>
                            <p className="text-gray-600 font-atki text-sm leading-relaxed">
                                "{story.story}"
                            </p>
                        </WhoWeAreCard>
                    ))}
                </div>

                <WhoWeAreCard className="text-center mt-12 bg-amber-50/50">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-4">
                        Ready to Create Your Success Story?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Join thousands of students who have achieved their academic goals with Magic Knotes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-amber-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-colors">
                            Find Your Tutor
                        </button>
                        <button className="border border-amber-500 text-amber-600 px-8 py-3 rounded-2xl font-semibold hover:bg-amber-50 transition-colors">
                            Share Your Story
                        </button>
                    </div>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default SuccessStoriesPage;
