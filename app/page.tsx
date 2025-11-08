import CTA from "@/components/blocks/CTA";
import FAQs from "@/components/blocks/faq/FAQ";
import Gradient from "@/components/blocks/feature/FeatureBGGradient";
import Footer from "@/components/blocks/Footer";
import Hero from "@/components/blocks/Hero";
import Pricing from "@/components/blocks/pricing/Pricing";
import AboutUs from "@/components/blocks/whoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/blocks/whyChoose/WhyChooseUs";

export default function Home() {
    return (
        <div className="bg-white px-2">
            <Hero />
            <WhyChooseUs />
            <Gradient />
            <AboutUs />
            <Pricing />
            <FAQs />
            <CTA />
            <Footer />
        </div>
    );
}
