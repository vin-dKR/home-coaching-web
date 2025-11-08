"use client"
import React, { useState } from 'react';
import WhoWeAreCard from '../whoWeAre/WhoWeAreCard';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQItem[];
    className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <WhoWeAreCard className="px-2 md:px-4">
            <h3 className="text-3xl font-instru font-semibold text-gray-800 mb-8 text-center">
                Frequently Asked Questions
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-white/20 bg-midy/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-200"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-2 md:px-6 py-4 text-left flex items-center justify-between bg-white/10 hover:bg-amber-50/30 transition-colors"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-amber-600 text-sm font-bold">Q</span>
                                </div>
                                <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                            </div>
                            <svg
                                className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <div className="px-6 pb-4 pt-2 bg-white/5">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-green-600 text-sm font-bold">A</span>
                                    </div>
                                    <p className="text-gray-600 font-atki leading-relaxed text-lg pt-1">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </WhoWeAreCard>
    );
};

export default FAQSection;
