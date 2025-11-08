import { faqs } from "@/constants/faqs"
import FAQSection from "./FAQSection"

const FAQs = () => {
    return (
        <div className="w-full lg:w-5xl py-40 px-0 space-y-10 flex flex-col mx-auto">
            <FAQSection faqs={faqs} />
        </div>
    )
}

export default FAQs
