import React from "react";
import { FEATURES } from "@/constants/features";
import FeatureCard from "./FeatureCard";

const FeaturesBento = () => {
    return (
        <section className="py-46 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-900 mb-12">
                    Features
                </h2>

                {/* ✅ First Row (3 cards, tallest) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {FEATURES.slice(0, 3).map((f, i) => (
                        <FeatureCard key={i} {...f} height="280px" />
                    ))}
                </div>

                {/* ✅ Second Row (3 cards, medium height) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {FEATURES.slice(3, 6).map((f, i) => (
                        <FeatureCard key={i} {...f} height="220px" />
                    ))}
                </div>

                {/* ✅ Third Row (2 cards centered, smaller height) */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                    {FEATURES.slice(6, 8).map((f, i) => (
                        <div key={i} className="w-full">
                            <FeatureCard {...f} height="180px" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesBento;


