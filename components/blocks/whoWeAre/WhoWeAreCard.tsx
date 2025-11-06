interface CardProps {
    children: React.ReactNode;
    className?: string;
    blur?: boolean;
    border?: boolean;
}

const WhoWeAreCard: React.FC<CardProps> = ({
    children,
    className = "",
    blur = true,
    border = true
}) => {
    return (
        <div className={`
      bg-white/20 rounded-3xl p-6 shadow-sm 
      ${border ? 'border border-t-10 border-white/20' : ''}
      ${blur ? 'backdrop-blur-lg' : ''}
      ${className}
    `}>
            {children}
        </div>
    );
};

export default WhoWeAreCard
