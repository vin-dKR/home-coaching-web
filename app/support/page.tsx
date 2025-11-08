"use client"
 
import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';
import CTAButton from '@/components/ui/CTAButton';
import { supportData } from '@/constants/supportData';
import { contactUtils } from '@/utils/contactUtils';

const SupportPage: React.FC = () => {
    const { supportOptions, quickHelpTopics, issueTypes } = supportData;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className='bg-white'>
            <PageLayout
                title="Support Center"
                subtitle="We're here to help you with any questions or issues"
            >
                {/* Support Options */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {supportOptions.map((option, index) => (
                        <WhoWeAreCard key={index} className="text-center bg-white/30">
                            <div className="text-3xl mb-4">{option.icon}</div>
                            <h3 className="font-semibold text-gray-800 mb-2">{option.title}</h3>
                            <p className="text-gray-600 font-atki text-sm mb-4">{option.description}</p>
                            <button
                                onClick={() => contactUtils.handleContactClick(option.type, option.contact)}
                                className="bg-amber-100 rounded-2xl p-4 w-full hover:bg-amber-200 transition-colors cursor-pointer"
                            >
                                <p className="text-amber-700 font-semibold">{option.contact}</p>
                                <p className="text-gray-500 text-xs mt-1">{option.timing}</p>
                            </button>
                        </WhoWeAreCard>
                    ))}
                </div>

                {/* Quick Help Topics */}
                <WhoWeAreCard>
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-6 text-center">
                        Quick Help Topics
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {quickHelpTopics.map((topic, index) => (
                            <button
                                key={index}
                                className="text-left p-4 rounded-2xl border border-amber-200 hover:bg-midy/20 transition-colors text-gray-600 font-atki"
                                onClick={() => {
                                    // You can add functionality to scroll to relevant section or open modal
                                    console.log(`Selected topic: ${topic}`);
                                }}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                </WhoWeAreCard>

                {/* Contact Form */}
                <WhoWeAreCard className="mt-12">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-6 text-center">
                        Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 text-black">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>
                        <select className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full" required>
                            {issueTypes.map((type, index) => (
                                <option key={index} value={type} disabled={index === 0}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        <textarea
                            placeholder="Describe your issue or question..."
                            rows={5}
                            className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                            required
                        ></textarea>
                        <div className="text-center">
                            <CTAButton type="submit" className="px-12">
                                Send Message
                            </CTAButton>
                        </div>
                    </form>
                </WhoWeAreCard>

                {/* Alternative Contact CTA */}
                <WhoWeAreCard className="text-center bg-amber-50/50 mt-8">
                    <h3 className="text-xl font-instru font-semibold text-gray-800 mb-4">
                        Prefer Instant Contact?
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Click any of the contact methods above to reach us directly
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => contactUtils.openPhone('+919142992036')}
                            className="bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
                        >
                            📞 Call Now
                        </button>
                        <button
                            onClick={() => contactUtils.openWhatsApp('+919142992036')}
                            className="bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
                        >
                            💬 WhatsApp
                        </button>
                        <button
                            onClick={() => contactUtils.openEmail('magicknotes365@gmail.com')}
                            className="bg-amber-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-colors"
                        >
                            📧 Email Us
                        </button>
                    </div>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default SupportPage;
