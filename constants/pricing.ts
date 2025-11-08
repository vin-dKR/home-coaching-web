export interface PricingTier {
    name: string;
    monthly: string;
    quarterly: string;
    yearly: string;
    period: string;
    description: string;
    features: string[];
    popular?: boolean;
    savings?: string;
}

export const pricingTiers: PricingTier[] = [
    {
        name: "Explorer",
        monthly: "Free",
        quarterly: "Free",
        yearly: "Free",
        period: "forever",
        description: "Start your learning journey with basic access",
        features: [
            "Access to tutor profiles",
            "2 monthly connection requests",
            "Local area search",
            "Basic messaging system",
            "Community support",
            "Profile verification"
        ]
    },
    {
        name: "Learner Pro",
        monthly: "₹5,000",
        quarterly: "₹13,500",
        yearly: "₹48,000",
        period: "billed annually",
        description: "Perfect for dedicated students seeking excellence",
        features: [
            "Unlimited connection requests",
            "Priority tutor matching",
            "Advanced search filters",
            "Video call integration",
            "Progress tracking dashboard",
            "Study materials library",
            "Dedicated support manager",
            "Study group creation",
            "Exam preparation resources",
            "Performance analytics"
        ],
        popular: true,
        savings: "Save 20%"
    },
    {
        name: "Master Class",
        monthly: "₹8,000",
        quarterly: "₹21,600",
        yearly: "₹76,800",
        period: "billed annually",
        description: "Ultimate learning experience with premium features",
        features: [
            "All Learner Pro features",
            "1-on-1 career counseling",
            "Premium study materials",
            "Mock test series",
            "Scholarship guidance",
            "College admission support",
            "24/7 priority support",
            "Custom learning path",
            "Progress reports",
            "Parent dashboard access"
        ],
        savings: "Save 25%"
    }
];
