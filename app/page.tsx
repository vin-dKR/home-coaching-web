import About from "@/components/blocks/About";
import CTA from "@/components/blocks/CTA";
import Hero from "@/components/blocks/Hero";
import Services from "@/components/blocks/Services";
import Testimonials from "@/components/blocks/Testimonials";
import WhyChooseUs from "@/components/blocks/whyChoose/WhyChooseUs";

export default function Home() {
    return (
        <div className="bg-white px-2">
            <Hero />
            <WhyChooseUs />
            <Services />
            <About />
            <Testimonials />
            <CTA />
        </div>
    );
}
