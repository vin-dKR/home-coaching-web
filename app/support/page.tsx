"use client"

import React, { useState } from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import WhoWeAreCard from '@/components/blocks/whoWeAre/WhoWeAreCard';
import CTAButton from '@/components/ui/CTAButton';
import { supportData } from '@/constants/supportData';
import { contactUtils } from '@/utils/contactUtils';

interface FormData {
    name: string;
    email: string;
    issueType: string;
    message: string;
}

const SupportPage: React.FC = () => {
    const { supportOptions, quickHelpTopics, issueTypes } = supportData;

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        issueType: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Support Request: ${formData.issueType}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Issue Type: ${formData.issueType}

Message:
${formData.message}

---
This message was sent from Magic Knotes Support Page
    `.trim();

        // Open email client with pre-filled data
        contactUtils.openEmailWithBody('magicknotes365@gmail.com', subject, body);

        // Reset form
        setFormData({
            name: '',
            email: '',
            issueType: '',
            message: ''
        });
    };

    const handleContactClick = (type: 'phone' | 'email' | 'whatsapp', contact: string) => {
        if (type === 'email') {
            const subject = 'Support Request - Magic Knotes';
            const body = 'Hello Magic Knotes team,\n\nI would like to get support regarding...';
            contactUtils.openEmailWithBody(contact, subject, body);
        } else {
            contactUtils.handleContactClick(type, contact);
        }
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
                                onClick={() => handleContactClick(option.type, option.contact)}
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
                                    // Pre-fill the form with the selected topic
                                    setFormData(prev => ({
                                        ...prev,
                                        issueType: topic.replace('?', ''),
                                        message: `I need help with: ${topic}\n\n`
                                    }));

                                    // Scroll to form
                                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                </WhoWeAreCard>

                {/* Contact Form */}
                <WhoWeAreCard id="contact-form" className="mt-12">
                    <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-6 text-center">
                        Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 text-black">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>
                        <select
                            name="issueType"
                            value={formData.issueType}
                            onChange={handleInputChange}
                            className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                            required
                        >
                            {issueTypes.map((type, index) => (
                                <option key={index} value={type} disabled={index === 0}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        <textarea
                            name="message"
                            placeholder="Describe your issue or question..."
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className="bg-white border border-amber-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                            required
                        ></textarea>
                        <div className="text-center">
                            <CTAButton type="submit" className="px-12">
                                Send Message via Email
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
                            onClick={() => {
                                const message = `Hello Magic Knotes, I need support with:\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nIssue: ${formData.issueType || 'General inquiry'}`;
                                contactUtils.openWhatsAppWithMessage('+919142992036', message);
                            }}
                            className="bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
                        >
                            💬 WhatsApp
                        </button>
                        <button
                            onClick={() => {
                                const subject = 'Magic Knotes Support';
                                const body = `Hello Magic Knotes team,\n\nI would like to get support regarding...\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}`;
                                contactUtils.openEmailWithBody('magicknotes365@gmail.com', subject, body);
                            }}
                            className="bg-amber-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-amber-600 transition-colors"
                        >
                            📧 Quick Email
                        </button>
                    </div>
                </WhoWeAreCard>
            </PageLayout>
        </div>
    );
};

export default SupportPage;
