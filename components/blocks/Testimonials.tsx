const testimonials: Testimonial[] = [
    {
        name: 'Sarah Johnson',
        role: 'Marketing Director',
        content: 'The coaching sessions completely transformed my approach to leadership. I feel more confident and effective in my role.',
        avatar: 'SJ',
    },
    {
        name: 'Michael Chen',
        role: 'Software Engineer',
        content: 'Helped me navigate a major career transition with clarity and purpose. The guidance was invaluable.',
        avatar: 'MC',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Entrepreneur',
        content: 'The personalized strategies helped me achieve work-life balance while growing my business.',
        avatar: 'ER',
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Client Success Stories
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Hear from individuals who have transformed their lives through personalized coaching.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
