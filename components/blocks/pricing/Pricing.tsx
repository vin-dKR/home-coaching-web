"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import WhoWeAreCard from '../whoWeAre/WhoWeAreCard';
import CTAButton from '@/components/ui/CTAButton';
import { imageConfig } from '@/constants/aboutUsData';
import { PricingTier, pricingTiers } from '@/constants/pricing';


const Pricing: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');



    const getPrice = (tier: PricingTier) => {
        switch (billingCycle) {
            case 'monthly': return tier.monthly;
            case 'quarterly': return tier.quarterly;
            case 'yearly': return tier.yearly;
            default: return tier.monthly;
        }
    };

    const getPeriod = (tier: PricingTier) => {
        if (tier.name === "Explorer") return "forever";
        return billingCycle === 'monthly' ? '/month' :
            billingCycle === 'quarterly' ? '/3 months' : '/year';
    };

    return (
        <section className="relative w-full py-20 min-h-screen bg-gradient-to-t from-midy/40 to-white overflow-hidden rounded-[3rem]">
            {/* Background Ribbon */}
            <div className="absolute inset-0 h-full">
                <div className="absolute top-0 -left-20 lg:-left-120 rotate-[75deg] h-screen md:h-[100vh] w-[120vw] opacity-100">
                    <Image
                        src="/images/long-cta-ribbon.png"
                        alt={imageConfig.ribbon.alt}
                        fill
                        quality={imageConfig.ribbon.quality}
                        priority={imageConfig.ribbon.priority}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-8 w-full md:max-w-6xl mx-auto px-2 md:px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16 rounded-3xl py-8 px-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Invest in Your Future
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 font-atki max-w-2xl mx-auto">
                        Choose the plan that unlocks your potential. Teachers join completely free!
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
                        {(['monthly', 'quarterly', 'yearly'] as const).map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${billingCycle === cycle
                                    ? 'bg-amber-500 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-amber-600'
                                    }`}
                            >
                                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pricingTiers.map((tier, index) => (
                        <WhoWeAreCard
                            key={index}
                            className={`relative transition-all duration-500 hover:transform hover:scale-105 ${tier.popular ? 'ring-4 ring-amber-500 shadow-2xl' : 'hover:ring-2 hover:ring-amber-300'
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                        ⭐ Most Popular
                                    </span>
                                </div>
                            )}

                            {tier.savings && billingCycle !== 'monthly' && (
                                <div className="absolute -top-3 right-4">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        {tier.savings}
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6 pt-4">
                                <h3 className="text-2xl font-instru font-semibold text-gray-800 mb-2">
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline justify-center mb-2">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {getPrice(tier)}
                                    </span>
                                    <span className="text-gray-600 ml-2 text-lg">
                                        {getPeriod(tier)}
                                    </span>
                                </div>
                                <p className="text-gray-600 font-atki text-sm">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="space-y-3 mb-8">
                                {tier.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-amber-50/50 transition-colors">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                                        <p className="text-gray-600 text-sm font-atki">{feature}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <CTAButton className="w-full justify-center text-lg py-4">
                                    {tier.name === "Explorer" ? "Get Started Free" : "Choose Plan"}
                                </CTAButton>
                            </div>
                        </WhoWeAreCard>
                    ))}
                </div>

                {/* Teacher Free Section */}
                <WhoWeAreCard className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 text-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-xl">✓</span>
                        </div>
                        <h3 className="text-2xl font-instru font-semibold text-gray-800">
                            Teachers Join Absolutely Free!
                        </h3>
                    </div>
                    <p className="text-gray-600 font-atki text-lg max-w-2xl mx-auto">
                        No subscription fees, no hidden charges. Start teaching and earning today with zero cost.
                    </p>
                </WhoWeAreCard>

            </div>
        </section>
    );
};

export default Pricing;
