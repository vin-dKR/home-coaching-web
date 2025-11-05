import React from "react";
import FeaturesBento from "./FeaturesSection";

const Gradient = () => {
    const colors = [
        "#FFFCE4", // light creamy yellow
        "#FFF8C4",
        "#FFF4A0",
        "#FFEF7D",
        "#FFEA59",
        "#FFE84A",
        "#FFE430",
        "#FFE011",
        "#FFD300", // deeper orange
    ].reverse();

    return (
        <div className="relative w-full overflow-hidden rounded rounded-[3rem]"
            style={{ minHeight: '100%' }}
        >
            {colors.map((color, index) => {
                const size = 30 + index * 20; // progressively larger circles
                const offset = index - 20
                return (
                    <div
                        key={index}
                        className="absolute left-1/2 rounded-full -translate-x-1/2"
                        style={{
                            top: `${offset}vh`, // offset upward to create spacing
                            width: `${size}vw`,
                            height: `${size}vw`,
                            backgroundColor: color,
                            zIndex: colors.length - index,
                        }}
                    ></div>
                );
            })}
            <div className="relative inset-0 flex items-center justify-center z-20">
                <FeaturesBento />
            </div>
        </div>
    );
};

export default Gradient;

