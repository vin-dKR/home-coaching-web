import Header from "./Header";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen bg-gradient-to-b from-white from-40% to-midy rounded-b-[3rem]">
            <Header />

            {/* Hero Content */}
            <div className="container-custom pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Get your Home Tutor nearby
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        We connect students with trusted local teachers for home coaching in your town. Learn better, closer to home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#find-tutor"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            Find a Tutor
                        </a>
                        <a
                            href="#become-tutor"
                            className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg border border-gray-300 transition-colors duration-300"
                        >
                            Become a Tutor
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
