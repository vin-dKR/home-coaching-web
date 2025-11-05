import React from "react";

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    height?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, height }) => {
    return (
        <div
            className={`bg-gradient-to-b from-darky/20 to-yellow-200 border border-4 border-t-12 border-midy rounded-3xl p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-200`}
            style={{ height }}
        >
            <span className="text-3xl mb-3">{icon}</span>
            <h3 className="font-bold text-xl text-yellow-900 mb-1">{title}</h3>
            <p className="text-lg font-atki text-yellow-800">{description}</p>
        </div>
    );
};

export default FeatureCard;

