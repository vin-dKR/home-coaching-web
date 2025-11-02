export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            About My Approach
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            With years of experience in personal development and coaching, I believe in a holistic
                            approach that addresses both mindset and actionable strategies.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            My methodology combines evidence-based techniques with personalized support to help
                            you break through barriers and create sustainable change in your life.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-gray-100 px-4 py-2 rounded-lg">
                                <span className="font-semibold text-gray-900">500+</span>
                                <p className="text-gray-600 text-sm">Clients Helped</p>
                            </div>
                            <div className="bg-gray-100 px-4 py-2 rounded-lg">
                                <span className="font-semibold text-gray-900">5+</span>
                                <p className="text-gray-600 text-sm">Years Experience</p>
                            </div>
                            <div className="bg-gray-100 px-4 py-2 rounded-lg">
                                <span className="font-semibold text-gray-900">98%</span>
                                <p className="text-gray-600 text-sm">Success Rate</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-200 rounded-2xl h-80 lg:h-96 animate-fade-in flex items-center justify-center">
                        <span className="text-gray-500">Coach Image/Illustration</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
