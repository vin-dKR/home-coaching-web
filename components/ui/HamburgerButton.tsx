"use client"

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
    barColor?: string;
    barWidth?: string;
    barHeight?: string;
}

const HamburgerButton = ({
    isOpen,
    onClick,
    className = "",
    barColor = "bg-gray-900",
    barWidth = "w-6",
    barHeight = "h-0.5"
}: HamburgerButtonProps) => {
    return (
        <button
            className={`flex flex-col justify-center items-center space-y-1.5 ${className}`}
            onClick={onClick}
            aria-label="Toggle menu"
        >
            <span
                className={`${barWidth} ${barHeight} ${barColor} transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
            />
            <span
                className={`${barWidth} ${barHeight} ${barColor} transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                    }`}
            />
            <span
                className={`${barWidth} ${barHeight} ${barColor} transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
            />
        </button>
    )
}

export default HamburgerButton
