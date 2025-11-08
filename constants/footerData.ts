export const footerData = {
    brand: {
        name: "Magic Knotes",
        tagline: "Learn. Grow. Succeed.",
        description: "Connecting students with the perfect tutors in their local community. Making quality education accessible to everyone.",
        logo: "/images/logo.png"
    },
    quickLinks: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ],
    forStudents: [
        { name: 'Find Tutors', href: '/find-tutors', icon: '🎓' },
        { name: 'Study Resources', href: '/resources', icon: '📚' },
        { name: 'Learning Tips', href: '/tips', icon: '💡' },
        { name: 'Success Stories', href: '/success-stories', icon: '⭐' },
        { name: 'FAQ', href: '/faq', icon: '❓' },
    ],
    forTutors: [
        { name: 'Become a Tutor', href: '/become-tutor', icon: '👨‍🏫' },
        { name: 'Teaching Resources', href: '/teaching-resources', icon: '📖' },
        { name: 'Tutor Guidelines', href: '/guidelines', icon: '📋' },
        { name: 'Success Stories', href: '/tutor-success', icon: '🏆' },
        { name: 'Support Center', href: '/support', icon: '🛟' },
    ],
    socialLinks: [
        { name: 'Facebook', icon: '📘', url: '#' },
        { name: 'Instagram', icon: '📷', url: '#' },
        { name: 'Twitter', icon: '🐦', url: '#' },
        { name: 'LinkedIn', icon: '💼', url: '#' },
    ],
    contactInfo: [
        {
            icon: '📧',
            label: 'Email us at',
            value: 'magicknotes356@gmail.com',
            href: 'mailto:magicknotes356@gmail.com'
        },
        {
            icon: '📞',
            label: 'Call us at',
            value: '+91 9142992036',
            href: 'tel:+919142992036'
        },
        {
            icon: '📍',
            label: 'Based in',
            value: 'India',
            href: null
        }
    ],
    legalLinks: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
    ]
} as const;
