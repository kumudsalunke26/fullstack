import FAQSection from "../components/FAQSection";
import ReviewSection from "../components/ReviewSection";
import SubscriptionSection from "../components/SubscriptionSection";

const SubscriptionPage = () => {
    return (
        <div className='min-h-[100vh] mt-20 w-full'>
            <SubscriptionSection />
            <ReviewSection />
            <FAQSection />
        </div>
    );
};

export default SubscriptionPage;
