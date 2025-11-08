import React from 'react';
import Image from 'next/image';
import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

interface PageLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => {
    return (
        <section className="relative w-full px-2 min-h-screen bg-gradient-to-t from-midy/40 to-white overflow-hidden">
            <Header />

            <div className='relative w-full h-full'>
                <div className="absolute inset-0 h-full overflow-hidden">
                    <div className="absolute top-0 -left-20 lg:-left-240 rotate-[75deg] h-screen md:h-[100vh] w-[180vw] opacity-100">
                        <Image
                            src="/images/long-cta-ribbon.png"
                            alt="Background ribbon"
                            fill
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className="relative py-20 md:py-40 z-10 w-full md:max-w-4xl mx-auto px-4 md:px-6 py-16">
                    <div className="text-center mb-16 rounded-3xl py-8 px-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            {title}
                        </h1>
                        {subtitle && (
                            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
                        )}
                        {subtitle && (
                            <p className="text-xl text-gray-600 font-atki max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {children}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default PageLayout;
