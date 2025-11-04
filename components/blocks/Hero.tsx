import Header from "./Header";
import CTAButton from "../ui/CTAButton";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen bg-gradient-to-b from-white from-40% to-midy rounded-b-[3rem]">
            <Header />

            {/* Hero Content */}
            <div className="container-custom min-h-screen flex items-center justify-center pt-16 pb-16">
                <div className="max-w-2xl mx-auto text-center w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-6">
                        <div className="block font-bold text-nowrap">Get your Home Tutor</div>
                        <div className={`font-instru bg-gradient-to-br from-midy to-darky bg-clip-text text-transparent mt-1 md:mt-2 italic leading-none`}>
                            nearby
                        </div>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 font-atki leading-[1.1]">
                        We connect students with trusted local teachers for home coaching in your town. Learn better, closer to home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CTAButton
                            href="#find-tutor"
                            variant="primary"
                            className="min-w-[160px]"
                        >
                            🔍 Find a Tutor
                        </CTAButton>
                        <CTAButton
                            href="#become-tutor"
                            variant="secondary"
                            className="min-w-[160px]"
                        >
                            👩‍🏫 Become a Tutor
                        </CTAButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
