export default function CTA() {
    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center bg-gray-900 rounded-2xl p-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Life?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Take the first step towards achieving your goals. Book a free consultation session today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:coach@example.com"
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Book Free Session
                        </a>
                        <a
                            href="tel:+1234567890"
                            className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
