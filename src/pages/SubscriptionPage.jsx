import FAQSection from "../components/FAQSection";
import ReviewSection from "../components/ReviewSection";

const SubscriptionPage = () => {
    return (
        <div className='min-h-[100vh] mt-20 w-full'>
            <h1 className='text-4xl'>Subscription Plans</h1>
            <ReviewSection />
            <FAQSection />
        </div>
    );
};

export default SubscriptionPage;
