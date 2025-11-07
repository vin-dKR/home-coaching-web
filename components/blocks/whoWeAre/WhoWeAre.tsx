import React from 'react';
import Image from 'next/image';
import ValueCard from './ValueCard';
import WhoWeAreCard from './WhoWeAreCard';
import { aboutUsData, imageConfig } from '@/constants/aboutUsData';


interface BulletPointProps {
    children: React.ReactNode;
    className?: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ children, className = "" }) => {
    return (
        <div className={`flex items-start space-x-3 ${className}`}>
            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-600">{children}</p>
        </div>
    );
};

const AboutUs: React.FC = () => {
    const { header, brand, beliefs, vision, values } = aboutUsData

    return (
        <section className="relative w-full py-20 min-h-screen bg-gradient-to-t from-midy/40 to-white overflow-hidden rounded-[3rem]">
            {/* Background Ribbon */}
            <div className="absolute inset-0 h-full">
                <div className="absolute top-0 -left-20 lg:-left-120 rotate-[75deg] h-screen md:h-[100vh] w-[120vw] opacity-100">
                    <Image
                        src={imageConfig.ribbon.src}
                        alt={imageConfig.ribbon.alt}
                        fill
                        quality={imageConfig.ribbon.quality}
                        priority={imageConfig.ribbon.priority}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4 w-full md:max-w-4xl mx-auto px-2 md:px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16 rounded-3xl py-8 px-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {header.title}
                    </h2>
                    <div className={`w-20 h-1 ${header.accentColor} mx-auto`}></div>
                </div>

                {/* Who We Are Section */}
                <div className="grid md:grid-cols-2 gap-8 font-atki">
                    <WhoWeAreCard>
                        <h2 className="text-3xl font-instru font-semibold text-gray-800 mb-6">
                            Who We Are?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            <span className="font-semibold text-amber-600">{brand.name}</span> {brand.description}
                        </p>
                        <div className="space-y-4">
                            {beliefs.map((belief, index) => (
                                <BulletPoint key={index}>
                                    {belief}
                                </BulletPoint>
                            ))}
                        </div>
                    </WhoWeAreCard>

                    {/* Students Image */}
                    <div className='relative rounded-3xl overflow-hidden'>
                        <Image
                            src={imageConfig.students.src}
                            alt={imageConfig.students.alt}
                            fill
                            className={imageConfig.students.className}
                            quality={imageConfig.students.quality}
                            priority={imageConfig.students.priority}
                        />
                    </div>
                </div>

                {/* Vision Section */}
                <WhoWeAreCard>
                    <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                            {vision.icon}
                        </div>
                        <h2 className="text-3xl font-instru font-semibold text-gray-800">
                            {vision.title}
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed font-atki">
                        {vision.description}
                    </p>
                </WhoWeAreCard>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            title={value.title}
                            description={value.desc}
                            icon={value.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
