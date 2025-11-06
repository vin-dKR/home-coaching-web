import About from "@/components/blocks/About";
import CTA from "@/components/blocks/CTA";
import Gradient from "@/components/blocks/feature/FeatureBGGradient";
import Hero from "@/components/blocks/Hero";
import Services from "@/components/blocks/Services";
import Testimonials from "@/components/blocks/Testimonials";
import AboutUs from "@/components/blocks/whoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/blocks/whyChoose/WhyChooseUs";

export default function Home() {
    return (
        <div className="bg-white px-2">
            <Hero />
            <WhyChooseUs />
            <Gradient />
            <AboutUs />

            <Services />
            <About />
            <Testimonials />
            <CTA />
        </div>
    );
}
