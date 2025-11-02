export default function Hero() {
    return (
        <section id="home" className="section-padding pt-32">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center animate-slide-up">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Transform Your Life Through Personal Coaching
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Unlock your potential and achieve your goals with expert guidance tailored to your unique journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#contact" className="btn-primary">
                            Start Your Journey
                        </a>
                        <a href="#services" className="btn-secondary">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
