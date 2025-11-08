import React from 'react';
import WhoWeAreCard from '../whoWeAre/WhoWeAreCard';
import CTAButton from '@/components/ui/CTAButton';

interface BottomCTAProps {
    className?: string;
}

const BottomCTA: React.FC<BottomCTAProps> = ({ className = "" }) => {
    return (
        <div className={`text-center ${className}`}>
            <WhoWeAreCard className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-300">
                <h3 className="text-2xl md:text-3xl font-instru font-semibold text-gray-800 mb-4">
                    Ready to Transform Your Learning Journey?
                </h3>
                <p className="text-gray-600 font-atki text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of students who&apos;ve found their perfect tutors through Magic Knotes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <CTAButton className="px-12 py-4 text-xl">
                        Start Learning Today
                    </CTAButton>
                    <CTAButton variant="secondary" className="px-12 py-4 text-xl">
                        Talk to Our Advisor
                    </CTAButton>
                </div>
                <p className="text-gray-500 text-sm mt-4 font-atki">
                    ✅ 7-day money-back guarantee • ✅ No long-term contracts • ✅ Cancel anytime
                </p>
            </WhoWeAreCard>
        </div>
    );
};

export default BottomCTA;
