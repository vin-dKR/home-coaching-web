const services: Service[] = [
    {
        title: '1-on-1 Coaching',
        description: 'Personalized sessions focused on your specific goals and challenges with dedicated attention.',
        icon: '👥',
    },
    {
        title: 'Career Guidance',
        description: 'Navigate your professional path with clarity, confidence, and strategic career planning.',
        icon: '💼',
    },
    {
        title: 'Life Transformation',
        description: 'Comprehensive coaching to transform all areas of your life for lasting fulfillment.',
        icon: '✨',
    },
    {
        title: 'Goal Achievement',
        description: 'Structured approach to set, track, and accomplish your most important objectives.',
        icon: '🎯',
    },
]

export default function Services() {
    return (
        <section id="services" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        How I Can Help You
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tailored coaching services designed to help you overcome challenges and achieve meaningful results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
