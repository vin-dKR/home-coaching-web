interface CTAButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
}

const CTAButton = ({
    children,
    onClick,
    href,
    className = "",
    variant = 'primary',
    type = 'button'
}: CTAButtonProps) => {
    const baseStyles = "font-bold py-2 px-8 rounded-2xl transition-all duration-300 transform hover:px-6 focus:outline-none focus:ring-2 focus:ring-offset-2  border border-2 border-black/20 cursor-pointer";

    const variants = {
        primary: "bg-gradient-to-tr from-midy to-white hover:from-amber-500 hover:to-white text-black shadow-lg hover:shadow-xl",
        secondary: "bg-gradient-to-tr from-white to-black/5 hover:bg-gray-100 text-gray-900 border border-gray-300"
    };

    const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={buttonClass}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CTAButton;
