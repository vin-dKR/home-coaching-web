export const supportData = {
    supportOptions: [
        {
            icon: '📞',
            title: 'Phone Support',
            description: 'Call us for immediate assistance',
            contact: '+91 9142992036',
            timing: '9 AM - 7 PM, Monday to Saturday',
            type: 'phone' as const
        },
        {
            icon: '📧',
            title: 'Email Support',
            description: 'Send us your queries',
            contact: 'magicknotes365@gmail.com',
            timing: '24/7 response within 4 hours',
            type: 'email' as const
        },
        {
            icon: '💬',
            title: 'Live Chat',
            description: 'Instant messaging support',
            contact: '+91 9142992036',
            timing: '10 AM - 6 PM, Monday to Friday',
            type: 'whatsapp' as const
        }
    ],
    quickHelpTopics: [
        'How to find a tutor?',
        'Payment and billing issues',
        'Tutor application process',
        'Technical support',
        'Cancellation policies',
        'Safety guidelines'
    ],
    issueTypes: [
        'Select Issue Type',
        'Technical Support',
        'Billing Issue',
        'Tutor Application',
        'General Inquiry'
    ]
} as const;
