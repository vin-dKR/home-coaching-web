interface ValueCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, className = "" }) => {
    return (
        <Card className={`text-center group ${className}`}>
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                {icon}
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 font-atki">{description}</p>
        </Card>
    );
};

export default ValueCard
