import React from "react";

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
        <div className="relative min-h-screen w-full overflow-hidden ">
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
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-semibold text-white drop-shadow-lg">
                    Warm Arcs Background
                </h1>
            </div>
        </div>
    );
};

export default Gradient;

