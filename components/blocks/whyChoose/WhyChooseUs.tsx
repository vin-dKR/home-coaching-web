"use client"
import { whyChooseUsData } from '@/constants/whyChooseUs'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
    return (
        <section className="relative min-h-screen flex justify-center items-center py-20 md:py-28 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midy/20 to-transparent z-0" />

            <div className="w-full lg:w-7xl px-4 mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {whyChooseUsData.title}
                    </h2>
                </div>

                {/* Content Grid - Left: 2x2 Cards, Right: Logo */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
                    {/* Left Side - 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                        {whyChooseUsData.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 border border-3 border-t-10 border-midy/80 md:border-white/50 flex flex-col relative overflow-hidden group cursor-pointer"
                                whileHover={{
                                    scale: 1.02,
                                    y: -5
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Absolute Positioned Icon with Gimble Effect */}
                                <motion.div
                                    className="absolute top-0 right-0 text-2xl z-10"
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        scale: 1.2,
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 0.6,
                                            ease: "easeInOut"
                                        },
                                        scale: {
                                            duration: 0.2
                                        }
                                    }}
                                >
                                    {feature.icon}
                                </motion.div>

                                {/* Content */}
                                <div className="text-center flex flex-col justify-center items-center px-4 py-6 h-full">
                                    <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700 text-md font-atki leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-midy/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Logo Image */}
                    <motion.img
                        src="/images/logo.png"
                        alt="Magic Knotes Logo"
                        className="w-full h-full max-w-md object-contain"
                        whileHover={{
                            scale: 1.05,
                            rotate: [0, -1, 1, -1, 1, 0]
                        }}
                        transition={{
                            scale: { duration: 0.3 },
                            rotate: { duration: 0.6 }
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
