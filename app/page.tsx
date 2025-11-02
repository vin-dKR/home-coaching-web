import About from "@/components/blocks/About";
import CTA from "@/components/blocks/CTA";
import Hero from "@/components/blocks/Hero";
import Services from "@/components/blocks/Services";
import Testimonials from "@/components/blocks/Testimonials";

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <CTA />
        </div>
    );
}
