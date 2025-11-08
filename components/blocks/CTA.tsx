import React from 'react';
import Image from 'next/image';
import CTAButton from '../ui/CTAButton';

const CTACard: React.FC = () => {
    return (
        <div className="w-full w-full lg:w-5xl mx-auto px-4 md:px-0 pb-40">
            {/* Main CTA Card */}
            <div className="relative bg-gradient-to-t from-midy/40 to-white rounded-3xl p-12 border border-1 border-black/5 overflow-hidden">

                {/* Background Ribbon */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/cta-ribbon.png"
                        alt="Decorative ribbon background"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                        Unlock Your
                        <span className="block">Learning Potential</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-black/40  font-atki mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join Magic Knotes today and find your perfect tutor
                    </p>

                    {/* CTA Button */}
                    <CTAButton>
                        Start Your Journey
                    </CTAButton>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 left-10 w-6 h-6 bg-yellow-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-8 right-12 w-4 h-4 bg-white rounded-full opacity-40"></div>
            </div>
        </div>
    );
};

export default CTACard;
